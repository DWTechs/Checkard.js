import { isUndefined } from "../../dist/ch";

test("sends NaN to isUndefined", () => {
  expect(isUndefined(Number.NaN)).toBe(false);
});

test("sends null to isUndefined", () => {
  expect(isUndefined(null)).toBe(false);
});

test("sends undefined to isUndefined", () => {
  expect(isUndefined(undefined)).toBe(true);
});

const s1 = Symbol();
test("sends symbol to isUndefined", () => {
  expect(isUndefined(s1)).toBe(false);
});

test("sends true to isUndefined", () => {
  expect(isUndefined(true)).toBe(false);
});

test("sends false to isUndefined", () => {
  expect(isUndefined(false)).toBe(false);
});

test("sends string to isUndefined", () => {
  expect(isUndefined("string")).toBe(false);
});

test("sends positive even integer to isUndefined", () => {
  expect(isUndefined(2)).toBe(false);
});

test("sends positive odd integer to isUndefined", () => {
  expect(isUndefined(1)).toBe(false);
});

test("sends zero to isUndefined", () => {
  expect(isUndefined(0)).toBe(false);
});

test("sends positive float to isUndefined", () => {
  expect(isUndefined(1.1)).toBe(false);
});

test("sends negative odd integer to isUndefined", () => {
  expect(isUndefined(-1)).toBe(false);
});

test("sends negative even integer to isUndefined", () => {
  expect(isUndefined(-2)).toBe(false);
});

test("sends negative float to isUndefined", () => {
  expect(isUndefined(-1.1)).toBe(false);
});

test("sends object to isUndefined", () => {
  expect(isUndefined({})).toBe(false);
});

test("sends empty array to isUndefined", () => {
  expect(isUndefined([])).toBe(false);
});

test("sends array of 1 integer to isUndefined", () => {
  expect(isUndefined([2])).toBe(false);
});

test("sends array of 2 integers to isUndefined", () => {
  expect(isUndefined([2,1])).toBe(false);
});

test("sends array of 1 integer to isUndefined", () => {
  expect(isUndefined([2.1])).toBe(false);
});

test("sends array of 2 integers to isUndefined", () => {
  expect(isUndefined([2.1,1.1])).toBe(false);
});

test("sends array to isUndefined", () => {
  expect(isUndefined(["white", "grey", "black"])).toBe(false);
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

test("sends json to isUndefined", () => {
  expect(isUndefined(json)).toBe(false);
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

test("sends invalid json to isUndefined", () => {
  expect(isUndefined(invalidjson)).toBe(false);
});

function testFunction() {
  console.log("function");
}

test("sends function to isUndefined", () => {
  expect(isUndefined(testFunction)).toBe(false);
});

const para = document.createElement("p");

test("sends htmlElement to isUndefined", () => {
  expect(isUndefined(para)).toBe(false);
});

const node = document.createTextNode("new node");

test("sends node to isUndefined", () => {
  expect(isUndefined(node)).toBe(false);
});

test("sends regex to isUndefined", () => {
  expect(isUndefined(/ab+c/i)).toBe(false);
});
