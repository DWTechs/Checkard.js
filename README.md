
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

if (!isString(firstName, true))
    return next({ status: 400, msg: "Missing first name" });
if (!isString(lastName, true))
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

if (!ch.isString(firstName, true))
    return next({ status: 400, msg: "Missing first name" });
if (!ch.isString(lastName, true))
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

```javascript

isBoolean(b: unknown): boolean {}

// If typeCheck = false values like '4', '0', '8e4', '+true', '0x44' return true
isNumber(n: unknown, typeCheck?: boolean = true): boolean {} // n is number

isSymbol(s: unknown): boolean {} // s is symbol

//Check whether val is null or undefined
isNil(n: unknown): boolean {} // n is null | undefined

```


### Number

```javascript

isInteger(n: unknown, typeCheck?: boolean = true): boolean {} // n is number

isFloat(n: unknown, typeCheck?: boolean = true): boolean {} // n is number

isEven(n: unknown, typeCheck?: boolean = true): boolean {} // n is number

isOdd(n: unknown, typeCheck?: boolean = true): boolean {} // n is number

isOrigin(n: unknown, typeCheck?: boolean = true): boolean {} // n is number

isPositive(n: unknown, typeCheck?: boolean = true): boolean {} // n is number

isNegative(n: unknown, typeCheck?: boolean = true): boolean {} // n is number

isPowerOfTwo(n: unknown, typeCheck?: boolean = true): boolean {} // n is number

isAscii(c: unknown, extended?: boolean = true): boolean {} // n is number

```


### Valid number

```javascript

isValidNumber(n: unknown, 
              min?: number = -999999999, 
              max?: number = 999999999, 
              typeCheck?: boolean = true ): boolean {} // n is number

isValidInteger(n: unknown, 
               min?: number = -999999999, 
               max?: number = 999999999, 
               typeCheck?: boolean = true ): boolean {} // n is number

isValidFloat( n: unknown, 
              min?: number = -999999999.9, 
              max?: number = 999999999.9, 
              typeCheck?: boolean = true ): boolean {} // n is number

```


### String

```javascript

isString(s: unknown, required?: boolean = false): boolean {} // s is string

isStringOfLength( s: unknown, 
                  min?: number = 0, 
                  max?: number = 999999999 ): boolean {} // s is string

isJson(j: unknown): boolean {} // j is JSON

isRegex(r: unknown, typeCheck?: boolean = true): boolean {} // r is RegExp

isEmail(e: unknown): boolean {} // e is string

isIpAddress(i: unknown): boolean {} // i is string

isBase64(s: unknown, urlEncoded?: boolean = false): boolean {} // s is string

isJWT(t: unknown): boolean {} // t is string

isSlug(s: unknown): boolean {} // s is string

isHexadecimal(s: unknown): boolean {} // s is string

const PwdDefaultOptions = {
  lowerCase: true,
  upperCase: true,
  number: true,
  specialCharacter: true,
  minLength: 12,
  maxLength: 64,
};
isValidPassword(s: unknown, options: PasswordOptions = PwdDefaultOptions): boolean {} // s is string

containsUpperCase(s: unknown): boolean {} // s is string

containsLowerCase(s: unknown): boolean {} // s is string

containsSpecialCharacter(s: unknown): boolean {} // s is string

containsNumber(s: unknown, min?: number|null, max?: number|null): boolean {} // s is string

```

Usage example : 

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

isDate(d: unknown): boolean {} // d is Date

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


### Array

```javascript

// Check if 'array' is an array and optionally if it is of length =, <, >, <= or >= than 'length'
isArray(
    a: unknown, 
    comparator?: Comparator|null, 
    length?: number|null
  ): boolean {} // a is Array<T>

isArrayOfLength(
    a: unknown, 
    min = 0, 
    max = 999999999): boolean {} // a is Array<T>

// This method lets you check if a value is included in an array.
isIn(v: unknown, arr: unknown[]): boolean {}

```

Usage example : 

```javascript

import { isArray, isIn } from "@dwtechs/checkard";

let ar = ['dog','cat','bird'];

if (isArray(ar)) {
  // check if ar is an array
}

if (isArray(ar, '=', 2)) {
  // check if ar is an array of length 2
}

if (isArray(ar, '>=', 1)) {
  // check if ar is an array of length greater than or equal to 1
}


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

isObject(o: unknown, emptyCheck?: boolean = false): boolean {} // o is object & T

// This method lets you check if a value is included in an object properties.
isProperty(
    v: unknown, 
    obj: { [key: string]: unknown },
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


### Function

```javascript

isFunction(f: unknown): boolean {} // f is (...args: unknown[]) => unknown

```


### Html

```javascript

isHtmlElement(h: unknown): boolean {} // h is HTMLElement

isHtmlEventAttribute(h: unknown): boolean {} // h is string

isNode(n: unknown): boolean {} // n is Node

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
