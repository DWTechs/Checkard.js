import type { PasswordOptions } from './types';
import { isNil } from './primitive';
import { isJson } from './nonprimitive';
import { throwError } from './error';


/**
 * Checks if the length of a given string is within the specified range.
 *
 * @param {string | undefined | null} s - The string to check.
 * @param {number} [min=0] - The minimum length of the string (inclusive). Default is 0.
 * @param {number} [max=999999999] - The maximum length of the string (inclusive). Default is 999999999.
 * @param {boolean} [throwErr=false] - If true, throws an error when string length is not within range. If false, returns false.
 * @returns {boolean} `true` if the string length is within the specified range, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the string length is not within the specified range and throwErr is true.
 */
function isStringOfLength(
  s: string | undefined | null,
  min = 0, 
  max = 999999999,
  throwErr: boolean = false
): boolean {

  const l = s?.length;
  
  if (!isNil(l) && l >= min && l <= max)
    return true;
  
  if (throwErr)
    throwError(`string with length in range [${min}, ${max}] (actual length: ${l})`, s);
  
  return false;

}

const emailReg = /^(?=[a-z0-9@.!$%&'*+\/=?^_‘{|}~-]{6,254}$)(?=[a-z0-9.!#$%&'*+\/=?^_‘{|}~-]{1,64}@)[a-z0-9!#$%&'*+\/=?^‘{|}~]+(?:[\._-][a-z0-9!#$%&'*+\/=?^‘{|}~]+)*@(?:(?=[a-z0-9-]{1,63}\.)[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?=[a-z0-9-]{2,63}$)[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
/**
 * Checks if the given string is a valid email address.
 *
 * @param {string | undefined | null} s - The string to be checked.
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not a valid email. If false, returns false.
 * @returns {boolean} `true` if the string is a valid email address, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not a valid email address and throwErr is true.
 */
function isEmail(s: string | undefined | null, throwErr: boolean = false): boolean {
  
  if (s && emailReg.test(String(s).toLowerCase()))
    return true;
  
  if (throwErr)
    throwError('valid email address', s);
  
  return false;

}

// function isURL(url: unknown): boolean {

// }

// function isLocale(locale: unknown): boolean {

// }

const ipReg = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
/**
 * Checks if the given string is a valid IP address.
 *
 * @param {string | undefined | null} s - The string to be checked.
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not a valid IP address. If false, returns false.
 * @returns {boolean} `true` if the string is a valid IP address, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not a valid IP address and throwErr is true.
 */
function isIpAddress(s: string | undefined | null, throwErr: boolean = false): boolean {
  
  if (s && ipReg.test(String(s)))
    return true;
  
  if (throwErr)
    throwError('valid IP address', s);
  
  return false;
  
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
// - ''
// - abc
// - abcdabc
// - abcdabcdab=
// - abcdabcdabc==
const b64UrlEncoded = /^[A-Za-z0-9-_]+$/;
const b64 =  /^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/;
/**
 * Checks if a given string is a valid Base64 encoded string.
 *
 * @param {string | undefined | null} s - The string to check.
 * @param {boolean} [urlEncoded=false] - Optional. If true, checks for URL-safe Base64 encoding. Defaults to false.
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not valid Base64. If false, returns false.
 * @returns {boolean} True if the string is a valid Base64 encoded string, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not valid Base64 and throwErr is true.
 */
function isBase64(s: string | undefined | null, urlEncoded = false, throwErr: boolean = false): boolean {
  const regex = urlEncoded ? b64UrlEncoded : b64;
  
  if (s && regex.test(s))
    return true;
  
  if (throwErr) {
    const encodingType = urlEncoded ? 'URL-safe Base64' : 'Base64';
    throwError(`valid ${encodingType} encoded string`, s);
  }
  
  return false;
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
 * @param {string | undefined | null} s - The string to check.
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not a valid JWT. If false, returns false.
 * @returns {boolean} `true` if the string is a valid JWT, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not a valid JWT and throwErr is true.
 */
function isJWT(s: string | undefined | null, throwErr: boolean = false): boolean {
  
  if (s) {
    const p = s.split('.');
    if (p.length === 3) {
      const [header, payload, signature] = p;
      if (b64Reg.test(header) && b64Reg.test(payload) && b64Reg.test(signature)) {
        try {
          if (isJson(atob(header)) && isJson(atob(payload)))
            return true;
        } catch (e) {
          if (throwErr)
            throwError('valid JWT', s);
          return false;
        }
      }
    }
  }

  if (throwErr)
    throwError('valid JWT', s);
  
  return false;

}

const slugReg = /^[^\s-_](?!.*?[-_]{2,})[a-z0-9-\\][^\s]*[^-_\s]$/;
/**
 * Checks if the given string is a valid slug.
 * 
 * A slug is typically a URL-friendly string that contains only lowercase letters, numbers, and hyphens.
 * 
 * @param {string | undefined | null} s - The string to check.
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not a valid slug. If false, returns false.
 * @returns {boolean} `true` if the string is a valid slug, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not a valid slug and throwErr is true.
 */
function isSlug(s: string | undefined | null, throwErr: boolean = false): boolean {
  
  if (s && slugReg.test(s))
    return true;
  
  if (throwErr)
    throwError('valid slug', s);
  
  return false;

}

const hexadecimal = /^(#|0x|0h)?[0-9A-F]+$/i;
/**
 * Checks if the given string is a valid hexadecimal number.
 *
 * @param {string | undefined | null} s - The string to check.
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not a valid hexadecimal number. If false, returns false.
 * @returns {boolean} True if the string is a valid hexadecimal number, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not a valid hexadecimal number and throwErr is true.
 */
function isHexadecimal(s: string | undefined | null, throwErr: boolean = false): boolean {
  
  if (s && hexadecimal.test(s))
    return true;
  
  if (throwErr)
    throwError('hexadecimal number', s);
  
  return false;

}

const upperCaseReg = /[A-Z]+/;
/**
 * Checks if the given string contains any uppercase letters.
 *
 * @param {string} s - The string to check.
 * @param {boolean} [throwErr=false] - If true, throws an error when string does not contain uppercase letters. If false, returns false.
 * @returns {boolean} `true` if the string contains at least one uppercase letter, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the string does not contain uppercase letters and throwErr is true.
 */
function containsUpperCase(s: string, throwErr: boolean = false): boolean {
  
  if (upperCaseReg.test(s))
    return true;
  
  if (throwErr)
    throwError('string containing uppercase letters', s);
  
  return false;

}

const lowerCaseReg = /[a-z]+/;
/**
 * Checks if the given string contains at least one lowercase letter.
 *
 * @param {string} s - The string to check.
 * @param {boolean} [throwErr=false] - If true, throws an error when string does not contain lowercase letters. If false, returns false.
 * @returns {boolean} `true` if the string contains at least one lowercase letter, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the string does not contain lowercase letters and throwErr is true.
 */
function containsLowerCase(s: string, throwErr: boolean = false): boolean {
  
  if (lowerCaseReg.test(s))
    return true;
  
  if (throwErr)
    throwError('string containing lowercase letters', s);
  
  return false;

}

const specialReg = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?°`€£§]+/;
/**
 * Checks if the given string contains any special characters.
 *
 * @param {string} s - The string to be checked.
 * @param {boolean} [throwErr=false] - If true, throws an error when string does not contain special characters. If false, returns false.
 * @returns {boolean} `true` if the string contains special characters, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the string does not contain special characters and throwErr is true.
 */
function containsSpecialCharacter(s: string, throwErr: boolean = false): boolean {
  
  if (specialReg.test(s))
    return true;
  
  if (throwErr)
    throwError('string containing special characters', s);
  
  return false;

}

const digit = /\d/; // Matches any digit
const nonDigit = /[^0-9]/g; // Matches any character that is not a digit
/**
 * Checks if a given string contains a specified number of digits.
 *
 * @param {string} s - The string to check.
 * @param {number} [min=1] - The minimum number of digits required in the string. Defaults to 1.
 * @param {number|null} [max=null] - The maximum number of digits allowed in the string. If not provided, there is no upper limit.
 * @param {boolean} [throwErr=false] - If true, throws an error when string does not contain the required number of digits. If false, returns false.
 * @returns {boolean} `true` if the string contains the required number of digits, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the string does not contain the required number of digits and throwErr is true.
 */
function containsNumber(s: string, min = 1, max: number|null = null, throwErr: boolean = false): boolean {
  
  if (!digit.test(s)) {
    if (throwErr) {
      const range = max ? `[${min}, ${max}]` : `[${min}, ∞)`;
      throwError(`string containing ${range} digits`, s);
    }
    return false;
  }

  const nums = s.replace(nonDigit, '');
  
  if (!(nums.length >= min)) {
    if (throwErr) {
      const range = max ? `[${min}, ${max}]` : `[${min}, ∞)`;
      throwError(`string containing ${range} digits (actual: ${nums.length})`, s);
    }
    return false;
  }
  
  if (max && !(nums.length <= max)) {
    if (throwErr)
      throwError(`string containing [${min}, ${max}] digits (actual: ${nums.length})`, s);
    return false;
  }
    
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
 * @param {PasswordOptions} [options=defaultOptions] - Optional configuration object to specify password validation criteria.
 * @param {boolean} [throwErr=false] - If true, throws an error when password does not meet criteria. If false, returns false.
 * @returns {boolean} `true` if the password meets all the specified criteria, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the password does not meet the specified criteria and throwErr is true.
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
function isValidPassword(s: string, options: PasswordOptions = defaultOptions, throwErr: boolean = false): boolean {
  const o = { ...defaultOptions, ...options };
  const l = s.length;
  
  // Check length
  if (!(l >= o.minLength && l <= o.maxLength)) {
    if (throwErr)
      throwError(`password with length in range [${o.minLength}, ${o.maxLength}] (actual length: ${l})`, s);
    return false;
  }
  
  // Check lowercase requirement
  if (o.lowerCase && !containsLowerCase(s)) {
    if (throwErr)
      throwError('password containing lowercase letters', s);
    return false;
  }
  
  // Check uppercase requirement
  if (o.upperCase && !containsUpperCase(s)) {
    if (throwErr)
      throwError('password containing uppercase letters', s);
    return false;
  }
  
  // Check number requirement
  if (o.number && !containsNumber(s, 1, null)) {
    if (throwErr)
      throwError('password containing numbers', s);
    return false;
  }
  
  // Check special character requirement
  if (o.specialCharacter && !containsSpecialCharacter(s)) {
    if (throwErr)
      throwError('password containing special characters', s);
    return false;
  }
  
  return true;
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
