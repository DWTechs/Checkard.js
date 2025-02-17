
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

```typescript

import { isFunction, isArray, isString } from "@dwtechs/checkard";

if (isFunction(variable)) {
  //variable is a function
}

if (!isArray(variable, '=', 2)) {
  //variable is not an array of length 2
}

if (!isString(variable)) {
  // variable is not a string
}

if (isString(variable, "!0")) {
  // variable is a string and is not empty
}

if (isString(variable, ">", 2)) {
  // variable is a string of length greater than 2
}

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

if (!ch.isString(variable)) {
  // variable is not a string
}

if (ch.isString(variable, "!0")) {
  // variable is a string and is not empty
}

if (ch.isString(variable, ">", 2)) {
  // variable is a string of length greater than 2
}

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

if (!ch.isString(variable)) {
  // variable is not a string
}

if (ch.isString(variable, "!0")) {
  // variable is a string and is not empty
}

if (ch.isString(variable, ">", 2)) {
  // variable is a string of length greater than 2
}

```


## API Reference


### Types

```javascript

type Comparator = '='|'<'|'>'|'<='|'>='|'!='|'!0'|'0';

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
---

primitive methods accept any variable as parameter in order to check its type.

```typescript

/**
 * Checks if the given value is a boolean.
 *
 * @param {unknown} v - The value to check.
 * @returns {boolean} True if the value is a boolean, otherwise false.
 */
isBoolean(v: unknown): v is boolean {}

/**
 * Checks if the given value is a number and optionally check its length.
 * If type checking  = false, string values like '4', '0', '8e4', '+true', '0x44' return true
 *
 * @param {unknown} v - The value to check.
 * @param {boolean} [type=true] - A boolean indicating whether to perform type checking. Defaults to true.
 * @param {Comparator | null} [comparator=null] - An optional comparator to compare the value. Defaults to null.
 * @param {number | null} [limit=null] - An optional limit to compare the value against. Defaults to null.
 * @returns {boolean} True if the value is a number and passes all checks, otherwise false.
 */
isNumber
    v: unknown, 
    type = true,
    comparator: Comparator | null = null, 
    limit: number | null = null
): v is number {}

/**
 * Checks if the given value is a string and optionally checks its length.
 *
 * @param {unknown} v - The value to check.
 * @param {Comparator | null} [comparator=null] - An optional comparator to compare the string length.
 * @param {number | null} [limit=null] - An optional limit to compare the string length against.
 * @returns {boolean} True if the value is a string and meets the limit conditions, otherwise false.
 */
isString(
    v: unknown, 
    comparator: Comparator | null = null, 
    limit: number | null = null
): v is string {}

/**
 * Checks if the provided value is a symbol.
 *
 * @param {unknown} v - The value to check.
 * @returns {boolean} True if the value is a symbol, otherwise false.
 */
isSymbol(v: unknown): v is symbol {}

/**
 * Checks if the given value is null or undefined.
 *
 * @param {unknown} v - The value to check.
 * @returns {boolean} True if the value is null or undefined, otherwise false.
 */
isNil(v: unknown): v is null | undefined {}

/**
 * Checks if the given value is null.
 *
 * @param {unknown} v - The value to check.
 * @returns {boolean} True if the value is null, otherwise false.
 */
isNull(v: unknown): v is null {}

/**
 * Checks if the given value is undefined.
 *
 * @param {unknown} v - The value to check.
 * @returns {boolean} True if the value is undefined, otherwise false.
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

if (isString(str, '!0')) {
  // check if str is not empty
}

if (isString(str, '0')) {
  // check if str is empty
}

if (isString(str, '=', 2)) {
  // check if str is a string of length 2
}

if (isString(str, '>=', 1)) {
  // check if str is a string of length greater than or equal to 1
}

```

#### Note 

If **isString()** returns false, Typescript will consider *str* is not a string.  
So if you need to check if *str* is of length x but needs to be considered as a string even if its length is not x you should do it like this:

```javascript

import { isString, isStringOfLength } from "@dwtechs/checkard";

const str = 'dog';

if (isString(str) && !isStringOfLength(str, 4, 4)) {
  // string is of type string even if length is not 4
}

```

### Non-primitive
---

Non-primitive methods accept any variable as parameter in order to check its type.

```typescript

/**
 * Checks if the given value is an object and optionally if it is not empty.
 *
 * @template T - The expected type of the object.
 * @param {unknown} v - The value to check.
 * @param {boolean} [empty=false] - If true, the function will also check if the object is not empty.
 * @returns {o is object & T} True if the value is an object (and not empty if specified), otherwise false.
 */
