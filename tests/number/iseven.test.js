import { isEven } from "../../dist/ch";

test("sends NaN to isEven", () => {
  expect(isEven(Number.NaN)).toBe(false);
});

test("sends null to isEven", () => {
  expect(isEven(null)).toBe(false);
});

test("sends undefined to isEven", () => {
  expect(isEven(undefined)).toBe(false);
});

const s1 = Symbol();
test("sends symbol to isEven", () => {
  expect(isEven(s1)).toBe(false);
});

test("sends true to isEven", () => {
  expect(isEven(true)).toBe(false);
});

test("sends false to isEven", () => {
  expect(isEven(false)).toBe(false);
});

test("sends string to isEven", () => {
  expect(isEven("string")).toBe(false);
});

test("sends positive even integer to isEven", () => {
  expect(isEven(2)).toBe(true);
});

test("sends positive odd integer to isEven", () => {
  expect(isEven(1)).toBe(false);
});

test("sends zero to isEven", () => {
  expect(isEven(0)).toBe(true);
});

test("sends positive float to isEven", () => {
  expect(isEven(1.1)).toBe(false);
});

test("sends negative odd integer to isEven", () => {
  expect(isEven(-1)).toBe(false);
});

test("sends negative even integer to isEven", () => {
  expect(isEven(-2)).toBe(true);
});

test("sends negative float to isEven", () => {
  expect(isEven(-1.1)).toBe(false);
});

test("sends object to isEven", () => {
  expect(isEven({})).toBe(false);
});

test("sends empty array to isEven", () => {
  expect(isEven([])).toBe(false);
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

test("sends json to isEven", () => {
  expect(isEven(json)).toBe(false);
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

test("sends invalid json to isEven", () => {
  expect(isEven(invalidjson)).toBe(false);
});
