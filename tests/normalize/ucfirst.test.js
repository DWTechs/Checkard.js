import { ucfirst } from "../../dist/ch";

test("sends empty string to ucfirst", () => {
  expect(ucfirst("")).toBe("");
});

test("sends empty string to ucfirst without everyWords", () => {
  expect(ucfirst("", false)).toBe("");
});

const str = "string";
const strRes = "String";

test("sends string to ucfirst", () => {
  expect(ucfirst(str)).toBe(strRes);
});

test("sends string to ucfirst without everyWords", () => {
  expect(ucfirst(str, false)).toBe(strRes);
});

const strstr = "string string";
const strstrRes = "String string";
const strstrResEW = "String String";

test("sends string string to ucfirst", () => {
  expect(ucfirst(strstr, true)).toBe(strstrResEW);
});

test("sends string string to ucfirst without everyWords", () => {
  expect(ucfirst(strstr, false)).toBe(strstrRes);
});

const json = `{
  "actor": {
    "name": "Tom Cruise"
  }
}`;

const jsonResEW = `{
  "actor": {
    "name": "tom Cruise"
  }
}`;

const jsonRes = `{
  "actor": {
    "name": "tom cruise"
  }
}`;

test("sends json to ucfirst", () => {
  expect(ucfirst(json)).toBe(jsonResEW);
});

test("sends json to ucfirst without everyWords", () => {
  expect(ucfirst(json, false)).toBe(jsonRes);
});
