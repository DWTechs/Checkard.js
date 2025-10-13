import { isLocale } from "../../dist/ch";

test("sends NaN to isLocale", () => {
  expect(isLocale(Number.NaN)).toBe(false);
});

test("sends null to isLocale", () => {
  expect(isLocale(null)).toBe(false);
});

test("sends undefined to isLocale", () => {
  expect(isLocale(undefined)).toBe(false);
});

const s1 = Symbol();
test("sends symbol to isLocale", () => {
  expect(isLocale(s1)).toBe(false);
});

test("sends true to isLocale", () => {
  expect(isLocale(true)).toBe(false);
});

test("sends false to isLocale", () => {
  expect(isLocale(false)).toBe(false);
});

test("sends plain string to isLocale", () => {
  expect(isLocale("string")).toBe(false);
});

test("sends empty string to isLocale", () => {
  expect(isLocale("")).toBe(false);
});

test("sends positive even integer to isLocale", () => {
  expect(isLocale(2)).toBe(false);
});

test("sends positive odd integer to isLocale", () => {
  expect(isLocale(1)).toBe(false);
});

test("sends zero to isLocale", () => {
  expect(isLocale(0)).toBe(false);
});

test("sends positive float to isLocale", () => {
  expect(isLocale(1.1)).toBe(false);
});

test("sends negative odd integer to isLocale", () => {
  expect(isLocale(-1)).toBe(false);
});

test("sends negative even integer to isLocale", () => {
  expect(isLocale(-2)).toBe(false);
});

test("sends negative float to isLocale", () => {
  expect(isLocale(-1.1)).toBe(false);
});

test("sends empty object to isLocale", () => {
  expect(isLocale({})).toBe(false);
});

test("sends empty array to isLocale", () => {
  expect(isLocale([])).toBe(false);
});

test("sends object to isLocale", () => {
  expect(isLocale({toto: 3})).toBe(false);
});

