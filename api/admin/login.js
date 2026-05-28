const { createSessionCookie, validateCredentials } = require("../../lib/server/admin-auth");
const { methodNotAllowed, readJson, sendJson } = require("../../lib/server/http");

module.exports = async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      methodNotAllowed(res, ["POST"]);
      return;
    }

    const body = await readJson(req);
    if (!validateCredentials(body.username, body.password)) {
      sendJson(res, 401, { ok: false, error: "아이디 또는 비밀번호가 올바르지 않습니다." });
      return;
    }

    sendJson(res, 200, { ok: true }, {
      "Set-Cookie": createSessionCookie(req),
    });
  } catch (error) {
    sendJson(res, error.statusCode || 500, {
      ok: false,
      error: error.message || "로그인 처리 중 오류가 발생했습니다.",
    });
  }
};
