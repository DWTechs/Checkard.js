import { normalizeName } from "../dist/ch";

test("sends null to normalizeName", () => {
  expect(normalizeName(null)).toBe(false);
});

test("sends undefined to normalizeName", () => {
  expect(normalizeName(undefined)).toBe(false);
});

const s1 = Symbol();
test("sends symbol to normalizeName", () => {
  expect(normalizeName(s1)).toBe(false);
});

test("sends true to normalizeName", () => {
  expect(normalizeName(true)).toBe(false);
});

test("sends empty string to normalizeName", () => {
  expect(normalizeName("")).toBe(true);
});

test("sends empty string to normalizeName with empty check", () => {
  expect(normalizeName("", true)).toBe(false);
});

test("sends false to normalizeName", () => {
  expect(normalizeName(false)).toBe(false);
});

test("sends string to normalizeName", () => {
  expect(normalizeName("string")).toBe(true);
});

test("sends string to normalizeName with empty check", () => {
  expect(normalizeName("string", true)).toBe(true);
});

test("sends positive even integer to normalizeName", () => {
  expect(normalizeName(2)).toBe(false);
});

test("sends positive odd integer to normalizeName", () => {
  expect(normalizeName(1)).toBe(false);
});

test("sends zero to normalizeName", () => {
  expect(normalizeName(0)).toBe(false);
});

test("sends positive float to normalizeName", () => {
  expect(normalizeName(1.1)).toBe(false);
});

test("sends negative odd integer to normalizeName", () => {
  expect(normalizeName(-1)).toBe(false);
});

test("sends negative even integer to normalizeName", () => {
  expect(normalizeName(-2)).toBe(false);
});

test("sends negative float to normalizeName", () => {
  expect(normalizeName(-1.1)).toBe(false);
});

test("sends object to normalizeName", () => {
  expect(normalizeName({})).toBe(false);
});

test("sends empty array to normalizeName", () => {
  expect(normalizeName([])).toBe(false);
});

test("sends array of 1 integer to normalizeName", () => {
  expect(normalizeName([2])).toBe(false);
});

test("sends array of 2 integers to normalizeName", () => {
  expect(normalizeName([2,1])).toBe(false);
});

test("sends array of 1 integer to normalizeName", () => {
  expect(normalizeName([2.1])).toBe(false);
});

test("sends array of 2 integers to normalizeName", () => {
  expect(normalizeName([2.1,1.1])).toBe(false);
});

test("sends array to normalizeName", () => {
  expect(normalizeName(["white", "grey", "black"])).toBe(false);
});

test("sends array to normalizeName with empty check", () => {
  expect(normalizeName(["white", "grey", "black"], true)).toBe(false);
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

test("sends json to normalizeName", () => {
  expect(normalizeName(json)).toBe(true);
});

test("sends json to normalizeName with empty check", () => {
  expect(normalizeName(json, true)).toBe(true);
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

test("sends invalid json to normalizeName", () => {
  expect(normalizeName(invalidjson)).toBe(true);
});

test("sends invalid json to normalizeName with empty check", () => {
  expect(normalizeName(invalidjson, true)).toBe(true);
});

function testFunction() {
  console.log("function");
}

test("sends function to normalizeName", () => {
  expect(normalizeName(testFunction)).toBe(false);
});

var para = document.createElement("p");

test("sends htmlElement to normalizeName", () => {
  expect(normalizeName(para)).toBe(false);
});

var node = document.createTextNode("new node");

test("sends node to normalizeName", () => {
  expect(normalizeName(node)).toBe(false);
});

test("sends regex to normalizeName", () => {
  expect(normalizeName(/ab+c/i)).toBe(false);
});
