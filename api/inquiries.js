const crypto = require("crypto");
const { verifySession } = require("../lib/server/admin-auth");
const { methodNotAllowed, readJson, sendJson } = require("../lib/server/http");
const { readContent, writeContent } = require("../lib/server/content-store");

function clean(value, max = 500) {
  return String(value || "").replace(/\s+/g, " ").trim().slice(0, max);
}

function cleanMultiline(value, max = 1200) {
  return String(value || "").replace(/\r\n/g, "\n").trim().slice(0, max);
}

function makeInquiry(body) {
  const name = clean(body.name, 80);
  const phone = clean(body.phone, 80);
  const reason = cleanMultiline(body.reason);

  if (!name || !phone || !reason) {
    const error = new Error("이름, 전화번호, 가입 이유를 입력해 주세요.");
    error.statusCode = 400;
    throw error;
  }

  return {
    id: `inquiry-${Date.now()}-${crypto.randomUUID()}`,
    status: "신규",
    createdAt: new Date().toISOString(),
    name,
    phone,
    reason,
    source: clean(body.source, 120),
    referrer: clean(body.referrer, 120),
    availability: clean(body.availability, 120),
    raceRecord: clean(body.raceRecord, 200),
    message: cleanMultiline(body.message),
  };
}

module.exports = async function handler(req, res) {
  try {
    if (req.method === "GET") {
      if (!verifySession(req)) {
        sendJson(res, 401, { ok: false, error: "관리자 로그인이 필요합니다." });
        return;
      }
      const content = await readContent();
      sendJson(res, 200, { ok: true, inquiries: content.inquiries || [] });
      return;
    }

    if (req.method !== "POST") {
      methodNotAllowed(res, ["GET", "POST"]);
      return;
    }

    const body = await readJson(req);
    const inquiry = makeInquiry(body);
    const content = await readContent();
    const inquiries = Array.isArray(content.inquiries) ? content.inquiries : [];
    content.inquiries = [inquiry, ...inquiries];
    const result = await writeContent(content);

    sendJson(res, 200, {
      ok: true,
      inquiry,
      count: result.content.inquiries.length,
    });
  } catch (error) {
    sendJson(res, error.statusCode || 500, {
      ok: false,
      error: error.message || "가입문의 접수 중 오류가 발생했습니다.",
    });
  }
};
