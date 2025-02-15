import type { PasswordOptions } from './types';
import { isJson } from './nonprimitive';


/**
 * Checks if the length of a given string is within the specified range.
 *
 * @param {string} s - The string to check.
 * @param {number} [min=0] - The minimum length of the string (inclusive). Default is 0.
 * @param {number} [max=999999999] - The maximum length of the string (inclusive). Default is 999999999.
 * @returns {boolean} `true` if the string length is within the specified range, otherwise `false`.
 */
function isStringOfLength(
  s: string,
  min = 0, 
  max = 999999999 
): boolean {
  const l = s.length;
  return l >= min && l <= max;
}

const emailReg = /^(?=[a-z0-9@.!$%&'*+\/=?^_‘{|}~-]{6,254}$)(?=[a-z0-9.!#$%&'*+\/=?^_‘{|}~-]{1,64}@)[a-z0-9!#$%&'*+\/=?^‘{|}~]+(?:[\._-][a-z0-9!#$%&'*+\/=?^‘{|}~]+)*@(?:(?=[a-z0-9-]{1,63}\.)[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?=[a-z0-9-]{2,63}$)[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
/**
 * Checks if the given string is a valid email address.
 *
 * @param {string} s - The string to be checked.
 * @returns {boolean} `true` if the string is a valid email address, otherwise `false`.
 */
function isEmail(s: string): boolean {
  return emailReg.test(String(s).toLowerCase());
}

// function isURL(url: unknown): boolean {

// }

// function isLocale(locale: unknown): boolean {

// }

const ipReg = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
/**
 * Checks if the given string is a valid IP address.
 *
 * @param {string} s - The string to be checked.
 * @returns {boolean} `true` if the string is a valid IP address, otherwise `false`.
 */
function isIpAddress(s: string): boolean {
  return ipReg.test(String(s));
}

// base64 (non url safe ) regex explained : 
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
const b64UrlEncoded = /^[A-Za-z0-9-_]+$/;
const b64 =  /^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/;
/**
 * Checks if a given string is a valid Base64 encoded string.
 *
 * @param {string} s - The string to check.
 * @param {boolean} [urlEncoded=false] - Optional. If true, checks for URL-safe Base64 encoding. Defaults to false.
 * @returns {boolean} True if the string is a valid Base64 encoded string, false otherwise.
 */
function isBase64(s: string, urlEncoded = false): boolean {
  const regex = urlEncoded ? b64UrlEncoded : b64;
  return regex.test(s);
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
/**
 * Checks if a given string is a valid JSON Web Token (JWT).
 *
 * A valid JWT consists of three parts separated by dots ('.'):
 * - Header
 * - Payload
 * - Signature
 *
 * Each part must be a valid Base64 encoded string. Additionally, the header and payload
 * must be valid JSON objects when decoded.
 *
 * @param {string} s - The string to check.
 * @returns {boolean} `true` if the string is a valid JWT, otherwise `false`.
 */
function isJWT(s: string): boolean {
  if (!s)
    return false;
  
  const p = s.split('.');
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
/**
 * Checks if the given string is a valid slug.
 * 
 * A slug is typically a URL-friendly string that contains only lowercase letters, numbers, and hyphens.
 * 
 * @param {string} s - The string to check.
 * @returns {boolean} `true` if the string is a valid slug, `false` otherwise.
 */
function isSlug(s: string): boolean {
  return s ? slugReg.test(s) : false;
}

const hexadecimal = /^(#|0x|0h)?[0-9A-F]+$/i;
/**
 * Checks if the given string is a valid hexadecimal number.
 *
 * @param {string} s - The string to check.
 * @returns {boolean} True if the string is a valid hexadecimal number, false otherwise.
 */
function isHexadecimal(s: string): boolean {
  return hexadecimal.test(s);
}

const upperCaseReg = /[A-Z]+/;
/**
 * Checks if the given string contains any uppercase letters.
 *
 * @param {string} s - The string to check.
 * @returns {boolean} `true` if the string contains at least one uppercase letter, otherwise `false`.
 */
function containsUpperCase(s: string): boolean {
  return upperCaseReg.test(s);
}

const lowerCaseReg = /[a-z]+/;
/**
 * Checks if the given string contains at least one lowercase letter.
 *
 * @param {string} s - The string to check.
 * @returns {boolean} `true` if the string contains at least one lowercase letter, otherwise `false`.
 */
function containsLowerCase(s: string): boolean {
  return lowerCaseReg.test(s);
}

const specialReg = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?°`€£§]+/;
/**
 * Checks if the given string contains any special characters.
 *
 * @param {string} s - The string to be checked.
 * @returns {boolean} `true` if the string contains special characters, otherwise `false`.
 */
function containsSpecialCharacter(s: string): boolean {
  return specialReg.test(s);
}

const digit = /\d/; // Matches any digit
const nonDigit = /[^0-9]/g; // Matches any character that is not a digit
/**
 * Checks if a given string contains a specified number of digits.
 *
 * @param {string} s - The string to check.
 * @param {number} [min=1] - The minimum number of digits required in the string. Defaults to 1.
 * @param {number|null} [max=null] - The maximum number of digits allowed in the string. If not provided, there is no upper limit.
 * @returns {boolean} `true` if the string contains the required number of digits, otherwise `false`.
 */
function containsNumber(s: string, min = 1, max: number|null = null): boolean {
  
  if (!digit.test(s)) 
    return false;

  const nums = s.replace(nonDigit, '');
  if (!(nums.length >= min))
    return false;  
  if (max && !(nums.length <= max))
    return false;
    
  return true;   
}

const defaultOptions = {
  lowerCase: true,
  upperCase: true,
  number: true,
  specialCharacter: true,
  minLength: 12,
  maxLength: 64,
};

/**
 * Checks if a given password string meets the specified validation criteria.
 *
 * @param {string} s - The password string to validate.
 * @param {PasswordOptions} [options=PwdDefaultOptions] - Optional configuration object to specify password validation criteria.
 * @returns {boolean} `true` if the password meets all the specified criteria, `false` otherwise.
 *
 * @example
 * ```typescript
 * const options = {
 *   minLength: 8,
 *   maxLength: 20,
 *   lowerCase: true,
 *   upperCase: true,
 *   number: true,
 *   specialCharacter: true
 * };
 * const isValid = isValidPassword('Password123!', options);
 * console.log(isValid); // true
 * ```
 */
function isValidPassword(s: string, options: PasswordOptions = defaultOptions): boolean {
  const o = { ...defaultOptions, ...options };
  const l = s.length;
  return l >= o.minLength && l <= o.maxLength
    && (o.lowerCase ? containsLowerCase(s) : true)
    && (o.upperCase ? containsUpperCase(s) : true)
    && (o.number ? containsNumber(s, 1, null) : true)
    && (o.specialCharacter ? containsSpecialCharacter(s) : true);
}

export {
  isStringOfLength,
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