isObject<T = unknown>(o: unknown, empty?: boolean = false): o is object & T {}

/**
 * Checks if the given value is an array and optionally compares its length.
 *
 * @template T - The type of elements in the array.
 * @param {unknown} v - The value to check.
 * @param {Comparator | null} [comparator=null] - An optional comparator function to compare the array length.
 * @param {number | null} [limit=null] - An optional limit to compare the array length against.
 * @returns {boolean} True if the value is an array and meets the limit conditions, otherwise false.
 */
isArray<T = unknown>(
    v: unknown, 
    comparator?: Comparator | null, 
    limit?: number | null
): v is T[] {}

/**
 * Checks if the given input is a valid JSON string.
 *
 * @param {unknown} v - The value to check.
 * @returns {boolean} True if the input is a valid JSON string, otherwise false.
 */
isJson(v: unknown): v is JSON {} 

/**
 * Checks if the given value is a regular expression.
 *
 * @param {unknown} v - The value to check.
 * @param {boolean} [type=true] - A boolean indicating whether to perform type checking. Defaults to true.
 * If false, String values like '/^abc$/' are considered as regular expressions.
 * @returns {boolean} True if v is a RegExp or can be converted to a RegExp, otherwise false.
 */
isRegex(v: unknown, type: boolean = true): v is RegExp {} 

/**
 * Checks if the given value is a valid Date object.
 *
 * @param {unknown} v - The value to check.
 * @returns {boolean} True if the value is a Date object, otherwise false.
 *
 */
isDate(v: unknown): v is Date {}

/**
 * Checks if the provided value is a function.
 *
 * @param {unknown} v - The value to check.
 * @returns {boolean} True if the value is a function, otherwise false.
 */
isFunction(v: unknown): v is (...args: unknown[]) => unknown {}

```

Usage example for isArray method: 

```typescript

import { isArray } from "@dwtechs/checkard";

let arr = ['dog','cat','bird'];

if (isArray(arr)) {
  // check if arr is an array
}

if (isArray(arr, '!0')) {
  // arr is not empty
}

if (isArray(arr, '=', 2)) {
  // arr is an array of length 2
}

if (isArray(arr, '>=', 1)) {
  // arr is an array of length greater than or equal to 1
}

```

#### Note 

Note that if **isArray()** returns false Typescript will consider *arr* is not an array.  
So if you need to check *arr* is of length x but needs to be considered as an array even if its length is not x you can do it like this:

```javascript

import { isArray, isArrayOfLength } from "@dwtechs/checkard";

let arr = ['dog','cat','bird'];

if (isArray(arr) && !isArrayOfLength(arr, 4, 4)) {
  // array is of type array even if length is not 4
}

```

### Boolean
---

```typescript

/**
 * Checks if a value is falsy.
 *
 * A value is considered falsy if it is : 
 * false,
 * 0, 
 * -0,
 * "",
 * null,
 * undefined,
 * NaN,
 * 0n.
 *
 * @param {unknown} v - The value to check.
 * @returns {boolean} True if the value is falsy, otherwise false.
 */
function isFalsy(v: unknown): boolean {}

/**
 * Checks if a value is truthy.
 *
 * A value is considered truthy if it is : 
 * true: The boolean value true.
 * Non-zero numbers: Any number other than 0 or -0.
 * Non-empty strings: Any string with at least one character.
 * Objects: Any object, including empty objects and arrays.
 * Symbols: Any symbol.
 * BigInt values: Any BigInt value other than 0n.
 *
 * @param {unknown} v - The value to check.
 * @returns {boolean} True if the value is truthy, otherwise false.
 */
function isTruthy(v: unknown): boolean {}

```

### Number
---

```typescript

/**
 * Checks if a given number is an integer.
 *
 * @param {number} n - The number to check.
 * @param {boolean} [type=true] - Optional boolean indicating whether to perform type checking. Defaults to true.
 * @returns {boolean} True if the number is an integer, otherwise false.
 */
isInteger(n: number, type: boolean = true): boolean {}

/**
 * Checks if a given number is a floating-point number.
 *
 * @param {number} n - The number to check.
 * @param {boolean} [type=true] - Optional boolean indicating whether to perform type checking. Defaults to true.
 * @returns {boolean} True if the number is a floating-point number, otherwise false.
 */
isFloat(n: number, type: boolean = true): boolean {}

