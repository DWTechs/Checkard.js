import { isPositive } from "../../../dist/ch";

describe("isPositive throwErr behavior", () => {
  it("throws error when NaN is not positive", () => {
    expect(() => isPositive(NaN, true, true)).toThrow();
  });

  it("throws error when null is not positive", () => {
    expect(() => isPositive(null, true, true)).toThrow();
  });

  it("throws error when undefined is not positive", () => {
    expect(() => isPositive(undefined, true, true)).toThrow();
  });

  it("throws error when boolean true is not positive", () => {
    expect(() => isPositive(true, true, true)).toThrow();
  });

  it("throws error when boolean false is not positive", () => {
    expect(() => isPositive(false, true, true)).toThrow();
  });

  it("throws error when string is not positive", () => {
    expect(() => isPositive("string", true, true)).toThrow();
  });

  it("throws error when negative number is not positive", () => {
    expect(() => isPositive(-5, true, true)).toThrow();
  });

  it("throws error when zero is not positive", () => {
    expect(() => isPositive(0, true, true)).toThrow();
  });

  it("throws error when object is not positive", () => {
    expect(() => isPositive({}, true, true)).toThrow();
  });

  it("throws error when array is not positive", () => {
    expect(() => isPositive([1, 2, 3], true, true)).toThrow();
  });

  it("throws error when symbol is not positive", () => {
    expect(() => isPositive(Symbol("test"), true, true)).toThrow();
  });
});