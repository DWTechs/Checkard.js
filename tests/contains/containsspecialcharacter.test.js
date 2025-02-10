import { containsSpecialCharacter } from "../../dist/ch";

test("sends string with special character to containsSpecialCharacter", () => {
  expect(containsSpecialCharacter('sal&Ut')).toBe(true);
});

test("sends string with uppercase character to containsSpecialCharacter", () => {
  expect(containsSpecialCharacter('salUt')).toBe(false);
});

test("sends string without uppercase character to containsSpecialCharacter", () => {
  expect(containsSpecialCharacter('salut')).toBe(false);
});

test("sends string to containsSpecialCharacter", () => {
  expect(containsSpecialCharacter("string")).toBe(false);
});

test("sends positive even integer to containsSpecialCharacter", () => {
  expect(containsSpecialCharacter(2)).toBe(false);
});

test("sends positive odd integer to containsSpecialCharacter", () => {
  expect(containsSpecialCharacter(1)).toBe(false);
});

test("sends zero to containsSpecialCharacter", () => {
  expect(containsSpecialCharacter(0)).toBe(false);
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

test("sends json to containsSpecialCharacter", () => {
  expect(containsSpecialCharacter(json)).toBe(true);
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

test("sends invalid json to containsSpecialCharacter", () => {
  expect(containsSpecialCharacter(invalidjson)).toBe(true);
});
