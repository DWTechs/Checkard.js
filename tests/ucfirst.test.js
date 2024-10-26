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
  expect(ucfirst("")).toBe(false);
});

test("sends empty string to ucfirst without everyWords", () => {
  expect(ucfirst("", false)).toBe(false);
});

test("sends false to ucfirst", () => {
  expect(ucfirst(false)).toBe(false);
});

const str = "string";
const strRes = "String";

test("sends string to ucfirst", () => {
  expect(ucfirst(str)).toBe(strRes);
});

test("sends string to ucfirst without everyWords", () => {
  expect(ucfirst(str, false)).toBe(strRes);
});

const strstr = "string string";
const strstrRes = "String string";
const strstrResEW = "String String";

test("sends string string to ucfirst", () => {
  expect(ucfirst(strstr, true)).toBe(strstrResEW);
});

test("sends string string to ucfirst without everyWords", () => {
  expect(ucfirst(strstr, false)).toBe(strstrRes);
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

const json = `{
  "actor": {
    "name": "Tom Cruise"
  }
}`;

const jsonResEW = `{
  "actor": {
    "name": "tom Cruise"
  }
}`;

const jsonRes = `{
  "actor": {
    "name": "tom cruise"
  }
}`;

test("sends json to ucfirst", () => {
  expect(ucfirst(json)).toBe(jsonResEW);
});

test("sends json to ucfirst without everyWords", () => {
  expect(ucfirst(json, false)).toBe(jsonRes);
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
