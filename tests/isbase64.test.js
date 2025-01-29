import { isBase64 } from "../dist/ch";

test("sends null to isBase64 urlEncoded = false", () => {
  expect(isBase64(null)).toBe(false);
});

test("sends undefined to isBase64 urlEncoded = false", () => {
  expect(isBase64(undefined)).toBe(false);
});

const s1 = Symbol();
test("sends symbol to isBase64 urlEncoded = false", () => {
  expect(isBase64(s1)).toBe(false);
});

test("sends true to isBase64 urlEncoded = false", () => {
  expect(isBase64(true)).toBe(false);
});

test("sends false to isBase64 urlEncoded = false", () => {
  expect(isBase64(false)).toBe(false);
});

test("sends string to isBase64 urlEncoded = false", () => {
  expect(isBase64("string")).toBe(false);
});

test("sends valid JWT to isBase64 urlEncoded = false", () => {
  expect(isBase64("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c")).toBe(false);
});

test("sends valid JWT to isBase64 urlEncoded = true", () => {
  expect(isBase64("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c", true)).toBe(true);
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

test("sends valid base64 string 'abcdabcdab==' to isBase64 urlEncoded = true", () => {
  expect(isBase64("abcdabcdab==", true)).toBe(true);
});

test("sends valid base64 string 'abcdabcdabc=' to isBase64 urlEncoded = true", () => {
  expect(isBase64("abcdabcdabc=", true)).toBe(true);
});

test("sends invalid base64 string 'abc' to isBase64 urlEncoded = true", () => {
  expect(isBase64("abc", true)).toBe(false);
});

test("sends invalid base64 string 'abcdabc' to isBase64 urlEncoded = true", () => {
  expect(isBase64("abcdabc", true)).toBe(false);
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

test("sends empty array to isBase64 urlEncoded = false", () => {
  expect(isBase64([])).toBe(false);
});

test("sends array of 1 integer to isBase64 urlEncoded = false", () => {
  expect(isBase64([2])).toBe(false);
});

test("sends array of 2 integers to isBase64 urlEncoded = false", () => {
  expect(isBase64([2,1])).toBe(false);
});

test("sends array of 1 integer to isBase64 urlEncoded = false", () => {
  expect(isBase64([2.1])).toBe(false);
});

test("sends array of 2 integers to isBase64 urlEncoded = false", () => {
  expect(isBase64([2.1,1.1])).toBe(false);
});

test("sends array to isBase64 urlEncoded = false", () => {
  expect(isBase64(["white", "grey", "black"])).toBe(false);
});

var json = `{
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

var invalidjson = `{
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

function testFunction() {
  console.log("function");
}

test("sends function to isBase64 urlEncoded = false", () => {
  expect(isBase64(testFunction)).toBe(false);
});

var para = document.createElement("p");

test("sends htmlElement to isBase64 urlEncoded = false", () => {
  expect(isBase64(para)).toBe(false);
});

var node = document.createTextNode("new node");

test("sends node to isBase64 urlEncoded = false", () => {
  expect(isBase64(node)).toBe(false);
});

test("sends regex to isBase64 urlEncoded = false", () => {
  expect(isBase64(/ab+c/i)).toBe(false);
});
