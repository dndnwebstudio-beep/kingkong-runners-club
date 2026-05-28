const crypto = require("crypto");
const { defaultContent } = require("./default-content");

const CONTENT_PREFIX = "content/site-content-";
const CONTENT_KEYS = ["products", "notices", "newsletters", "runnersVoice", "schedules", "magazines"];

function cloneData(data) {
  return JSON.parse(JSON.stringify(data));
}

function normalizeMagazines(items) {
  return defaultContent.magazines.map((fallback, index) => {
    const item = items?.[index] && typeof items[index] === "object" ? items[index] : {};
    return {
      title: item.title || fallback.title,
      image: item.image || fallback.image,
      description: item.description || fallback.description,
    };
  });
}

function normalizeContent(input) {
  const source = input && typeof input === "object" ? input : {};
  return CONTENT_KEYS.reduce((content, key) => {
    content[key] = key === "magazines"
      ? normalizeMagazines(source[key])
      : Array.isArray(source[key]) ? cloneData(source[key]) : cloneData(defaultContent[key]);
    return content;
  }, {});
}

function blobOptions() {
  const token = process.env.BLOB_READ_WRITE_TOKEN;
  return token ? { token } : {};
}

function requireBlobToken() {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    const error = new Error("Vercel Blob 저장소가 연결되지 않았습니다.");
    error.statusCode = 500;
    throw error;
  }
}

async function streamToText(stream) {
  const reader = stream.getReader();
  const decoder = new TextDecoder();
  let text = "";

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    text += decoder.decode(value, { stream: true });
  }

  return text + decoder.decode();
}

async function latestContentBlob() {
  const { list } = await import("@vercel/blob");
  const result = await list({
    prefix: CONTENT_PREFIX,
    limit: 1000,
    ...blobOptions(),
  });

  return result.blobs
    .slice()
    .sort((a, b) => new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime())[0] || null;
}

async function readContent() {
  if (!process.env.BLOB_READ_WRITE_TOKEN) return normalizeContent(defaultContent);

  const latest = await latestContentBlob();
  if (!latest) return normalizeContent(defaultContent);

  const { get } = await import("@vercel/blob");
  const result = await get(latest.url || latest.pathname, {
    access: "public",
    ...blobOptions(),
  });

  if (!result || result.statusCode !== 200 || !result.stream) return normalizeContent(defaultContent);
  return normalizeContent(JSON.parse(await streamToText(result.stream)));
}

async function writeContent(content) {
  requireBlobToken();

  const { put } = await import("@vercel/blob");
  const normalized = normalizeContent(content);
  const stamp = new Date().toISOString().replace(/[-:.TZ]/g, "");
  const pathname = `${CONTENT_PREFIX}${stamp}-${crypto.randomUUID()}.json`;
  const blob = await put(pathname, JSON.stringify(normalized, null, 2), {
    access: "public",
    addRandomSuffix: false,
    cacheControlMaxAge: 60,
    contentType: "application/json; charset=utf-8",
    ...blobOptions(),
  });

  return { content: normalized, version: blob.pathname, url: blob.url };
}

function validateSection(section, items) {
  if (!CONTENT_KEYS.includes(section)) {
    const error = new Error("알 수 없는 관리 영역입니다.");
    error.statusCode = 400;
    throw error;
  }
  if (!Array.isArray(items)) {
    const error = new Error("저장할 항목 형식이 올바르지 않습니다.");
    error.statusCode = 400;
    throw error;
  }
}

async function updateSection(section, items) {
  validateSection(section, items);
  const content = await readContent();
  content[section] = cloneData(items);
  return writeContent(content);
}

module.exports = {
  defaultContent,
  readContent,
  updateSection,
  writeContent,
};
