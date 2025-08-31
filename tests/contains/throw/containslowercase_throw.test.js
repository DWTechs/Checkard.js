import { containsLowerCase } from "../../../dist/ch";

describe("containsLowerCase throwErr behavior", () => {
  it("throws error when string with no lowercase letters fails requirement", () => {
    expect(() => containsLowerCase("HELLO", true)).toThrow();
  });

  it("throws error when string with only uppercase letters fails requirement", () => {
    expect(() => containsLowerCase("ABCDEFG", true)).toThrow();
  });

  it("throws error when string with only numbers fails requirement", () => {
    expect(() => containsLowerCase("123456", true)).toThrow();
  });

  it("throws error when string with only special characters fails requirement", () => {
    expect(() => containsLowerCase("!@#$%^", true)).toThrow();
  });

  it("throws error when empty string fails requirement", () => {
    expect(() => containsLowerCase("", true)).toThrow();
  });

  it("throws error when string with spaces only fails requirement", () => {
    expect(() => containsLowerCase("   ", true)).toThrow();
  });

  it("throws error when string with mixed uppercase and numbers fails requirement", () => {
    expect(() => containsLowerCase("ABC123", true)).toThrow();
  });

  it("throws error when string with uppercase and special chars fails requirement", () => {
    expect(() => containsLowerCase("HELLO!", true)).toThrow();
  });
});