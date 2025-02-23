import { isNegative } from "../../dist/ch";

test("sends NaN to isNegative", () => {
  expect(isNegative(Number.NaN)).toBe(false);
});

test("sends null to isNegative", () => {
  expect(isNegative(null)).toBe(false);
});

test("sends undefined to isNegative", () => {
  expect(isNegative(undefined)).toBe(false);
});

const s1 = Symbol();
test("sends symbol to isNegative", () => {
  expect(isNegative(s1)).toBe(false);
});

test("sends true to isNegative", () => {
  expect(isNegative(true)).toBe(false);
});

test("sends false to isNegative", () => {
  expect(isNegative(false)).toBe(false);
});

test("sends string to isNegative", () => {
  expect(isNegative("string")).toBe(false);
});

test("sends positive even integer to isNegative", () => {
  expect(isNegative(2)).toBe(false);
});

test("sends positive odd integer to isNegative", () => {
  expect(isNegative(1)).toBe(false);
});

test("sends zero to isNegative", () => {
  expect(isNegative(0)).toBe(false);
});

test("sends positive float to isNegative", () => {
  expect(isNegative(1.1)).toBe(false);
});

test("sends negative odd integer to isNegative", () => {
  expect(isNegative(-1)).toBe(true);
});

test("sends negative even integer to isNegative", () => {
  expect(isNegative(-2)).toBe(true);
});

test("sends negative float to isNegative", () => {
  expect(isNegative(-1.1)).toBe(true);
});

test("sends positive even integer as string to isNegative", () => {
  expect(isNegative("2")).toBe(false);
});

test("sends positive odd integer as string to isNegative", () => {
  expect(isNegative("1")).toBe(false);
});

test("sends zero as string to isNegative", () => {
  expect(isNegative("0")).toBe(false);
});

test("sends positive float as string to isNegative", () => {
  expect(isNegative("1.1")).toBe(false);
});

test("sends negative odd integer as string to isNegative", () => {
  expect(isNegative("-1")).toBe(false);
});

test("sends negative even integer as string to isNegative", () => {
  expect(isNegative("-2")).toBe(false);
});

test("sends negative float as string to isNegative", () => {
  expect(isNegative("-1.1")).toBe(false);
});

test("sends positive even integer as string to isNegative without type check", () => {
  expect(isNegative("2", false)).toBe(false);
});

test("sends positive odd integer as string to isNegative without type check", () => {
  expect(isNegative("1", false)).toBe(false);
});

test("sends zero as string to isNegative without type check", () => {
  expect(isNegative("0", false)).toBe(false);
});

test("sends positive float as string to isNegative without type check", () => {
  expect(isNegative("1.1", false)).toBe(false);
});

test("sends negative odd integer as string to isNegative without type check", () => {
  expect(isNegative("-1", false)).toBe(true);
});

test("sends negative even integer as string to isNegative without type check", () => {
  expect(isNegative("-2", false)).toBe(true);
});

test("sends negative float as string to isNegative without type check", () => {
  expect(isNegative("-1.1", false)).toBe(true);
});

test("sends object to isNegative", () => {
  expect(isNegative({})).toBe(false);
});

test("sends empty array to isNegative", () => {
  expect(isNegative([])).toBe(false);
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

test("sends json to isNegative", () => {
  expect(isNegative(json)).toBe(false);
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

test("sends invalid json to isNegative", () => {
  expect(isNegative(invalidjson)).toBe(false);
});
