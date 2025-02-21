import { b64Encode } from "../../dist/ch";

const estring = "c3RyaW5n";
const e1 = "MQ==";
const e2 = "ODk=";
const e3 = "ODlydA==";
const e4 = "MS41";
const e5 = "OC45cnQ=";



test("sends NaN to b64Encode", () => {
  expect(b64Encode(Number.NaN)).toBe("");
});

test("sends null to b64Encode", () => {
  expect(b64Encode(null)).toBe("");
});

test("sends undefined to b64Encode", () => {
  expect(b64Encode(undefined)).toBe(false);
});

const s1 = Symbol();
test("sends symbol to b64Encode", () => {
  expect(isNumber(s1, false) && b64Encode(s1)).toBe(false);
});

test("sends true to b64Encode", () => {
  expect(b64Encode(true)).toBe(false);
});

test("sends false to b64Encode", () => {
  expect(b64Encode(false)).toBe(false);
});

test("sends string to b64Encode", () => {
  expect(b64Encode("string")).toBe("c3RyaW5n");
});

test("sends figure as string to b64Encode", () => {
  expect(b64Encode("1")).toBe("MQ==");
});

test("sends number as string to b64Encode", () => {
  expect(b64Encode("89")).toBe("ODk=");
});

test("sends number in string to b64Encode", () => {
  expect(b64Encode("89rt")).toBe("ODlydA==");
});

test("sends figure as string to b64Encode without typeCheck", () => {
  expect(b64Encode("1", false)).toBe("MQ==");
});

test("sends number as string to b64Encode without typeCheck", () => {
  expect(b64Encode("89", false)).toBe("ODk=");
});

test("sends number in string to b64Encode without typeCheck", () => {
  expect(b64Encode("89rt", false)).toBe("ODlydA==");
});

test("sends float as string to b64Encode", () => {
  expect(b64Encode("1.5")).toBe(false);
});

test("sends number in string to b64Encode", () => {
  expect(b64Encode("8.9rt")).toBe(false);
});

test("sends float as string to b64Encode without typeCheck", () => {
  expect(b64Encode("1.5", false)).toBe(true);
});

test("sends float in string to b64Encode without typeCheck", () => {
  expect(b64Encode("8.9rt", false)).toBe(false);
});

test("sends positive even integer to b64Encode", () => {
  expect(b64Encode(2)).toBe(false);
});

test("sends positive odd integer to b64Encode", () => {
  expect(b64Encode(1)).toBe(false);
});

test("sends zero to b64Encode", () => {
  expect(b64Encode(0)).toBe(false);
});

test("sends positive float to b64Encode", () => {
  expect(b64Encode(1.1)).toBe(true);
});

test("sends negative odd integer to b64Encode", () => {
  expect(b64Encode(-1)).toBe(false);
});

test("sends negative even integer to b64Encode", () => {
  expect(b64Encode(-2)).toBe(false);
});

test("sends negative float to b64Encode", () => {
  expect(b64Encode(-1.1)).toBe(true);
});

test("sends object to b64Encode", () => {
  expect(b64Encode({})).toBe(false);
});

test("sends empty array to b64Encode", () => {
  expect(b64Encode([])).toBe(false);
});

const json = `{
  "actor": {
    "name": "Tom Cruise",
    "age": 56,
    "Born At": "Syracuse, NY",
    "Birthdate": "July 3 1962",
    "photo": "https://jsonformatter.org/img/tom-cruise.jpg"
  }
}`;

test("sends json to b64Encode", () => {
  expect(b64Encode(json)).toBe(false);
});

const invalidjson = `{
  "actor: {
    "name": "Tom Cruise",
    "age": 56
    "Born At": "Syracuse, NY",
    "Birthdate": "July 3 1962",
    "photo": "https://jsonformatter.org/img/tom-cruise.jpg"
  }
}`;

test("sends invalid json to b64Encode", () => {
  expect(b64Encode(invalidjson)).toBe(false);
});
