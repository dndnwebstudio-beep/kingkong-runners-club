const fs = require("fs");
const path = require("path");
const { formidable } = require("formidable");
const { verifySession } = require("../lib/server/admin-auth");
const { methodNotAllowed, sendJson } = require("../lib/server/http");

function safeFileName(name) {
  const parsed = path.parse(name || "upload");
  const base = parsed.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "upload";
  const ext = parsed.ext.toLowerCase().replace(/[^a-z0-9.]/g, "") || ".jpg";
  return `${base}${ext}`;
}

module.exports = async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      methodNotAllowed(res, ["POST"]);
      return;
    }

    if (!verifySession(req)) {
      sendJson(res, 401, { ok: false, error: "관리자 로그인이 필요합니다." });
      return;
    }

    const form = formidable({
      maxFileSize: 20 * 1024 * 1024,
      multiples: false,
    });
    const [, files] = await form.parse(req);
    const file = Array.isArray(files.file) ? files.file[0] : files.file;

    if (!file) {
      sendJson(res, 400, { ok: false, error: "업로드할 파일을 선택해 주세요." });
      return;
    }

    const { put } = await import("@vercel/blob");
    const blob = await put(`uploads/${Date.now()}-${safeFileName(file.originalFilename)}`, fs.createReadStream(file.filepath), {
      access: "public",
      addRandomSuffix: true,
      contentType: file.mimetype || "application/octet-stream",
      cacheControlMaxAge: 60 * 60 * 24 * 30,
    });

    sendJson(res, 200, {
      ok: true,
      url: blob.url,
      pathname: blob.pathname,
    });
  } catch (error) {
    sendJson(res, error.statusCode || 500, {
      ok: false,
      error: error.message || "파일 업로드 중 오류가 발생했습니다.",
    });
  }
};

module.exports.config = {
  api: {
    bodyParser: false,
  },
};
