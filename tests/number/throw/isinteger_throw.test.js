import { isInteger } from "../../../dist/ch";

describe("isInteger throwErr behavior", () => {
  it("throws error when NaN is not an integer", () => {
    expect(() => isInteger(NaN, true, true)).toThrow();
  });

  it("throws error when null is not an integer", () => {
    expect(() => isInteger(null, true, true)).toThrow();
  });

  it("throws error when undefined is not an integer", () => {
    expect(() => isInteger(undefined, true, true)).toThrow();
  });

  it("throws error when boolean true is not an integer", () => {
    expect(() => isInteger(true, true, true)).toThrow();
  });

  it("throws error when boolean false is not an integer", () => {
    expect(() => isInteger(false, true, true)).toThrow();
  });

  it("throws error when string is not an integer", () => {
    expect(() => isInteger("string", true, true)).toThrow();
  });

  it("throws error when float is not an integer", () => {
    expect(() => isInteger(3.14, true, true)).toThrow();
  });

  it("throws error when object is not an integer", () => {
    expect(() => isInteger({}, true, true)).toThrow();
  });

  it("throws error when array is not an integer", () => {
    expect(() => isInteger([1, 2, 3], true, true)).toThrow();
  });

  it("throws error when symbol is not an integer", () => {
    expect(() => isInteger(Symbol("test"), true, true)).toThrow();
  });
});