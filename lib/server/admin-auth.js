const crypto = require("crypto");

const COOKIE_NAME = "kingkong_admin";
const SESSION_MAX_AGE = 60 * 60 * 12;

function parseCookies(req) {
  return String(req.headers.cookie || "")
    .split(";")
    .map((item) => item.trim())
    .filter(Boolean)
    .reduce((cookies, item) => {
      const index = item.indexOf("=");
      if (index === -1) return cookies;
      cookies[item.slice(0, index)] = decodeURIComponent(item.slice(index + 1));
      return cookies;
    }, {});
}

function envValue(name) {
  return process.env[name] || "";
}

function requireAuthConfig() {
  const user = envValue("ADMIN_USER");
  const password = envValue("ADMIN_PASS");
  const secret = envValue("ADMIN_SESSION_SECRET");
  if (!user || !password || !secret) {
    const error = new Error("관리자 환경변수가 설정되지 않았습니다.");
    error.statusCode = 500;
    throw error;
  }
  return { user, password, secret };
}

function safeEqual(a, b) {
  const left = Buffer.from(String(a));
  const right = Buffer.from(String(b));
  if (left.length !== right.length) return false;
  return crypto.timingSafeEqual(left, right);
}

function sign(value, secret) {
  return crypto.createHmac("sha256", secret).update(value).digest("base64url");
}

function createSessionCookie(req) {
  const { user, secret } = requireAuthConfig();
  const payload = Buffer.from(JSON.stringify({
    user,
    expires: Date.now() + SESSION_MAX_AGE * 1000,
  })).toString("base64url");
  const token = `${payload}.${sign(payload, secret)}`;
  const secure = req.headers["x-forwarded-proto"] === "https" || Boolean(process.env.VERCEL);

  return [
    `${COOKIE_NAME}=${encodeURIComponent(token)}`,
    "HttpOnly",
    "Path=/",
    "SameSite=Lax",
    `Max-Age=${SESSION_MAX_AGE}`,
    secure ? "Secure" : "",
  ].filter(Boolean).join("; ");
}

function clearSessionCookie() {
  return `${COOKIE_NAME}=; HttpOnly; Path=/; SameSite=Lax; Max-Age=0`;
}

function validateCredentials(username, password) {
  const config = requireAuthConfig();
  const normalizedUser = String(username || "").trim().toUpperCase();
  return safeEqual(normalizedUser, config.user.toUpperCase()) && safeEqual(password || "", config.password);
}

function verifySession(req) {
  try {
    const { user, secret } = requireAuthConfig();
    const token = parseCookies(req)[COOKIE_NAME];
    if (!token) return false;

    const [payload, signature] = token.split(".");
    if (!payload || !signature || !safeEqual(signature, sign(payload, secret))) return false;

    const session = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
    return session.user === user && Number(session.expires) > Date.now();
  } catch {
    return false;
  }
}

module.exports = {
  clearSessionCookie,
  createSessionCookie,
  validateCredentials,
  verifySession,
};
