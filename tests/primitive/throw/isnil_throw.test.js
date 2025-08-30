import { isNil } from "../../../dist/ch";

describe("isNil throwErr behavior", () => {
  it("throws error when boolean true is not nil", () => {
    expect(() => isNil(true, true)).toThrow();
  });

  it("throws error when boolean false is not nil", () => {
    expect(() => isNil(false, true)).toThrow();
  });

  it("throws error when string is not nil", () => {
    expect(() => isNil("string", true)).toThrow();
  });

  it("throws error when positive integer is not nil", () => {
    expect(() => isNil(42, true)).toThrow();
  });

  it("throws error when negative integer is not nil", () => {
    expect(() => isNil(-42, true)).toThrow();
  });

  it("throws error when float is not nil", () => {
    expect(() => isNil(3.14, true)).toThrow();
  });

  it("throws error when object is not nil", () => {
    expect(() => isNil({}, true)).toThrow();
  });

  it("throws error when array is not nil", () => {
    expect(() => isNil([1, 2, 3], true)).toThrow();
  });

  it("throws error when symbol is not nil", () => {
    expect(() => isNil(Symbol("test"), true)).toThrow();
  });

  it("throws error when function is not nil", () => {
    expect(() => isNil(() => {}, true)).toThrow();
  });
});