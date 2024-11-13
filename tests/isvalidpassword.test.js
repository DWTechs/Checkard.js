import { isValidPassword } from "../dist/ch";

const options = {
  lowerCase: true,
  upperCase: true,
  number: true,
  specialCharacter: true,
  minLength: 12,
  maxLength: 64,
};
const valid = "Coco!astic0t";
const missingSpecialChar = "Cocolastic0t";
const missingNumber = "Coco!asticot";
const missingUpperCase = "coco!astic0t";
const missingLowerCase = "COCO!ASTIC0T";
const short = "Coco!astic0";
const long = "Coco!astic0tCoco!astic0tCoco!astic0tCoco!astic0tCoco!astic0tCoco!";


test("sends valid to isValidPassword", () => {
  expect(isValidPassword(valid, options)).toBe(true);
});

test("sends missingSpecialChar to isValidPassword", () => {
  expect(isValidPassword(missingSpecialChar, options)).toBe(false);
});

test("sends missingNumber to isValidPassword", () => {
  expect(isValidPassword(missingNumber, options)).toBe(false);
});

test("sends missingUpperCase to isValidPassword", () => {
  expect(isValidPassword(missingUpperCase, options)).toBe(false);
});

test("sends missingLowerCase to isValidPassword", () => {
  expect(isValidPassword(missingLowerCase, options)).toBe(false);
});

test("sends short to isValidPassword", () => {
  expect(isValidPassword(short, options)).toBe(false);
});

test("sends long to isValidPassword", () => {
  expect(isValidPassword(long, options)).toBe(false);
});

test("sends valid to isValidPassword with default options", () => {
  expect(isValidPassword(valid)).toBe(true);
});

test("sends missingSpecialChar to isValidPassword with default options", () => {
  expect(isValidPassword(missingSpecialChar)).toBe(false);
});

test("sends missingNumber to isValidPassword with default options", () => {
  expect(isValidPassword(missingNumber)).toBe(false);
});

test("sends missingUpperCase to isValidPassword with default options", () => {
  expect(isValidPassword(missingUpperCase)).toBe(false);
});

test("sends missingLowerCase to isValidPassword with default options", () => {
  expect(isValidPassword(missingLowerCase)).toBe(false);
});

test("sends short to isValidPassword with default options", () => {
  expect(isValidPassword(short)).toBe(false);
});

test("sends long to isValidPassword with default options", () => {
  expect(isValidPassword(long)).toBe(false);
});


test("sends null to isValidPassword", () => {
  expect(isValidPassword(null)).toBe(false);
});

test("sends undefined to isValidPassword", () => {
  expect(isValidPassword(undefined)).toBe(false);
});

const s1 = Symbol();
test("sends symbol to isValidPassword", () => {
  expect(isValidPassword(s1)).toBe(false);
});

test("sends true to isValidPassword", () => {
  expect(isValidPassword(true)).toBe(false);
});

test("sends empty string to isValidPassword", () => {
  expect(isValidPassword("")).toBe(false);
});

test("sends empty string to isValidPassword with empty check", () => {
  expect(isValidPassword("", true)).toBe(false);
});

test("sends false to isValidPassword", () => {
  expect(isValidPassword(false)).toBe(false);
});

test("sends string to isValidPassword", () => {
  expect(isValidPassword("string")).toBe(false);
});

test("sends string to isValidPassword with empty check", () => {
  expect(isValidPassword("string", true)).toBe(false);
});

test("sends positive even integer to isValidPassword", () => {
  expect(isValidPassword(2)).toBe(false);
});

test("sends positive odd integer to isValidPassword", () => {
  expect(isValidPassword(1)).toBe(false);
});

test("sends zero to isValidPassword", () => {
  expect(isValidPassword(0)).toBe(false);
});

test("sends positive float to isValidPassword", () => {
  expect(isValidPassword(1.1)).toBe(false);
});

test("sends negative odd integer to isValidPassword", () => {
  expect(isValidPassword(-1)).toBe(false);
});

test("sends negative even integer to isValidPassword", () => {
  expect(isValidPassword(-2)).toBe(false);
});

test("sends negative float to isValidPassword", () => {
  expect(isValidPassword(-1.1)).toBe(false);
});

test("sends object to isValidPassword", () => {
  expect(isValidPassword({})).toBe(false);
});

test("sends empty array to isValidPassword", () => {
  expect(isValidPassword([])).toBe(false);
});

test("sends array of 1 integer to isValidPassword", () => {
  expect(isValidPassword([2])).toBe(false);
});

test("sends array of 2 integers to isValidPassword", () => {
  expect(isValidPassword([2,1])).toBe(false);
});

test("sends array of 1 integer to isValidPassword", () => {
  expect(isValidPassword([2.1])).toBe(false);
});

test("sends array of 2 integers to isValidPassword", () => {
  expect(isValidPassword([2.1,1.1])).toBe(false);
});

test("sends array to isValidPassword", () => {
  expect(isValidPassword(["white", "grey", "black"])).toBe(false);
});

test("sends array to isValidPassword with empty check", () => {
  expect(isValidPassword(["white", "grey", "black"], true)).toBe(false);
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

test("sends json to isValidPassword", () => {
  expect(isValidPassword(json)).toBe(false);
});

test("sends json to isValidPassword with empty check", () => {
  expect(isValidPassword(json, true)).toBe(false);
});

var invalidjson = `{;
  "actor: {
    "name": "Tom Cruise",
    "age": 56
    "Born At": "Syracuse, NY",
    "Birthdate": "July 3 1962",
    "photo": "https://jsonformatter.org/img/tom-cruise.jpg"
  }
}`;

test("sends invalid json to isValidPassword", () => {
  expect(isValidPassword(invalidjson)).toBe(false);
});

test("sends invalid json to isValidPassword with empty check", () => {
  expect(isValidPassword(invalidjson, false)).toBe(false);
});

function testFunction() {
  console.log("function");
}

test("sends function to isValidPassword", () => {
  expect(isValidPassword(testFunction)).toBe(false);
});

var para = document.createElement("p");

test("sends htmlElement to isValidPassword", () => {
  expect(isValidPassword(para)).toBe(false);
});

var node = document.createTextNode("new node");

test("sends node to isValidPassword", () => {
  expect(isValidPassword(node)).toBe(false);
});

test("sends regex to isValidPassword", () => {
  expect(isValidPassword(/ab+c/i)).toBe(false);
});
