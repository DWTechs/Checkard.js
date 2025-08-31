import { isPowerOfTwo } from "../../../dist/ch";

describe("isPowerOfTwo throwErr behavior", () => {
  it("throws error when NaN is not a power of two", () => {
    expect(() => isPowerOfTwo(NaN, true, true)).toThrow();
  });

  it("throws error when null is not a power of two", () => {
    expect(() => isPowerOfTwo(null, true, true)).toThrow();
  });

  it("throws error when undefined is not a power of two", () => {
    expect(() => isPowerOfTwo(undefined, true, true)).toThrow();
  });

  it("throws error when boolean true is not a power of two", () => {
    expect(() => isPowerOfTwo(true, true, true)).toThrow();
  });

  it("throws error when boolean false is not a power of two", () => {
    expect(() => isPowerOfTwo(false, true, true)).toThrow();
  });

  it("throws error when string is not a power of two", () => {
    expect(() => isPowerOfTwo("string", true, true)).toThrow();
  });

  it("throws error when zero is not a power of two", () => {
    expect(() => isPowerOfTwo(0, true, true)).toThrow();
  });

  it("throws error when non-power-of-two number is not a power of two", () => {
    expect(() => isPowerOfTwo(3, true, true)).toThrow();
  });

  it("throws error when negative number is not a power of two", () => {
    expect(() => isPowerOfTwo(-2, true, true)).toThrow();
  });

  it("throws error when float is not a power of two", () => {
    expect(() => isPowerOfTwo(3.14, true, true)).toThrow();
  });

  it("throws error when object is not a power of two", () => {
    expect(() => isPowerOfTwo({}, true, true)).toThrow();
  });

  it("throws error when array is not a power of two", () => {
    expect(() => isPowerOfTwo([1, 2, 3], true, true)).toThrow();
  });

  it("throws error when symbol is not a power of two", () => {
    expect(() => isPowerOfTwo(Symbol("test"), true, true)).toThrow();
  });
});