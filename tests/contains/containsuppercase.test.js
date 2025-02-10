import { containsUpperCase } from "../../dist/ch";

test("sends salUt character to containsUpperCase", () => {
  expect(containsUpperCase('salUt')).toBe(true);
});

test("sends Salut character to containsUpperCase", () => {
  expect(containsUpperCase('Salut')).toBe(true);
});

test("sends saluT character to containsUpperCase", () => {
  expect(containsUpperCase('saluT')).toBe(true);
});

test("sends SAlut character to containsUpperCase", () => {
  expect(containsUpperCase('SAlut')).toBe(true);
});

test("sends salUT character to containsUpperCase", () => {
  expect(containsUpperCase('salUT')).toBe(true);
});
test("sends string without uppercase character to containsUpperCase", () => {
  expect(containsUpperCase('salut')).toBe(false);
});

test("sends string to containsUpperCase", () => {
  expect(containsUpperCase("string")).toBe(false);
});

test("sends positive even integer to containsUpperCase", () => {
  expect(containsUpperCase(2)).toBe(false);
});

test("sends positive odd integer to containsUpperCase", () => {
  expect(containsUpperCase(1)).toBe(false);
});

test("sends zero to containsUpperCase", () => {
  expect(containsUpperCase(0)).toBe(false);
});

var json = `{
  "actor": {
    "name": "Tom Cruise",
    "age": 56,
    "Born At": "Syracuse, NY",
    "Birthdate": "July 3 1962",
    "photo": "https://jsonformatter.org/img/tom-cruise.jpg"
  }
}`;

test("sends json to containsUpperCase", () => {
  expect(containsUpperCase(json)).toBe(true);
});

var invalidjson = `{
  "actor: {
    "name": "Tom Cruise",
    "age": 56
    "Born At": "Syracuse, NY",
    "Birthdate": "July 3 1962",
    "photo": "https://jsonformatter.org/img/tom-cruise.jpg"
  }
}`;

test("sends invalid json to containsUpperCase", () => {
  expect(containsUpperCase(invalidjson)).toBe(true);
});
