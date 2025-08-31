import { isStringOfLength } from "../../../dist/ch";

describe("isStringOfLength throwErr behavior", () => {
  it("throws error when NaN is not a string", () => {
    expect(() => isStringOfLength(NaN, 0, 10, true)).toThrow();
  });

  it("throws error when null is not a string", () => {
    expect(() => isStringOfLength(null, 0, 10, true)).toThrow();
  });

  it("throws error when undefined is not a string", () => {
    expect(() => isStringOfLength(undefined, 0, 10, true)).toThrow();
  });

  it("throws error when boolean true is not a string", () => {
    expect(() => isStringOfLength(true, 0, 10, true)).toThrow();
  });

  it("throws error when boolean false is not a string", () => {
    expect(() => isStringOfLength(false, 0, 10, true)).toThrow();
  });

  it("throws error when number is not a string", () => {
    expect(() => isStringOfLength(42, 0, 10, true)).toThrow();
  });

  it("throws error when object is not a string", () => {
    expect(() => isStringOfLength({}, 0, 10, true)).toThrow();
  });

  it("throws error when array is not a string", () => {
    expect(() => isStringOfLength([1, 2, 3], 0, 10, true)).toThrow();
  });

  it("throws error when symbol is not a string", () => {
    expect(() => isStringOfLength(Symbol("test"), 0, 10, true)).toThrow();
  });

  it("throws error when string is too short", () => {
    expect(() => isStringOfLength("hi", 5, 10, true)).toThrow();
  });

  it("throws error when string is too long", () => {
    expect(() => isStringOfLength("this is a very long string", 0, 5, true)).toThrow();
  });

  it("throws error when empty string is below minimum length", () => {
    expect(() => isStringOfLength("", 1, 10, true)).toThrow();
  });
});