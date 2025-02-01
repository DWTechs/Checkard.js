import type { PasswordOptions } from './types';
import { isSymbol } from './primitive';

function isString(s: unknown, required = false): s is string {
  return typeof s === "string" && (required ? !!s : true);
}

function isStringOfLength( s: unknown,
    min = 0, 
    max = 999999999 ): s is string {
  if (isString(s,false)) {
    const l = s.length;
    return l >= min && l <= max;
  }
  return false;
}

function isJson(s: unknown): s is JSON {
  if (!isString(s, true))
    return false;

  try {
    JSON.parse(s);
  } catch (e) {
    return false;
  }
  return true;
}

function isRegex(r: unknown, type = true): r is RegExp {
  if (type)
    return r instanceof RegExp;
  
  try {
    new RegExp(r as RegExp | string);
  } catch (e) {
    return false;
  }
  return true;
  
}

const emailReg = /^(?=[a-z0-9@.!$%&'*+\/=?^_‘{|}~-]{6,254}$)(?=[a-z0-9.!#$%&'*+\/=?^_‘{|}~-]{1,64}@)[a-z0-9!#$%&'*+\/=?^‘{|}~]+(?:[\._-][a-z0-9!#$%&'*+\/=?^‘{|}~]+)*@(?:(?=[a-z0-9-]{1,63}\.)[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?=[a-z0-9-]{2,63}$)[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
function isEmail(e: unknown): e is string {
  return !isSymbol(e) && emailReg.test(String(e).toLowerCase());
}

// function isURL(url: unknown): boolean {

// }

// function isLocale(locale: unknown): boolean {

// }

const ipReg = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
function isIpAddress(i: unknown): i is string {
  return !isSymbol(i) && ipReg.test(String(i));
}

// base64 regex explained : 
// ^: Asserts the position at the start of the string.
// (?:[A-Za-z0-9-_]{4})*:
// - (?: ... ): A non-capturing group that matches the enclosed pattern but does not capture it for back-references.
// - [A-Za-z0-9-_]{4}: Matches exactly 4 characters that can be uppercase letters (A-Z), lowercase letters (a-z), digits (0-9), hyphens (-), or underscores (_).
// - *: Matches 0 or more occurrences of the preceding non-capturing group.
//
// (?:[A-Za-z0-9-]{2}(?:==)?:
// - (?: ... ): Another non-capturing group.
// - [A-Za-z0-9-_]{2}(?:==)?: Matches exactly 2 characters from the set [A-Za-z0-9-_], followed optionally by ==.
// - [A-Za-z0-9-_]{2}: Matches exactly 2 characters from the set.
// - (?:==)?: A non-capturing group that optionally matches ==.
// - |: Alternation operator, meaning "or".
// 
// [A-Za-z0-9-_]{3}=?: Matches exactly 3 characters from the set [A-Za-z0-9-_], followed optionally by =.
// - [A-Za-z0-9-_]{3}: Matches exactly 3 characters from the set.
// - =?: Optionally matches =.
// ?: Matches 0 or 1 occurrence of the preceding non-capturing group.
// $: Asserts the position at the end of the string.
//
// This regular expression validates a Base64 URL-encoded string by ensuring that:
// The string consists of groups of 4 characters from the set [A-Za-z0-9-_].
// Optionally, the string can end with:
// - 2 characters from the set [A-Za-z0-9-_] followed by ==, or
// - 3 characters from the set [A-Za-z0-9-_] followed by =.
// 
// Valid matches:
// - abcd
// - abcdabcd
// - abcdabcdab==
// - abcdabcdabc=
// Invalid matches:
// - abc
// - abcdabc
// - abcdabcdab=
// - abcdabcdabc==

function isBase64(s: unknown, urlEncoded = false): boolean {
  const regex = urlEncoded
    ? /^(?:[A-Za-z0-9-_]{4})*(?:[A-Za-z0-9-_]{2}==|[A-Za-z0-9-_]{3}=)?$/
    : /^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/;
  return isString(s, true) && regex.test(s);
}


// b64Reg regex explained :
// ^ : The caret symbol (^) at the beginning of the pattern asserts the position at the start of the string. 
// This means the pattern will only match if the string starts with the specified characters.

// [A-Za-z0-9\-_] : The square brackets define a character set that includes uppercase letters (A-Z), 
// lowercase letters (a-z), digits (0-9), hyphens (-), and underscores (_). 
// The pattern will match any single character that is within this set.

// + : The plus sign following the character set indicates that the preceding element must appear one or more times.
// This means the string must contain at least one of the specified characters and can contain many.

// = : The equals sign is a literal character that must appear in the string.
// It is not part of a character set or a special regex symbol, 
// so it matches the equals sign character exactly.

// {0,2}: The curly braces specify that the preceding equals sign can appear zero, one, or two times.
// This means the string can end with up to two equals signs, but it is not required to have any.

// $: The dollar sign at the end of the pattern asserts the position at the end of the string.
// This ensures that the entire string must match the pattern from start to finish, 
// with no extra characters before or after.

// In summary, this regex pattern matches strings that start with one or more alphanumeric characters, 
// hyphens, or underscores, and optionally end with up to two equals signs. 
// This type of pattern is often used for validating encoded strings, such as Base64 URL-safe encoded strings, 
// which may include padding characters (=) at the end.

const b64Reg = /^[A-Za-z0-9\-_]+={0,2}$/;
function isJWT(t: unknown): t is string {
  if (!isString(t, true))
    return false;

  const p = t.split('.');
  if (p.length !== 3)
    return false;

  const header = p[0];
  const payload = p[1];
  const signature = p[3];
    
  if (b64Reg.test(header) && b64Reg.test(payload) && b64Reg.test(signature)) {
    try {
      return isJson(atob(header)) && isJson(atob(payload));
    } catch (e) {
      return false;
    }
  }
  return false;
}

const slugReg = /^[^\s-_](?!.*?[-_]{2,})[a-z0-9-\\][^\s]*[^-_\s]$/;
function isSlug(s: unknown): s is string {
  return isString(s, true) && slugReg.test(s);
}

const hexadecimal = /^(#|0x|0h)?[0-9A-F]+$/i;
function isHexadecimal(s: unknown): s is string {
  return isString(s, true) && hexadecimal.test(s);
}

const upperCaseReg = /[A-Z]+/;
function containsUpperCase(s: unknown): s is string {
  return isString(s, true) && upperCaseReg.test(s);
}

const lowerCaseReg = /[a-z]+/;
function containsLowerCase(s: unknown): s is string {
  return isString(s, true) && lowerCaseReg.test(s);
}

const specialReg = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?°`€£§]+/;
function containsSpecialCharacter(s: unknown): s is string {
  return isString(s, true) && specialReg.test(s);
}

const numberReg = /\d/;
const lengthReg = /[^0-9]/g;
function containsNumber(s: unknown, min?: number|null, max?: number|null): s is string {
  if (numberReg.test(s as string)) {
    let isMin = true;
    let isMax = true;
    if (isString(s, true)) {
      if (min)
        isMin = s.replace(lengthReg, '').length >= min;
      if (max)
        isMax = s.replace(lengthReg, '').length <= max;
    } else
      if (min)
        isMin = min <= 1;

    return isMin && isMax;
  }
    
  return false;   
}

const defaultOptions = {
  lowerCase: true,
  upperCase: true,
  number: true,
  specialCharacter: true,
  minLength: 12,
  maxLength: 64,
};

function isValidPassword(s: unknown, options: PasswordOptions = defaultOptions): s is string {
  const o = { ...defaultOptions, ...options };
  if (!isString(s, true)) return false;
  const l = s.length;
  return l >= o.minLength && l <= o.maxLength
    && (o.lowerCase ? containsLowerCase(s) : true)
    && (o.upperCase ? containsUpperCase(s) : true)
    && (o.number ? containsNumber(s, 1, null) : true)
    && (o.specialCharacter ? containsSpecialCharacter(s) : true);
}

export {
  isString,
  isStringOfLength,
  isJson,
  isRegex,
  isEmail,
  isIpAddress,
  isBase64,
  isJWT,
  isSlug,
  isHexadecimal,
  isValidPassword,
  containsUpperCase,
  containsLowerCase,
  containsSpecialCharacter,
  containsNumber
};
