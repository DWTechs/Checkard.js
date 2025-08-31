import { isSlug } from "../../../dist/ch";

describe("isSlug throwErr behavior", () => {
  it("throws error when NaN is not a valid slug", () => {
    expect(() => isSlug(NaN, true)).toThrow();
  });

  it("throws error when null is not a valid slug", () => {
    expect(() => isSlug(null, true)).toThrow();
  });

  it("throws error when undefined is not a valid slug", () => {
    expect(() => isSlug(undefined, true)).toThrow();
  });

  it("throws error when boolean true is not a valid slug", () => {
    expect(() => isSlug(true, true)).toThrow();
  });

  it("throws error when boolean false is not a valid slug", () => {
    expect(() => isSlug(false, true)).toThrow();
  });

  it("throws error when number is not a valid slug", () => {
    expect(() => isSlug(42, true)).toThrow();
  });

  it("throws error when object is not a valid slug", () => {
    expect(() => isSlug({}, true)).toThrow();
  });

  it("throws error when array is not a valid slug", () => {
    expect(() => isSlug([1, 2, 3], true)).toThrow();
  });

  it("throws error when symbol is not a valid slug", () => {
    expect(() => isSlug(Symbol("test"), true)).toThrow();
  });

  it("throws error when empty string is not a valid slug", () => {
    expect(() => isSlug("", true)).toThrow();
  });

  it("throws error when string with spaces is not a valid slug", () => {
    expect(() => isSlug("not a slug", true)).toThrow();
  });

  it("throws error when string with consecutive hyphens is not a valid slug", () => {
    expect(() => isSlug("not--valid", true)).toThrow();
  });

  it("throws error when string starting with hyphen is not a valid slug", () => {
    expect(() => isSlug("-invalid", true)).toThrow();
  });

  it("throws error when string ending with hyphen is not a valid slug", () => {
    expect(() => isSlug("invalid-", true)).toThrow();
  });
});