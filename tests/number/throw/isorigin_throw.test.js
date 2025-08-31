import { isOrigin } from "../../../dist/ch";

describe("isOrigin throwErr behavior", () => {
  it("throws error when NaN is not zero", () => {
    expect(() => isOrigin(NaN, true, true)).toThrow();
  });

  it("throws error when null is not zero", () => {
    expect(() => isOrigin(null, true, true)).toThrow();
  });

  it("throws error when undefined is not zero", () => {
    expect(() => isOrigin(undefined, true, true)).toThrow();
  });

  it("throws error when boolean true is not zero", () => {
    expect(() => isOrigin(true, true, true)).toThrow();
  });

  it("throws error when boolean false is not zero", () => {
    expect(() => isOrigin(false, true, true)).toThrow();
  });

  it("throws error when string is not zero", () => {
    expect(() => isOrigin("string", true, true)).toThrow();
  });

  it("throws error when positive number is not zero", () => {
    expect(() => isOrigin(5, true, true)).toThrow();
  });

  it("throws error when negative number is not zero", () => {
    expect(() => isOrigin(-5, true, true)).toThrow();
  });

  it("throws error when float is not zero", () => {
    expect(() => isOrigin(3.14, true, true)).toThrow();
  });

  it("throws error when object is not zero", () => {
    expect(() => isOrigin({}, true, true)).toThrow();
  });

  it("throws error when array is not zero", () => {
    expect(() => isOrigin([1, 2, 3], true, true)).toThrow();
  });

  it("throws error when symbol is not zero", () => {
    expect(() => isOrigin(Symbol("test"), true, true)).toThrow();
  });
});