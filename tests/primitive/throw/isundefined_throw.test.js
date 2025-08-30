import { isUndefined } from "../../../dist/ch";

describe("isUndefined throwErr behavior", () => {
  it("throws error when NaN is not undefined", () => {
    expect(() => isUndefined(NaN, true)).toThrow();
  });

  it("throws error when null is not undefined", () => {
    expect(() => isUndefined(null, true)).toThrow();
  });

  it("throws error when boolean true is not undefined", () => {
    expect(() => isUndefined(true, true)).toThrow();
  });

  it("throws error when boolean false is not undefined", () => {
    expect(() => isUndefined(false, true)).toThrow();
  });

  it("throws error when string is not undefined", () => {
    expect(() => isUndefined("string", true)).toThrow();
  });

  it("throws error when positive integer is not undefined", () => {
    expect(() => isUndefined(42, true)).toThrow();
  });

  it("throws error when negative integer is not undefined", () => {
    expect(() => isUndefined(-42, true)).toThrow();
  });

  it("throws error when float is not undefined", () => {
    expect(() => isUndefined(3.14, true)).toThrow();
  });

  it("throws error when object is not undefined", () => {
    expect(() => isUndefined({}, true)).toThrow();
  });

  it("throws error when array is not undefined", () => {
    expect(() => isUndefined([1, 2, 3], true)).toThrow();
  });

  it("throws error when symbol is not undefined", () => {
    expect(() => isUndefined(Symbol("test"), true)).toThrow();
  });
});