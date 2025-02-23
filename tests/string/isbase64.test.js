import { randomBytes } from "node:crypto";
import { isBase64 } from "../../dist/ch";

function randB64(length = 32) {
	const b64Secret = randomBytes(length).toString("base64");
	// Replace '+' with '-', '/' with '_', and remove '=' padding
	return b64Secret.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
const sec1 = randB64(30);
const sec2 = randB64(32);
const sec3 = randB64(34);
const sec4 = randB64(36);
console.log("sec1", sec1);
console.log("sec2", sec2);
console.log("sec3", sec3);
console.log("sec4", sec4);

// test("sends NaN to isBase64", () => {
//   expect(isBase64(Number.NaN, true)).toBe(false);
// });

test("sends random base64 string sec1 to isBase64 urlEncoded = true", () => {
  expect(isBase64(sec1, true)).toBe(true);
});

test("sends random base64 string sec2 to isBase64 urlEncoded = true", () => {
  expect(isBase64(sec2, true)).toBe(true);
});

test("sends random base64 string sec3 to isBase64 urlEncoded = true", () => {
  expect(isBase64(sec3, true)).toBe(true);
});

test("sends random base64 string sec4 to isBase64 urlEncoded = true", () => {
  expect(isBase64(sec4, true)).toBe(true);
});

test("sends undefined to isBase64 urlEncoded = false", () => {
  expect(isBase64(undefined)).toBe(false);
});

test("sends false to isBase64 urlEncoded = false", () => {
  expect(isBase64(false)).toBe(false);
});

test("sends empty string to isBase64 urlEncoded = false", () => {
  expect(isBase64("")).toBe(false);
});

test("sends empty string to isBase64 urlEncoded = true", () => {
  expect(isBase64("", true)).toBe(false);
});

test("sends string to isBase64 urlEncoded = false", () => {
  expect(isBase64("string")).toBe(false);
});

test("sends valid JWT to isBase64 urlEncoded = false", () => {
  expect(isBase64("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c")).toBe(false);
});

test("sends invalid JWT to isBase64 urlEncoded = false", () => {
  expect(isBase64("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ")).toBe(false);
});

test("sends invalid JWT to isBase64 urlEncoded = true", () => {
  expect(isBase64("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ", true)).toBe(false);
});

test("sends valid base64 string 'abcd' to isBase64 urlEncoded = false", () => {
  expect(isBase64("abcd")).toBe(true);
});

test("sends valid base64 string 'abcdabcd' to isBase64 urlEncoded = false", () => {
  expect(isBase64("abcdabcd")).toBe(true);
});

test("sends valid base64 string 'abcdabcdab==' to isBase64 urlEncoded = false", () => {
  expect(isBase64("abcdabcdab==")).toBe(true);
});

test("sends valid base64 string 'abcdabcdabc=' to isBase64 urlEncoded = false", () => {
  expect(isBase64("abcdabcdabc=")).toBe(true);
});

test("sends invalid base64 string 'abc' to isBase64 urlEncoded = false", () => {
  expect(isBase64("abc")).toBe(false);
});

test("sends invalid base64 string 'abcdabc' to isBase64 urlEncoded = false", () => {
  expect(isBase64("abcdabc")).toBe(false);
});

test("sends invalid base64 string 'abcdabcdab=' to isBase64 urlEncoded = false", () => {
  expect(isBase64("abcdabcdab=")).toBe(false);
});

test("sends invalid base64 string 'abcdabcdabc==' to isBase64 urlEncoded = false", () => {
  expect(isBase64("abcdabcdabc==")).toBe(false);
});

test("sends valid base64 string 'abcd' to isBase64 urlEncoded = true", () => {
  expect(isBase64("abcd", true)).toBe(true);
});

test("sends valid base64 string 'abcdabcd' to isBase64 urlEncoded = true", () => {
  expect(isBase64("abcdabcd", true)).toBe(true);
});

test("sends invalid base64 string 'abcdabcdab==' to isBase64 urlEncoded = true", () => {
  expect(isBase64("abcdabcdab==", true)).toBe(false);
});

test("sends valid base64 string 'abcdabcdabc=' to isBase64 urlEncoded = true", () => {
  expect(isBase64("abcdabcdabc=", true)).toBe(false);
});

test("sends valid base64 string 'abc' to isBase64 urlEncoded = true", () => {
  expect(isBase64("abc", true)).toBe(true);
});

test("sends valid base64 string 'abcdabc' to isBase64 urlEncoded = true", () => {
  expect(isBase64("abcdabc", true)).toBe(true);
});

test("sends invalid base64 string 'abcdabcdab=' to isBase64 urlEncoded = true", () => {
  expect(isBase64("abcdabcdab=", true)).toBe(false);
});

test("sends invalid base64 string 'abcdabcdabc==' to isBase64 urlEncoded = true", () => {
  expect(isBase64("abcdabcdabc==", true)).toBe(false);
});

test("sends valid base64 string 'abcdabcdab/=' not urlencoded to isBase64 urlEncoded = true", () => {
  expect(isBase64("abcdabcdab/=", true)).toBe(false);
});

test("sends valid base64 string 'abcdabcdab/=' not urlencoded to isBase64 urlEncoded = false", () => {
  expect(isBase64("abcdabcdab/=", false)).toBe(true);
});

test("sends valid base64 string 'abcd+bcdab/=' not urlencoded to isBase64 urlEncoded = true", () => {
  expect(isBase64("abcd+bcdab/=", true)).toBe(false);
});

test("sends valid base64 string 'abcd+bcdab/=' not urlencoded to isBase64 urlEncoded = false", () => {
  expect(isBase64("abcd+bcdab/=", false)).toBe(true);
});

test("sends positive even integer to isBase64 urlEncoded = false", () => {
  expect(isBase64(2)).toBe(false);
});

test("sends positive odd integer to isBase64 urlEncoded = false", () => {
  expect(isBase64(1)).toBe(false);
});

test("sends zero to isBase64 urlEncoded = false", () => {
  expect(isBase64(0)).toBe(false);
});

test("sends positive float to isBase64 urlEncoded = false", () => {
  expect(isBase64(1.1)).toBe(false);
});

test("sends negative odd integer to isBase64 urlEncoded = false", () => {
  expect(isBase64(-1)).toBe(false);
});

test("sends negative even integer to isBase64 urlEncoded = false", () => {
  expect(isBase64(-2)).toBe(false);
});

test("sends negative float to isBase64 urlEncoded = false", () => {
  expect(isBase64(-1.1)).toBe(false);
});

test("sends object to isBase64 urlEncoded = false", () => {
  expect(isBase64({})).toBe(false);
});

const json = `{
  "actor": {
    "name": "Tom Cruise",
    "age": 56,
    "Born At": "Syracuse, NY",
    "Birthdate": "July 3 1962",
    "photo": "https://jsonformatter.org/img/tom-cruise.jpg"
  }
}`;

test("sends json to isBase64 urlEncoded = false", () => {
  expect(isBase64(json)).toBe(false);
});

const invalidjson = `{
  "actor: {
    "name": "Tom Cruise",
    "age": 56
    "Born At": "Syracuse, NY",
    "Birthdate": "July 3 1962",
    "photo": "https://jsonformatter.org/img/tom-cruise.jpg"
  }
}`;

test("sends invalid json to isBase64 urlEncoded = false", () => {
  expect(isBase64(invalidjson)).toBe(false);
});
