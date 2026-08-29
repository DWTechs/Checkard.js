import { isSetOfLength } from "../../dist/ch";

const s1 = Symbol();

test("sends NaN to isSetOfLength", () => {
  expect(isSetOfLength(Number.NaN)).toBe(false);
});

test("sends Set of size 3 to isSetOfLength(0,3)", () => {
  expect(isSetOfLength(new Set(["white", "grey", "black"]), 0, 3)).toBe(true);
});

test("sends string to isSetOfLength", () => {
  expect(isSetOfLength("string")).toBe(false);
});

test("sends array to isSetOfLength", () => {
  expect(isSetOfLength(["white", "grey", "black"])).toBe(false);
});

test("sends Map to isSetOfLength", () => {
  expect(isSetOfLength(new Map())).toBe(false);
});

test("sends empty Set to isSetOfLength", () => {
  expect(isSetOfLength(new Set())).toBe(true);
});

test("sends Set of 1 integer to isSetOfLength", () => {
  expect(isSetOfLength(new Set([2]))).toBe(true);
});

test("sends Set of 2 integers to isSetOfLength", () => {
  expect(isSetOfLength(new Set([2, 1]))).toBe(true);
});

test("sends Set to isSetOfLength", () => {
  expect(isSetOfLength(new Set(["white", "grey", "black"]))).toBe(true);
});

test("sends function to isSetOfLength", () => {
  expect(isSetOfLength(() => {})).toBe(false);
});

test("sends Set to isSetOfLength with size test between 2 and 4", () => {
  expect(isSetOfLength(new Set(["white", "grey", "black"]), 2, 4)).toBe(true);
});

test("sends Set to isSetOfLength with size test between 3 and 6", () => {
  expect(isSetOfLength(new Set(["white", "grey", "black"]), 3, 6)).toBe(true);
});

test("sends Set to isSetOfLength with size test between 1 and 3", () => {
  expect(isSetOfLength(new Set(["white", "grey", "black"]), 1, 3)).toBe(true);
});

test("sends empty Set of size 0 to isSetOfLength with negative min", () => {
  expect(isSetOfLength(new Set(), -1, 0)).toBe(true);
});

test("sends empty Set of size 0 to isSetOfLength with negative min and max greater than 0", () => {
  expect(isSetOfLength(new Set(), -1, 2)).toBe(true);
});

test("sends Set of size 3 to isSetOfLength with size test between 4 and 6", () => {
  expect(isSetOfLength(new Set(["white", "grey", "black"]), 4, 6)).toBe(false);
});

test("sends Set of size 3 to isSetOfLength with size test between 0 and 2", () => {
  expect(isSetOfLength(new Set(["white", "grey", "black"]), 0, 2)).toBe(false);
});

test("sends null to isSetOfLength", () => {
  expect(isSetOfLength(null)).toBe(false);
});

test("sends undefined to isSetOfLength", () => {
  expect(isSetOfLength(undefined)).toBe(false);
});

test("sends symbol to isSetOfLength", () => {
  expect(isSetOfLength(s1)).toBe(false);
});

test("sends true to isSetOfLength", () => {
  expect(isSetOfLength(true)).toBe(false);
});

test("sends false to isSetOfLength", () => {
  expect(isSetOfLength(false)).toBe(false);
});

test("sends object to isSetOfLength", () => {
  expect(isSetOfLength({})).toBe(false);
});
