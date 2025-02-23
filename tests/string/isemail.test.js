import { isEmail } from "../../dist/ch";

test("sends NaN to isEmail", () => {
  expect(isEmail(Number.NaN)).toBe(false);
});

test("sends null to isEmail", () => {
  expect(isEmail(null)).toBe(false);
});

test("sends undefined to isEmail", () => {
  expect(isEmail(undefined)).toBe(false);
});

const s1 = Symbol();
test("sends symbol to isEmail", () => {
  expect(isEmail(s1)).toBe(false);
});

test("sends true to isEmail", () => {
  expect(isEmail(true)).toBe(false);
});

test("sends false to isEmail", () => {
  expect(isEmail(false)).toBe(false);
});

test("sends string to isEmail", () => {
  expect(isEmail("string")).toBe(false);
});

test("sends empty string to isEmail", () => {
  expect(isEmail("")).toBe(false);
});

test("sends positive even integer to isEmail", () => {
  expect(isEmail(2)).toBe(false);
});

test("sends positive odd integer to isEmail", () => {
  expect(isEmail(1)).toBe(false);
});

test("sends zero to isEmail", () => {
  expect(isEmail(0)).toBe(false);
});

test("sends positive float to isEmail", () => {
  expect(isEmail(1.1)).toBe(false);
});

test("sends negative odd integer to isEmail", () => {
  expect(isEmail(-1)).toBe(false);
});

test("sends negative even integer to isEmail", () => {
  expect(isEmail(-2)).toBe(false);
});

test("sends negative float to isEmail", () => {
  expect(isEmail(-1.1)).toBe(false);
});

test("sends object to isEmail", () => {
  expect(isEmail({})).toBe(false);
});

test("sends empty array to isEmail", () => {
  expect(isEmail([])).toBe(false);
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

test("sends json to isEmail", () => {
  expect(isEmail(json)).toBe(false);
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

test("sends invalid json to isEmail", () => {
  expect(isEmail(invalidjson)).toBe(false);
});

test("sends abc-@mail.com to isEmail", () => {
  expect(isEmail("abc-@mail.com")).toBe(false);
});

test("sends abc.@mail.com to isEmail", () => {
  expect(isEmail("abc.@mail.com")).toBe(false);
});

test("sends abc..def@mail.com to isEmail", () => {
  expect(isEmail("abc..def@mail.com")).toBe(false);
});

test("sends .abc@mail.com to isEmail", () => {
  expect(isEmail(".abc@mail.com")).toBe(false);
});

test("sends abc#def@mail.com to isEmail", () => {
  expect(isEmail("abc#def@mail.com")).toBe(false);
});

test("sends abc.def@mail.c to isEmail", () => {
  expect(isEmail("abc.def@mail.c")).toBe(false);
});

test("sends abc.def@mail#archive.com to isEmail", () => {
  expect(isEmail("abc.def@mail#archive.com")).toBe(false);
});

test("sends abc.def@mail to isEmail", () => {
  expect(isEmail("abc.def@mail")).toBe(false);
});

test("sends abc.def@mail..com to isEmail", () => {
  expect(isEmail("abc.def@mail..com")).toBe(false);
});

test("sends abc-d@mail.com to isEmail", () => {
  expect(isEmail("abc-d@mail.com")).toBe(true);
});

test("sends abc.def@mail.com to isEmail", () => {
  expect(isEmail("abc.def@mail.com")).toBe(true);
});

test("sends abc@mail.com to isEmail", () => {
  expect(isEmail("abc@mail.com")).toBe(true);
});

test("sends abc_def@mail.com to isEmail", () => {
  expect(isEmail("abc_def@mail.com")).toBe(true);
});

test("sends abc.def@mail.cc to isEmail", () => {
  expect(isEmail("abc.def@mail.cc")).toBe(true);
});

test("sends abc.def@mail-archive.com to isEmail", () => {
  expect(isEmail("abc.def@mail-archive.com")).toBe(true);
});

test("sends abc.def@mail.org to isEmail", () => {
  expect(isEmail("abc.def@mail.org")).toBe(true);
});

test("sends abc.def@mail.com to isEmail", () => {
  expect(isEmail("abc.def@mail.com")).toBe(true);
});
