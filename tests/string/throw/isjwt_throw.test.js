import { isJWT } from "../../../dist/ch";

describe("isJWT throwErr behavior", () => {
  it("throws error when NaN is not a valid JWT", () => {
    expect(() => isJWT(NaN, true)).toThrow();
  });

  it("throws error when null is not a valid JWT", () => {
    expect(() => isJWT(null, true)).toThrow();
  });

  it("throws error when undefined is not a valid JWT", () => {
    expect(() => isJWT(undefined, true)).toThrow();
  });

  it("throws error when boolean true is not a valid JWT", () => {
    expect(() => isJWT(true, true)).toThrow();
  });

  it("throws error when boolean false is not a valid JWT", () => {
    expect(() => isJWT(false, true)).toThrow();
  });

  it("throws error when number is not a valid JWT", () => {
    expect(() => isJWT(42, true)).toThrow();
  });

  it("throws error when object is not a valid JWT", () => {
    expect(() => isJWT({}, true)).toThrow();
  });

  it("throws error when array is not a valid JWT", () => {
    expect(() => isJWT([1, 2, 3], true)).toThrow();
  });

  it("throws error when symbol is not a valid JWT", () => {
    expect(() => isJWT(Symbol("test"), true)).toThrow();
  });

  it("throws error when empty string is not a valid JWT", () => {
    expect(() => isJWT("", true)).toThrow();
  });

  it("throws error when string without dots is not a valid JWT", () => {
    expect(() => isJWT("notajwt", true)).toThrow();
  });

  it("throws error when string with only one dot is not a valid JWT", () => {
    expect(() => isJWT("header.payload", true)).toThrow();
  });

  it("throws error when string with too many dots is not a valid JWT", () => {
    expect(() => isJWT("header.payload.signature.extra", true)).toThrow();
  });

  it("throws error when JWT with invalid Base64 header is not valid", () => {
    expect(() => isJWT("invalid!.payload.signature", true)).toThrow();
  });

  it("throws error when JWT with invalid Base64 payload is not valid", () => {
    expect(() => isJWT("header.invalid!.signature", true)).toThrow();
  });

  it("throws error when JWT with invalid Base64 signature is not valid", () => {
    expect(() => isJWT("header.payload.invalid!", true)).toThrow();
  });
});