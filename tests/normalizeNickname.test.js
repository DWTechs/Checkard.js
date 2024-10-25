import { normalizeNickname } from "../dist/ch";

test("sends null to normalizeNickname", () => {
  expect(normalizeNickname(null)).toBe(false);
});

test("sends undefined to normalizeNickname", () => {
  expect(normalizeNickname(undefined)).toBe(false);
});

const s1 = Symbol();
test("sends symbol to normalizeNickname", () => {
  expect(normalizeNickname(s1)).toBe(false);
});

test("sends true to normalizeNickname", () => {
  expect(normalizeNickname(true)).toBe(false);
});

test("sends empty string to normalizeNickname", () => {
  expect(normalizeNickname("")).toBe(true);
});

test("sends empty string to normalizeNickname with empty check", () => {
  expect(normalizeNickname("", true)).toBe(false);
});

test("sends false to normalizeNickname", () => {
  expect(normalizeNickname(false)).toBe(false);
});

test("sends string to normalizeNickname", () => {
  expect(normalizeNickname("string")).toBe(true);
});

test("sends string to normalizeNickname with empty check", () => {
  expect(normalizeNickname("string", true)).toBe(true);
});

test("sends positive even integer to normalizeNickname", () => {
  expect(normalizeNickname(2)).toBe(false);
});

test("sends positive odd integer to normalizeNickname", () => {
  expect(normalizeNickname(1)).toBe(false);
});

test("sends zero to normalizeNickname", () => {
  expect(normalizeNickname(0)).toBe(false);
});

test("sends positive float to normalizeNickname", () => {
  expect(normalizeNickname(1.1)).toBe(false);
});

test("sends negative odd integer to normalizeNickname", () => {
  expect(normalizeNickname(-1)).toBe(false);
});

test("sends negative even integer to normalizeNickname", () => {
  expect(normalizeNickname(-2)).toBe(false);
});

test("sends negative float to normalizeNickname", () => {
  expect(normalizeNickname(-1.1)).toBe(false);
});

test("sends object to normalizeNickname", () => {
  expect(normalizeNickname({})).toBe(false);
});

test("sends empty array to normalizeNickname", () => {
  expect(normalizeNickname([])).toBe(false);
});

test("sends array of 1 integer to normalizeNickname", () => {
  expect(normalizeNickname([2])).toBe(false);
});

test("sends array of 2 integers to normalizeNickname", () => {
  expect(normalizeNickname([2,1])).toBe(false);
});

test("sends array of 1 integer to normalizeNickname", () => {
  expect(normalizeNickname([2.1])).toBe(false);
});

test("sends array of 2 integers to normalizeNickname", () => {
  expect(normalizeNickname([2.1,1.1])).toBe(false);
});

test("sends array to normalizeNickname", () => {
  expect(normalizeNickname(["white", "grey", "black"])).toBe(false);
});

test("sends array to normalizeNickname with empty check", () => {
  expect(normalizeNickname(["white", "grey", "black"], true)).toBe(false);
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

test("sends json to normalizeNickname", () => {
  expect(normalizeNickname(json)).toBe(true);
});

test("sends json to normalizeNickname with empty check", () => {
  expect(normalizeNickname(json, true)).toBe(true);
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

test("sends invalid json to normalizeNickname", () => {
  expect(normalizeNickname(invalidjson)).toBe(true);
});

test("sends invalid json to normalizeNickname with empty check", () => {
  expect(normalizeNickname(invalidjson, true)).toBe(true);
});

function testFunction() {
  console.log("function");
}

test("sends function to normalizeNickname", () => {
  expect(normalizeNickname(testFunction)).toBe(false);
});

var para = document.createElement("p");

test("sends htmlElement to normalizeNickname", () => {
  expect(normalizeNickname(para)).toBe(false);
});

var node = document.createTextNode("new node");

test("sends node to normalizeNickname", () => {
  expect(normalizeNickname(node)).toBe(false);
});

test("sends regex to normalizeNickname", () => {
  expect(normalizeNickname(/ab+c/i)).toBe(false);
});
