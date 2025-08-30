import { isNegative } from "../../../dist/ch";

describe("isNegative throwErr behavior", () => {
  it("throws error when NaN is not negative", () => {
    expect(() => isNegative(NaN, true, true)).toThrow();
  });

  it("throws error when null is not negative", () => {
    expect(() => isNegative(null, true, true)).toThrow();
  });

  it("throws error when undefined is not negative", () => {
    expect(() => isNegative(undefined, true, true)).toThrow();
  });

  it("throws error when boolean true is not negative", () => {
    expect(() => isNegative(true, true, true)).toThrow();
  });

  it("throws error when boolean false is not negative", () => {
    expect(() => isNegative(false, true, true)).toThrow();
  });

  it("throws error when string is not negative", () => {
    expect(() => isNegative("string", true, true)).toThrow();
  });

  it("throws error when positive number is not negative", () => {
    expect(() => isNegative(5, true, true)).toThrow();
  });

  it("throws error when zero is not negative", () => {
    expect(() => isNegative(0, true, true)).toThrow();
  });

  it("throws error when object is not negative", () => {
    expect(() => isNegative({}, true, true)).toThrow();
  });

  it("throws error when array is not negative", () => {
    expect(() => isNegative([1, 2, 3], true, true)).toThrow();
  });

  it("throws error when symbol is not negative", () => {
    expect(() => isNegative(Symbol("test"), true, true)).toThrow();
  });
});