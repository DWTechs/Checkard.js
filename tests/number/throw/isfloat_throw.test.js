import { isFloat } from "../../../dist/ch";

describe("isFloat throwErr behavior", () => {
  it("throws error when NaN is not a float", () => {
    expect(() => isFloat(NaN, true, true)).toThrow();
  });

  it("throws error when null is not a float", () => {
    expect(() => isFloat(null, true, true)).toThrow();
  });

  it("throws error when undefined is not a float", () => {
    expect(() => isFloat(undefined, true, true)).toThrow();
  });

  it("throws error when boolean true is not a float", () => {
    expect(() => isFloat(true, true, true)).toThrow();
  });

  it("throws error when boolean false is not a float", () => {
    expect(() => isFloat(false, true, true)).toThrow();
  });

  it("throws error when string is not a float", () => {
    expect(() => isFloat("string", true, true)).toThrow();
  });

  it("throws error when integer is not a float", () => {
    expect(() => isFloat(42, true, true)).toThrow();
  });

  it("throws error when object is not a float", () => {
    expect(() => isFloat({}, true, true)).toThrow();
  });

  it("throws error when array is not a float", () => {
    expect(() => isFloat([1, 2, 3], true, true)).toThrow();
  });

  it("throws error when symbol is not a float", () => {
    expect(() => isFloat(Symbol("test"), true, true)).toThrow();
  });
});