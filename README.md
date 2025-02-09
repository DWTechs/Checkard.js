
[![License: MIT](https://img.shields.io/npm/l/@dwtechs/checkard.svg?color=brightgreen)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/%40dwtechs%2Fcheckard.svg)](https://www.npmjs.com/package/@dwtechs/checkard)
[![last version release date](https://img.shields.io/github/release-date/DWTechs/Checkard.js)](https://www.npmjs.com/package/@dwtechs/checkard)
![Jest:coverage](https://img.shields.io/badge/Jest:coverage-100%25-brightgreen.svg)
[![minified size](https://img.shields.io/bundlephobia/min/@dwtechs/checkard?color=brightgreen)](https://www.npmjs.com/package/@dwtechs/checkard)

- [Synopsis](#synopsis)
- [Support](#support)
- [Installation](#installation)
- [Usage](#usage)
  - [ES6](#es6)
  - [CommonJS](#commonjs)
  - [IIFE](#iife)
- [API Reference](#api-reference)
- [Contributors](#contributors)
- [Stack](#stack)


## Synopsis

**[Checkard.js](https://github.com/DWTechs/Checkard.js)** is an open source dynamic type checking library for Javascript, Typescript and Node.js to test if a given variable is what it is supposed to be (
Function, object, ascii, boolean, integer, string, json, email...)

- No dependency
- Very lightweight
- Thoroughly tested
- Works in Javascript, Typescript and Node.js
- Can be used as CommonJS module, EcmaScrypt module or IIFE 
- Old browsers support


## Support

- android: 2.2,
- chrome: 34,
- edge: 12,
- firefox: 11,
- ie: 9,
- ios: 4.2,
- opera: 28,
- safari: 5.1,
- samsung: 4,
- Node.js: 14

Those are the oldest targeted versions. The library should work properly on older devices but we do not support it officially.  


## Installation

```bash
$ npm i @dwtechs/checkard
```


## Usage


### ES6 / TypeScript

```javascript
import { isFunction, isArray } from "@dwtechs/checkard";

if (isFunction(variable)) {
  //variable is a function
}

if (!isArray(variable, '=', 2)) {
  //variable is not an array of length 2
}

if (!isString(firstName))
    return next({ status: 400, msg: "Missing first name" });
if (!isString(lastName))
    return next({ status: 400, msg: "Missing last name" });

```


### CommonJS

```javascript
const ch = require("@dwtechs/checkard");
// you may need to use "require("@dwtechs/checkard/dist/ch"); with Node.js old versions"

if (ch.isFunction(variable)) {
  //variable is a function
}

if (!ch.isArray(variable, '=', 2)) {
  //variable is not an array of length 2
}

if (!ch.isString(firstName))
    return next({ status: 400, msg: "Missing first name" });
if (!ch.isString(lastName))
    return next({ status: 400, msg: "Missing last name" });

```


### IIFE

```html
<script src="node_modules/@dwtechs/checkard/dist/ch.iife.min.js"></script>
```

```javascript
if (ch.isFunction(variable)) {
  //variable is a function
}

if (!ch.isArray(variable, '=', 2)) {
  //variable is not an array of length 2
}
```


## API Reference


### Types

```javascript

type Comparator = '='|'<'|'>'|'<='|'>=';

type PasswordOptions = {
  lowerCase: boolean,
  upperCase: boolean,
  number: boolean,
  specialCharacter: boolean,
  maxLength: number,
  minLength: number
}

```


### Primitive

primitive methods accept any variable as parameter in order to check its type.

```javascript

/**
 * Checks if the given value is of type boolean.
 *
 * @param v - The value to check.
 * @returns True if the value is a boolean, otherwise false.
 */
isBoolean(v: unknown): v is boolean {}

/**
 * Checks if the given value is a number.
 * If typeCheck = false values like '4', '0', '8e4', '+true', '0x44' return true
 * @param v - The value to check.
 * @param type - A boolean indicating whether to use strict type checking. 
 *               If true, the function checks if the value is strictly equal to its number representation.
 *               If false, the function uses a custom `isNum` function for checking.
 * @returns A boolean indicating whether the value is a number.
 */
isNumber(v: unknown, type?: boolean = true): v is number {}

/**
 * Checks if the given value is a string and optionally compares its length.
 *
 * @param v - The value to check.
 * @param comparator - An optional comparator function to compare the string length.
 * @param limit - An optional limit to compare the string length against.
 * @returns `true` if the value is a string and meets the comparator and limit conditions, otherwise `false`.
 */
isString(v: unknown, required?: boolean = false): v is string {}

/**
 * Checks if the provided value is a symbol.
 *
 * @param v - The value to check.
 * @returns True if the value is a symbol, otherwise false.
 */
isSymbol(v: unknown): v is symbol {}

/**
 * Checks if the given value is `null` or `undefined`.
 *
 * @param v - The value to check.
 * @returns `true` if the value is `null` or `undefined`, otherwise `false`.
 */
isNil(v: unknown): v is null | undefined {}

/**
 * Checks if the given value is `null`.
 *
 * @param v - The value to check.
 * @returns `true` if the value is `null`, otherwise `false`.
 */
isNull(v: unknown): v is null {}

/**
 * Checks if the given value is `undefined`.
 *
 * @param v - The value to check.
 * @returns `true` if the value is `undefined`, otherwise `false`.
 */
isUndefined(v: unknown): v is undefined {}

```

Usage example for isString method: 

```javascript

import { isString } from "@dwtechs/checkard";

const str = 'dog';

if (isString(str)) {
  // check if str is a string
}

if (isString(str, '=', 2)) {
  // check if str is an string of length 2
}

if (isString(str, '>=', 1)) {
  // check if str is a string of length greater than or equal to 1
}

```

Note that if **isString()** returns false Typescript will consider str is not a string.  
So if you need to check if str is of length x but needs to be considered as string even if length is not x you can do it like this:

```javascript

import { isString, isStringOfLength } from "@dwtechs/checkard";

const str = 'dog';

if (isString(str) && !isStringOfLength(str, 4, 4)) {
  // string is of type string even if length is not 4
}

```

### Non-primitive

Non-primitive methods accept any variable as parameter in order to check its type.

```javascript

/**
 * Checks if the given value is an object and optionally if it is non-empty.
 *
 * @template T - The expected type of the object.
 * @param {unknown} v - The value to check.
 * @param {boolean} [empty=false] - If true, the function will also check if the object is non-empty.
 * @returns {o is object & T} - Returns true if the value is an object (and non-empty if specified), otherwise false.
 */
isObject<T = unknown>(o: unknown, empty?: boolean = false): o is object & T {}

/**
 * Checks if the given value is an array and optionally compares its length.
 *
 * @template T - The type of elements in the array.
 * @param v - The value to check.
 * @param comparator - An optional comparator function to compare the array length.
 * @param limit - An optional limit to compare the array length against.
 * @returns `true` if the value is an array and meets the comparator and limit conditions, otherwise `false`.
 */
isArray<T = unknown>(
    v: unknown, 
    comparator?: Comparator | null, 
    limit?: number | null
  ): v is T[] {}

/**
 * Checks if the given input is a valid JSON string.
 *
 * @param v - The input to check.
 * @returns `true` if the input is a valid JSON string, otherwise `false`.
 */
isJson(v: unknown): v is JSON {} 

/**
 * Checks if the given value is a regular expression.
 *
 * @param v - The value to check.
 * @param type - If true, uses `instanceof` to check if `r` is a RegExp. If false, attempts to create a new RegExp from `r`.
 * @returns `true` if `r` is a RegExp or can be converted to a RegExp, otherwise `false`.
 */
isRegex(v: unknown, type?: boolean = true): v is RegExp {} 

/**
 * Checks if the given value is a valid Date object.
 *
 * @param v - The value to check.
 * @returns True if the value is a Date object and not NaN, otherwise false.
 */
isDate(v: unknown): v is Date {}

/**
 * Checks if the provided value is a function.
 *
 * @param v - The value to check.
 * @returns A boolean indicating whether the value is a function.
 */
isFunction(v: unknown): v is (...args: unknown[]) => unknown {}

```

Usage example for isArray method: 

```javascript

import { isArray } from "@dwtechs/checkard";

let arr = ['dog','cat','bird'];

if (isArray(arr)) {
  // check if arr is an array
}

if (isArray(arr, '=', 2)) {
  // check if arr is an array of length 2
}

if (isArray(arr, '>=', 1)) {
  // check if arr is an array of length greater than or equal to 1
}

```

Note that if **isArray()** returns false Typescript will consider arr is not an array.  
So if you need to check arr is of length x but needs to be considered as array even if length is not x you can do it like this:

```javascript

import { isArray, isArrayOfLength } from "@dwtechs/checkard";

let arr = ['dog','cat','bird'];

if (isArray(arr) && !isArrayOfLength(arr, 4, 4)) {
  // array is of type array even if length is not 4
}

```

### Number

```javascript

/**
 * Checks if a given number is an integer.
 *
 * @param n - The number to check.
 * @param type - A boolean indicating whether to use strict equality (===) or loose equality (==) for the comparison. Defaults to true (strict equality).
 * @returns A boolean indicating whether the number is an integer.
 */
isInteger(n: number, type?: boolean = true): boolean {}

/**
 * Checks if a given number is a floating-point number.
 *
 * @param n - The number to check.
 * @param type - A boolean indicating whether to use strict equality (default is true).
 * @returns A boolean indicating whether the number is a floating-point number.
 */
isFloat(n: number, type?: boolean = true): boolean {}

/**
 * Checks if a given number is even.
 *
 * @param n - The number to check.
 * @param type - A boolean flag to specify the type of check (default is true).
 * @returns `true` if the number is even and an integer, `false` otherwise.
 */
isEven(n: number, type?: boolean = true): boolean {}

/**
 * Determines if a given number is odd.
 *
 * @param n - The number to check.
 * @param type - An optional boolean parameter to specify the type of check. Default is true.
 * @returns A boolean indicating whether the number is odd.
 */
isOdd(n: number, type?: boolean = true): boolean {}

/**
 * Checks if a given number is zero.
 *
 * @param n - The number to check.
 * @param type - A boolean indicating the type of comparison to use.
 *               If true, uses strict equality (===).
 *               If false, uses loose equality (==).
 *               Defaults to true.
 * @returns True if the number is zero based on the specified comparison type, otherwise false.
 */
isOrigin(n: number, type?: boolean = true): boolean {}

/**
 * Checks if a given number is positive.
 *
 * @param n - The number to check.
 * @param type - An optional boolean parameter to specify the type check (default is true).
 * @returns True if the number is positive and passes the type check, otherwise false.
 */
isPositive(n: number, type?: boolean = true): boolean {}

/**
 * Checks if a given number is negative.
 *
 * @param n - The number to check.
 * @param type - A boolean flag to indicate if the type should be checked. Defaults to true.
 * @returns True if the number is negative and the type check passes, otherwise false.
 */
isNegative(n: number, type?: boolean = true): boolean {}

/**
 * Checks if a given number is a power of two.
 *
 * @param n - The number to check.
 * @param type - An optional boolean parameter. Default is true.
 * @returns A boolean indicating whether the number is a power of two.
 */
isPowerOfTwo(n: number, type?: boolean = true): boolean {}

/**
 * Checks if a given number is an ASCII code.
 *
 * @param n - The number to check.
 * @param ext - Optional boolean to include extended ASCII range (0-255). Defaults to true.
 * @returns `true` if the number is a valid ASCII code, `false` otherwise.
 */
isAscii(n: number, ext?: boolean = true): boolean {}

```

Number methods take a number as parameter.  
Use **isNumber()** before any number method if you are not sure about the variable type you will receive.

Example : 

```javascript

import { isNumber, isInteger } from "@dwtechs/checkard";

let value: number | null | undefines = 0;

if (isNumber(value) && isInteger(value)) {
  // value is an integer
}

```


### Valid number

Valid number methods take a number as parameter and check of the number lies in the right interval

```javascript

/**
 * Checks if a given value is a valid number within given range.
 *
 * @param n - value to check
 * @param min - minimal value of the range
 * @param max - maximal value of the range
 * @param type - do type check
 * @returns true if the value is a valid number, false otherwise
 */
isValidNumber(n: unknown, 
              min?: number = -999999999, 
              max?: number = 999999999, 
              type?: boolean = true ): boolean {}

/**
 * Checks if a given value is a valid integer within given range.
 *
 * @param n - value to check
 * @param min - minimal value of the range
 * @param max - maximal value of the range
 * @param type - do type check
 * @returns true if the value is a valid integer, false otherwise
 */
isValidInteger(n: unknown, 
               min?: number = -999999999, 
               max?: number = 999999999, 
               type?: boolean = true ): boolean {}

/**
 * Checks if a given value is a valid float within given range.
 *
 * @param n - value to check
 * @param min - minimal value of the range
 * @param max - maximal value of the range
 * @param type - do type check
 * @returns true if the value is a valid float, false otherwise
 */
isValidFloat( n: unknown, 
              min?: number = -999999999.9, 
              max?: number = 999999999.9, 
              type?: boolean = true ): boolean {}

```

Valid number methods take a number as parameter.  
Use **isNumber()** before any valid number method if you are not sure about the variable type you will receive.

Example : 

```javascript

import { isNumber, isValidInteger } from "@dwtechs/checkard";

let value: number | null | undefines = 0;

if (isNumber(value) && isValidInteger(value, 2, 12)) {
  // value is an integer between 2 and 12
}

```


### String

```javascript

/**
 * Checks if the length of a given string is within the specified range.
 *
 * @param s - The string to check.
 * @param min - The minimum length of the string (inclusive). Default is 0.
 * @param max - The maximum length of the string (inclusive). Default is 999999999.
 * @returns `true` if the string length is within the specified range, otherwise `false`.
 */
isStringOfLength( s: string, 
                  min?: number = 0, 
                  max?: number = 999999999 ): boolean {}

/**
 * Checks if the given string is a valid email address.
 *
 * @param s - The string to be checked.
 * @returns `true` if the string is a valid email address, otherwise `false`.
 */
isEmail(s: string): boolean {}

/**
 * Checks if the given string is a valid IP address.
 *
 * @param s - The string to be checked.
 * @returns `true` if the string is a valid IP address, otherwise `false`.
 */
isIpAddress(s: string): boolean {}

/**
 * Checks if a given string is a valid Base64 encoded string.
 *
 * @param s - The string to check.
 * @param urlEncoded - Optional. If true, checks for URL-safe Base64 encoding. Defaults to false.
 * @returns True if the string is a valid Base64 encoded string, false otherwise.
 */
isBase64(s: string, urlEncoded?: boolean = false): boolean {}

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
 * @param s - The string to check.
 * @returns `true` if the string is a valid JWT, otherwise `false`.
 */
isJWT(s: string): boolean {}

/**
 * Checks if the given string is a valid slug.
 * 
 * A slug is typically a URL-friendly string that contains only lowercase letters, numbers, and hyphens.
 * 
 * @param s - The string to check.
 * @returns `true` if the string is a valid slug, `false` otherwise.
 */
isSlug(s: string): boolean {}

/**
 * Checks if the given string is a valid hexadecimal number.
 *
 * @param s - The string to check.
 * @returns True if the string is a valid hexadecimal number, false otherwise.
 */
isHexadecimal(s: string): boolean {}

const PwdDefaultOptions = {
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
 * @param s - The password string to validate.
 * @param options - Optional configuration object to specify password validation criteria.
 * @returns `true` if the password meets all the specified criteria, `false` otherwise.
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
isValidPassword(s: string, options: PasswordOptions = PwdDefaultOptions): boolean {}

/**
 * Checks if the given string contains any uppercase letters.
 *
 * @param s - The string to check.
 * @returns `true` if the string contains at least one uppercase letter, otherwise `false`.
 */
containsUpperCase(s: string): boolean {}

/**
 * Checks if the given string contains at least one lowercase letter.
 *
 * @param s - The string to check.
 * @returns `true` if the string contains at least one lowercase letter, otherwise `false`.
 */
containsLowerCase(s: string): boolean {}

/**
 * Checks if the given string contains any special characters.
 *
 * @param s - The string to be checked.
 * @returns `true` if the string contains special characters, otherwise `false`.
 */
containsSpecialCharacter(s: string): boolean {}

/**
 * Checks if a given string contains a specified number of digits.
 *
 * @param s - The string to check.
 * @param min - The minimum number of digits required in the string. Defaults to 1.
 * @param max - The maximum number of digits allowed in the string. If not provided, there is no upper limit.
 * @returns `true` if the string contains the required number of digits, otherwise `false`.
 */
containsNumber(s: string, min: number = 1, max?: number|null): boolean {}

```

String methods take a string as parameter.  
Use **isString()** method before any string method if you are not sure about the variable type you will receive.

Example : 

```javascript

import { isString, isEmail } from "@dwtechs/checkard";

if (isString(value) && isEmail(value)) {
  // value is an email
}

```

Usage example for isValidPassword: 

```javascript

import { isValidPassword } from "@dwtechs/checkard";

const PwdOptions = {
  lowerCase: true,
  upperCase: true,
  number: true,
  specialCharacter: false,
  minLength: 12,
  maxLength: 16,
};
const password = 'teSt1234';

if (isValidPassword(password, PwdOptions)) {
  // check if password is valid compared to PwdOptions
}

```


### Date

```javascript

/**
 * Checks if a given date is valid within a specified range.
 *
 * @param {Date} d - The date to be validated.
 * @param {Date} [min=minDate] - The minimum allowable date. Defaults to `minDate`.
 * @param {Date} [max=maxDate] - The maximum allowable date. Defaults to `maxDate`.
 * @returns {boolean} `true` if the date is valid and within the specified range, otherwise `false`.
 */
isValidDate(
    d: unknown, 
    min?: Date = new Date('1/1/1900'), 
    max?: Date = new Date('1/1/2200')
  ): boolean {}

/**
 * Checks if the given number is a valid timestamp.
 *
 * @param t - The number to check.
 * @param type - An optional boolean parameter to verify the type of t. Defaults to true.
 * @returns A boolean indicating whether the number is a timestamp.
 */
isTimestamp(t: unknown, type?: boolean = true): boolean {}

/**
 * Checks if a given timestamp is valid within a specified range.
 *
 * @param t - The timestamp to validate.
 * @param min - The minimum allowed timestamp (default is -2208989361000,eg 1/1/1900).
 * @param max - The maximum allowed timestamp (default is 7258114800000, eg 1/1/2200).
 * @param type - A boolean indicating the type of timestamp (default is true).
 * @returns `true` if the timestamp is valid and within the specified range, otherwise `false`.
 */
isValidTimestamp(
    t: unknown, 
    min?: number = -2208989361000, 
    max?: number = 7258114800000, 
    type?: boolean = true
  ): boolean {} 

```

Date methods take a date as parameter
Use isDate() method before any date method if you are not sure about the type of the variable is date

Example : 

```javascript

import { isDate, isValidDate } from "@dwtechs/checkard";

if (isNumber(value) && isEmail(value)) {
  // check if any value is an email
}

```


### Array

```javascript

/**
 * Checks if the length of an array is within the specified range.
 *
 * @template T - The type of elements in the array.
 * @param {Array<T>} a - The array to check.
 * @param {number} [min=0] - The minimum length of the array (inclusive).
 * @param {number} [max=999999999] - The maximum length of the array (inclusive).
 * @returns {boolean} - Returns `true` if the array length is within the specified range, otherwise `false`.
 */
isArrayOfLength(
    a: unknown, 
    min = 0, 
    max = 999999999): boolean {}

/**
 * Checks if a value is present in an array starting from a specified index.
 *
 * @param a - The array to search within.
 * @param v - The value to search for.
 * @param from - The index to start the search from. Defaults to 0.
 * @returns `true` if the value is found in the array, otherwise `false`.
 */
isIn(
    a: unknown[], 
    v: unknown, 
    from?: number = 0
  ): boolean {}

```

Usage example : 

```javascript

import { isIn } from "@dwtechs/checkard";

// an array of restricted values
const levels = [ "error", "warn", "info", "debug" ];

// Basic usage : 
console.log(isIn("debug", levels)); // true
console.log(isIn("debag", levels)); // false

// Typical usage : 
const defaultLvl = "warn";
function setLevel(level: Levels): Levels {
  return isIn(level, levels) ? level : defaultLvl;
}
let lvl = setLevel("error"); // lvl = "error"
let lvl = setLevel("infos"); // lvl = "error"

```


### Object

```javascript

/**
 * Checks if a given property exists on an object.
 * own: boolean - whether to check inherited properties only
 * enumerable: boolean - whether to check enumerable properties only
 *
 * @template K - The type of the property key.
 * @param obj - The object to check the property on.
 * @param k - The property key to check for.
 * @param own - If true, checks if the property is an own property of the object. Defaults to true.
 * @param enumerable - If true, checks if the property is enumerable. Defaults to true.
 * @returns True if the property exists on the object based on the specified conditions, otherwise false.
 */
isProperty(
    obj: { [key: string]: unknown },
    k: unknown,
    own: boolean = true,
    enumerable: boolean = true
): boolean // obj is Record<K, { [key: PropertyKey]: unknown }>

```

Usage example : 

```javascript

import { isProperty } from "@dwtechs/checkard";

// an object to describe the custom type.
const levels = {
  error: 0,
  warn: 1,
  info: 2,
  debug: 3,
};

// Basic usage : 
console.log(isProperty("debug", levels)); // true
console.log(isProperty("debag", levels)); // false

```


### Html

```javascript

/**
 * Checks if the given value is an HTML element.
 *
 * This function determines if the provided value is an instance of `HTMLElement`.
 * It first checks if `HTMLElement` is defined as an object and then verifies if
 * the value is an instance of `HTMLElement`. If `HTMLElement` is not defined,
 * it falls back to checking if the value is an object with a `nodeType` of 1
 * and a `nodeName` of type string, which are characteristics of HTML elements.
 *
 * @param h - The value to check.
 * @returns `true` if the value is an HTML element, otherwise `false`.
 */
isHtmlElement(h: unknown): h is HTMLElement {}

/**
 * Checks if a given string is a valid HTML event attribute.
 *
 * @param h - The string to check.
 * @returns `true` if the string is a valid HTML event attribute, otherwise `false`.
 *
 * @remarks
 * This function checks against a predefined list of HTML event attributes such as `onclick`, `onload`, `onerror`, etc.
 *
 * @example
 * ```typescript
 * isHtmlEventAttribute("onclick"); // returns true
 * isHtmlEventAttribute("onunknown"); // returns false
 * ```
 */
isHtmlEventAttribute(h: string): boolean {}

/**
 * Checks if the given value is a DOM Node.
 *
 * This function determines if the provided value is a Node by checking its type and properties.
 * It works by verifying if the value is an instance of Node when `Node` is an object, or by
 * checking the presence and types of `nodeType` and `nodeName` properties.
 *
 * @param n - The value to check.
 * @returns `true` if the value is a Node, otherwise `false`.
 */
isNode(n: unknown): n is Node {}

```


### Normalize

```javascript

/**
 * A function to capitalize the first letter of each word in a string.
 *
 * @param {string} s - The input string to capitalize.
 * @param {boolean} everyWords - A flag to indicate whether to capitalize every word or just the first letter of the whole string.
 * @return {string} The string with the first letter of each word capitalized.
 */
ucfirst(s: string, everyWords?: boolean = true): string {}

// accept a-z - and _ characters
normalizeNickname(
  nickname: string, 
  firstName: string, 
  lastName: string
): string | false {}

normalizeName(s: string): string | false {}

normalizeEmail(s: string): string | false {}

```

Example : 

```javascript

const ch = require("@dwtechs/checkard");

function normalizeInputs(req, res, next) {
  const users = req.body.rows;
  log.debug(`Normalize values for ${users.length} users`);

  for (const u of users) {
    const { firstName, lastName, nickname, email } = u;
    u.firstname = ch.normalizeName(firstName);
    u.lastname = ch.normalizeName(lastName);
    u.nickname = ch.normalizeNickname(nickname, firstName, lastName);
    u.email = ch.normalizeName(email);
  }
  next();
}

```

## Contributors

Checkard.js is under continuous development and we would be glad to get all the help you can provide.
To contribute please read **[contributor.md](https://github.com/DWTechs/Checkard.js/blob/main/contributor.md)** for detailed installation guide.


## Stack

| Purpose         |                    Choice                    |                                                     Motivation |
| :-------------- | :------------------------------------------: | -------------------------------------------------------------: |
| repository      |        [Github](https://github.com/)         |     hosting for software development version control using Git |
| package manager |     [npm](https://www.npmjs.com/get-npm)     |                                default node.js package manager |
| language        | [TypeScript](https://www.typescriptlang.org) | static type checking along with the latest ECMAScript features |
| module bundler  |      [Rollup](https://rollupjs.org)       |                        advanced module bundler for ES6 modules |
| unit testing    |          [Jest](https://jestjs.io/)          |                  delightful testing with a focus on simplicity |
