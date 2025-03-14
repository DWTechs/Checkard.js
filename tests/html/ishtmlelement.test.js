import { isHtmlElement } from "../../dist/ch";

const s1 = Symbol();
const json = `{
  "actor": {
    "name": "Tom Cruise",
    "age": 56,
    "Born At": "Syracuse, NY",
    "Birthdate": "July 3 1962",
    "photo": "https://jsonformatter.org/img/tom-cruise.jpg"
  }
}`;
const invalidjson = `{
  "actor: {
    "name": "Tom Cruise",
    "age": 56
    "Born At": "Syracuse, NY",
    "Birthdate": "July 3 1962",
    "photo": "https://jsonformatter.org/img/tom-cruise.jpg"
  }
}`;
function testFunction() {
  console.log("function");
}
const para = document.createElement("p");
const node = document.createTextNode("new node");

test("sends NaN to isHtmlElement", () => {
  expect(isHtmlElement(Number.NaN)).toBe(false);
});

test("sends null to isHtmlElement", () => {
  expect(isHtmlElement(null)).toBe(false);
});

test("sends undefined to isHtmlElement", () => {
  expect(isHtmlElement(undefined)).toBe(false);
});

test("sends symbol to isHtmlElement", () => {
  expect(isHtmlElement(s1)).toBe(false);
});

test("sends true to isHtmlElement", () => {
  expect(isHtmlElement(true)).toBe(false);
});

test("sends false to isHtmlElement", () => {
  expect(isHtmlElement(false)).toBe(false);
});

test("sends string to isHtmlElement", () => {
  expect(isHtmlElement("string")).toBe(false);
});

test("sends positive even integer to isHtmlElement", () => {
  expect(isHtmlElement(2)).toBe(false);
});

test("sends positive odd integer to isHtmlElement", () => {
  expect(isHtmlElement(1)).toBe(false);
});

test("sends zero to isHtmlElement", () => {
  expect(isHtmlElement(0)).toBe(false);
});

test("sends positive float to isHtmlElement", () => {
  expect(isHtmlElement(1.1)).toBe(false);
});

test("sends negative odd integer to isHtmlElement", () => {
  expect(isHtmlElement(-1)).toBe(false);
});

test("sends negative even integer to isHtmlElement", () => {
  expect(isHtmlElement(-2)).toBe(false);
});

test("sends negative float to isHtmlElement", () => {
  expect(isHtmlElement(-1.1)).toBe(false);
});

test("sends object to isHtmlElement", () => {
  expect(isHtmlElement({})).toBe(false);
});

test("sends empty array to isHtmlElement", () => {
  expect(isHtmlElement([])).toBe(false);
});

test("sends array of 1 integer to isHtmlElement", () => {
  expect(isHtmlElement([2])).toBe(false);
});

test("sends array of 2 integers to isHtmlElement", () => {
  expect(isHtmlElement([2,1])).toBe(false);
});

test("sends array of 1 integer to isHtmlElement", () => {
  expect(isHtmlElement([2.1])).toBe(false);
});

test("sends array of 2 integers to isHtmlElement", () => {
  expect(isHtmlElement([2.1,1.1])).toBe(false);
});

test("sends array to isHtmlElement", () => {
  expect(isHtmlElement(["white", "grey", "black"])).toBe(false);
});

test("sends json to isHtmlElement", () => {
  expect(isHtmlElement(json)).toBe(false);
});

test("sends invalid json to isHtmlElement", () => {
  expect(isHtmlElement(invalidjson)).toBe(false);
});

test("sends function to isHtmlElement", () => {
  expect(isHtmlElement(testFunction)).toBe(false);
});

test("sends htmlElement to isHtmlElement", () => {
  expect(isHtmlElement(para)).toBe(true);
});

test("sends node to isHtmlElement", () => {
  expect(isHtmlElement(node)).toBe(false);
});

test("sends regex to isHtmlElement", () => {
  expect(isHtmlElement(/ab+c/i)).toBe(false);
});
