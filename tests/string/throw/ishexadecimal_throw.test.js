import { isHexadecimal } from "../../../dist/ch";

describe("isHexadecimal throwErr behavior", () => {
  it("throws error when NaN is not a valid hexadecimal", () => {
    expect(() => isHexadecimal(NaN, true)).toThrow();
  });

  it("throws error when null is not a valid hexadecimal", () => {
    expect(() => isHexadecimal(null, true)).toThrow();
  });

  it("throws error when undefined is not a valid hexadecimal", () => {
    expect(() => isHexadecimal(undefined, true)).toThrow();
  });

  it("throws error when boolean true is not a valid hexadecimal", () => {
    expect(() => isHexadecimal(true, true)).toThrow();
  });

  it("throws error when boolean false is not a valid hexadecimal", () => {
    expect(() => isHexadecimal(false, true)).toThrow();
  });

  it("throws error when number is not a valid hexadecimal", () => {
    expect(() => isHexadecimal(42, true)).toThrow();
  });

  it("throws error when object is not a valid hexadecimal", () => {
    expect(() => isHexadecimal({}, true)).toThrow();
  });

  it("throws error when array is not a valid hexadecimal", () => {
    expect(() => isHexadecimal([1, 2, 3], true)).toThrow();
  });

  it("throws error when symbol is not a valid hexadecimal", () => {
    expect(() => isHexadecimal(Symbol("test"), true)).toThrow();
  });

  it("throws error when empty string is not a valid hexadecimal", () => {
    expect(() => isHexadecimal("", true)).toThrow();
  });

  it("throws error when string with invalid hex characters is not valid", () => {
    expect(() => isHexadecimal("GHIJ", true)).toThrow();
  });

  it("throws error when string with spaces is not valid hex", () => {
    expect(() => isHexadecimal("A B C", true)).toThrow();
  });

  it("throws error when string with special characters is not valid hex", () => {
    expect(() => isHexadecimal("A!B@", true)).toThrow();
  });
});