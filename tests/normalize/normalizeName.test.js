import { normalizeName } from "../../dist/ch";

test("sends null to normalizeName", () => {
  expect(normalizeName(null)).toBe(false);
});

test("sends undefined to normalizeName", () => {
  expect(normalizeName(undefined)).toBe(false);
});

test("sends empty string to normalizeName", () => {
  expect(normalizeName("")).toBe(false);
});

test("sends false to normalizeName", () => {
  expect(normalizeName(false)).toBe(false);
});

const str = "string";
const strRes = "String";

test("sends string to ucfirst", () => {
  expect(normalizeName(str)).toBe(strRes);
});

test("sends string to ucfirst without everyWords", () => {
  expect(normalizeName(str, false)).toBe(strRes);
});

const strstr = "string string";
const strstrRes = "String String";

test("sends string string to ucfirst", () => {
  expect(normalizeName(strstr, true)).toBe(strstrRes);
});

test("sends string string to ucfirst without everyWords", () => {
  expect(normalizeName(strstr, false)).toBe(strstrRes);
});

const json = `{
  "actor": {
    "name": "Tom Cruise"
  }
}`;

const jsonRes = `{
  "actor": {
    "name": "tom Cruise"
  }
}`;

test("sends json string to normalizeName", () => {
  expect(normalizeName(json)).toBe(jsonRes);
});
