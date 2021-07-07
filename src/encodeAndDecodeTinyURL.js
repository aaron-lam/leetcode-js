const MAX_CHARS = 6;
const CHAR_SET = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const BASE_URL = "http://tinyurl.com/";

const urlMap = new Map();
const codeMap = new Map();

const encode = (longUrl) => {
  if (urlMap.has(longUrl)) {
    return urlMap.get(longUrl);
  }
  const code = [...new Array(MAX_CHARS)]
    .map((_) => Math.floor(Math.random() * CHAR_SET.length))
    .map((i) => CHAR_SET[i])
    .join("");
  urlMap.set(longUrl, code);
  codeMap.set(code, longUrl);
  return BASE_URL + code;
};

const decode = (shortUrl) => {
  const code = shortUrl.substr(-MAX_CHARS);
  if (!codeMap.has(code)) {
    throw new Error("Code not existed.");
  }
  return codeMap.get(code);
};
