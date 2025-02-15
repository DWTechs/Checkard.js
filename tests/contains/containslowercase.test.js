import { containsLowerCase } from "../../dist/ch";

test("sends salUt character to containsLowerCase", () => {
  expect(containsLowerCase('salUt')).toBe(true);
});

test("sends SALUT character to containsLowerCase", () => {
  expect(containsLowerCase('SALUT')).toBe(false);
});

test("sends sALUT character to containsLowerCase", () => {
  expect(containsLowerCase('sALUT')).toBe(true);
});

test("sends SaLUT character to containsLowerCase", () => {
  expect(containsLowerCase('SaLUT')).toBe(true);
});

test("sends SALUt character to containsLowerCase", () => {
  expect(containsLowerCase('SALUt')).toBe(true);
});

test("sends string without uppercase character to containsLowerCase", () => {
  expect(containsLowerCase('salut')).toBe(true);
});

test("sends string to containsLowerCase", () => {
  expect(containsLowerCase("string")).toBe(true);
});

test("sends positive even integer to containsLowerCase", () => {
  expect(containsLowerCase(2)).toBe(false);
});

test("sends positive odd integer to containsLowerCase", () => {
  expect(containsLowerCase(1)).toBe(false);
});

test("sends zero to containsLowerCase", () => {
  expect(containsLowerCase(0)).toBe(false);
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

test("sends json to containsLowerCase", () => {
  expect(containsLowerCase(json)).toBe(true);
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

test("sends invalid json to containsLowerCase", () => {
  expect(containsLowerCase(invalidjson)).toBe(true);
});

