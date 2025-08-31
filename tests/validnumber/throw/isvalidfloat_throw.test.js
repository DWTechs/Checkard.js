import { isValidFloat } from "../../../dist/ch";

describe("isValidFloat throwErr behavior", () => {
  it("throws error when NaN is not a valid float", () => {
    expect(() => isValidFloat(NaN, -100.5, 100.5, true, true)).toThrow();
  });

  it("throws error when null is not a valid float", () => {
    expect(() => isValidFloat(null, -100.5, 100.5, true, true)).toThrow();
  });

  it("throws error when undefined is not a valid float", () => {
    expect(() => isValidFloat(undefined, -100.5, 100.5, true, true)).toThrow();
  });

  it("throws error when boolean true is not a valid float", () => {
    expect(() => isValidFloat(true, -100.5, 100.5, true, true)).toThrow();
  });

  it("throws error when boolean false is not a valid float", () => {
    expect(() => isValidFloat(false, -100.5, 100.5, true, true)).toThrow();
  });

  it("throws error when string is not a valid float", () => {
    expect(() => isValidFloat("string", -100.5, 100.5, true, true)).toThrow();
  });

  it("throws error when integer is not a valid float", () => {
    expect(() => isValidFloat(42, -100.5, 100.5, true, true)).toThrow();
  });

  it("throws error when object is not a valid float", () => {
    expect(() => isValidFloat({}, -100.5, 100.5, true, true)).toThrow();
  });

  it("throws error when array is not a valid float", () => {
    expect(() => isValidFloat([1, 2, 3], -100.5, 100.5, true, true)).toThrow();
  });

  it("throws error when symbol is not a valid float", () => {
    expect(() => isValidFloat(Symbol("test"), -100.5, 100.5, true, true)).toThrow();
  });

  it("throws error when float is below minimum range", () => {
    expect(() => isValidFloat(-150.7, -100.5, 100.5, true, true)).toThrow();
  });

  it("throws error when float is above maximum range", () => {
    expect(() => isValidFloat(150.7, -100.5, 100.5, true, true)).toThrow();
  });

  it("throws error when negative float is below range", () => {
    expect(() => isValidFloat(-50.3, -10.2, 10.8, true, true)).toThrow();
  });

  it("throws error when positive float is above range", () => {
    expect(() => isValidFloat(50.9, -10.2, 10.8, true, true)).toThrow();
  });

  it("throws error when float is outside narrow range", () => {
    expect(() => isValidFloat(5.1, 0.0, 5.0, true, true)).toThrow();
  });
});