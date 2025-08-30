import { isBoolean } from "../../../dist/ch";

describe("isBoolean with throwErr = true", () => {
  test("throws on NaN", () => {
    expect(() => isBoolean(Number.NaN, true)).toThrow();
  });

  test("throws on null", () => {
    expect(() => isBoolean(null, true)).toThrow();
  });

  test("throws on undefined", () => {
    expect(() => isBoolean(undefined, true)).toThrow();
  });

  const s1 = Symbol();
  test("throws on symbol", () => {
    expect(() => isBoolean(s1, true)).toThrow();
  });

  test("throws on string", () => {
    expect(() => isBoolean("string", true)).toThrow();
  });

  test("throws on number", () => {
    expect(() => isBoolean(123, true)).toThrow();
  });

  test("throws on object", () => {
    expect(() => isBoolean({}, true)).toThrow();
  });

  test("throws on array", () => {
    expect(() => isBoolean([], true)).toThrow();
  });

  test("throws on function", () => {
    expect(() => isBoolean(() => {}, true)).toThrow();
  });

  test("does not throw on true", () => {
    expect(() => isBoolean(true, true)).not.toThrow();
  });

  test("does not throw on false", () => {
    expect(() => isBoolean(false, true)).not.toThrow();
  });
});