import { isAnsiEscapeCode } from "../../dist/ch";

test("sends NaN to isAnsiEscapeCode", () => {
  expect(isAnsiEscapeCode(Number.NaN)).toBe(false);
});

test("sends null to isAnsiEscapeCode", () => {
  expect(isAnsiEscapeCode(null)).toBe(false);
});

test("sends undefined to isAnsiEscapeCode", () => {
  expect(isAnsiEscapeCode(undefined)).toBe(false);
});

const s1 = Symbol();
test("sends symbol to isAnsiEscapeCode", () => {
  expect(isAnsiEscapeCode(s1)).toBe(false);
});

test("sends true to isAnsiEscapeCode", () => {
  expect(isAnsiEscapeCode(true)).toBe(false);
});

test("sends false to isAnsiEscapeCode", () => {
  expect(isAnsiEscapeCode(false)).toBe(false);
});

test("sends plain string to isAnsiEscapeCode", () => {
  expect(isAnsiEscapeCode("string")).toBe(false);
});

test("sends empty string to isAnsiEscapeCode", () => {
  expect(isAnsiEscapeCode("")).toBe(false);
});

test("sends positive even integer to isAnsiEscapeCode", () => {
  expect(isAnsiEscapeCode(2)).toBe(false);
});

test("sends positive odd integer to isAnsiEscapeCode", () => {
  expect(isAnsiEscapeCode(1)).toBe(false);
});

test("sends zero to isAnsiEscapeCode", () => {
  expect(isAnsiEscapeCode(0)).toBe(false);
});

test("sends positive float to isAnsiEscapeCode", () => {
  expect(isAnsiEscapeCode(1.1)).toBe(false);
});

test("sends negative odd integer to isAnsiEscapeCode", () => {
  expect(isAnsiEscapeCode(-1)).toBe(false);
});

test("sends negative even integer to isAnsiEscapeCode", () => {
  expect(isAnsiEscapeCode(-2)).toBe(false);
});

test("sends negative float to isAnsiEscapeCode", () => {
  expect(isAnsiEscapeCode(-1.1)).toBe(false);
});

test("sends empty object to isAnsiEscapeCode", () => {
  expect(isAnsiEscapeCode({})).toBe(false);
});

test("sends empty array to isAnsiEscapeCode", () => {
  expect(isAnsiEscapeCode([])).toBe(false);
});

test("sends object to isAnsiEscapeCode", () => {
  expect(isAnsiEscapeCode({toto: 3})).toBe(false);
});

