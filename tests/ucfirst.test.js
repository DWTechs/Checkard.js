import { ucfirst } from "../dist/ch";

test("sends null to ucfirst", () => {
  expect(ucfirst(null)).toBe(false);
});

test("sends undefined to ucfirst", () => {
  expect(ucfirst(undefined)).toBe(false);
});

const s1 = Symbol();
test("sends symbol to ucfirst", () => {
  expect(ucfirst(s1)).toBe(false);
});

test("sends true to ucfirst", () => {
  expect(ucfirst(true)).toBe(false);
});

test("sends empty string to ucfirst", () => {
  expect(ucfirst("")).toBe(true);
});

test("sends empty string to ucfirst with empty check", () => {
  expect(ucfirst("", true)).toBe(false);
});

test("sends false to ucfirst", () => {
  expect(ucfirst(false)).toBe(false);
});

test("sends string to ucfirst", () => {
  expect(ucfirst("string")).toBe(true);
});

test("sends string to ucfirst with empty check", () => {
  expect(ucfirst("string", true)).toBe(true);
});

test("sends positive even integer to ucfirst", () => {
  expect(ucfirst(2)).toBe(false);
});

test("sends positive odd integer to ucfirst", () => {
  expect(ucfirst(1)).toBe(false);
});

test("sends zero to ucfirst", () => {
  expect(ucfirst(0)).toBe(false);
});

test("sends positive float to ucfirst", () => {
  expect(ucfirst(1.1)).toBe(false);
});

test("sends negative odd integer to ucfirst", () => {
  expect(ucfirst(-1)).toBe(false);
});

test("sends negative even integer to ucfirst", () => {
  expect(ucfirst(-2)).toBe(false);
});

test("sends negative float to ucfirst", () => {
  expect(ucfirst(-1.1)).toBe(false);
});

test("sends object to ucfirst", () => {
  expect(ucfirst({})).toBe(false);
});

test("sends empty array to ucfirst", () => {
  expect(ucfirst([])).toBe(false);
});

test("sends array of 1 integer to ucfirst", () => {
  expect(ucfirst([2])).toBe(false);
});

test("sends array of 2 integers to ucfirst", () => {
  expect(ucfirst([2,1])).toBe(false);
});

test("sends array of 1 integer to ucfirst", () => {
  expect(ucfirst([2.1])).toBe(false);
});

test("sends array of 2 integers to ucfirst", () => {
  expect(ucfirst([2.1,1.1])).toBe(false);
});

test("sends array to ucfirst", () => {
  expect(ucfirst(["white", "grey", "black"])).toBe(false);
});

test("sends array to ucfirst with empty check", () => {
  expect(ucfirst(["white", "grey", "black"], true)).toBe(false);
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

test("sends json to ucfirst", () => {
  expect(ucfirst(json)).toBe(true);
});

test("sends json to ucfirst with empty check", () => {
  expect(ucfirst(json, true)).toBe(true);
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

test("sends invalid json to ucfirst", () => {
  expect(ucfirst(invalidjson)).toBe(true);
});

test("sends invalid json to ucfirst with empty check", () => {
  expect(ucfirst(invalidjson, true)).toBe(true);
});

function testFunction() {
  console.log("function");
}

test("sends function to ucfirst", () => {
  expect(ucfirst(testFunction)).toBe(false);
});

var para = document.createElement("p");

test("sends htmlElement to ucfirst", () => {
  expect(ucfirst(para)).toBe(false);
});

var node = document.createTextNode("new node");

test("sends node to ucfirst", () => {
  expect(ucfirst(node)).toBe(false);
});

test("sends regex to ucfirst", () => {
  expect(ucfirst(/ab+c/i)).toBe(false);
});
