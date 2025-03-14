import { isOdd } from "../../dist/ch";

test("sends NaN to isOdd", () => {
  expect(isOdd(Number.NaN)).toBe(false);
});

test("sends null to isOdd", () => {
  expect(isOdd(null)).toBe(false);
});

test("sends undefined to isOdd", () => {
  expect(isOdd(undefined)).toBe(false);
});

const s1 = Symbol();
test("sends symbol to isOdd", () => {
  expect(isOdd(s1)).toBe(false);
});

test("sends true to isOdd", () => {
  expect(isOdd(true)).toBe(false);
});

test("sends false to isOdd", () => {
  expect(isOdd(false)).toBe(false);
});

test("sends string to isOdd", () => {
  expect(isOdd("string")).toBe(false);
});

test("sends positive even integer to isOdd", () => {
  expect(isOdd(2)).toBe(false);
});

test("sends positive odd integer to isOdd", () => {
  expect(isOdd(1)).toBe(true);
});

test("sends zero to isOdd", () => {
  expect(isOdd(0)).toBe(false);
});

test("sends positive float to isOdd", () => {
  expect(isOdd(1.1)).toBe(false);
});

test("sends negative odd integer to isOdd", () => {
  expect(isOdd(-1)).toBe(true);
});

test("sends negative even integer to isOdd", () => {
  expect(isOdd(-2)).toBe(false);
});

test("sends negative float to isOdd", () => {
  expect(isOdd(-1.1)).toBe(false);
});

test("sends positive even integer as string to isOdd", () => {
  expect(isOdd("2")).toBe(false);
});

test("sends positive odd integer as string to isOdd", () => {
  expect(isOdd("1")).toBe(false);
});

test("sends zero as string to isOdd", () => {
  expect(isOdd("0")).toBe(false);
});

test("sends positive float as string to isOdd", () => {
  expect(isOdd("1.1")).toBe(false);
});

test("sends negative odd integer as string to isOdd", () => {
  expect(isOdd("-1")).toBe(false);
});

test("sends negative even integer as string to isOdd", () => {
  expect(isOdd("-2")).toBe(false);
});

test("sends negative float as string to isOdd", () => {
  expect(isOdd("-1.1")).toBe(false);
});

test("sends positive even integer as string to isOdd without type check", () => {
  expect(isOdd("2", false)).toBe(false);
});

test("sends positive odd integer as string to isOdd without type check", () => {
  expect(isOdd("1", false)).toBe(true);
});

test("sends zero as string to isOdd without type check", () => {
  expect(isOdd("0", false)).toBe(false);
});

test("sends positive float as string to isOdd without type check", () => {
  expect(isOdd("1.1", false)).toBe(false);
});

test("sends negative odd integer as string to isOdd without type check", () => {
  expect(isOdd("-1", false)).toBe(true);
});

test("sends negative even integer as string to isOdd without type check", () => {
  expect(isOdd("-2", false)).toBe(false);
});

test("sends negative float as string to isOdd without type check", () => {
  expect(isOdd("-1.1", false)).toBe(false);
});

test("sends object to isOdd", () => {
  expect(isOdd({})).toBe(false);
});

test("sends empty array to isOdd", () => {
  expect(isOdd([])).toBe(false);
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

test("sends json to isOdd", () => {
  expect(isOdd(json)).toBe(false);
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

test("sends invalid json to isOdd", () => {
  expect(isOdd(invalidjson)).toBe(false);
});
