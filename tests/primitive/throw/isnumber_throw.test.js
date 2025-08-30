import { isNumber } from "../../../dist/ch";

describe("isNumber throwErr behavior", () => {
  it("throws error when null is not a number", () => {
    expect(() => isNumber(null, true, null, null, true)).toThrow();
  });

  it("throws error when undefined is not a number", () => {
    expect(() => isNumber(undefined, true, null, null, true)).toThrow();
  });

  it("throws error when boolean true is not a number", () => {
    expect(() => isNumber(true, true, null, null, true)).toThrow();
  });

  it("throws error when boolean false is not a number", () => {
    expect(() => isNumber(false, true, null, null, true)).toThrow();
  });

  it("throws error when string is not a number", () => {
    expect(() => isNumber("string", true, null, null, true)).toThrow();
  });

  it("throws error when object is not a number", () => {
    expect(() => isNumber({}, true, null, null, true)).toThrow();
  });

  it("throws error when array is not a number", () => {
    expect(() => isNumber([1, 2, 3], true, null, null, true)).toThrow();
  });

  it("throws error when symbol is not a number", () => {
    expect(() => isNumber(Symbol("test"), true, null, null, true)).toThrow();
  });

  it("throws error when function is not a number", () => {
    expect(() => isNumber(() => {}, true, null, null, true)).toThrow();
  });
});