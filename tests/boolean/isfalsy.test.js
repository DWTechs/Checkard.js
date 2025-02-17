import { isFalsy } from "../../dist/ch";

test("sends null to isFalsy", () => {
  expect(isFalsy(null)).toBe(true);
});

test("sends false to isFalsy", () => {
  expect(isFalsy(false)).toBe(true);
});

test("sends undefined to isFalsy", () => {
  expect(isFalsy(undefined)).toBe(true);
});

test("sends zero to isFalsy", () => {
  expect(isFalsy(0)).toBe(true);
});

test("sends -0 to isFalsy", () => {
  expect(isFalsy(-0)).toBe(true);
});

test("sends 0n to isFalsy", () => {
  expect(isFalsy(0n)).toBe(true);
});

test("sends NaN to isFalsy", () => {
  expect(isFalsy(Number.NaN)).toBe(true);
});

test("sends empty string to isFalsy", () => {
  expect(isFalsy("")).toBe(true);
});

const s1 = Symbol();
test("sends symbol to isFalsy", () => {
  expect(isFalsy(s1)).toBe(false);
});

test("sends true to isFalsy", () => {
  expect(isFalsy(true)).toBe(false);
});


test("sends string to isFalsy", () => {
  expect(isFalsy("string")).toBe(false);
});

test("sends positive even integer to isFalsy", () => {
  expect(isFalsy(2)).toBe(false);
});

test("sends positive odd integer to isFalsy", () => {
  expect(isFalsy(1)).toBe(false);
});

test("sends positive float to isFalsy", () => {
  expect(isFalsy(1.1)).toBe(false);
});

test("sends negative odd integer to isFalsy", () => {
  expect(isFalsy(-1)).toBe(false);
});

test("sends negative even integer to isFalsy", () => {
  expect(isFalsy(-2)).toBe(false);
});

test("sends negative float to isFalsy", () => {
  expect(isFalsy(-1.1)).toBe(false);
});

test("sends object to isFalsy", () => {
  expect(isFalsy({})).toBe(false);
});

test("sends empty array to isFalsy", () => {
  expect(isFalsy([])).toBe(false);
});

test("sends array of 1 integer to isFalsy", () => {
  expect(isFalsy([2])).toBe(false);
});

test("sends array of 2 integers to isFalsy", () => {
  expect(isFalsy([2,1])).toBe(false);
});

test("sends array of 1 integer to isFalsy", () => {
  expect(isFalsy([2.1])).toBe(false);
});

test("sends array of 2 integers to isFalsy", () => {
  expect(isFalsy([2.1,1.1])).toBe(false);
});

test("sends array to isFalsy", () => {
  expect(isFalsy(["white", "grey", "black"])).toBe(false);
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

test("sends json to isFalsy", () => {
  expect(isFalsy(json)).toBe(false);
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

test("sends invalid json to isFalsy", () => {
  expect(isFalsy(invalidjson)).toBe(false);
});

function testFunction() {
  console.log("function");
}

test("sends function to isFalsy", () => {
  expect(isFalsy(testFunction)).toBe(false);
});

const para = document.createElement("p");

test("sends htmlElement to isFalsy", () => {
  expect(isFalsy(para)).toBe(false);
});

const node = document.createTextNode("new node");

test("sends node to isFalsy", () => {
  expect(isFalsy(node)).toBe(false);
});

test("sends regex to isFalsy", () => {
  expect(isFalsy(/ab+c/i)).toBe(false);
});
