import { containsSpecialCharacter } from "../../../dist/ch";

describe("containsSpecialCharacter throwErr behavior", () => {
  it("throws error when string with no special characters fails requirement", () => {
    expect(() => containsSpecialCharacter("hello", true)).toThrow();
  });

  it("throws error when string with only letters fails requirement", () => {
    expect(() => containsSpecialCharacter("abcDEF", true)).toThrow();
  });

  it("throws error when string with only numbers fails requirement", () => {
    expect(() => containsSpecialCharacter("123456", true)).toThrow();
  });

  it("throws error when string with only letters and numbers fails requirement", () => {
    expect(() => containsSpecialCharacter("abc123DEF", true)).toThrow();
  });

  it("throws error when empty string fails requirement", () => {
    expect(() => containsSpecialCharacter("", true)).toThrow();
  });

  it("throws error when string with spaces only fails requirement", () => {
    expect(() => containsSpecialCharacter("   ", true)).toThrow();
  });

  it("throws error when alphanumeric string fails requirement", () => {
    expect(() => containsSpecialCharacter("Password123", true)).toThrow();
  });

  it("throws error when simple word fails requirement", () => {
    expect(() => containsSpecialCharacter("simple", true)).toThrow();
  });
});