import { isSlug } from "../../dist/ch";

test("sends slug to isSlug", () => {
  expect(isSlug('this_is-a_slug')).toBe(true);
});

test("sends string to isSlug", () => {
  expect(isSlug("string")).toBe(true);
});

test("sends null to isSlug", () => {
  expect(isSlug(null)).toBe(false);
});

test("sends undefined to isSlug", () => {
  expect(isSlug(undefined)).toBe(false);
});

test("sends false to isSlug", () => {
  expect(isSlug(false)).toBe(false);
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

test("sends json to isSlug", () => {
  expect(isSlug(json)).toBe(false);
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

test("sends invalid json to isSlug", () => {
  expect(isSlug(invalidjson)).toBe(false);
});
