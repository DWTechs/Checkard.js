import { isSet } from "../../dist/ch";

const s1 = Symbol();

describe('isSet comparison tests', () => {

  test("sends NaN to isSet", () => {
    expect(isSet(Number.NaN)).toBe(false);
  });

  test("sends null to isSet", () => {
    expect(isSet(null)).toBe(false);
  });

  test("sends undefined to isSet", () => {
    expect(isSet(undefined)).toBe(false);
  });

  test("sends symbol to isSet", () => {
    expect(isSet(s1)).toBe(false);
  });

  test("sends true to isSet", () => {
    expect(isSet(true)).toBe(false);
  });

  test("sends false to isSet", () => {
    expect(isSet(false)).toBe(false);
  });

  test("sends string to isSet", () => {
    expect(isSet("string")).toBe(false);
  });

  test("sends positive even integer to isSet", () => {
    expect(isSet(2)).toBe(false);
  });

  test("sends positive odd integer to isSet", () => {
    expect(isSet(1)).toBe(false);
  });

  test("sends zero to isSet", () => {
    expect(isSet(0)).toBe(false);
  });

  test("sends array to isSet", () => {
    expect(isSet([1, 2, 3])).toBe(false);
  });

  test("sends object to isSet", () => {
    expect(isSet({})).toBe(false);
  });

  test("sends Map to isSet", () => {
    expect(isSet(new Map())).toBe(false);
  });

  test("sends empty Set to isSet", () => {
    expect(isSet(new Set())).toBe(true);
  });

  test("sends Set of 1 integer to isSet", () => {
    expect(isSet(new Set([2]))).toBe(true);
  });

  test("sends Set of strings to isSet", () => {
    expect(isSet(new Set(["white", "grey", "black"]))).toBe(true);
  });

  test("sends Set of size 3 to isSet(2)", () => {
    expect(isSet(new Set(["white", "grey", "black"]), '=', 2)).toBe(false);
  });

  test("sends Set of size 3 to isSet(3)", () => {
    expect(isSet(new Set(["white", "grey", "black"]), '=', 3)).toBe(true);
  });

  test("sends Set of size 3 to isSet(4)", () => {
    expect(isSet(new Set(["white", "grey", "black"]), '=', 4)).toBe(false);
  });

  // with size
  test("sends empty Set to isSet with empty comparator", () => {
    expect(isSet(new Set(), '0')).toBe(true);
  });

  test("sends empty Set to isSet with non-empty comparator", () => {
    expect(isSet(new Set(), '!0')).toBe(false);
  });

  test("sends Set to isSet with empty comparator", () => {
    expect(isSet(new Set([1]), '0')).toBe(false);
  });

  test("sends Set to isSet with non-empty comparator", () => {
    expect(isSet(new Set([1]), '!0')).toBe(true);
  });

  test("sends null to isSet with size test of 2", () => {
    expect(isSet(null, '=', 2)).toBe(false);
  });

  test("sends undefined to isSet with size test of 2", () => {
    expect(isSet(undefined, '=', 2)).toBe(false);
  });

  test("sends array to isSet with size test of 2", () => {
    expect(isSet([1, 2], '=', 2)).toBe(false);
  });

});
