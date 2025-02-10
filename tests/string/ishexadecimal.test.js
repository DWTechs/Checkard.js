import { isHexadecimal } from "../../dist/ch";

test("sends hexadecimal in string format to isHexadecimal", () => {
  expect(isHexadecimal('#FF5733')).toBe(true);
});

test("sends date in string format to isHexadecimal", () => {
  expect(isHexadecimal('1/1/1900')).toBe(false);
});

const date = new Date('1/1/1900');
test("sends date object to isHexadecimal", () => {
  expect(isHexadecimal(date)).toBe(false);
});

test("sends null to isHexadecimal", () => {
  expect(isHexadecimal(null)).toBe(false);
});

test("sends undefined to isHexadecimal", () => {
  expect(isHexadecimal(undefined)).toBe(false);
});


test("sends true to isHexadecimal", () => {
  expect(isHexadecimal(true)).toBe(false);
});

test("sends false to isHexadecimal", () => {
  expect(isHexadecimal(false)).toBe(false);
});

test("sends string to isHexadecimal", () => {
  expect(isHexadecimal("string")).toBe(false);
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

test("sends json to isHexadecimal", () => {
  expect(isHexadecimal(json)).toBe(false);
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

test("sends invalid json to isHexadecimal", () => {
  expect(isHexadecimal(invalidjson)).toBe(false);
});
