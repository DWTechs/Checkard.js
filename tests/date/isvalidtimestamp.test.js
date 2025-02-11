import { isValidTimestamp } from "../../dist/ch";


const s1 = Symbol();
const date = new Date('1/1/1900');
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

test("sends NaN to isValidTimestamp", () => {
  expect(isValidTimestamp(NaN)).toBe(false);
});

test("sends valid negative timestamp to isValidTimestamp with min & max", () => {
  expect(isValidTimestamp(-5, -30, 30)).toBe(true);
});

test("sends valid timestamp to isValidTimestamp with min & max", () => {
  expect(isValidTimestamp(5, -30, 30)).toBe(true);
});

test("sends timestamp to isValidTimestamp", () => {
  expect(isValidTimestamp(date.getTime())).toBe(true);
});

test("sends positive even integer to isValidTimestamp", () => {
  expect(isValidTimestamp(2)).toBe(true);
});

test("sends positive odd integer to isValidTimestamp", () => {
  expect(isValidTimestamp(1)).toBe(true);
});

test("sends zero to isValidTimestamp", () => {
  expect(isValidTimestamp(0)).toBe(true);
});


test("sends invalid negative timestamp to isValidTimestamp", () => {
  expect(isValidTimestamp(-2208989361001)).toBe(false);
});

test("sends invalid timestamp to isValidTimestamp", () => {
  expect(isValidTimestamp(7258114800001)).toBe(false);
});

test("sends invalid negative timestamp to isValidTimestamp with min & max", () => {
  expect(isValidTimestamp(-75, -30, 30)).toBe(false);
});

test("sends invalid timestamp to isValidTimestamp with min & max", () => {
  expect(isValidTimestamp(75, -30, 30)).toBe(false);
});

test("sends date in string format to isValidTimestamp", () => {
  expect(isValidTimestamp('1/1/1900')).toBe(false);
});

test("sends date object to isValidTimestamp", () => {
  expect(isValidTimestamp(date)).toBe(false);
});

test("sends null to isValidTimestamp", () => {
  expect(isValidTimestamp(null)).toBe(false);
});

test("sends undefined to isValidTimestamp", () => {
  expect(isValidTimestamp(undefined)).toBe(false);
});

test("sends symbol to isValidTimestamp", () => {
  expect(isValidTimestamp(s1)).toBe(false);
});

test("sends true to isValidTimestamp", () => {
  expect(isValidTimestamp(true)).toBe(false);
});

test("sends false to isValidTimestamp", () => {
  expect(isValidTimestamp(false)).toBe(false);
});

test("sends string to isValidTimestamp", () => {
  expect(isValidTimestamp("string")).toBe(false);
});

test("sends positive float to isValidTimestamp", () => {
  expect(isValidTimestamp(1.1)).toBe(false);
});

test("sends negative odd integer to isValidTimestamp", () => {
  expect(isValidTimestamp(-1)).toBe(true);
});

test("sends negative even integer to isValidTimestamp", () => {
  expect(isValidTimestamp(-2)).toBe(true);
});

test("sends negative float to isValidTimestamp", () => {
  expect(isValidTimestamp(-1.1)).toBe(false);
});

test("sends object to isValidTimestamp", () => {
  expect(isValidTimestamp({})).toBe(false);
});

test("sends empty array to isValidTimestamp", () => {
  expect(isValidTimestamp([])).toBe(false);
});

test("sends array of 1 integer to isValidTimestamp", () => {
  expect(isValidTimestamp([2])).toBe(false);
});

test("sends array of 2 integers to isValidTimestamp", () => {
  expect(isValidTimestamp([2,1])).toBe(false);
});

test("sends array of 1 integer to isValidTimestamp", () => {
  expect(isValidTimestamp([2.1])).toBe(false);
});

test("sends array of 2 integers to isValidTimestamp", () => {
  expect(isValidTimestamp([2.1,1.1])).toBe(false);
});

test("sends array to isValidTimestamp", () => {
  expect(isValidTimestamp(["white", "grey", "black"])).toBe(false);
});

test("sends json to isValidTimestamp", () => {
  expect(isValidTimestamp(json)).toBe(false);
});

test("sends invalid json to isValidTimestamp", () => {
  expect(isValidTimestamp(invalidjson)).toBe(false);
});

test("sends function to isValidTimestamp", () => {
  expect(isValidTimestamp(testFunction)).toBe(false);
});

test("sends htmlElement to isValidTimestamp", () => {
  expect(isValidTimestamp(para)).toBe(false);
});

test("sends node to isValidTimestamp", () => {
  expect(isValidTimestamp(node)).toBe(false);
});

test("sends regex to isValidTimestamp", () => {
  expect(isValidTimestamp(/ab+c/i)).toBe(false);
});