/**
 * Checks if a given number is even.
 *
 * @param {number} n - The number to check.
 * @param {boolean} [type=true] - Optional boolean indicating whether to perform type checking. Defaults to true.
 * @returns {boolean} True if the number is an even integer, otherwise false.
 */
isEven(n: number, type: boolean = true): boolean {}

/**
 * Determines if a given number is odd.
 *
 * @param {number} n - The number to check.
 * @param {boolean} [type=true] - Optional boolean indicating whether to perform type checking. Defaults to true.
 * @returns {boolean} True if the number is an odd integer, otherwise false.
 */
isOdd(n: number, type: boolean = true): boolean {}

/**
 * Checks if a given number is zero.
 *
 * @param {number} n - The number to check.
 * @param {boolean} [type=true] - Optional boolean indicating whether to perform type checking. Defaults to true.
 * @returns {boolean} True if the number is zero, otherwise false.
 */
isOrigin(n: number, type: boolean = true): boolean {}

/**
 * Checks if a given number is positive.
 *
 * @param {number} n - The number to check.
 * @param {boolean} [type=true] - Optional boolean indicating whether to perform type checking. Defaults to true.
 * @returns {boolean} True if the number is positive, otherwise false.
 * 
 * @remarks
 * This function also check if the value is a number.
 */
isPositive(n: number, type: boolean = true): boolean {}

/**
 * Checks if a given number is negative.
 *
 * @param {number} n - The number to check.
 * @param {boolean} [type=true] - Optional boolean indicating whether to perform type checking. Defaults to true.
 * @returns {boolean} True if the number is negative, otherwise false.
 *  
 * @remarks
 * This function also check if the value is a number.
 */
isNegative(n: number, type: boolean = true): boolean {}

/**
 * Checks if a given number is a power of two.
 *
 * @param {number} n - The number to check.
 * @param {boolean} [type=true] - Optional boolean indicating whether to perform type checking. Defaults to true.
 * @returns {boolean} True if the number is a power of two, otherwise false.
 */
isPowerOfTwo(n: number, type: boolean = true): boolean {}

/**
 * Checks if a given number is an ASCII code.
 *
 * @param {number} n - The number to check.
 * @param {boolean} [ext=true] - Optional boolean to include extended ASCII range (0-255). Defaults to true.
 * @returns {boolean} True if the number is a valid ASCII code, otherwise false.
 */
isAscii(n: number, ext: boolean = true): boolean {}

```


### Valid number
---

Valid number methods take a number as parameter and check of the number lies in the right interval

```typescript

/**
 * Checks if a given value is a valid number within given range.
 *
 * @param {number} n - The number to check
 * @param {number} [min=-999999999] - minimal value of the range
 * @param {number} [max=999999999] - maximal value of the range
 * @param {boolean} [type=true] - whether to perform type checking
 * @returns {boolean} True if the value is a valid number, otherwise false.
 *  
 * @remarks
 * This function also check if the value is a number.
 */
isValidNumber(
    n: number, 
    min: number = -999999999, 
    max: number = 999999999, 
    type: boolean = true 
): boolean {}

/**
 * Checks if a given value is a valid integer within given range.
 *
 * @param {number} n - The number to check
 * @param {number} [min=-999999999] - minimal value of the range
 * @param {number} [max=999999999] - maximal value of the range
 * @param {boolean} [type=true] - whether to perform type checking
 * @returns {boolean} True if the value is a valid integer, otherwise false.
 */
isValidInteger(
    n: number, 
    min: number = -999999999, 
    max: number = 999999999, 
    type: boolean = true
): boolean {}

/**
 * Checks if a given value is a valid float within given range.
 *
 * @param {number} n - The number to check
 * @param {number} [min=-999999999.9] - minimal value of the range
 * @param {number} [max=999999999.9] - maximal value of the range
 * @param {boolean} [type=true] - whether to perform type checking
 * @returns {boolean} True if the value is a valid float, otherwise false.
 */
isValidFloat( 
    n: number, 
    min: number = -999999999.9, 
    max: number = 999999999.9, 
    type: boolean = true 
): boolean {}

```


### String
---

```typescript

/**
 * Checks if the length of a given string is within the specified range.
 *
 * @param {string} s - The string to check.
 * @param {number} [min=0] - The minimum length of the string (inclusive). Default is 0.
 * @param {number} [max=999999999] - The maximum length of the string (inclusive). Default is 999999999.
 * @returns {boolean} True if the string length is within the specified range, otherwise false.
 */
