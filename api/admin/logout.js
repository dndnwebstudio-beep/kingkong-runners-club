const { clearSessionCookie } = require("../../lib/server/admin-auth");
const { methodNotAllowed, sendJson } = require("../../lib/server/http");

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    methodNotAllowed(res, ["POST"]);
    return;
  }

  sendJson(res, 200, { ok: true }, {
    "Set-Cookie": clearSessionCookie(),
  });
};
