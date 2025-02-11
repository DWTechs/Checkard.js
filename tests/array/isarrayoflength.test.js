import { isArrayOfLength } from "../../dist/ch";

const s1 = Symbol();
const para = document.createElement("p");
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
const node = document.createTextNode("new node");
function testFunction() {
  console.log("function");
}

test("sends NaN to isArrayOfLength", () => {
  expect(isArrayOfLength(NaN)).toBe(false);
});

test("sends array of length 3 to isArrayOfLength(0,3)", () => {
  expect(isArrayOfLength(["white", "grey", "black"], 0, 3)).toBe(true);
});

test("sends node to isArrayOfLength", () => {
  expect(isArrayOfLength(node)).toBe(true);
});

test("sends string to isArrayOfLength", () => {
  expect(isArrayOfLength("string")).toBe(true);
});

test("sends empty array to isArrayOfLength", () => {
  expect(isArrayOfLength([])).toBe(true);
});

test("sends array of 1 integer to isArrayOfLength", () => {
  expect(isArrayOfLength([2])).toBe(true);
});

test("sends array of 2 integers to isArrayOfLength", () => {
  expect(isArrayOfLength([2,1])).toBe(true);
});

test("sends array of 1 integer to isArrayOfLength", () => {
  expect(isArrayOfLength([2.1])).toBe(true);
});

test("sends array of 2 integers to isArrayOfLength", () => {
  expect(isArrayOfLength([2.1,1.1])).toBe(true);
});

test("sends array to isArrayOfLength", () => {
  expect(isArrayOfLength(["white", "grey", "black"])).toBe(true);
});

test("sends invalid json to isArrayOfLength", () => {
  expect(isArrayOfLength(invalidjson)).toBe(true);
});

test("sends function to isArrayOfLength", () => {
  expect(isArrayOfLength(testFunction)).toBe(true);
});

test("sends array to isArrayOfLength with length test between 2 and 4", () => {
  expect(isArrayOfLength(["white", "grey", "black"], 2, 4)).toBe(true);
});

test("sends array to isArrayOfLength with length test between 3 and 6", () => {
  expect(isArrayOfLength(["white", "grey", "black"], 3, 6)).toBe(true);
});

test("sends array to isArrayOfLength with length test between 1 and 3", () => {
  expect(isArrayOfLength(["white", "grey", "black"], 1, 3)).toBe(true);
});

test("sends empty array of length 0 to isArrayOfLength with negative min", () => {
  expect(isArrayOfLength([], -1, 0)).toBe(true);
});

test("sends empty array of length 0 to isArrayOfLength with negative min and max greater than 0", () => {
  expect(isArrayOfLength([], -1, 2)).toBe(true);
});

test("sends string of length 6 to isArrayOfLength with length test between 2 and 6", () => {
  expect(isArrayOfLength("string", 2, 6)).toBe(true);
});

test("sends string of length 6 to isArrayOfLength with length test between 2 and 5", () => {
  expect(isArrayOfLength("string", 2, 5)).toBe(false);
});

test("sends string of length 6 to isArrayOfLength with length test between 7 and 9", () => {
  expect(isArrayOfLength("string", 7, 9)).toBe(false);
});

test("sends null to isArrayOfLength", () => {
  expect(isArrayOfLength(null)).toBe(false);
});

test("sends undefined to isArrayOfLength", () => {
  expect(isArrayOfLength(undefined)).toBe(false);
});

test("sends symbol to isArrayOfLength", () => {
  expect(isArrayOfLength(s1)).toBe(false);
});

test("sends true to isArrayOfLength", () => {
  expect(isArrayOfLength(true)).toBe(false);
});

test("sends false to isArrayOfLength", () => {
  expect(isArrayOfLength(false)).toBe(false);
});

test("sends positive even integer to isArrayOfLength", () => {
  expect(isArrayOfLength(2)).toBe(false);
});

test("sends positive odd integer to isArrayOfLength", () => {
  expect(isArrayOfLength(1)).toBe(false);
});

test("sends zero to isArrayOfLength", () => {
  expect(isArrayOfLength(0)).toBe(false);
});

test("sends positive float to isArrayOfLength", () => {
  expect(isArrayOfLength(1.1)).toBe(false);
});

test("sends negative odd integer to isArrayOfLength", () => {
  expect(isArrayOfLength(-1)).toBe(false);
});

test("sends negative even integer to isArrayOfLength", () => {
  expect(isArrayOfLength(-2)).toBe(false);
});

test("sends negative float to isArrayOfLength", () => {
  expect(isArrayOfLength(-1.1)).toBe(false);
});

test("sends object to isArrayOfLength", () => {
  expect(isArrayOfLength({})).toBe(false);
});

test("sends array of length 3 to isArrayOfLength(0,2)", () => {
  expect(isArrayOfLength(["white", "grey", "black"], 0, 2)).toBe(false);
});

test("sends array of length 3 to isArrayOfLength(4,5)", () => {
  expect(isArrayOfLength(["white", "grey", "black"], 4, 5)).toBe(false);
});

test("sends json to isArrayOfLength", () => {
  expect(isArrayOfLength(json)).toBe(true);
});