test("sends array to isLocale", () => {
  expect(isLocale(['toto', 3])).toBe(false);
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

test("sends json to isLocale", () => {
  expect(isLocale(json)).toBe(false);
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

test("sends invalid json to isLocale", () => {
  expect(isLocale(invalidjson)).toBe(false);
});

// Invalid locale formats - Basic mode
test("sends locale with wrong length to isLocale", () => {
  expect(isLocale("en-USA")).toBe(false);
});

test("sends locale with too short language code to isLocale", () => {
  expect(isLocale("e-US")).toBe(false);
});

test("sends locale with too long language code to isLocale", () => {
  expect(isLocale("eng-US")).toBe(false);
});

test("sends locale with lowercase country code to isLocale", () => {
  expect(isLocale("en-us")).toBe(false);
});

test("sends locale with uppercase language code to isLocale", () => {
  expect(isLocale("EN-US")).toBe(false);
});

test("sends locale without hyphen to isLocale", () => {
  expect(isLocale("enUS")).toBe(false);
});

test("sends locale with underscore instead of hyphen to isLocale", () => {
  expect(isLocale("en_US")).toBe(false);
});

test("sends locale with spaces to isLocale", () => {
  expect(isLocale("en US")).toBe(false);
});

test("sends locale with numbers to isLocale", () => {
  expect(isLocale("e1-US")).toBe(false);
});

test("sends locale with special characters to isLocale", () => {
  expect(isLocale("en-U$")).toBe(false);
});

test("sends locale that is too short to isLocale", () => {
  expect(isLocale("en-U")).toBe(false);
});

test("sends locale that is too long to isLocale", () => {
  expect(isLocale("en-USA")).toBe(false);
});

test("sends locale with only language code to isLocale", () => {
  expect(isLocale("en")).toBe(false);
});

test("sends locale with only country code to isLocale", () => {
  expect(isLocale("US")).toBe(false);
});

test("sends locale with trailing hyphen to isLocale", () => {
  expect(isLocale("en-US-")).toBe(false);
});

test("sends locale with leading hyphen to isLocale", () => {
  expect(isLocale("-en-US")).toBe(false);
});

test("sends locale with double hyphen to isLocale", () => {
  expect(isLocale("en--US")).toBe(false);
});

// Valid locale formats - Basic mode
test("sends valid en-US locale to isLocale", () => {
  expect(isLocale("en-US")).toBe(true);
});

test("sends valid fr-FR locale to isLocale", () => {
  expect(isLocale("fr-FR")).toBe(true);
});

test("sends valid de-DE locale to isLocale", () => {
  expect(isLocale("de-DE")).toBe(true);
});

test("sends valid es-ES locale to isLocale", () => {
  expect(isLocale("es-ES")).toBe(true);
});

test("sends valid it-IT locale to isLocale", () => {
  expect(isLocale("it-IT")).toBe(true);
});

test("sends valid pt-BR locale to isLocale", () => {
  expect(isLocale("pt-BR")).toBe(true);
});

test("sends valid ja-JP locale to isLocale", () => {
  expect(isLocale("ja-JP")).toBe(true);
});

test("sends valid zh-CN locale to isLocale", () => {
  expect(isLocale("zh-CN")).toBe(true);
});

test("sends valid ko-KR locale to isLocale", () => {
  expect(isLocale("ko-KR")).toBe(true);
});

test("sends valid ru-RU locale to isLocale", () => {
  expect(isLocale("ru-RU")).toBe(true);
});

test("sends valid ar-SA locale to isLocale", () => {
  expect(isLocale("ar-SA")).toBe(true);
});

test("sends valid hi-IN locale to isLocale", () => {
  expect(isLocale("hi-IN")).toBe(true);
});

test("sends valid nl-NL locale to isLocale", () => {
  expect(isLocale("nl-NL")).toBe(true);
});

test("sends valid sv-SE locale to isLocale", () => {
  expect(isLocale("sv-SE")).toBe(true);
});

test("sends valid pl-PL locale to isLocale", () => {
  expect(isLocale("pl-PL")).toBe(true);
});

// Extended locale formats - should fail in basic mode
test("sends extended locale with script to isLocale in basic mode", () => {
  expect(isLocale("zh-Hans-CN")).toBe(false);
});

test("sends extended locale with variant to isLocale in basic mode", () => {
  expect(isLocale("en-US-x-twain")).toBe(false);
});

// Extended locale formats - with ext=true
test("sends valid en-US locale to isLocale with extended mode", () => {
  expect(isLocale("en-US", true)).toBe(true);
});

test("sends valid extended locale with script to isLocale", () => {
  expect(isLocale("zh-Hans-CN", true)).toBe(true);
});

test("sends valid extended locale with script (Simplified Chinese) to isLocale", () => {
  expect(isLocale("zh-Hans", true)).toBe(true);
});

test("sends valid extended locale with script (Traditional Chinese) to isLocale", () => {
  expect(isLocale("zh-Hant-TW", true)).toBe(true);
});

test("sends valid extended locale with Latin script to isLocale", () => {
  expect(isLocale("sr-Latn-RS", true)).toBe(true);
});

test("sends valid extended locale with Cyrillic script to isLocale", () => {
  expect(isLocale("sr-Cyrl-RS", true)).toBe(true);
});

test("sends valid extended locale with variant to isLocale", () => {
  expect(isLocale("en-US-x-twain", true)).toBe(true);
});

test("sends valid extended locale with multiple variants to isLocale", () => {
  expect(isLocale("en-US-x-twain-x-variant", true)).toBe(true);
});

test("sends valid extended locale with 3-letter language code to isLocale", () => {
  expect(isLocale("cmn-Hans-CN", true)).toBe(true);
});

test("sends valid extended locale with only language to isLocale", () => {
  expect(isLocale("en", true)).toBe(true);
});

test("sends valid extended locale with language and script to isLocale", () => {
  expect(isLocale("az-Latn", true)).toBe(true);
});

test("sends valid extended locale with language and region to isLocale", () => {
  expect(isLocale("en-GB", true)).toBe(true);
});

test("sends invalid extended locale with wrong script format to isLocale", () => {
  expect(isLocale("zh-HAN-CN", true)).toBe(false);
});

test("sends invalid extended locale with lowercase script to isLocale", () => {
  expect(isLocale("zh-hans-CN", true)).toBe(false);
});

test("sends invalid extended locale with wrong region format to isLocale", () => {
  expect(isLocale("en-usa", true)).toBe(false);
});

test("sends invalid extended locale with numbers in language to isLocale", () => {
  expect(isLocale("e1-US", true)).toBe(false);
});

test("sends empty string to isLocale with extended mode", () => {
  expect(isLocale("", true)).toBe(false);
});

test("sends locale with only hyphen to isLocale with extended mode", () => {
  expect(isLocale("-", true)).toBe(false);
});
