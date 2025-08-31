import { isEmail } from "../../../dist/ch";

describe("isEmail throwErr behavior", () => {
  it("throws error when NaN is not a valid email", () => {
    expect(() => isEmail(NaN, true)).toThrow();
  });

  it("throws error when null is not a valid email", () => {
    expect(() => isEmail(null, true)).toThrow();
  });

  it("throws error when undefined is not a valid email", () => {
    expect(() => isEmail(undefined, true)).toThrow();
  });

  it("throws error when boolean true is not a valid email", () => {
    expect(() => isEmail(true, true)).toThrow();
  });

  it("throws error when boolean false is not a valid email", () => {
    expect(() => isEmail(false, true)).toThrow();
  });

  it("throws error when number is not a valid email", () => {
    expect(() => isEmail(42, true)).toThrow();
  });

  it("throws error when object is not a valid email", () => {
    expect(() => isEmail({}, true)).toThrow();
  });

  it("throws error when array is not a valid email", () => {
    expect(() => isEmail([1, 2, 3], true)).toThrow();
  });

  it("throws error when symbol is not a valid email", () => {
    expect(() => isEmail(Symbol("test"), true)).toThrow();
  });

  it("throws error when empty string is not a valid email", () => {
    expect(() => isEmail("", true)).toThrow();
  });

  it("throws error when invalid email format is not valid", () => {
    expect(() => isEmail("notanemail", true)).toThrow();
  });

  it("throws error when email without @ is not valid", () => {
    expect(() => isEmail("userdomain.com", true)).toThrow();
  });

  it("throws error when email without domain is not valid", () => {
    expect(() => isEmail("user@", true)).toThrow();
  });

  it("throws error when email with invalid domain is not valid", () => {
    expect(() => isEmail("user@invalid", true)).toThrow();
  });
});