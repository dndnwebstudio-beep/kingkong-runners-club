const { verifySession } = require("../lib/server/admin-auth");
const { methodNotAllowed, readJson, sendJson } = require("../lib/server/http");
const { readContent, updateSection, writeContent } = require("../lib/server/content-store");

module.exports = async function handler(req, res) {
  try {
    if (req.method === "GET") {
      const content = await readContent();
      if (!verifySession(req)) delete content.inquiries;
      sendJson(res, 200, content);
      return;
    }

    if (req.method !== "POST" && req.method !== "PATCH" && req.method !== "PUT") {
      methodNotAllowed(res, ["GET", "POST", "PATCH", "PUT"]);
      return;
    }

    if (!verifySession(req)) {
      sendJson(res, 401, { ok: false, error: "관리자 로그인이 필요합니다." });
      return;
    }

    const body = await readJson(req);
    const result = body.section
      ? await updateSection(body.section, body.items)
      : await writeContent(body.content);

    sendJson(res, 200, { ok: true, ...result });
  } catch (error) {
    sendJson(res, error.statusCode || 500, {
      ok: false,
      error: error.message || "콘텐츠 저장 중 오류가 발생했습니다.",
    });
  }
};
