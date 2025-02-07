
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
  lowercase: boolean,
  uppercase: boolean,
  number: boolean,
  specialCharacter: boolean
}

```


### Primitive

primitive methods accept any variable as parameter in order to check its type.

```javascript

isBoolean(v: unknown): v is boolean {}

// If typeCheck = false values like '4', '0', '8e4', '+true', '0x44' return true
isNumber(v: unknown, typeCheck?: boolean = true): v is number {}

isString(v: unknown, required?: boolean = false): v is string {}

isSymbol(v: unknown): v is symbol {}

//Check whether val is null or undefined
isNil(v: unknown): v is null | undefined {}

isNull(v: unknown): v is null {}

isUndefined(u: unknown): v is undefined {}

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

isObject<T = unknown>(o: unknown, emptyCheck?: boolean = false): o is object & T {}

// Check if 'array' is an array and optionally if it is of length =, <, >, <= or >= than 'length'
isArray<T = unknown>(
    v: unknown, 
    comparator?: Comparator|null, 
    length?: number|null
  ): v is Array<T> {}

isJson(v: unknown): v is JSON {} 

isRegex(v: unknown, typeCheck?: boolean = true): v is RegExp {} 

isDate(v: unknown): v is Date {}

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

isInteger(n: number, typeCheck?: boolean = true): boolean {}

isFloat(n: number, typeCheck?: boolean = true): boolean {}

isEven(n: number, typeCheck?: boolean = true): boolean {}

isOdd(n: number, typeCheck?: boolean = true): boolean {}

isOrigin(n: number, typeCheck?: boolean = true): boolean {}

isPositive(n: number, typeCheck?: boolean = true): boolean {}

isNegative(n: number, typeCheck?: boolean = true): boolean {}

isPowerOfTwo(n: number, typeCheck?: boolean = true): boolean {}

isAscii(c: number, extended?: boolean = true): boolean {}

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

isValidNumber(n: unknown, 
              min?: number = -999999999, 
              max?: number = 999999999, 
              typeCheck?: boolean = true ): boolean {}

isValidInteger(n: unknown, 
               min?: number = -999999999, 
               max?: number = 999999999, 
               typeCheck?: boolean = true ): boolean {}

isValidFloat( n: unknown, 
              min?: number = -999999999.9, 
              max?: number = 999999999.9, 
              typeCheck?: boolean = true ): boolean {}

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

isStringOfLength( s: string, 
                  min?: number = 0, 
                  max?: number = 999999999 ): boolean {}

isEmail(s: string): boolean {}

isIpAddress(s: string): boolean {}

isBase64(s: string, urlEncoded?: boolean = false): boolean {}

isJWT(s: string): boolean {}

isSlug(s: string): boolean {}

isHexadecimal(s: string): boolean {}

const PwdDefaultOptions = {
  lowerCase: true,
  upperCase: true,
  number: true,
  specialCharacter: true,
  minLength: 12,
  maxLength: 64,
};

isValidPassword(s: string, options: PasswordOptions = PwdDefaultOptions): boolean {}

containsUpperCase(s: string): boolean {}

containsLowerCase(s: string): boolean {}

containsSpecialCharacter(s: string): boolean {}

containsNumber(s: string, min?: number|null, max?: number|null): boolean {}

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

isValidDate(
    d: unknown, 
    min?: Date = new Date('1/1/1900'), 
    max?: Date = new Date('1/1/2200')
  ): boolean {} // d is Date

isTimestamp(t: unknown, typeCheck?: boolean = true): boolean {} // t is number

// default min = 1/1/1900 (month/day/year)
// default max = 1/1/2200 (month/day/year)
isValidTimestamp(
    t: unknown, 
    min?: number = -2208989361000, 
    max?: number = 7258114800000, 
    typeCheck?: boolean = true
  ): boolean {} // t is number

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

isArrayOfLength(
    a: unknown, 
    min = 0, 
    max = 999999999): boolean {} // a is Array<T>

// This method lets you check if a value is included in an array.
isIn(
    arr: unknown[], 
    v: unknown, 
    fromIndex?: number = 0
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

// This method lets you check if a value is included in an object properties.
// own: boolean - whether to check inherited properties only
// enumerable: boolean - whether to check enumerable properties only
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

isHtmlElement(h: unknown): h is HTMLElement {}

isHtmlEventAttribute(h: unknown): boolean {}

isNode(n: unknown): n is Node {}

```


### Normalize

```javascript

ucfirst(string: string, everyWords?: boolean = true): string | false {}

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
