import { isOrigin } from "../../dist/ch";

test("sends null to isOrigin", () => {
  expect(isOrigin(null)).toBe(false);
});

test("sends undefined to isOrigin", () => {
  expect(isOrigin(undefined)).toBe(false);
});

const s1 = Symbol();
test("sends symbol to isOrigin", () => {
  expect(isOrigin(s1)).toBe(false);
});

test("sends true to isOrigin", () => {
  expect(isOrigin(true)).toBe(false);
});

test("sends false to isOrigin", () => {
  expect(isOrigin(false)).toBe(false);
});

test("sends string to isOrigin", () => {
  expect(isOrigin("string")).toBe(false);
});

test("sends positive even integer to isOrigin", () => {
  expect(isOrigin(2)).toBe(false);
});

test("sends positive odd integer to isOrigin", () => {
  expect(isOrigin(1)).toBe(false);
});

test("sends zero to isOrigin", () => {
  expect(isOrigin(0)).toBe(true);
});

test("sends positive float to isOrigin", () => {
  expect(isOrigin(1.1)).toBe(false);
});

test("sends negative odd integer to isOrigin", () => {
  expect(isOrigin(-1)).toBe(false);
});

test("sends negative even integer to isOrigin", () => {
  expect(isOrigin(-2)).toBe(false);
});

test("sends negative float to isOrigin", () => {
  expect(isOrigin(-1.1)).toBe(false);
});

test("sends object to isOrigin", () => {
  expect(isOrigin({})).toBe(false);
});

test("sends empty array to isOrigin", () => {
  expect(isOrigin([])).toBe(false);
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

test("sends json to isOrigin", () => {
  expect(isOrigin(json)).toBe(false);
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

test("sends invalid json to isOrigin", () => {
  expect(isOrigin(invalidjson)).toBe(false);
});
