import { isLocale } from "../../../dist/ch";

describe("isLocale throwErr behavior", () => {
  it("throws error when NaN is not a valid locale", () => {
    expect(() => isLocale(NaN, false, true)).toThrow();
  });

  it("throws error when null is not a valid locale", () => {
    expect(() => isLocale(null, false, true)).toThrow();
  });

  it("throws error when undefined is not a valid locale", () => {
    expect(() => isLocale(undefined, false, true)).toThrow();
  });

  it("throws error when boolean true is not a valid locale", () => {
    expect(() => isLocale(true, false, true)).toThrow();
  });

  it("throws error when boolean false is not a valid locale", () => {
    expect(() => isLocale(false, false, true)).toThrow();
  });

  it("throws error when number is not a valid locale", () => {
    expect(() => isLocale(42, false, true)).toThrow();
  });

  it("throws error when object is not a valid locale", () => {
    expect(() => isLocale({}, false, true)).toThrow();
  });

  it("throws error when array is not a valid locale", () => {
    expect(() => isLocale([1, 2, 3], false, true)).toThrow();
  });

  it("throws error when symbol is not a valid locale", () => {
    expect(() => isLocale(Symbol("test"), false, true)).toThrow();
  });

  it("throws error when empty string is not a valid locale", () => {
    expect(() => isLocale("", false, true)).toThrow();
  });

  it("throws error when plain string is not a valid locale", () => {
    expect(() => isLocale("notlocale", false, true)).toThrow();
  });

  it("throws error when locale with lowercase country code is not valid", () => {
    expect(() => isLocale("en-us", false, true)).toThrow();
  });

  it("throws error when locale with uppercase language code is not valid", () => {
    expect(() => isLocale("EN-US", false, true)).toThrow();
  });

  it("throws error when locale without hyphen is not valid", () => {
    expect(() => isLocale("enUS", false, true)).toThrow();
  });

  it("throws error when locale with underscore is not valid", () => {
    expect(() => isLocale("en_US", false, true)).toThrow();
  });

  it("throws error when locale with spaces is not valid", () => {
    expect(() => isLocale("en US", false, true)).toThrow();
  });

  it("throws error when locale that is too short is not valid", () => {
    expect(() => isLocale("en-U", false, true)).toThrow();
  });

  it("throws error when locale that is too long is not valid", () => {
    expect(() => isLocale("en-USA", false, true)).toThrow();
  });

  it("throws error when locale with only language code is not valid", () => {
    expect(() => isLocale("en", false, true)).toThrow();
  });

  it("throws error when locale with trailing hyphen is not valid", () => {
    expect(() => isLocale("en-US-", false, true)).toThrow();
  });

  it("throws error when locale with leading hyphen is not valid", () => {
    expect(() => isLocale("-en-US", false, true)).toThrow();
  });

  it("throws error when locale with double hyphen is not valid", () => {
    expect(() => isLocale("en--US", false, true)).toThrow();
  });

  it("throws error when extended locale is used in basic mode", () => {
    expect(() => isLocale("zh-Hans-CN", false, true)).toThrow();
  });

  it("does not throw error when valid en-US locale is provided", () => {
    expect(() => isLocale("en-US", false, true)).not.toThrow();
  });

  it("does not throw error when valid fr-FR locale is provided", () => {
    expect(() => isLocale("fr-FR", false, true)).not.toThrow();
  });

  it("does not throw error when valid de-DE locale is provided", () => {
    expect(() => isLocale("de-DE", false, true)).not.toThrow();
  });

  it("does not throw error when valid ja-JP locale is provided", () => {
    expect(() => isLocale("ja-JP", false, true)).not.toThrow();
  });

  it("does not throw error when valid zh-CN locale is provided", () => {
    expect(() => isLocale("zh-CN", false, true)).not.toThrow();
  });

  it("does not throw error when valid pt-BR locale is provided", () => {
    expect(() => isLocale("pt-BR", false, true)).not.toThrow();
  });

  // Extended mode tests
  it("throws error when invalid extended locale with wrong script format is provided", () => {
    expect(() => isLocale("zh-HAN-CN", true, true)).toThrow();
  });

  it("throws error when invalid extended locale with lowercase script is provided", () => {
    expect(() => isLocale("zh-hans-CN", true, true)).toThrow();
  });

  it("throws error when invalid extended locale with wrong region format is provided", () => {
    expect(() => isLocale("en-usa", true, true)).toThrow();
  });

  it("throws error when empty string in extended mode is not valid", () => {
    expect(() => isLocale("", true, true)).toThrow();
  });

  it("does not throw error when valid extended locale with script is provided", () => {
    expect(() => isLocale("zh-Hans-CN", true, true)).not.toThrow();
  });

  it("does not throw error when valid extended locale with Latin script is provided", () => {
    expect(() => isLocale("sr-Latn-RS", true, true)).not.toThrow();
  });

  it("does not throw error when valid extended locale with Cyrillic script is provided", () => {
    expect(() => isLocale("sr-Cyrl-RS", true, true)).not.toThrow();
  });

  it("does not throw error when valid extended locale with variant is provided", () => {
    expect(() => isLocale("en-US-x-twain", true, true)).not.toThrow();
  });

  it("does not throw error when valid extended locale with 3-letter language code is provided", () => {
    expect(() => isLocale("cmn-Hans-CN", true, true)).not.toThrow();
  });

  it("does not throw error when valid extended locale with only language is provided", () => {
    expect(() => isLocale("en", true, true)).not.toThrow();
  });

  it("does not throw error when valid extended locale with language and script is provided", () => {
    expect(() => isLocale("az-Latn", true, true)).not.toThrow();
  });

  it("does not throw error when valid basic locale in extended mode is provided", () => {
    expect(() => isLocale("en-US", true, true)).not.toThrow();
  });
});
