import { isEven } from "../../../dist/ch";

describe("isEven throwErr behavior", () => {
  it("throws error when NaN is not even", () => {
    expect(() => isEven(NaN, true, true)).toThrow();
  });

  it("throws error when null is not even", () => {
    expect(() => isEven(null, true, true)).toThrow();
  });

  it("throws error when undefined is not even", () => {
    expect(() => isEven(undefined, true, true)).toThrow();
  });

  it("throws error when boolean true is not even", () => {
    expect(() => isEven(true, true, true)).toThrow();
  });

  it("throws error when boolean false is not even", () => {
    expect(() => isEven(false, true, true)).toThrow();
  });

  it("throws error when string is not even", () => {
    expect(() => isEven("string", true, true)).toThrow();
  });

  it("throws error when odd number is not even", () => {
    expect(() => isEven(3, true, true)).toThrow();
  });

  it("throws error when float is not even", () => {
    expect(() => isEven(3.14, true, true)).toThrow();
  });

  it("throws error when object is not even", () => {
    expect(() => isEven({}, true, true)).toThrow();
  });

  it("throws error when array is not even", () => {
    expect(() => isEven([1, 2, 3], true, true)).toThrow();
  });

  it("throws error when symbol is not even", () => {
    expect(() => isEven(Symbol("test"), true, true)).toThrow();
  });
});