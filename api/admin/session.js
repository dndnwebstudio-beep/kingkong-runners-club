const { verifySession } = require("../../lib/server/admin-auth");
const { methodNotAllowed, sendJson } = require("../../lib/server/http");

module.exports = async function handler(req, res) {
  if (req.method !== "GET") {
    methodNotAllowed(res, ["GET"]);
    return;
  }

  sendJson(res, 200, { authenticated: verifySession(req) });
};
