import { isNull } from "../../dist/ch";

test("sends NaN to isNull", () => {
  expect(isNull(Number.NaN)).toBe(false);
});

test("sends null to isNull", () => {
  expect(isNull(null)).toBe(true);
});

test("sends undefined to isNull", () => {
  expect(isNull(undefined)).toBe(false);
});

const s1 = Symbol();
test("sends symbol to isNull", () => {
  expect(isNull(s1)).toBe(false);
});

test("sends true to isNull", () => {
  expect(isNull(true)).toBe(false);
});

test("sends false to isNull", () => {
  expect(isNull(false)).toBe(false);
});

test("sends string to isNull", () => {
  expect(isNull("string")).toBe(false);
});

test("sends positive even integer to isNull", () => {
  expect(isNull(2)).toBe(false);
});

test("sends positive odd integer to isNull", () => {
  expect(isNull(1)).toBe(false);
});

test("sends zero to isNull", () => {
  expect(isNull(0)).toBe(false);
});

test("sends positive float to isNull", () => {
  expect(isNull(1.1)).toBe(false);
});

test("sends negative odd integer to isNull", () => {
  expect(isNull(-1)).toBe(false);
});

test("sends negative even integer to isNull", () => {
  expect(isNull(-2)).toBe(false);
});

test("sends negative float to isNull", () => {
  expect(isNull(-1.1)).toBe(false);
});

test("sends object to isNull", () => {
  expect(isNull({})).toBe(false);
});

test("sends empty array to isNull", () => {
  expect(isNull([])).toBe(false);
});

test("sends array of 1 integer to isNull", () => {
  expect(isNull([2])).toBe(false);
});

test("sends array of 2 integers to isNull", () => {
  expect(isNull([2,1])).toBe(false);
});

test("sends array of 1 integer to isNull", () => {
  expect(isNull([2.1])).toBe(false);
});

test("sends array of 2 integers to isNull", () => {
  expect(isNull([2.1,1.1])).toBe(false);
});

test("sends array to isNull", () => {
  expect(isNull(["white", "grey", "black"])).toBe(false);
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

test("sends json to isNull", () => {
  expect(isNull(json)).toBe(false);
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

test("sends invalid json to isNull", () => {
  expect(isNull(invalidjson)).toBe(false);
});

function testFunction() {
  console.log("function");
}

test("sends function to isNull", () => {
  expect(isNull(testFunction)).toBe(false);
});

const para = document.createElement("p");

test("sends htmlElement to isNull", () => {
  expect(isNull(para)).toBe(false);
});

const node = document.createTextNode("new node");

test("sends node to isNull", () => {
  expect(isNull(node)).toBe(false);
});

test("sends regex to isNull", () => {
  expect(isNull(/ab+c/i)).toBe(false);
});
