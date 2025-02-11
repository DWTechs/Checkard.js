import { isTruthy } from "../../dist/ch";

test("sends null to isTruthy", () => {
  expect(isTruthy(null)).toBe(false);
});

test("sends undefined to isTruthy", () => {
  expect(isTruthy(undefined)).toBe(false);
});

test("sends zero to isTruthy", () => {
  expect(isTruthy(0)).toBe(false);
});

test("sends empty string to isTruthy", () => {
  expect(isTruthy("")).toBe(false);
});

test("sends -0 to isFalsy", () => {
  expect(isFalsy(-0)).toBe(false);
});

test("sends NaN to isFalsy", () => {
  expect(isFalsy(NaN)).toBe(false);
});

const s1 = Symbol();
test("sends symbol to isTruthy", () => {
  expect(isTruthy(s1)).toBe(true);
});

test("sends true to isTruthy", () => {
  expect(isTruthy(true)).toBe(true);
});

test("sends false to isTruthy", () => {
  expect(isTruthy(false)).toBe(false);
});

test("sends string to isTruthy", () => {
  expect(isTruthy("string")).toBe(true);
});

test("sends positive even integer to isTruthy", () => {
  expect(isTruthy(2)).toBe(true);
});

test("sends positive odd integer to isTruthy", () => {
  expect(isTruthy(1)).toBe(true);
});

test("sends positive float to isTruthy", () => {
  expect(isTruthy(1.1)).toBe(true);
});

test("sends negative odd integer to isTruthy", () => {
  expect(isTruthy(-1)).toBe(true);
});

test("sends negative even integer to isTruthy", () => {
  expect(isTruthy(-2)).toBe(true);
});

test("sends negative float to isTruthy", () => {
  expect(isTruthy(-1.1)).toBe(true);
});

test("sends object to isTruthy", () => {
  expect(isTruthy({})).toBe(true);
});

test("sends empty array to isTruthy", () => {
  expect(isTruthy([])).toBe(true);
});

test("sends array of 1 integer to isTruthy", () => {
  expect(isTruthy([2])).toBe(true);
});

test("sends array of 2 integers to isTruthy", () => {
  expect(isTruthy([2,1])).toBe(true);
});

test("sends array of 1 integer to isTruthy", () => {
  expect(isTruthy([2.1])).toBe(true);
});

test("sends array of 2 integers to isTruthy", () => {
  expect(isTruthy([2.1,1.1])).toBe(true);
});

test("sends array to isTruthy", () => {
  expect(isTruthy(["white", "grey", "black"])).toBe(true);
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

test("sends json to isTruthy", () => {
  expect(isTruthy(json)).toBe(true);
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

test("sends invalid json to isTruthy", () => {
  expect(isTruthy(invalidjson)).toBe(true);
});

function testFunction() {
  console.log("function");
}

test("sends function to isTruthy", () => {
  expect(isTruthy(testFunction)).toBe(true);
});

const para = document.createElement("p");

test("sends htmlElement to isTruthy", () => {
  expect(isTruthy(para)).toBe(true);
});

const node = document.createTextNode("new node");

test("sends node to isTruthy", () => {
  expect(isTruthy(node)).toBe(true);
});

test("sends regex to isTruthy", () => {
  expect(isTruthy(/ab+c/i)).toBe(true);
});
