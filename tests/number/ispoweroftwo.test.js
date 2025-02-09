import { isPowerOfTwo } from "../../dist/ch";

test("sends null to isPowerOfTwo", () => {
  expect(isPowerOfTwo(null)).toBe(false);
});

test("sends undefined to isPowerOfTwo", () => {
  expect(isPowerOfTwo(undefined)).toBe(false);
});

const s1 = Symbol();
test("sends symbol to isPowerOfTwo", () => {
  expect(isPowerOfTwo(s1)).toBe(false);
});

test("sends true to isPowerOfTwo", () => {
  expect(isPowerOfTwo(true)).toBe(false);
});

test("sends false to isPowerOfTwo", () => {
  expect(isPowerOfTwo(false)).toBe(false);
});

test("sends string to isPowerOfTwo", () => {
  expect(isPowerOfTwo("string")).toBe(false);
});

test("sends 2 integer to isPowerOfTwo", () => {
  expect(isPowerOfTwo(2)).toBe(true);
});

test("sends 16 integer to isPowerOfTwo", () => {
  expect(isPowerOfTwo(16)).toBe(true);
});

test("sends 1 integer to isPowerOfTwo", () => {
  expect(isPowerOfTwo(1)).toBe(true);
});

test("sends zero to isPowerOfTwo", () => {
  expect(isPowerOfTwo(0)).toBe(false);
});

test("sends positive float to isPowerOfTwo", () => {
  expect(isPowerOfTwo(1.1)).toBe(false);
});

test("sends negative odd integer to isPowerOfTwo", () => {
  expect(isPowerOfTwo(-1)).toBe(false);
});

test("sends negative even integer to isPowerOfTwo", () => {
  expect(isPowerOfTwo(-2)).toBe(false);
});

test("sends negative float to isPowerOfTwo", () => {
  expect(isPowerOfTwo(-1.1)).toBe(false);
});

test("sends object to isPowerOfTwo", () => {
  expect(isPowerOfTwo({})).toBe(false);
});

test("sends empty array to isPowerOfTwo", () => {
  expect(isPowerOfTwo([])).toBe(false);
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

test("sends json to isPowerOfTwo", () => {
  expect(isPowerOfTwo(json)).toBe(false);
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

test("sends invalid json to isPowerOfTwo", () => {
  expect(isPowerOfTwo(invalidjson)).toBe(false);
});
