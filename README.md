
[![License: MIT](https://img.shields.io/npm/l/@dwtechs/checkard.svg?color=brightgreen)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/%40dwtechs%2Fcheckard.svg)](https://www.npmjs.com/package/@dwtechs/checkard)
[![last version release date](https://img.shields.io/github/release-date/DWTechs/Checkard.js)](https://www.npmjs.com/package/@dwtechs/checkard)
![Jest:coverage](https://img.shields.io/badge/Jest:coverage-100%25-brightgreen.svg)

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

- 📦 No dependency
- 🪶 Very lightweight
- 🧪 Thoroughly tested with over 1850 Unit Tests
- 🚚 Shipped as EcmaScrypt module, CommonJS module and IIFE
- 📝 Written in Typescript
- 🌐 Old browsers support
- 💻 Works in Javascript, Typescript and Node.js


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
 * Checks if the given value is of type boolean.
 *
 * @param {unknown} v - The value to check.
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not boolean. If false, returns false.
 * @returns {boolean} True if the value is a boolean, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not a boolean and throwErr is true.
 */
isBoolean( v: unknown, throwErr: boolean = false ): v is boolean {}

/**
 * Checks if the given value is a number and optionally performs additional checks.
 * If typeCheck = false values like '4', '0', '8e4', '+true', '0x44' return true
 *
 * @param {unknown} v - The value to check.
 * @param {boolean} [type=true] - A boolean indicating whether to perform type checking. Defaults to `true`.
 * @param {Comparator | null} [comparator=null] - An optional comparator function to compare the value. Defaults to `null`.
 * @param {number | null} [limit=null] - An optional limit to compare the value against. Defaults to `null`.
 * @param {boolean} [throwErr=false] - If true, throws an error when comparison fails. If false, returns false.
 * @returns {boolean} `true` if the value is a number and passes all checks, otherwise `false`.
 * @throws {Error} Throws an error if the comparison fails and throwError is true.
 */
isNumber(v: unknown, 
  type = true,
  comparator: Comparator | null = null, 
  limit: number | null = null,
  throwErr: boolean = false
  ): v is number {}

/**
 * Checks if the given value is a string and optionally compares its length.
 *
 * @param {unknown} v - The value to check.
 * @param {Comparator | null} [comparator=null] - An optional comparator function to compare the string length.
 * @param {number | null} [limit=null] - An optional limit to compare the string length against.
 * @param {boolean} [throwErr=false] - If true, throws an error when comparison fails. If false, returns false.
 * @returns {boolean} `true` if the value is a string and meets the comparator and limit conditions, otherwise `false`.
 * @throws {Error} Throws an error if the comparison fails and throwError is true.
 */
isString(
    v: unknown, 
    comparator = null, 
    limit = null,
    throwErr: boolean = false
): v is string {}

/**
 * Checks if the provided value is a symbol.
 *
 * @param {unknown} v - The value to check.
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not symbol. If false, returns false.
 * @returns {boolean} True if the value is a symbol, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not a symbol and throwErr is true.
 */
isSymbol(v: unknown, throwErr: boolean = false): v is symbol {}

/**
 * Checks if the given value is `null` or `undefined`.
 *
 * @param {unknown} v - The value to check.
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not null or undefined. If false, returns false.
 * @returns `true` if the value is `null` or `undefined`, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not null or undefined and throwErr is true.
 */
isNil(v: unknown, throwErr: boolean = false): v is null | undefined {}

/**
 * Checks if the given value is `null`.
 *
 * @param {unknown} v - The value to check.
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not null. If false, returns false.
 * @returns `true` if the value is `null`, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not null and throwErr is true.
 */
isNull(v: unknown, throwErr: boolean = false): v is null {}

/**
 * Checks if the given value is `undefined`.
 *
 * @param {unknown} v - The value to check.
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not undefined. If false, returns false.
 * @returns `true` if the value is `undefined`, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not undefined and throwErr is true.
 */
isUndefined(v: unknown, throwErr: boolean = false): v is undefined {}

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
 * Checks if the given value is an object and optionally if it is non-empty.
 *
 * @template T - The expected type of the object.
 * @param {unknown} v - The value to check.
 * @param {boolean} [empty=false] - If true, the function will also check if the object is non-empty.
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not an object. If false, returns false.
 * @returns {v is object & T} - Returns true if the value is an object (and non-empty if specified), false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not an object and throwErr is true.
 */
isObject<T = unknown>(v: unknown, empty = false, throwErr: boolean = false): v is object & T {}

/**
 * Checks if the given value is an array and optionally compares its length.
 *
 * @template T - The type of elements in the array.
 * @param {unknown} v - The value to check.
 * @param {Comparator | null} [comparator=null] - An optional comparator function to compare the array length.
 * @param {number | null} [limit=null] - An optional limit to compare the array length against.
 * @param {boolean} [throwErr=false] - If true, throws an error when comparison fails. If false, returns false.
 * @returns {boolean} `true` if the value is an array and meets the comparator and limit conditions, otherwise `false`.
 * @throws {Error} Throws an error if the comparison fails and throwError is true.
 */
isArray<T = unknown>(
  v: unknown, 
  comparator: Comparator | null = null, 
  limit: number | null = null,
  throwErr: boolean = false
): v is T[] {}

/**
 * Checks if the given input is a valid JSON string.
 *
 * @param {unknown} v - The input to check.
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not valid JSON. If false, returns false.
 * @returns {boolean} `true` if the input is a valid JSON string, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not valid JSON and throwErr is true.
 */
isJson(v: unknown, throwErr: boolean = false): v is JSON {} 

/**
 * Checks if the given value is a regular expression.
 *
 * @param {unknown} v - The value to check.
 * @param {boolean} [type=true] - If true, uses `instanceof` to check if `v` is a RegExp. If false, attempts to create a new RegExp from `v`.
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not a RegExp. If false, returns false.
 * @returns {boolean} `true` if `v` is a RegExp or can be converted to a RegExp, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not a RegExp and throwErr is true.
 */
isRegex(v: unknown, type = true, throwErr: boolean = false): v is RegExp {} 

/**
 * Checks if the given value is a valid Date object.
 *
 * @param {unknown} v - The value to check.
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not a valid Date. If false, returns false.
 * @returns {boolean} True if the value is a Date object and not NaN, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not a valid Date and throwErr is true.
 */
isDate(v: unknown, throwErr: boolean = false): v is Date {}

/**
 * Checks if the provided value is a function.
 *
 * @param {unknown} v - The value to check.
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not a function. If false, returns false.
 * @returns {boolean} A boolean indicating whether the value is a function, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not a function and throwErr is true.
 */
isFunction(v: unknown, throwErr: boolean = false): v is (...args: unknown[]) => unknown {}

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
 * NaN.
 *
 * @param {unknown} v - The value to check.
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not falsy. If false, returns false.
 * @returns {boolean} `true` if the value is falsy, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not falsy and throwErr is true.
 */
function isFalsy(v: unknown, throwErr: boolean = false): boolean {}

/**
 * Checks if a value is truthy.
 *
 * true: The boolean value true.
 * Non-zero numbers: Any number other than 0 or -0.
 * Non-empty strings: Any string with at least one character.
 * Objects: Any object, including empty objects and arrays.
 * Symbols: Any symbol.
 * BigInt values: Any BigInt value other than 0n.
 *
 * @param {unknown} v - The value to check.
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not truthy. If false, returns false.
 * @returns {boolean} `true` if the value is truthy, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not truthy and throwErr is true.
 */
function isTruthy(v: unknown, throwErr: boolean = false): boolean {}

```

### Number
---

```typescript

/**
 * Checks if a given number is an integer.
 *
 * @param {number | string | undefined | null} n - The number to check.
 * @param {boolean} [type=true] - A boolean indicating whether to use strict equality (===) or loose equality (==) for the comparison. Defaults to true (strict equality).
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not an integer. If false, returns false.
 * @returns {boolean} A boolean indicating whether the number is an integer, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not an integer and throwErr is true.
 */
isInteger(n: number | string | undefined | null, type = true, throwErr: boolean = false): boolean {}

/**
 * Checks if a given number is a floating-point number.
 *
 * @param {number | string | undefined | null} n - The number to check.
 * @param {boolean} [type=true] - A boolean indicating whether to use strict equality (===) or loose equality (==) for the comparison. Defaults to true (strict equality).
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not a float. If false, returns false.
 * @returns {boolean} A boolean indicating whether the number is a floating-point number, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not a floating-point number and throwErr is true.
 */
isFloat(n: number | string | undefined | null, type = true, throwErr: boolean = false): boolean {}

/**
 * Checks if a given number is even.
 *
 * @param {number | string | undefined | null} n - The number to check.
 * @param {boolean} [type=true] - A boolean flag to check the type of n or not (default is true).
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not an even number. If false, returns false.
 * @returns {boolean} `true` if the number is even and an integer, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not an even number and throwErr is true.
 */
isEven(n: number | string | undefined | null, type = true, throwErr: boolean = false): boolean {}

/**
 * Determines if a given number is odd.
 *
 * @param {number | string | undefined | null} n - The number to check.
 * @param {boolean} [type=true] - A boolean flag to check the type of n or not (default is true).
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not an odd number. If false, returns false.
 * @returns {boolean} A boolean indicating whether the number is odd, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not an odd number and throwErr is true.
 */
isOdd(n: number | string | undefined | null, type = true, throwErr: boolean = false): boolean {}

/**
 * Checks if a given number is zero.
 *
 * @param {number | string | undefined | null} n - The number to check.
 * @param {boolean} [type=true] - A boolean indicating whether to use strict equality (===) or loose equality (==) for the comparison. Defaults to true (strict equality).
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not zero. If false, returns false.
 * @returns {boolean} True if the number is zero based on the specified comparison type, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not zero and throwErr is true.
 */
isOrigin(n: number | string | undefined | null, type = true, throwErr: boolean = false): boolean {}

/**
 * Checks if a given number is positive.
 *
 * @param {number | string | undefined | null} n - The number to check.
 * @param {boolean} [type=true] - A boolean flag to check the type of n or not (default is true).
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not positive. If false, returns false.
 * @returns {boolean} True if the number is positive and passes the type check, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not positive and throwErr is true.
 */
isPositive(n: number | string | undefined | null, type = true, throwErr: boolean = false): boolean {}

/**
 * Checks if a given number is negative.
 *
 * @param {number | string | undefined | null} n - The number to check.
 * @param {boolean} [type=true] - A boolean flag to check the type of n or not (default is true).
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not negative. If false, returns false.
 * @returns {boolean} True if the number is negative and the type check passes, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not negative and throwErr is true.
 */
isNegative(n: number | string | undefined | null, type = true, throwErr: boolean = false): boolean {}

/**
 * Checks if a given number is a power of two.
 *
 * @param {number | string | undefined | null} n - The number to check.
 * @param {boolean} [type=true] - A boolean flag to check the type of n or not (default is true).
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not a power of two. If false, returns false.
 * @returns {boolean} A boolean indicating whether the number is a power of two, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not a power of two and throwErr is true.
 */
isPowerOfTwo(n: number | string | undefined | null, type = true, throwErr: boolean = false): boolean {}

/**
 * Checks if a given number is an ASCII code.
 *
 * @param {number | undefined | null} n - The number to check.
 * @param {boolean} [ext=true] - Optional boolean to include extended ASCII range (0-255) or not. Defaults to true.
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not a valid ASCII code. If false, returns false.
 * @returns {boolean} `true` if the number is a valid ASCII code, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not a valid ASCII code and throwErr is true.
 */
isAscii(n: number | undefined | null, ext = true, throwErr: boolean = false): boolean {}

```


### Valid number
---

Valid number methods take a number as parameter and check of the number lies in the right interval

```typescript

/**
 * Checks if a given value is a valid number within given range.
 *
 * @param {number | string | undefined | null} n - value to check
 * @param {number} [min=-999999999] - minimal value of the range
 * @param {number} [max=999999999] - maximal value of the range
 * @param {boolean} [type=true] - do type check
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not a valid number in range. If false, returns false.
 * @returns {boolean} true if the value is a valid number, false if not (when throwErr is false)
 * @throws {Error} Throws an error if the value is not a valid number in range and throwErr is true.
 */
isValidNumber( n: number | string | undefined | null, 
  min = -999999999, 
  max = 999999999,
  type = true,
  throwErr: boolean = false ): boolean {}

/**
 * Checks if a given value is a valid integer within given range.
 *
 * @param {number | string | undefined | null} n - value to check
 * @param {number} [min=-999999999] - minimal value of the range
 * @param {number} [max=999999999] - maximal value of the range
 * @param {boolean} [type=true] - do type check
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not a valid integer in range. If false, returns false.
 * @returns {boolean} true if the value is a valid integer, false if not (when throwErr is false)
 * @throws {Error} Throws an error if the value is not a valid integer in range and throwErr is true.
 */
isValidInteger( n: number | string | undefined | null, 
  min = -999999999, 
  max = 999999999,
  type = true,
  throwErr: boolean = false ): boolean {}

/**
 * Checks if a given value is a valid float within given range.
 *
 * @param {number | string | undefined | null} n - value to check
 * @param {number} [min=-999999999.9] - minimal value of the range
 * @param {number} [max=999999999.9] - maximal value of the range
 * @param {boolean} [type=true] - do type check
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not a valid float in range. If false, returns false.
 * @returns {boolean} true if the value is a valid float, false if not (when throwErr is false)
 * @throws {Error} Throws an error if the value is not a valid float in range and throwErr is true.
 */
isValidFloat( n: number | string | undefined | null, 
  min = -999999999.9, 
  max = 999999999.9,
  type = true,
  throwErr: boolean = false ): boolean {}

```


### String
---

```typescript

/**
 * Checks if the length of a given string is within the specified range.
 * Performs internal string validation using isString() before checking email format
 *
 * @param {unknown} s - The value to check (performs internal string validation).
 * @param {number} [min=0] - The minimum length of the string (inclusive). Default is 0.
 * @param {number} [max=999999999] - The maximum length of the string (inclusive). Default is 999999999.
 * @param {boolean} [throwErr=false] - If true, throws an error when string length is not within range. If false, returns false.
 * @returns {boolean} `true` if the value is a string and its length is within the specified range, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not a string and its length is not within the specified range and throwErr is true.
 */
isStringOfLength(
  s: unknown,
  min = 0, 
  max = 999999999,
  throwErr: boolean = false
): boolean {}

/**
 * Checks if the given value is a valid email address.
 * Performs internal string validation using isString() before checking email format.
 *
 * @param {unknown} s - The value to be checked (performs internal string validation).
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not a valid email. If false, returns false.
 * @returns {boolean} `true` if the value a valid email address, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not a valid email address and throwErr is true.
 */
isEmail(s: unknown, throwErr: boolean = false): boolean {}

/**
 * Checks if the given value is a valid IP address.
 * Performs internal string validation using isString() before checking IP address format.
 *
 * @param {unknown} s - The value to be checked (performs internal string validation).
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not a valid IP address. If false, returns false.
 * @returns {boolean} `true` if the value is a valid IP address, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not a valid IP address and throwErr is true.
 */
isIpAddress(s: unknown, throwErr: boolean = false): boolean {}

/**
 * Checks if a given value is a valid Base64 encoded string.
 * Performs internal string validation using isString() before checking Base64 format.
 *
 * @param {unknown} s - The value to check (performs internal string validation).
 * @param {boolean} [urlEncoded=false] - Optional. If true, checks for URL-safe Base64 encoding. Defaults to false.
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not valid Base64. If false, returns false.
 * @returns {boolean} True if the value is a valid Base64 encoded string, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not a valid Base64 and throwErr is true.
 */
isBase64(s: unknown, urlEncoded = false, throwErr: boolean = false): boolean {}

/**
 * Checks if a given value is a valid JSON Web Token (JWT).
 * Performs internal string validation using isString() before checking JWT format.
 *
 * A valid JWT consists of three parts separated by dots ('.'):
 * - Header
 * - Payload
 * - Signature
 *
 * Each part must be a valid Base64 encoded string. Additionally, the header and payload
 * must be valid JSON objects when decoded.
 *
 * @param {unknown} s - The value to check (performs internal string validation).
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not a valid JWT. If false, returns false.
 * @returns {boolean} `true` if the value is a valid JWT, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value not a valid JWT and throwErr is true.
 */
isJWT(s: unknown, throwErr: boolean = false): boolean {}

/**
 * Checks if the given value is a valid slug.
 * Performs internal string validation using isString() before checking slug format.
 * 
 * A slug is typically a URL-friendly string that contains only lowercase letters, numbers, and hyphens.
 * 
 * @param {unknown} s - The value to check (performs internal string validation).
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not a valid slug. If false, returns false.
 * @returns {boolean} `true` if the value is a valid slug, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not a valid slug and throwErr is true.
 */
isSlug(s: unknown, throwErr: boolean = false): boolean {}

/**
 * Checks if the given value is a valid hexadecimal number.
 * Performs internal string validation using isString() before checking hexadecimal format.
 *
 * @param {unknown} s - The value to check (performs internal string validation).
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not a valid hexadecimal number. If false, returns false.
 * @returns {boolean} True if the value is a valid hexadecimal number, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not a valid hexadecimal number and throwErr is true.
 */
isHexadecimal(s: unknown, throwErr: boolean = false): boolean {}


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
isValidPassword(s: string, options: PasswordOptions = defaultOptions, throwErr: boolean = false): boolean {}

/**
 * Checks if the given string contains any uppercase letters.
 *
 * @param {string} s - The string to check.
 * @param {boolean} [throwErr=false] - If true, throws an error when string does not contain uppercase letters. If false, returns false.
 * @returns {boolean} `true` if the string contains at least one uppercase letter, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the string does not contain uppercase letters and throwErr is true.
 */
containsUpperCase(s: string, throwErr: boolean = false): boolean {}

/**
 * Checks if the given string contains at least one lowercase letter.
 *
 * @param {string} s - The string to check.
 * @param {boolean} [throwErr=false] - If true, throws an error when string does not contain lowercase letters. If false, returns false.
 * @returns {boolean} `true` if the string contains at least one lowercase letter, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the string does not contain lowercase letters and throwErr is true.
 */
containsLowerCase(s: string, throwErr: boolean = false): boolean {}

/**
 * Checks if the given string contains any special characters.
 *
 * @param {string} s - The string to be checked.
 * @param {boolean} [throwErr=false] - If true, throws an error when string does not contain special characters. If false, returns false.
 * @returns {boolean} `true` if the string contains special characters, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the string does not contain special characters and throwErr is true.
 */
containsSpecialCharacter(s: string, throwErr: boolean = false): boolean {}

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
containsNumber(
    s: string, 
    min = 1, 
    max = number | null,
    throwErr: boolean = false
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
 * @param {boolean} [throwErr=false] - If true, throws an error when date is not valid. If false, returns false.
 * @returns {boolean} `true` if the date is valid and within the specified range, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the date is not valid and throwErr is true.
 */
isValidDate(d: Date, min: Date = minDate, max: Date = maxDate, throwErr: boolean = false): boolean {}

/**
 * Checks if the given number is a valid timestamp.
 *
 * @param {unknown} t - The number to check.
 * @param {boolean} [type=true] - An optional boolean parameter to verify the type of t. Defaults to true.
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not a valid timestamp. If false, returns false.
 * @returns {boolean} A boolean indicating whether the number is a timestamp, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not a valid timestamp and throwErr is true.
 */
isTimestamp(t: number, type = true, throwErr: boolean = false): boolean {}

/**
 * Checks if a given timestamp is valid within a specified range.
 *
 * @param {unknown} t - The timestamp to validate.
 * @param {number} [min=-2208989361000] - The minimum allowed timestamp (default is -2208989361000,eg 1/1/1900).
 * @param {number} [max=7258114800000] - The maximum allowed timestamp (default is 7258114800000, eg 1/1/2200).
 * @param {boolean} [type=true] - A boolean indicating the type of timestamp (default is true).
 * @param {boolean} [throwErr=false] - If true, throws an error when timestamp is not valid. If false, returns false.
 * @returns {boolean} `true` if the timestamp is valid and within the specified range, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the timestamp is not valid and throwErr is true.
 */
isValidTimestamp(t: number, min = -2208989361000, max = 7258114800000, type = true, throwErr: boolean = false): boolean {} 

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
 * @param {boolean} [throwErr=false] - If true, throws an error when array length is not within range. If false, returns false.
 * @returns {boolean} - Returns `true` if the array length is within the specified range, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the array length is not within the specified range and throwErr is true.
 */
isArrayOfLength(
  a: unknown[], 
  min = 0, 
  max = 999999999,
  throwErr: boolean = false): boolean {}

/**
 * Checks if a value is present in an array starting from a specified index.
 *
 * @param {unknown[]} a - The array to search within.
 * @param {unknown} v - The value to search for.
 * @param {number} [from=0] - The index to start the search from. Defaults to 0.
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not found in array. If false, returns false.
 * @returns {boolean} `true` if the value is found in the array, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not found in the array and throwErr is true.
 */
isIn(a: unknown[], v: unknown, from = 0, throwErr: boolean = false): boolean {}

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
 * own: boolean - whether to check inherited properties only
 * enumerable: boolean - whether to check enumerable properties only
 *
 * @template K - The type of the property key.
 * @param {object} obj - The object to check the property on.
 * @param {K} k - The property key to check for.
 * @param {boolean} [own=true] - If true, checks if the property is an own property of the object. Defaults to true.
 * @param {boolean} [enumerable=true] - If true, checks if the property is enumerable. Defaults to true.
 * @param {boolean} [throwErr=false] - If true, throws an error when property doesn't exist. If false, returns false.
 * @returns {boolean} True if the property exists on the object based on the specified conditions, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the property doesn't exist and throwErr is true.
 */
isProperty<K extends PropertyKey>(
  o: object, 
  k: K, 
  own = true, 
  enumerable = true,
  throwErr: boolean = false): o is Record<K, unknown> // obj is Record<K, { [key: PropertyKey]: unknown }>

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
 * This function determines if the provided value is an instance of `HTMLElement`.
 * It first checks if `HTMLElement` is defined as an object and then verifies if
 * the value is an instance of `HTMLElement`. If `HTMLElement` is not defined,
 * it falls back to checking if the value is an object with a `nodeType` of 1
 * and a `nodeName` of type string, which are characteristics of HTML elements.
 *
 * @param {unknown} h - The value to check.
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not an HTML element. If false, returns false.
 * @returns {boolean} `true` if the value is an HTML element, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not an HTML element and throwErr is true.
 */
isHtmlElement(h: unknown, throwErr: boolean = false): h is HTMLElement {}

/**
 * Checks if a given string is a valid HTML event attribute.
 *
 * @param {string} h - The string to check.
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not a valid HTML event attribute. If false, returns false.
 * @returns {boolean} `true` if the string is a valid HTML event attribute, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not a valid HTML event attribute and throwErr is true.
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
isHtmlEventAttribute(h: string, throwErr: boolean = false): boolean {}

/**
 * Checks if the given value is a DOM Node.
 *
 * This function determines if the provided value is a Node by checking its type and properties.
 * It works by verifying if the value is an instance of Node when `Node` is an object, or by
 * checking the presence and types of `nodeType` and `nodeName` properties.
 *
 * @param {unknown} n - The value to check.
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not a DOM Node. If false, returns false.
 * @returns {boolean} `true` if the value is a Node, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not a DOM Node and throwErr is true.
 */
isNode(n: unknown, throwErr: boolean = false): n is Node {

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
 * @param {boolean} [throwErr=false] - If true, throws an error when normalization fails. If false, returns false.
 * @return {string | false} The normalized nickname, or false if normalization fails (when throwErr is false).
 * @throws {Error} Throws an error if normalization fails and throwErr is true.
 */
normalizeNickname(
    nickname: string, 
    firstName: string, 
    lastName: string,
    throwErr: boolean = false
): string | false {}

/**
 * Normalizes a first name by capitalizing the first letter of each word.
 *
 * @param {string} s - The first name to normalize.
 * @param {boolean} [throwErr=false] - If true, throws an error when normalization fails. If false, returns false.
 * @return {string | false} The normalized first name, or false if normalization fails (when throwErr is false).
 * @throws {Error} Throws an error if normalization fails and throwErr is true.
 */
normalizeName(s: string, throwErr: boolean = false): string | false {}

/**
 * A function to normalize an email address.
 *
 * If the string is not a valid email address, the function will return false.
 *
 * @param {string} s - The email address to normalize.
 * @param {boolean} [throwErr=false] - If true, throws an error when normalization fails. If false, returns false.
 * @return {string | false} The normalized email address, or false if normalization fails (when throwErr is false).
 * @throws {Error} Throws an error if normalization fails and throwErr is true.
 */
normalizeEmail(s: string, throwErr: boolean = false): string | false {}

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
