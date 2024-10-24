
[![License: MIT](https://img.shields.io/npm/l/@dwtechs/checkard.svg?color=brightgreen)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/%40dwtechs%2Fcheckard.svg)](https://www.npmjs.com/package/@dwtechs/checkard)
[![last version release date](https://img.shields.io/github/release-date/DWTechs/Checkard.js)](https://www.npmjs.com/package/@dwtechs/checkard)
![Jest:coverage](https://img.shields.io/badge/Jest:coverage-100%25-brightgreen.svg)
[![minified size](https://img.shields.io/bundlephobia/min/@dwtechs/checkard?color=brightgreen)](https://www.npmjs.com/package/@dwtechs/checkard)

- [Synopsis](#synopsis)
- [Browsers](#browsers)
- [Installation](#installation)
- [Usage](#usage)
  - [ES6](#es6)
  - [CommonJS](#commonjs)
  - [IIFE](#iife)
- [API Reference](#api-reference)
- [Contributors](#contributors)
- [License](#license)
- [Stack](#stack)


## Synopsis

**[Checkard.js](https://github.com/DWTechs/Checkard.js)** is an open source dynamic type checking library for Javascript, Typescript and Node.js to test if a given variable is what it is supposed to be (
Function, object, ascii, boolean, integer, string, json, email...)

- No dependency
- Very lightweight
- Thoroughly tested
- Works in browsers and Node.js
- Works in Javascript and Typescript
- Old browsers support


## Browsers

- android: 2.2,
- chrome: 34,
- edge: 12,
- firefox: 11,
- ie: 9,
- ios: 4.2,
- opera: 28,
- safari: 5.1,
- samsung: 4

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
```


### CommonJS

```javascript
const ch = require("@dwtechs/checkard/dist/ch.cjs");

if (ch.isFunction(variable)) {
  //variable is a function
}

if (!ch.isArray(variable, '=', 2)) {
  //variable is not an array of length 2
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
```


## API Reference


### Types

```javascript

Comparator = '='|'<'|'>'|'<='|'>=';

```


### Primitive

```javascript

isBoolean(bool: any): boolean {}

isString(string: any, emptyCheck: boolean = false): boolean {}

// If typeCheck = false values like '4', '0', '8e4', '+true', '0x44' return true
isNumber(number: any, typeCheck: boolean = true): boolean {}

isSymbol(sym: any): boolean {}

```


### Structural

```javascript

isFunction(func: any): boolean {}

isObject(obj: any, emptyCheck: boolean = false): boolean {}

//Check whether val is null or undefined
isNil(val: any): boolean {}

```


### Number

```javascript

isInteger(number: any, typeCheck: boolean = true): boolean {}

isFloat(number: any, typeCheck: boolean = true): boolean {}

isEven(number: any, typeCheck: boolean = true): boolean {}

isOdd(number: any, typeCheck: boolean = true): boolean {}

isOrigin(number: any, typeCheck: boolean = true): boolean {}

isPositive(number: any, typeCheck: boolean = true): boolean {}

isNegative(number: any, typeCheck: boolean = true): boolean {}

isPowerOfTwo(number: any, typeCheck: boolean = true): boolean {}

isAscii(code: any, extended: boolean = false): boolean {}

```


### Valid number

```javascript

isValidNumber(number: any, 
              min: number = -999999999, 
              max: number = 999999999, 
              typeCheck: boolean = true ): boolean {}

isValidInteger(number: any, 
               min: number = -999999999, 
               max: number = 999999999, 
               typeCheck: boolean = true ): boolean {}

isValidFloat( number: any, 
              min: number = -999999999.9, 
              max: number = 999999999.9, 
              typeCheck: boolean = true ): boolean {}

```


### String

```javascript

isStringOfLength( string: any, 
                  min: number = 0, 
                  max: number = 999999999 ): boolean {}

isJson(string: any): boolean {}

isRegex(regex: any, typeCheck: boolean = true): boolean {}

isEmail(email: any): boolean {}

isIpAddress(ipAddress: any): boolean {}

isJWT(t: any): boolean {}

isSlug(slug: any): boolean {}

isHexadecimal(string: any): boolean {}

containsUpperCase(string: any): boolean {}

containsLowerCase(string: any): boolean {}

containsSpecialCharacter(string: any): boolean {}

containsNumber(string: any, min?: number|null, max?: number|null): boolean {}

```


### Date

```javascript

isDate(date: any): boolean {}

isValidDate(date: any, min: Date = new Date('1/1/1900'), max: Date = new Date('1/1/2200')): boolean {}

isTimestamp(number: any, typeCheck: boolean = true): boolean {}

// default min = 1/1/1900 (month/day/year)
// default max = 1/1/2200 (month/day/year)
isValidTimestamp(number: any, min: number = -2208989361000, max: number = 7258114800000, typeCheck: boolean = true): boolean {}

```


### Array

```javascript

// Check if 'array' is an array and optionally if it is of length =, <, >, <= or >= than 'length'
isArray(array: any, comparator?: Comparator|null, length?: number|null): boolean {}

```

example : 

```javascript

let ar = ['dog','cat','bird'];

if (isArray(array)) {
  // check if ar is an array
}

if (isArray(array, '=', 2)) {
  // check if ar is an array of length 2
}

if (isArray(array, '>=', 1)) {
  // check if ar is an array of length greater than or equal to 1
}

```


### Html

```javascript

isHtmlElement(htmlElement: any): boolean {}

isHtmlEventAttribute(htmlEventAttribute: any): boolean {}

isNode(node: any): boolean {}

```


## Contributors

Checkard.js is still in development and we would be glad to get all the help you can provide.
To contribute please read **[contributor.md](https://github.com/DWTechs/Checkard.js/blob/main/contributor.md)** for detailed installation guide.


## Stack

| Purpose         |                    Choice                    |                                                     Motivation |
| :-------------- | :------------------------------------------: | -------------------------------------------------------------: |
| repository      |        [Github](https://github.com/)         |     hosting for software development version control using Git |
| package manager |     [npm](https://www.npmjs.com/get-npm)     |                                default node.js package manager |
| language        | [TypeScript](https://www.typescriptlang.org) | static type checking along with the latest ECMAScript features |
| module bundler  |      [Rollup.js](https://rollupjs.org)       |                        advanced module bundler for ES6 modules |
| unit testing    |          [Jest](https://jestjs.io/)          |                  delightful testing with a focus on simplicity |
