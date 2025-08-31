import { containsNumber } from "../../../dist/ch";

describe("containsNumber throwErr behavior", () => {
  it("throws error when string with no digits fails requirement", () => {
    expect(() => containsNumber("hello", 1, null, true)).toThrow();
  });

  it("throws error when string with only letters fails requirement", () => {
    expect(() => containsNumber("abcDEF", 1, null, true)).toThrow();
  });

  it("throws error when string with only special characters fails requirement", () => {
    expect(() => containsNumber("!@#$%^", 1, null, true)).toThrow();
  });

  it("throws error when empty string fails requirement", () => {
    expect(() => containsNumber("", 1, null, true)).toThrow();
  });

  it("throws error when string with spaces only fails requirement", () => {
    expect(() => containsNumber("   ", 1, null, true)).toThrow();
  });

  it("throws error when string has fewer digits than minimum required", () => {
    expect(() => containsNumber("abc1def", 2, null, true)).toThrow();
  });

  it("throws error when string has more digits than maximum allowed", () => {
    expect(() => containsNumber("a1b2c3d4e5", 1, 3, true)).toThrow();
  });

  it("throws error when string with no digits fails minimum requirement", () => {
    expect(() => containsNumber("password", 2, 5, true)).toThrow();
  });

  it("throws error when string has insufficient digits for minimum", () => {
    expect(() => containsNumber("pass1word", 3, 10, true)).toThrow();
  });

  it("throws error when string exceeds maximum digit count", () => {
    expect(() => containsNumber("1234567890", 1, 5, true)).toThrow();
  });
});