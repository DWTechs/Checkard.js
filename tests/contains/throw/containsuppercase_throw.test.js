import { containsUpperCase } from "../../../dist/ch";

describe("containsUpperCase throwErr behavior", () => {
  it("throws error when string with no uppercase letters fails requirement", () => {
    expect(() => containsUpperCase("hello", true)).toThrow();
  });

  it("throws error when string with only lowercase letters fails requirement", () => {
    expect(() => containsUpperCase("abcdefg", true)).toThrow();
  });

  it("throws error when string with only numbers fails requirement", () => {
    expect(() => containsUpperCase("123456", true)).toThrow();
  });

  it("throws error when string with only special characters fails requirement", () => {
    expect(() => containsUpperCase("!@#$%^", true)).toThrow();
  });

  it("throws error when empty string fails requirement", () => {
    expect(() => containsUpperCase("", true)).toThrow();
  });

  it("throws error when string with spaces only fails requirement", () => {
    expect(() => containsUpperCase("   ", true)).toThrow();
  });

  it("throws error when string with mixed lowercase and numbers fails requirement", () => {
    expect(() => containsUpperCase("abc123", true)).toThrow();
  });

  it("throws error when string with lowercase and special chars fails requirement", () => {
    expect(() => containsUpperCase("hello!", true)).toThrow();
  });
});