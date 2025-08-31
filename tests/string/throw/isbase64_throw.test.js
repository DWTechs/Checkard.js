import { isBase64 } from "../../../dist/ch";

describe("isBase64 throwErr behavior", () => {
  it("throws error when NaN is not valid Base64", () => {
    expect(() => isBase64(NaN, false, true)).toThrow();
  });

  it("throws error when null is not valid Base64", () => {
    expect(() => isBase64(null, false, true)).toThrow();
  });

  it("throws error when undefined is not valid Base64", () => {
    expect(() => isBase64(undefined, false, true)).toThrow();
  });

  it("throws error when boolean true is not valid Base64", () => {
    expect(() => isBase64(true, false, true)).toThrow();
  });

  it("throws error when boolean false is not valid Base64", () => {
    expect(() => isBase64(false, false, true)).toThrow();
  });

  it("throws error when number is not valid Base64", () => {
    expect(() => isBase64(42, false, true)).toThrow();
  });

  it("throws error when object is not valid Base64", () => {
    expect(() => isBase64({}, false, true)).toThrow();
  });

  it("throws error when array is not valid Base64", () => {
    expect(() => isBase64([1, 2, 3], false, true)).toThrow();
  });

  it("throws error when symbol is not valid Base64", () => {
    expect(() => isBase64(Symbol("test"), false, true)).toThrow();
  });

  it("throws error when empty string is not valid Base64", () => {
    expect(() => isBase64("", false, true)).toThrow();
  });

  it("throws error when invalid Base64 string is not valid", () => {
    expect(() => isBase64("not-base64!", false, true)).toThrow();
  });

  it("throws error when incomplete Base64 padding is not valid", () => {
    expect(() => isBase64("abc", false, true)).toThrow();
  });

  it("throws error when URL-safe Base64 is checked against standard Base64", () => {
    expect(() => isBase64("abc-def_", false, true)).toThrow();
  });

  it("throws error when standard Base64 is checked against URL-safe", () => {
    expect(() => isBase64("abc+def/", true, true)).toThrow();
  });
});