isStringOfLength( 
    s: string, 
    min: number = 0, 
    max: number = 999999999 
): boolean {}

/**
 * Checks if the given string is a valid email address.
 *
 * @param {string} s - The string to be checked.
 * @returns {boolean} True if the string is a valid email address, otherwise false.
 */
isEmail(s: string): boolean {}

/**
 * Checks if the given string is a valid IP address.
 *
 * @param {string} s - The string to be checked.
 * @returns {boolean} True if the string is a valid IP address, otherwise false.
 */
isIpAddress(s: string): boolean {}

/**
 * Checks if a given string is a valid Base64 encoded string.
 *
 * @param {string} s - The string to check.
 * @param {boolean} [urlEncoded=false] - Optional. If true, checks for URL-safe Base64 encoded strings. Defaults to false.
 * @returns {boolean} True if the string is a valid Base64 encoded string, otherwise false.
 */
isBase64(s: string, urlEncoded: boolean = false): boolean {}

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
 * @returns {boolean} True if the string is a valid JWT, otherwise false.
 */
isJWT(s: string): boolean {}

/**
 * Checks if the given string is a valid slug.
 * 
 * A slug is typically a URL-friendly string that contains only lowercase letters, numbers, and hyphens.
 * 
 * @param {string} s - The string to check.
 * @returns {boolean} True if the string is a valid slug, otherwise false.
 */
isSlug(s: string): boolean {}

/**
 * Checks if the given string is a valid hexadecimal number.
 *
 * @param {string} s - The string to check.
 * @returns {boolean} True if the string is a valid hexadecimal number, otherwise false.
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
 * @param {string} s - The password string to validate.
 * @param {PasswordOptions} [options=PwdDefaultOptions] - Optional configuration object to specify password validation criteria.
 * @returns {boolean} True if the password meets all the specified criteria, otherwise false.
 *
 * @example
 * const options = {
 *   minLength: 8,
 *   maxLength: 20,
 *   lowerCase: true,
 *   upperCase: true,
 *   number: true,
 *   specialCharacter: true
 * };
 * const isValid = isValidPassword('Password123!', options);
 */
isValidPassword(
    s: string, 
    options?: PasswordOptions = PwdDefaultOptions
): boolean {}

/**
 * Checks if the given string contains any uppercase letters.
 *
 * @param {string} s - The string to check.
 * @returns {boolean} True if the string contains at least one uppercase letter, otherwise false.
 */
containsUpperCase(s: string): boolean {}

/**
 * Checks if the given string contains at least one lowercase letter.
 *
 * @param {string} s - The string to check.
 * @returns {boolean} True if the string contains at least one lowercase letter, otherwise false.
 */
containsLowerCase(s: string): boolean {}

/**
 * Checks if the given string contains any special characters.
 *
 * @param {string} s - The string to be checked.
 * @returns {boolean} True if the string contains special characters, otherwise false.
 */
containsSpecialCharacter(s: string): boolean {}

/**
 * Checks if a given string contains a specified number of digits.
 *
 * @param {string} s - The string to check.
 * @param {number} [min=1] - The minimum number of digits required in the string. Defaults to 1.
 * @param {number|null} [max=null] - The maximum number of digits allowed in the string. If not provided, there is no upper limit.
 * @returns {boolean} True if the string contains the required number of digits, otherwise false.
 */
containsNumber(
    s: string, 
    min: number = 1, 
    max: number | null = null
): boolean {}

```

#### Note 

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
---

```typescript

const minDate = new Date('1/1/1900');
const maxDate = new Date('1/1/2200');

/**
 * Checks if a given date is valid within a specified range.
 *
 * @param {Date} d - The date to be validated.
 * @param {Date} [min=minDate] - The minimum allowable date. Defaults to `minDate`.
 * @param {Date} [max=maxDate] - The maximum allowable date. Defaults to `maxDate`.
 * @returns {boolean} True if the date is valid and within the specified range, otherwise false.
 *  
 * @remarks
 * This function also check if the value is an instance of the Date object.
 */
isValidDate(
    d: date, 
    min: Date = minDate, 
    max: Date = maxDate
): boolean {}

/**
 * Checks if the given number is a valid timestamp.
 *
 * @param {number} t - The number to check.
 * @param {boolean} [type=true] - An optional boolean parameter to verify the type of t. Defaults to true.
 * @returns {boolean} True if the value is a timestamp, otherwise false.
 */