test("sends htmlElement to isArrayOfLength", () => {
  expect(isArrayOfLength(para)).toBe(false);
});

test("sends regex to isArrayOfLength", () => {
  expect(isArrayOfLength(/ab+c/i)).toBe(false);
});

// with length
test("sends null to isArrayOfLength with length test between 2 and 4", () => {
  expect(isArrayOfLength(null, 2, 4)).toBe(false);
});

test("sends undefined to isArrayOfLength with length test between 2 and 4", () => {
  expect(isArrayOfLength(undefined, 2, 4)).toBe(false);
});

test("sends symbol to isArrayOfLength with length test between 2 and 4", () => {
  expect(isArrayOfLength(s1, 2, 4)).toBe(false);
});

test("sends true to isArrayOfLength with length test between 2 and 4", () => {
  expect(isArrayOfLength(true, 2, 4)).toBe(false);
});

test("sends false to isArrayOfLength with length test between 2 and 4", () => {
  expect(isArrayOfLength(false, 2, 4)).toBe(false);
});

test("sends string to isArrayOfLength with length test between 2 and 4", () => {
  expect(isArrayOfLength("string", 2, 4)).toBe(false);
});

test("sends positive even integer to isArrayOfLength with length test between 2 and 4", () => {
  expect(isArrayOfLength(2, 2, 4)).toBe(false);
});

test("sends positive odd integer to isArrayOfLength with length test between 2 and 4", () => {
  expect(isArrayOfLength(1, 2, 4)).toBe(false);
});

test("sends zero to isArrayOfLength with length test between 2 and 4", () => {
  expect(isArrayOfLength(0, 2, 4)).toBe(false);
});

test("sends positive float to isArrayOfLength with length test between 2 and 4", () => {
  expect(isArrayOfLength(1.1, 2, 4)).toBe(false);
});

test("sends negative odd integer to isArrayOfLength with length test between 2 and 4", () => {
  expect(isArrayOfLength(-1, 2, 4)).toBe(false);
});

test("sends negative even integer to isArrayOfLength with length test between 2 and 4", () => {
  expect(isArrayOfLength(-2, 2, 4)).toBe(false);
});

test("sends negative float to isArrayOfLength with length test between 2 and 4", () => {
  expect(isArrayOfLength(-1.1, 2, 4)).toBe(false);
});

test("sends object to isArrayOfLength with length test between 2 and 4", () => {
  expect(isArrayOfLength({}, 2, 4)).toBe(false);
});

test("sends empty array to isArrayOfLength with length test between 2 and 4", () => {
  expect(isArrayOfLength([], 2, 4)).toBe(false);
});

test("sends json to isArrayOfLength with length test between 2 and 4", () => {
  expect(isArrayOfLength(json, 2, 4)).toBe(false);
});

test("sends invalid json to isArrayOfLength with length test between 2 and 4", () => {
  expect(isArrayOfLength(invalidjson, 2, 4)).toBe(false);
});

test("sends function to isArrayOfLength with length test between 2 and 4", () => {
  expect(isArrayOfLength(testFunction, 2, 4)).toBe(false);
});

test("sends htmlElement to isArrayOfLength with length test between 2 and 4", () => {
  expect(isArrayOfLength(para, 2, 4)).toBe(false);
});

test("sends node to isArrayOfLength with length test between 2 and 4", () => {
  expect(isArrayOfLength(node, 2, 4)).toBe(false);
});

test("sends regex to isArrayOfLength with length test between 2 and 4", () => {
  expect(isArrayOfLength(/ab+c/i, 2, 4)).toBe(false);
});

test("sends wrong comparator to isArrayOfLength with length test between 2 and 4", () => {
  expect(isArrayOfLength([2,4], '+', 2)).toBe(false);
});

test("sends empty array to isArrayOfLength with length test between 2 and 4", () => {
  expect(isArrayOfLength([], 2, 4)).toBe(false);
});

test("sends empty array to isArrayOfLength with length test between 2 and 4", () => {
  expect(isArrayOfLength(new Array(), 2, 4)).toBe(false);
});

test("sends empty array to isArrayOfLength with length test between 2 and 4", () => {
  expect(isArrayOfLength(Array.of(), 2, 4)).toBe(false);
});

test("sends empty array to isArrayOfLength with length test between 2 and 4", () => {
  expect(isArrayOfLength(Array.from([]), 2, 4)).toBe(false);
});

test("sends empty array to isArrayOfLength with length test between 2 and 4", () => {
  expect(isArrayOfLength(Array.from({}), 2, 4)).toBe(false);
});

test("sends empty array to isArrayOfLength with length test between 2 and 4", () => {
  expect(isArrayOfLength([...[]], 2, 4)).toBe(false);
});

test("sends empty array to isArrayOfLength with length test between 2 and 4", () => {
  expect(isArrayOfLength(Object.values({}), 2, 4)).toBe(false);
});

test("sends empty array to isArrayOfLength with length test between 2 and 4", () => {
  expect(isArrayOfLength(Object.keys({}), 2, 4)).toBe(false);
});

test("sends empty array of length 1 to isArrayOfLength with length test between 2 and 4", () => {
  expect(isArrayOfLength(['R'], 2, 4)).toBe(false);
});
