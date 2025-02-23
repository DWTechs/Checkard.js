import { isJWT } from "../../dist/ch";


test("sends NaN to isJWT", () => {
  expect(isJWT(Number.NaN)).toBe(false);
});

test("sends null to isJWT", () => {
  expect(isJWT(null)).toBe(false);
});

test("sends undefined to isJWT", () => {
  expect(isJWT(undefined)).toBe(false);
});

test("sends false to isJWT", () => {
  expect(isJWT(false)).toBe(false);
});

test("sends string to isJWT", () => {
  expect(isJWT("string")).toBe(false);
});

test("sends empty string to isJWT", () => {
  expect(isJWT("")).toBe(false);
});

test("sends valid JWT to isJWT", () => {
  expect(isJWT("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c")).toBe(true);
});

test("sends valid long JWT to isJWT 1", () => {
  expect(isJWT("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE3MzgzMzcwMjQsImV4cCI6MTc2OTg3MzAyNCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.jsPGsVUpaFFgGrOyrmEHq1IXiEpgaom03EU5crtlNqQ")).toBe(true);
});

test("sends valid long JWT to isJWT 2", () => {
  expect(isJWT("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE3MzgzMzcwMjQsImV4cCI6MTc2OTg3MzAyNCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IlRvdG8iLCJTdXJuYW1lIjoiUm9ja2V0IiwiRW1haWwiOiJqcm9ja2V0QGV4YW1wbGUuY29tIiwiUm9sZSI6ImFkbWluIn0.7AAr1p_nO9MVu_nnZNamEsrVZhrBtqqEfxcYAtS2aOQ")).toBe(true);
});

test("sends invalid JWT to isJWT", () => {
  expect(isJWT("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ")).toBe(false);
});

test("sends zero to isJWT", () => {
  expect(isJWT(0)).toBe(false);
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

test("sends json to isJWT", () => {
  expect(isJWT(json)).toBe(false);
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

test("sends invalid json to isJWT", () => {
  expect(isJWT(invalidjson)).toBe(false);
});
