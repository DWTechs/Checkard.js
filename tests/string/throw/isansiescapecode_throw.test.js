import { isAnsiEscapeCode } from "../../../dist/ch";

describe("isAnsiEscapeCode throwErr behavior", () => {
  it("throws error when NaN is not a valid ANSI escape code", () => {
    expect(() => isAnsiEscapeCode(NaN, true)).toThrow();
  });

  it("throws error when null is not a valid ANSI escape code", () => {
    expect(() => isAnsiEscapeCode(null, true)).toThrow();
  });

  it("throws error when undefined is not a valid ANSI escape code", () => {
    expect(() => isAnsiEscapeCode(undefined, true)).toThrow();
  });

  it("throws error when boolean true is not a valid ANSI escape code", () => {
    expect(() => isAnsiEscapeCode(true, true)).toThrow();
  });

  it("throws error when boolean false is not a valid ANSI escape code", () => {
    expect(() => isAnsiEscapeCode(false, true)).toThrow();
  });

  it("throws error when number is not a valid ANSI escape code", () => {
    expect(() => isAnsiEscapeCode(42, true)).toThrow();
  });

  it("throws error when object is not a valid ANSI escape code", () => {
    expect(() => isAnsiEscapeCode({}, true)).toThrow();
  });

  it("throws error when array is not a valid ANSI escape code", () => {
    expect(() => isAnsiEscapeCode([1, 2, 3], true)).toThrow();
  });

  it("throws error when symbol is not a valid ANSI escape code", () => {
    expect(() => isAnsiEscapeCode(Symbol("test"), true)).toThrow();
  });

  it("throws error when empty string is not a valid ANSI escape code", () => {
    expect(() => isAnsiEscapeCode("", true)).toThrow();
  });

  it("throws error when plain string is not a valid ANSI escape code", () => {
    expect(() => isAnsiEscapeCode("notansi", true)).toThrow();
  });

  it("throws error when incomplete ANSI escape code is not valid", () => {
    expect(() => isAnsiEscapeCode("\x1b[", true)).toThrow();
  });

  it("throws error when ANSI escape code without closing m is not valid", () => {
    expect(() => isAnsiEscapeCode("\x1b[31", true)).toThrow();
  });

  it("throws error when ANSI escape code without opening bracket is not valid", () => {
    expect(() => isAnsiEscapeCode("\x1b31m", true)).toThrow();
  });

  it("throws error when ANSI escape code with invalid characters is not valid", () => {
    expect(() => isAnsiEscapeCode("\x1b[abc]m", true)).toThrow();
  });

  it("throws error when ANSI escape code with spaces is not valid", () => {
    expect(() => isAnsiEscapeCode("\x1b[ 31 ]m", true)).toThrow();
  });

  it("throws error when string without escape character is not valid", () => {
    expect(() => isAnsiEscapeCode("[31m", true)).toThrow();
  });

  it("throws error when ANSI escape code with trailing characters is not valid", () => {
    expect(() => isAnsiEscapeCode("\x1b[31mhello", true)).toThrow();
  });

  it("throws error when ANSI escape code with leading characters is not valid", () => {
    expect(() => isAnsiEscapeCode("hello\x1b[31m", true)).toThrow();
  });

  it("throws error when ANSI escape code with double semicolon is not valid", () => {
    expect(() => isAnsiEscapeCode("\x1b[1;;32m", true)).toThrow();
  });

  it("throws error when ANSI escape code ending with semicolon is not valid", () => {
    expect(() => isAnsiEscapeCode("\x1b[31;m", true)).toThrow();
  });

  it("throws error when ANSI escape code starting with semicolon is not valid", () => {
    expect(() => isAnsiEscapeCode("\x1b[;31m", true)).toThrow();
  });

  it("does not throw error when valid ANSI reset code is provided", () => {
    expect(() => isAnsiEscapeCode("\x1b[0m", true)).not.toThrow();
  });

  it("does not throw error when valid ANSI red color code is provided", () => {
    expect(() => isAnsiEscapeCode("\x1b[31m", true)).not.toThrow();
  });

  it("does not throw error when valid ANSI bold green code is provided", () => {
    expect(() => isAnsiEscapeCode("\x1b[1;32m", true)).not.toThrow();
  });

  it("does not throw error when valid ANSI multiple attributes code is provided", () => {
    expect(() => isAnsiEscapeCode("\x1b[1;4;31m", true)).not.toThrow();
  });

  it("does not throw error when valid ANSI 256 color code is provided", () => {
    expect(() => isAnsiEscapeCode("\x1b[38;5;208m", true)).not.toThrow();
  });

  it("does not throw error when valid ANSI RGB color code is provided", () => {
    expect(() => isAnsiEscapeCode("\x1b[38;2;255;128;0m", true)).not.toThrow();
  });

  it("does not throw error for a real ESC byte (\\u001b) ANSI code", () => {
    expect(() => isAnsiEscapeCode("\u001b[31m", true)).not.toThrow();
  });

  it("throws error for literal backslash-x1b text (not the real ESC byte)", () => {
    expect(() => isAnsiEscapeCode("\\x1b[31m", true)).toThrow();
  });
});
