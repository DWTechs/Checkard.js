
import { isString } from "../../../dist/ch";

test("sends NaN to isString", () => {
  expect(() => isString(Number.NaN, undefined, null, true)).toThrow();
});

test("sends empty string to isString with empty check using 'empty' comparator", () => {
  expect(isString("", "0", null, true)).toBe(true);
});

test("sends null to isString", () => {
  expect(() => isString(null, undefined, null, true)).toThrow();
});

test("sends undefined to isString", () => {
  expect(() => isString(undefined, undefined, null, true)).toThrow();
});

const s1 = Symbol();
test("sends symbol to isString", () => {
  expect(() => isString(s1, undefined, null, true)).toThrow();
});

test("sends true to isString", () => {
  expect(() => isString(true, undefined, null, true)).toThrow();
});

test("sends empty string to isString", () => {
  expect(isString("", undefined, null, true)).toBe(true);
});

test("sends empty string to isString with empty check using '>' comparator", () => {
  expect(() => isString("", ">", null, true)).toThrow();
});

test("sends empty string to isString with empty check using 'empty' comparator", () => {
  expect(isString("", "0", null, true)).toBe(true);
});

test("sends empty string to isString with empty check using '!empty' comparator", () => {
  expect(() => isString("", "!0", null, true)).toThrow();
});

test("sends empty string to isString with empty check using '!empty' comparator with third param at zero", () => {
  expect(() => isString("", "!0", 0, true)).toThrow();

  let caughtError;
  try {
    isString("", "!0", 0, true);
  } catch (err) {
    caughtError = err;
  }
  
  // Verify error was thrown
  expect(caughtError).toBeDefined();
  
  // Display the error stack
  console.log('\n=== Error Stack Information ===');
  console.log('Main Error Stack:');
  console.log(caughtError.stack);  
  console.log('================================\n');

});

test("sends false to isString", () => {
  expect(() => isString(false, undefined, null, true)).toThrow();
});

test("sends string to isString", () => {
  expect(isString("string", undefined, null, true)).toBe(true);
});

test("sends string to isString with empty check", () => {
  expect(isString("string", '!0', null, true)).toBe(true);
});

test("sends number to isString with empty check", () => {
  expect(() => isString(123, '!0', null, true)).toThrow();
});

test("sends number to isString with >2 check", () => {
  expect(() => isString(123, '>', 2, true)).toThrow();
});

test("sends number to isString with >4 check", () => {
  expect(() => isString(123, '>', 4, true)).toThrow();
});

test("sends number to isString with >=3 check", () => {
  expect(() => isString(123, '>=', 3, true)).toThrow();
});

test("sends number to isString with >=4 check", () => {
  expect(() => isString(123, '>=', 4, true)).toThrow();
});

test("sends number to isString with <=4 check", () => {
  expect(() => isString(123, '<=', 4, true)).toThrow();
});

test("sends number to isString with != check", () => {
  expect(() => isString(123, '!=', 4, true)).toThrow();
});

test("sends number to isString with 0 check", () => {
  expect(() => isString(123, '0', null, true)).toThrow();
});

test("sends positive even integer to isString", () => {
  expect(() => isString(2, undefined, null, true)).toThrow();
});

test("sends positive odd integer to isString", () => {
  expect(() => isString(1, undefined, null, true)).toThrow();
});

test("sends zero to isString", () => {
  expect(() => isString(0, undefined, null, true)).toThrow();
});

test("sends positive float to isString", () => {
  expect(() => isString(1.1, undefined, null, true)).toThrow();
});

test("sends negative odd integer to isString", () => {
  expect(() => isString(-1, undefined, null, true)).toThrow();
});

test("sends negative even integer to isString", () => {
  expect(() => isString(-2, undefined, null, true)).toThrow();
});

test("sends negative float to isString", () => {
  expect(() => isString(-1.1, undefined, null, true)).toThrow();
});

test("sends object to isString", () => {
  expect(() => isString({}, undefined, null, true)).toThrow();
});

test("sends empty array to isString", () => {
  expect(() => isString([], undefined, null, true)).toThrow();
});

test("sends array of 1 integer to isString", () => {
  expect(() => isString([2], undefined, null, true)).toThrow();
});

test("sends array of 2 integers to isString", () => {
  expect(() => isString([2,1], undefined, null, true)).toThrow();
});

test("sends array of 1 integer to isString", () => {
  expect(() => isString([2.1], undefined, null, true)).toThrow();
});

test("sends array of 2 integers to isString", () => {
  expect(() => isString([2.1,1.1], undefined, null, true)).toThrow();
});

test("sends array to isString", () => {
  expect(() => isString(["white", "grey", "black"], undefined, null, true)).toThrow();
});

test("sends array to isString with empty check", () => {
  expect(() => isString(["white", "grey", "black"], '!empty', null, true)).toThrow();
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

test("sends json to isString", () => {
  expect(isString(json, undefined, null, true)).toBe(true);
});

test("sends json to isString with empty check", () => {
  expect(isString(json, '!0', null, true)).toBe(true);
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

test("sends invalid json to isString", () => {
  expect(isString(invalidjson, undefined, null, true)).toBe(true);
});

test("sends invalid json to isString with empty check", () => {
  expect(isString(invalidjson, '!0', null, true)).toBe(true);
});

function testFunction() {
  console.log("function");
}

test("sends function to isString", () => {
  expect(() => isString(testFunction, undefined, null, true)).toThrow();
});

const para = document.createElement("p");

test("sends htmlElement to isString", () => {
  expect(() => isString(para, undefined, null, true)).toThrow();
});

const node = document.createTextNode("new node");

test("sends node to isString", () => {
  expect(() => isString(node, undefined, null, true)).toThrow();
});

test("sends regex to isString", () => {
  expect(() => isString(/ab+c/i, undefined, null, true)).toThrow();
});