isTimestamp(t: number, type: boolean = true): boolean {}

/**
 * Checks if a given timestamp is valid within a specified range.
 *
 * @param {number} t - The timestamp to validate.
 * @param {number} [min=-2208989361000] - The minimum allowed timestamp. Default is -2208989361000,eg 1/1/1900.
 * @param {number} [max=7258114800000] - The maximum allowed timestamp. Default is 7258114800000, eg 1/1/2200).
 * @param {boolean} [type=true] - A boolean indicating the type of timestamp. Default to true.
 * @returns {boolean} True if the timestamp is valid and within the specified range, otherwise false.
 * 
 * @remarks
 * This function also check if the value is timestamp.
 */
isValidTimestamp(
  t: number, 
  min: number = -2208989361000, 
  max: number = 7258114800000, 
  type: boolean = true
): boolean {} 

```


### Array
---

```typescript

/**
 * Checks if the length of an array is within the specified range.
 *
 * @param {unknown[]} a - The array to check.
 * @param {number} [min=0] - The minimum length of the array (inclusive).
 * @param {number} [max=999999999] - The maximum length of the array (inclusive).
 * @returns {boolean} True if the array length is within the specified range, otherwise false.
 */
isArrayOfLength(
    a: unknown[], 
    min = 0, 
    max = 999999999
): boolean {}

/**
 * Checks if a value is present in an array starting from a specified index.
 *
 * @param {unknown[]} a - The array to search within.
 * @param {unknown} v - The value to search for.
 * @param {number} [from=0] - The index to start the search from. Defaults to 0.
 * @returns {boolean} True if the value is found in the array, otherwise false.
 */
isIn(
    a: unknown[], 
    v: unknown, 
    from: number = 0
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
let lvl = setLevel("infos"); // lvl = "warn"

```


### Object
---

```typescript

/**
 * Checks if a given property exists on an object.
 * enumerable: boolean - whether to check enumerable properties only
 *
 * @template K - The type of the property key.
 * @param {object} obj - The object to check the property on.
 * @param {K} k - The property key to check for.
 * @param {boolean} [own=true] - If true, checks if the property is an own property of the object. Defaults to true.
 * @param {boolean} [enumerable=true] - If true, checks if the property is enumerable. Defaults to true.
 * @returns {boolean} True if the property exists on the object based on the specified conditions, otherwise false.
 */
isProperty<K extends PropertyKey>(
    obj: { [key: string]: unknown },
    k: K,
    own = true,
    enumerable = true
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
---

```typescript

/**
 * Checks if the given value is an HTML element.
 *
 * @param {unknown} h - The value to check.
 * @returns {boolean} True if the value is an HTML element, otherwise false.
 */
isHtmlElement(h: unknown): h is HTMLElement {}

/**
 * Checks if a given string is a valid HTML event attribute.
 *
 * @param {sgtring} h - The string to check.
 * @returns {boolean} True if the string is a valid HTML event attribute, otherwise false.
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
 * @param {unknown} n - The value to check.
 * @returns {boolean} True if the value is a Node, otherwise false.
 */
isNode(n: unknown): n is Node {}

```


### Normalize
---

```typescript

/**
 * A function to capitalize the first letter of each word in a string.
 *
 * @param {string} s - The input string to capitalize.
 * @param {boolean} everyWords - A flag to indicate whether to capitalize the first letter of every word or just the first letter of the whole string.
 * @return {string} The string with the first letter of each word capitalized.
 */
ucfirst(s: string, everyWords = true): string {}

/**
 * Returns a normalized nickname for a user.
 *
 * If the nickname is not given, the function will create a nickname
 * based on the first letter of the first name and the last name.
 *
 * nickname accepts a-z - and _ characters
 * 
 * @param {string} nickname - The nickname of the user.
 * @param {string} firstName - The first name of the user.
 * @param {string} lastName - The last name of the user.
 * @return {string | false} The normalized nickname.
 */
normalizeNickname(
    nickname: string, 
    firstName: string, 
    lastName: string
): string | false {}

/**
 * Normalizes a name by capitalizing the first letter of each word.
 *
 * @param {string} s - The name to normalize.
 * @return {string | false} The normalized name.
 */
normalizeName(s: string): string | false {}

/**
 * A function to normalize an email address.
 *
 * If the string is not a valid email address, the function will return false.
 *
 * @param {string} s - The email address to normalize.
 * @return {string | false} The normalized email address or false if the
 * string is not a valid email address.
 */
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
