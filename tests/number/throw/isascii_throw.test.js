import { isAscii } from "../../../dist/ch";

describe("isAscii throwErr behavior", () => {
  it("throws error when NaN is not ASCII", () => {
    expect(() => isAscii(NaN, true, true)).toThrow();
  });

  it("throws error when null is not ASCII", () => {
    expect(() => isAscii(null, true, true)).toThrow();
  });

  it("throws error when undefined is not ASCII", () => {
    expect(() => isAscii(undefined, true, true)).toThrow();
  });

  it("throws error when boolean true is not ASCII", () => {
    expect(() => isAscii(true, true, true)).toThrow();
  });

  it("throws error when boolean false is not ASCII", () => {
    expect(() => isAscii(false, true, true)).toThrow();
  });

  it("throws error when string is not ASCII", () => {
    expect(() => isAscii("string", true, true)).toThrow();
  });

  it("throws error when negative number is not ASCII", () => {
    expect(() => isAscii(-1, true, true)).toThrow();
  });

  it("throws error when number above extended ASCII range is not ASCII", () => {
    expect(() => isAscii(256, true, true)).toThrow();
  });

  it("throws error when number above standard ASCII range is not ASCII (ext=false)", () => {
    expect(() => isAscii(128, false, true)).toThrow();
  });

  it("throws error when float is not ASCII", () => {
    expect(() => isAscii(65.5, true, true)).toThrow();
  });

  it("throws error when object is not ASCII", () => {
    expect(() => isAscii({}, true, true)).toThrow();
  });

  it("throws error when array is not ASCII", () => {
    expect(() => isAscii([65], true, true)).toThrow();
  });

  it("throws error when symbol is not ASCII", () => {
    expect(() => isAscii(Symbol("test"), true, true)).toThrow();
  });
});