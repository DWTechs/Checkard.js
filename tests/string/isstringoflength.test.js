import { isStringOfLength } from "../../dist/ch";

test("sends empty string to isStringOfLength", () => {
  expect(isStringOfLength("")).toBe(true);
});

test("sends empty string to isString with limit of 1 char", () => {
  expect(isStringOfLength("", 1)).toBe(false);
});

test("sends empty string to isString with limit of 1 char min, 5 char max", () => {
  expect(isStringOfLength("", 1, 5)).toBe(false);
});

test("sends string to isStringOfLength", () => {
  expect(isStringOfLength("string")).toBe(true);
});

test("sends string to isString with limit of 2 char min, 6 char max", () => {
  expect(isStringOfLength("string", 2, 6)).toBe(true);
});

test("sends string to isString with limit of 2 char min, 8 char max", () => {
  expect(isStringOfLength("string", 2, 8)).toBe(true);
});

test("sends string to isString with limit of 6 char min, 8 char max", () => {
  expect(isStringOfLength("string", 6, 8)).toBe(true);
});

test("sends string to isString with limit of 7 char min, 8 char max", () => {
  expect(isStringOfLength("string", 7, 8)).toBe(false);
});

test("sends string to isStringOfLength with inversed min and max", () => {
  expect(isStringOfLength("string", 8, 2)).toBe(false);
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

test("sends json to isStringOfLength", () => {
  expect(isStringOfLength(json)).toBe(true);
});

test("sends json to isString with empty check", () => {
  expect(isStringOfLength(json, true)).toBe(true);
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

test("sends invalid json to isStringOfLength", () => {
  expect(isStringOfLength(invalidjson)).toBe(true);
});