test("sends array to isAnsiEscapeCode", () => {
  expect(isAnsiEscapeCode(['toto', 3])).toBe(false);
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

test("sends json to isAnsiEscapeCode", () => {
  expect(isAnsiEscapeCode(json)).toBe(false);
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

test("sends invalid json to isAnsiEscapeCode", () => {
  expect(isAnsiEscapeCode(invalidjson)).toBe(false);
});

// Invalid ANSI escape codes
test("sends incomplete ANSI escape code to isAnsiEscapeCode", () => {
  expect(isAnsiEscapeCode("\\x1b[")).toBe(false);
});

test("sends ANSI escape code without closing m to isAnsiEscapeCode", () => {
  expect(isAnsiEscapeCode("\\x1b[31")).toBe(false);
});

test("sends ANSI escape code without opening bracket to isAnsiEscapeCode", () => {
  expect(isAnsiEscapeCode("\\x1b31m")).toBe(false);
});

test("sends ANSI escape code with invalid characters to isAnsiEscapeCode", () => {
  expect(isAnsiEscapeCode("\\x1b[abc]m")).toBe(false);
});

test("sends ANSI escape code with spaces to isAnsiEscapeCode", () => {
  expect(isAnsiEscapeCode("\\x1b[ 31 ]m")).toBe(false);
});

test("sends ANSI escape code without escape character to isAnsiEscapeCode", () => {
  expect(isAnsiEscapeCode("[31m")).toBe(false);
});

test("sends ANSI escape code with wrong escape sequence to isAnsiEscapeCode", () => {
  expect(isAnsiEscapeCode("\\x1a[31m")).toBe(false);
});

test("sends ANSI escape code with trailing characters to isAnsiEscapeCode", () => {
  expect(isAnsiEscapeCode("\\x1b[31mhello")).toBe(false);
});

test("sends ANSI escape code with leading characters to isAnsiEscapeCode", () => {
  expect(isAnsiEscapeCode("hello\\x1b[31m")).toBe(false);
});

test("sends ANSI escape code with double semicolon to isAnsiEscapeCode", () => {
  expect(isAnsiEscapeCode("\\x1b[1;;32m")).toBe(false);
});

test("sends ANSI escape code ending with semicolon to isAnsiEscapeCode", () => {
  expect(isAnsiEscapeCode("\\x1b[31;m")).toBe(false);
});

test("sends ANSI escape code starting with semicolon to isAnsiEscapeCode", () => {
  expect(isAnsiEscapeCode("\\x1b[;31m")).toBe(false);
});

// Valid ANSI escape codes
test("sends valid ANSI reset code to isAnsiEscapeCode", () => {
  expect(isAnsiEscapeCode("\\x1b[0m")).toBe(true);
});

test("sends valid ANSI red color code to isAnsiEscapeCode", () => {
  expect(isAnsiEscapeCode("\\x1b[31m")).toBe(true);
});

test("sends valid ANSI green color code to isAnsiEscapeCode", () => {
  expect(isAnsiEscapeCode("\\x1b[32m")).toBe(true);
});

test("sends valid ANSI yellow color code to isAnsiEscapeCode", () => {
  expect(isAnsiEscapeCode("\\x1b[33m")).toBe(true);
});

test("sends valid ANSI blue color code to isAnsiEscapeCode", () => {
  expect(isAnsiEscapeCode("\\x1b[34m")).toBe(true);
});

test("sends valid ANSI magenta color code to isAnsiEscapeCode", () => {
  expect(isAnsiEscapeCode("\\x1b[35m")).toBe(true);
});

test("sends valid ANSI cyan color code to isAnsiEscapeCode", () => {
  expect(isAnsiEscapeCode("\\x1b[36m")).toBe(true);
});

test("sends valid ANSI white color code to isAnsiEscapeCode", () => {
  expect(isAnsiEscapeCode("\\x1b[37m")).toBe(true);
});

test("sends valid ANSI bold code to isAnsiEscapeCode", () => {
  expect(isAnsiEscapeCode("\\x1b[1m")).toBe(true);
});

test("sends valid ANSI dim code to isAnsiEscapeCode", () => {
  expect(isAnsiEscapeCode("\\x1b[2m")).toBe(true);
});

test("sends valid ANSI italic code to isAnsiEscapeCode", () => {
  expect(isAnsiEscapeCode("\\x1b[3m")).toBe(true);
});

test("sends valid ANSI underline code to isAnsiEscapeCode", () => {
  expect(isAnsiEscapeCode("\\x1b[4m")).toBe(true);
});

test("sends valid ANSI bold green code to isAnsiEscapeCode", () => {
  expect(isAnsiEscapeCode("\\x1b[1;32m")).toBe(true);
});

test("sends valid ANSI bold red code to isAnsiEscapeCode", () => {
  expect(isAnsiEscapeCode("\\x1b[1;31m")).toBe(true);
});

test("sends valid ANSI underline yellow code to isAnsiEscapeCode", () => {
  expect(isAnsiEscapeCode("\\x1b[4;33m")).toBe(true);
});

test("sends valid ANSI multiple attributes code to isAnsiEscapeCode", () => {
  expect(isAnsiEscapeCode("\\x1b[1;4;31m")).toBe(true);
});

test("sends valid ANSI background red code to isAnsiEscapeCode", () => {
  expect(isAnsiEscapeCode("\\x1b[41m")).toBe(true);
});

test("sends valid ANSI background green code to isAnsiEscapeCode", () => {
  expect(isAnsiEscapeCode("\\x1b[42m")).toBe(true);
});

test("sends valid ANSI 256 color code to isAnsiEscapeCode", () => {
  expect(isAnsiEscapeCode("\\x1b[38;5;208m")).toBe(true);
});

test("sends valid ANSI RGB color code to isAnsiEscapeCode", () => {
  expect(isAnsiEscapeCode("\\x1b[38;2;255;128;0m")).toBe(true);
});

test("sends valid ANSI bright black code to isAnsiEscapeCode", () => {
  expect(isAnsiEscapeCode("\\x1b[90m")).toBe(true);
});

test("sends valid ANSI bright white code to isAnsiEscapeCode", () => {
  expect(isAnsiEscapeCode("\\x1b[97m")).toBe(true);
});

test("sends valid ANSI reverse code to isAnsiEscapeCode", () => {
  expect(isAnsiEscapeCode("\\x1b[7m")).toBe(true);
});

test("sends valid ANSI hidden code to isAnsiEscapeCode", () => {
  expect(isAnsiEscapeCode("\\x1b[8m")).toBe(true);
});

test("sends valid ANSI strikethrough code to isAnsiEscapeCode", () => {
  expect(isAnsiEscapeCode("\\x1b[9m")).toBe(true);
});
