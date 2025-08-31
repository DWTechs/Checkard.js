import { isValidInteger } from "../../../dist/ch";

describe("isValidInteger throwErr behavior", () => {
  it("throws error when NaN is not a valid integer", () => {
    expect(() => isValidInteger(NaN, -100, 100, true, true)).toThrow();
  });

  it("throws error when null is not a valid integer", () => {
    expect(() => isValidInteger(null, -100, 100, true, true)).toThrow();
  });

  it("throws error when undefined is not a valid integer", () => {
    expect(() => isValidInteger(undefined, -100, 100, true, true)).toThrow();
  });

  it("throws error when boolean true is not a valid integer", () => {
    expect(() => isValidInteger(true, -100, 100, true, true)).toThrow();
  });

  it("throws error when boolean false is not a valid integer", () => {
    expect(() => isValidInteger(false, -100, 100, true, true)).toThrow();
  });

  it("throws error when string is not a valid integer", () => {
    expect(() => isValidInteger("string", -100, 100, true, true)).toThrow();
  });

  it("throws error when float is not a valid integer", () => {
    expect(() => isValidInteger(3.14, -100, 100, true, true)).toThrow();
  });

  it("throws error when object is not a valid integer", () => {
    expect(() => isValidInteger({}, -100, 100, true, true)).toThrow();
  });

  it("throws error when array is not a valid integer", () => {
    expect(() => isValidInteger([1, 2, 3], -100, 100, true, true)).toThrow();
  });

  it("throws error when symbol is not a valid integer", () => {
    expect(() => isValidInteger(Symbol("test"), -100, 100, true, true)).toThrow();
  });

  it("throws error when integer is below minimum range", () => {
    expect(() => isValidInteger(-150, -100, 100, true, true)).toThrow();
  });

  it("throws error when integer is above maximum range", () => {
    expect(() => isValidInteger(150, -100, 100, true, true)).toThrow();
  });

  it("throws error when negative integer is below range", () => {
    expect(() => isValidInteger(-50, -10, 10, true, true)).toThrow();
  });

  it("throws error when positive integer is above range", () => {
    expect(() => isValidInteger(50, -10, 10, true, true)).toThrow();
  });

  it("throws error when zero is outside custom range", () => {
    expect(() => isValidInteger(0, 1, 10, true, true)).toThrow();
  });
});