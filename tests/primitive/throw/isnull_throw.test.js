import { isNull } from "../../../dist/ch";

describe("isNull throwErr behavior", () => {
  it("throws error when NaN is not null", () => {
    expect(() => isNull(NaN, true)).toThrow();
  });

  it("throws error when undefined is not null", () => {
    expect(() => isNull(undefined, true)).toThrow();
  });

  it("throws error when boolean true is not null", () => {
    expect(() => isNull(true, true)).toThrow();
  });

  it("throws error when boolean false is not null", () => {
    expect(() => isNull(false, true)).toThrow();
  });

  it("throws error when string is not null", () => {
    expect(() => isNull("string", true)).toThrow();
  });

  it("throws error when positive integer is not null", () => {
    expect(() => isNull(42, true)).toThrow();
  });

  it("throws error when negative integer is not null", () => {
    expect(() => isNull(-42, true)).toThrow();
  });

  it("throws error when float is not null", () => {
    expect(() => isNull(3.14, true)).toThrow();
  });

  it("throws error when object is not null", () => {
    expect(() => isNull({}, true)).toThrow();
  });

  it("throws error when array is not null", () => {
    expect(() => isNull([1, 2, 3], true)).toThrow();
  });

  it("throws error when symbol is not null", () => {
    expect(() => isNull(Symbol("test"), true)).toThrow();
  });
});