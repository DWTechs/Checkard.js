import { isValidNumber } from "../../../dist/ch";

describe("isValidNumber throwErr behavior", () => {
  it("throws error when NaN is not a valid number", () => {
    expect(() => isValidNumber(NaN, -100, 100, true, true)).toThrow();
  });

  it("throws error when null is not a valid number", () => {
    expect(() => isValidNumber(null, -100, 100, true, true)).toThrow();
  });

  it("throws error when undefined is not a valid number", () => {
    expect(() => isValidNumber(undefined, -100, 100, true, true)).toThrow();
  });

  it("throws error when boolean true is not a valid number", () => {
    expect(() => isValidNumber(true, -100, 100, true, true)).toThrow();
  });

  it("throws error when boolean false is not a valid number", () => {
    expect(() => isValidNumber(false, -100, 100, true, true)).toThrow();
  });

  it("throws error when string is not a valid number", () => {
    expect(() => isValidNumber("string", -100, 100, true, true)).toThrow();
  });

  it("throws error when object is not a valid number", () => {
    expect(() => isValidNumber({}, -100, 100, true, true)).toThrow();
  });

  it("throws error when array is not a valid number", () => {
    expect(() => isValidNumber([1, 2, 3], -100, 100, true, true)).toThrow();
  });

  it("throws error when symbol is not a valid number", () => {
    expect(() => isValidNumber(Symbol("test"), -100, 100, true, true)).toThrow();
  });

  it("throws error when number is below minimum range", () => {
    expect(() => isValidNumber(-150, -100, 100, true, true)).toThrow();
  });

  it("throws error when number is above maximum range", () => {
    expect(() => isValidNumber(150, -100, 100, true, true)).toThrow();
  });

  it("throws error when negative number is below range", () => {
    expect(() => isValidNumber(-50, -10, 10, true, true)).toThrow();
  });

  it("throws error when positive number is above range", () => {
    expect(() => isValidNumber(50, -10, 10, true, true)).toThrow();
  });

  it("throws error when float is outside range", () => {
    expect(() => isValidNumber(15.5, 0, 10, true, true)).toThrow();
  });
});