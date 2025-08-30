import { isSymbol } from "../../../dist/ch";

describe("isSymbol throwErr behavior", () => {
  it("throws error when NaN is not a symbol", () => {
    expect(() => isSymbol(NaN, true)).toThrow();
  });

  it("throws error when null is not a symbol", () => {
    expect(() => isSymbol(null, true)).toThrow();
  });

  it("throws error when undefined is not a symbol", () => {
    expect(() => isSymbol(undefined, true)).toThrow();
  });

  it("throws error when boolean true is not a symbol", () => {
    expect(() => isSymbol(true, true)).toThrow();
  });

  it("throws error when boolean false is not a symbol", () => {
    expect(() => isSymbol(false, true)).toThrow();
  });

  it("throws error when string is not a symbol", () => {
    expect(() => isSymbol("string", true)).toThrow();
  });

  it("throws error when positive integer is not a symbol", () => {
    expect(() => isSymbol(42, true)).toThrow();
  });

  it("throws error when negative integer is not a symbol", () => {
    expect(() => isSymbol(-42, true)).toThrow();
  });

  it("throws error when float is not a symbol", () => {
    expect(() => isSymbol(3.14, true)).toThrow();
  });

  it("throws error when object is not a symbol", () => {
    expect(() => isSymbol({}, true)).toThrow();
  });

  it("throws error when array is not a symbol", () => {
    expect(() => isSymbol([1, 2, 3], true)).toThrow();
  });
});