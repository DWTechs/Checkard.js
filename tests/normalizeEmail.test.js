import { normalizeEmail } from "../dist/ch";

test("sends null to normalizeEmail", () => {
  expect(normalizeEmail(null)).toBe(false);
});

test("sends undefined to normalizeEmail", () => {
  expect(normalizeEmail(undefined)).toBe(false);
});

const s1 = Symbol();
test("sends symbol to normalizeEmail", () => {
  expect(normalizeEmail(s1)).toBe(false);
});

test("sends true to normalizeEmail", () => {
  expect(normalizeEmail(true)).toBe(false);
});

test("sends empty string to normalizeEmail", () => {
  expect(normalizeEmail("")).toBe(true);
});

test("sends empty string to normalizeEmail with empty check", () => {
  expect(normalizeEmail("", true)).toBe(false);
});

test("sends false to normalizeEmail", () => {
  expect(normalizeEmail(false)).toBe(false);
});

test("sends string to normalizeEmail", () => {
  expect(normalizeEmail("string")).toBe(true);
});

test("sends string to normalizeEmail with empty check", () => {
  expect(normalizeEmail("string", true)).toBe(true);
});

test("sends positive even integer to normalizeEmail", () => {
  expect(normalizeEmail(2)).toBe(false);
});

test("sends positive odd integer to normalizeEmail", () => {
  expect(normalizeEmail(1)).toBe(false);
});

test("sends zero to normalizeEmail", () => {
  expect(normalizeEmail(0)).toBe(false);
});

test("sends positive float to normalizeEmail", () => {
  expect(normalizeEmail(1.1)).toBe(false);
});

test("sends negative odd integer to normalizeEmail", () => {
  expect(normalizeEmail(-1)).toBe(false);
});

test("sends negative even integer to normalizeEmail", () => {
  expect(normalizeEmail(-2)).toBe(false);
});

test("sends negative float to normalizeEmail", () => {
  expect(normalizeEmail(-1.1)).toBe(false);
});

test("sends object to normalizeEmail", () => {
  expect(normalizeEmail({})).toBe(false);
});

test("sends empty array to normalizeEmail", () => {
  expect(normalizeEmail([])).toBe(false);
});

test("sends array of 1 integer to normalizeEmail", () => {
  expect(normalizeEmail([2])).toBe(false);
});

test("sends array of 2 integers to normalizeEmail", () => {
  expect(normalizeEmail([2,1])).toBe(false);
});

test("sends array of 1 integer to normalizeEmail", () => {
  expect(normalizeEmail([2.1])).toBe(false);
});

test("sends array of 2 integers to normalizeEmail", () => {
  expect(normalizeEmail([2.1,1.1])).toBe(false);
});

test("sends array to normalizeEmail", () => {
  expect(normalizeEmail(["white", "grey", "black"])).toBe(false);
});

test("sends array to normalizeEmail with empty check", () => {
  expect(normalizeEmail(["white", "grey", "black"], true)).toBe(false);
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

test("sends json to normalizeEmail", () => {
  expect(normalizeEmail(json)).toBe(true);
});

test("sends json to normalizeEmail with empty check", () => {
  expect(normalizeEmail(json, true)).toBe(true);
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

test("sends invalid json to normalizeEmail", () => {
  expect(normalizeEmail(invalidjson)).toBe(true);
});

test("sends invalid json to normalizeEmail with empty check", () => {
  expect(normalizeEmail(invalidjson, true)).toBe(true);
});

function testFunction() {
  console.log("function");
}

test("sends function to normalizeEmail", () => {
  expect(normalizeEmail(testFunction)).toBe(false);
});

var para = document.createElement("p");

test("sends htmlElement to normalizeEmail", () => {
  expect(normalizeEmail(para)).toBe(false);
});

var node = document.createTextNode("new node");

test("sends node to normalizeEmail", () => {
  expect(normalizeEmail(node)).toBe(false);
});

test("sends regex to normalizeEmail", () => {
  expect(normalizeEmail(/ab+c/i)).toBe(false);
});
