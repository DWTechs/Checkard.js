import { isString, isValidPassword } from "../../dist/ch";

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

test("sends empty string to isValidPassword", () => {
  expect(isValidPassword("")).toBe(false);
});

test("sends empty string to isValidPassword with empty check", () => {
  expect(isValidPassword("", true)).toBe(false);
});

test("sends string to isValidPassword", () => {
  expect(isValidPassword("string")).toBe(false);
});

test("sends string to isValidPassword with empty check", () => {
  expect(isValidPassword("string", true)).toBe(false);
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

test("sends json to isValidPassword", () => {
  expect(isValidPassword(json)).toBe(false);
});

test("sends json to isValidPassword with empty check", () => {
  expect(isValidPassword(json, true)).toBe(false);
});

const invalidjson = `{;
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
