import { isOdd } from "../../../dist/ch";

describe("isOdd throwErr behavior", () => {
  it("throws error when NaN is not odd", () => {
    expect(() => isOdd(NaN, true, true)).toThrow();
  });

  it("throws error when null is not odd", () => {
    expect(() => isOdd(null, true, true)).toThrow();
  });

  it("throws error when undefined is not odd", () => {
    expect(() => isOdd(undefined, true, true)).toThrow();
  });

  it("throws error when boolean true is not odd", () => {
    expect(() => isOdd(true, true, true)).toThrow();
  });

  it("throws error when boolean false is not odd", () => {
    expect(() => isOdd(false, true, true)).toThrow();
  });

  it("throws error when string is not odd", () => {
    expect(() => isOdd("string", true, true)).toThrow();
  });

  it("throws error when even number is not odd", () => {
    expect(() => isOdd(4, true, true)).toThrow();
  });

  it("throws error when float is not odd", () => {
    expect(() => isOdd(3.14, true, true)).toThrow();
  });

  it("throws error when object is not odd", () => {
    expect(() => isOdd({}, true, true)).toThrow();
  });

  it("throws error when array is not odd", () => {
    expect(() => isOdd([1, 2, 3], true, true)).toThrow();
  });

  it("throws error when symbol is not odd", () => {
    expect(() => isOdd(Symbol("test"), true, true)).toThrow();
  });
});