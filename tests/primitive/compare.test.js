import { isString, isNumber } from "../../dist/ch";

// Additional tests to improve compare function coverage

describe("isString - Additional comparison coverage", () => {
  
  // Test invalid comparators to cover error path in compare function
  test("isString with invalid comparator should throw when throwErr=true", () => {
    expect(() => isString("test", "invalid", 1, true)).toThrow("Comparison failed because of an invalid comparator : 'invalid'");
  });

  test("isString with invalid comparator should return false when throwErr=false", () => {
    expect(isString("test", "invalid", 1, false)).toBe(false);
  });

  // Test binary comparators missing second value
  test("isString with '>' comparator missing second value should throw when throwErr=true", () => {
    expect(() => isString("test", ">", null, true)).toThrow("Comparison failed because Comparator '>' requires a second value");
  });

  test("isString with '<' comparator missing second value should return false when throwErr=false", () => {
    expect(isString("test", "<", null, false)).toBe(false);
  });

  test("isString with '=' comparator missing second value should throw when throwErr=true", () => {
    expect(() => isString("test", "=", null, true)).toThrow("Comparison failed because Comparator '=' requires a second value");
  });

  test("isString with '>=' comparator missing second value should return false when throwErr=false", () => {
    expect(isString("test", ">=", null, false)).toBe(false);
  });

  test("isString with '<=' comparator missing second value should throw when throwErr=true", () => {
    expect(() => isString("test", "<=", null, true)).toThrow("Comparison failed because Comparator '<=' requires a second value");
  });

  test("isString with '!=' comparator missing second value should return false when throwErr=false", () => {
    expect(isString("test", "!=", null, false)).toBe(false);
  });

  // Test failed binary comparisons
  test("isString length comparison '>' that fails should throw when throwErr=true", () => {
    expect(() => isString("ab", ">", 5, true)).toThrow("Comparison failed because 2 > 5 returned false");
  });

  test("isString length comparison '<' that fails should return false when throwErr=false", () => {
    expect(isString("hello", "<", 3, false)).toBe(false);
  });

  test("isString length comparison '=' that fails should throw when throwErr=true", () => {
    expect(() => isString("test", "=", 10, true)).toThrow("Comparison failed because 4 = 10 returned false");
  });

  test("isString length comparison '>=' that fails should return false when throwErr=false", () => {
    expect(isString("hi", ">=", 5, false)).toBe(false);
  });

  test("isString length comparison '<=' that fails should throw when throwErr=true", () => {
    expect(() => isString("toolong", "<=", 3, true)).toThrow("Comparison failed because 7 <= 3 returned false");
  });

  test("isString length comparison '!=' that fails should return false when throwErr=false", () => {
    expect(isString("test", "!=", 4, false)).toBe(false);
  });

  // Test successful binary comparisons
  test("isString length comparison '>' that succeeds", () => {
    expect(isString("hello", ">", 3, true)).toBe(true);
  });

  test("isString length comparison '<' that succeeds", () => {
    expect(isString("hi", "<", 5, true)).toBe(true);
  });

  test("isString length comparison '=' that succeeds", () => {
    expect(isString("test", "=", 4, true)).toBe(true);
  });

  test("isString length comparison '>=' that succeeds", () => {
    expect(isString("hello", ">=", 5, true)).toBe(true);
  });

  test("isString length comparison '<=' that succeeds", () => {
    expect(isString("hi", "<=", 5, true)).toBe(true);
  });

  test("isString length comparison '!=' that succeeds", () => {
    expect(isString("test", "!=", 10, true)).toBe(true);
  });

  // Test failed unary comparisons
  test("isString with '!0' on empty string should throw when throwErr=true", () => {
    expect(() => isString("", "!0", null, true)).toThrow("Comparison failed because 0 is not '!0'");
  });

  test("isString with '0' on non-empty string should throw when throwErr=true", () => {
    expect(() => isString("test", "0", null, true)).toThrow("Comparison failed because 4 is not '0'");
  });

  // Test successful unary comparisons
  test("isString with '!0' on non-empty string should succeed", () => {
    expect(isString("test", "!0", null, true)).toBe(true);
  });

  test("isString with '0' on empty string should succeed", () => {
    expect(isString("", "0", null, true)).toBe(true);
  });
});

describe("isNumber - Additional comparison coverage", () => {
  
  // Test invalid comparators
  test("isNumber with invalid comparator should throw when throwErr=true", () => {
    expect(() => isNumber(5, true, "invalid", 1, true)).toThrow("Comparison failed because of an invalid comparator : 'invalid'");
  });

  test("isNumber with invalid comparator should return false when throwErr=false", () => {
    expect(isNumber(5, true, "invalid", 1, false)).toBe(false);
  });

  // Test binary comparators missing second value
  test("isNumber with '>' comparator missing second value should throw when throwErr=true", () => {
    expect(() => isNumber(5, true, ">", null, true)).toThrow("Comparison failed because Comparator '>' requires a second value");
  });

  test("isNumber with '<' comparator missing second value should return false when throwErr=false", () => {
    expect(isNumber(5, true, "<", null, false)).toBe(false);
  });

  // Test failed binary comparisons
  test("isNumber comparison '>' that fails should throw when throwErr=true", () => {
    expect(() => isNumber(3, true, ">", 5, true)).toThrow("Comparison failed because 3 > 5 returned false");
  });

  test("isNumber comparison '<' that fails should return false when throwErr=false", () => {
    expect(isNumber(10, true, "<", 5, false)).toBe(false);
  });

  test("isNumber comparison '=' that fails should throw when throwErr=true", () => {
    expect(() => isNumber(5, true, "=", 10, true)).toThrow("Comparison failed because 5 = 10 returned false");
  });

  // Test successful binary comparisons
  test("isNumber comparison '>' that succeeds", () => {
    expect(isNumber(10, true, ">", 5, true)).toBe(true);
  });

  test("isNumber comparison '<' that succeeds", () => {
    expect(isNumber(3, true, "<", 5, true)).toBe(true);
  });

  test("isNumber comparison '=' that succeeds", () => {
    expect(isNumber(5, true, "=", 5, true)).toBe(true);
  });

  // Test failed unary comparisons
  test("isNumber with '!0' on zero should throw when throwErr=true", () => {
    expect(() => isNumber(0, true, "!0", null, true)).toThrow("Comparison failed because 0 is not '!0'");
  });

  test("isNumber with '0' on non-zero should throw when throwErr=true", () => {
    expect(() => isNumber(5, true, "0", null, true)).toThrow("Comparison failed because 5 is not '0'");
  });

  // Test successful unary comparisons
  test("isNumber with '!0' on non-zero should succeed", () => {
    expect(isNumber(5, true, "!0", null, true)).toBe(true);
  });

  test("isNumber with '0' on zero should succeed", () => {
    expect(isNumber(0, true, "0", null, true)).toBe(true);
  });

  // Test with type=false scenarios for additional coverage
  test("isNumber with string '5' and type=false, comparison '>' that succeeds", () => {
    expect(isNumber("5", false, ">", 3, true)).toBe(true);
  });

  test("isNumber with string '2' and type=false, comparison '<' that fails should throw", () => {
    expect(() => isNumber("2", false, "<", 1, true)).toThrow("Comparison failed because 2 < 1 returned false");
  });
});