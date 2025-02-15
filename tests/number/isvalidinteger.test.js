import { isValidInteger } from "../../dist/ch";

test("sends NaN to isValidInteger", () => {
  expect(isValidInteger(Number.NaN)).toBe(false);
});

test("sends string containing number to isValidInteger", () => {
  expect(isValidInteger('reft2rfd')).toBe(false);
});

test("sends null to isValidInteger", () => {
  expect(isValidInteger(null)).toBe(false);
});

test("sends undefined to isValidInteger", () => {
  expect(isValidInteger(undefined)).toBe(false);
});

const s1 = Symbol();
test("sends symbol to isValidInteger", () => {
  expect(isValidInteger(s1)).toBe(false);
});

test("sends true to isValidInteger", () => {
  expect(isValidInteger(true)).toBe(false);
});

test("sends 1+true to isValidInteger", () => {
  expect(isValidInteger(1+true)).toBe(true);
});

test("sends +true to isValidInteger", () => {
  expect(isValidInteger(+true)).toBe(true);
});

test("sends '+true' to isValidInteger", () => {
  expect(isValidInteger('+true')).toBe(false);
});

test("sends '+true' without type checking to isValidInteger", () => {
  expect(isValidInteger('+true', false)).toBe(false);
});

test("sends false to isValidInteger", () => {
  expect(isValidInteger(false)).toBe(false);
});

test("sends string to isValidInteger", () => {
  expect(isValidInteger("string")).toBe(false);
});

test("sends positive even integer to isValidInteger", () => {
  expect(isValidInteger(2)).toBe(true);
});

test("sends positive odd integer to isValidInteger", () => {
  expect(isValidInteger(1)).toBe(true);
});

test("sends positive big integer to isValidInteger", () => {
  expect(isValidInteger(9999999991)).toBe(false);
});

test("sends zero to isValidInteger", () => {
  expect(isValidInteger(0)).toBe(true);
});

test("sends positive float to isValidInteger", () => {
  expect(isValidInteger(1.1)).toBe(false);
});

test("sends positive float to isValidInteger with interval", () => {
  expect(isValidInteger(10.5, 1, 100)).toBe(false);
});

test("sends positive float to isValidInteger with interval at the lowest value", () => {
  expect(isValidInteger(10.5, 10, 100)).toBe(false);
});

test("sends positive float to isValidInteger with interval at the highest value", () => {
  expect(isValidInteger(99.9, 10, 100)).toBe(false);
});

test("sends positive float to isValidInteger with interval above the highest value", () => {
  expect(isValidInteger(100.1, 10, 100)).toBe(false);
});


test("sends positive big float to isValidInteger", () => {
  expect(isValidInteger(999999999.1)).toBe(false);
});

test("sends negative odd integer to isValidInteger", () => {
  expect(isValidInteger(-1)).toBe(true);
});

test("sends negative big integer to isValidInteger", () => {
  expect(isValidInteger(-9999999991)).toBe(false);
});

test("sends negative even integer to isValidInteger", () => {
  expect(isValidInteger(-2)).toBe(true);
});

test("sends negative float to isValidInteger", () => {
  expect(isValidInteger(-1.1)).toBe(false);
});

test("sends negative big float to isValidInteger", () => {
  expect(isValidInteger(-999999999.1)).toBe(false);
});

test("sends positive even integer in string format to isValidInteger", () => {
  expect(isValidInteger('2')).toBe(false);
});

test("sends positive odd integer in string format to isValidInteger", () => {
  expect(isValidInteger('1')).toBe(false);
});

test("sends positive big integer in string format to isValidInteger", () => {
  expect(isValidInteger('9999999991')).toBe(false);
});

test("sends zero in string format to isValidInteger", () => {
  expect(isValidInteger('0')).toBe(false);
});

test("sends positive float in string format to isValidInteger", () => {
  expect(isValidInteger('1.1')).toBe(false);
});

test("sends positive big float in string format to isValidInteger", () => {
  expect(isValidInteger('999999999.1')).toBe(false);
});

test("sends negative odd integer in string format to isValidInteger", () => {
  expect(isValidInteger('-1')).toBe(false);
});

test("sends negative big integer in string format to isValidInteger", () => {
  expect(isValidInteger('-9999999991')).toBe(false);
});

test("sends negative even integer in string format to isValidInteger", () => {
  expect(isValidInteger('-2')).toBe(false);
});

test("sends negative float in string format to isValidInteger", () => {
  expect(isValidInteger('-1.1')).toBe(false);
});

test("sends negative big float in string format to isValidInteger", () => {
  expect(isValidInteger('-999999999.1')).toBe(false);
});

test("sends '8e5' to isValidInteger", () => {
  expect(isValidInteger('8e5')).toBe(false);
});

test("sends '0x44' to isValidInteger", () => {
  expect(isValidInteger('0x44')).toBe(false);
});

test("sends '8e5' without type checking to isValidInteger", () => {
  expect(isValidInteger('8e5', false)).toBe(false);
});

test("sends '0x44' without type checking to isValidInteger", () => {
  expect(isValidInteger('0x44', false)).toBe(false);
});

test("sends 8e5 to isValidInteger", () => {
  expect(isValidInteger(8e5)).toBe(true);
});

test("sends 0x44 to isValidInteger", () => {
  expect(isValidInteger(0x44)).toBe(true);
});

test("sends object to isValidInteger", () => {
  expect(isValidInteger({})).toBe(false);
});

test("sends empty array to isValidInteger", () => {
  expect(isValidInteger([])).toBe(false);
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

test("sends json to isValidInteger", () => {
  expect(isValidInteger(json)).toBe(false);
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

test("sends invalid json to isValidInteger", () => {
  expect(isValidInteger(invalidjson)).toBe(false);
});
