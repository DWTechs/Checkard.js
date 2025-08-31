# 3.5.0 (Aug 24th 2025)

- String validation functions now accept `unknown` type and perform internal string type checking using `isString()` for improved type safety: `isStringOfLength()`, `isEmail()`, `isIpAddress()`, `isBase64()`, `isJWT()`, `isSlug()`, `isHexadecimal()`
- `isValidDate()` and `isValidTimestamp()` functions now accept `unknown` type and perform internal date and timestamp type checking using `isDate()` and `isTimestamp()` for improved type safety. `min` and `max` parameters can be of type date or timestamp.
- `isTimestamp()` function now accepts `unknown` type and performs internal timestamp type checking using `isInteger()` for improved type safety. The function now returns `is number` instead of boolean.
- Improved `isDate()` function to return false when date = date.setDate(NaN)
- Improved `isEmail()` function to return false when Top-Level Domain starts with a number 

# 3.4.1 (Aug 23th 2025)

- compare() function now throws an error when a comparison fails and throwError is true, for both unary and binary comparators

# 3.4.0 (Aug 22th 2025)

- Functions have a **throwErr** property to throw specific error instead of false
- isBase64 regex now rejects empty strings, improving validation and error handling

# 3.3.0 (Aug 18th 2025)

- Delete b64Encode() and b64Decode() functions

# 3.2.4 (Mar 23th 2025)

- Fix cicular dependency issue
- Add performance tests

# 3.2.3 (Mar 04th 2025)

- String, number and validNumber functions support undefined and null values in Typescript

# 3.2.2 (Feb 25th 2025)

- Update isProperty() function inputs typings

# 3.2.1 (Feb 24th 2025)

- Update number validation functions type for string as input

# 3.2.0 (Feb 23th 2025)

- Update string validation functions for empty string cases

# 3.1.0 (Feb 22th 2025)

- Add b64Encode() and b64Decode() functions to transform strings accordingly

# 3.0.0 (Feb 14th 2025)

- isString() function now also checks if value is of length =, <, >, <=, >=, !=, !0, 0 than limit
- isNumber() function now also checks if value is of length =, <, >, <=, >=, !=, !0, 0 than limit
- Add isNull() and isUndefined() function
- Add isTruthy() and isFalsy() functions
- Add "from" parameter to function isIn() to start from index other then zero
- Add "!=" to comparisons to check if a is different than b
- Add "!0" to comparisons to check if a is not empty
- Add "0" to comparisons to check if a empty
- Update typings of most functions for easier use with Typescript
- Typings are more strict. Resulting in possible breaking changes from Checkard version 2.x.x
- Other functions than primitives and non-primitives functions may not check for input type anymore. Resulting in possible breaking changes from Checkard version 2.x.x
- Improve Documentation 

# 2.30.0 (Jan 29th 2025)

- Add isBase64() function to check if a value is a valid base64 string
- Add "own" property to isProperty() function to check inherited properties only
- Add "enumerable" property to isProperty() function to check enumerable properties only
- Improve the return type of isProperty() function
- Change "any" types to "unknown" for every functions

# 2.29.2 (Dec 21th 2024)

- Improve declaration file for isArrayOfLength() function

# 2.29.1 (Dec 20th 2024)

- Improve isArrayOfLength() function and add more tests

# 2.29.0 (Dec 19th 2024)

- Add isArrayOfLength() function to check array length with min and max

# 2.28.0 (Nov 30th 2024)

- Add isIn() function to check if a value is included in an array
- Add isProperty() function to check if a value is included in an object properties

# 2.27.0 (Nov 13th 2024)

- Add isValidPassword function 
- Update normalizeNickname function to exclude special characters

# 2.26.0 (Oct 26th 2024)

- Add normalization functionalities 
- Add ucfirst function
- Add normalizeNickname function
- Add normalizeName function
- Add normalizeEmail function

# 2.25.0 (Oct 22th 2024)

- CheckHard.js becomes Checkard.js 
- Add isValidInteger() function
- Add isValidFloat() function
- Fix isArray() function when len param is equal to zero
- Add more unit tests for isArray() function
- Improve isInteger() function

# 2.24.0 (Feb 18th 2024)

- Add emptyCheck parameter to isObject() function. Which default to false

# 2.23.0 (Jan 14th 2024)

- Add isStringOfLength() function to check min and max length

# 2.22.0 (Dec 29th 2023)

- Add emptyCheck parameter to isString() function. Which default to false

# 2.21.0 (Oct 18th 2023)

- Add isJWT() function
- Improve isArray() function
- Update build tools
- Code cleanup for lighter library
- Add more unit tests

# 2.20.0 (Oct 11th 2023)

- Add typeCheck parameter to isTimestamp() and isValidTimestamp() functions
- Improve types using "type predicates" for ease of use with Typescript

# 2.19.2 (May 8th 2023)

- Fix isNumber() & isTimestamp() issue with array of length one
- Add more unit tests with arrays

# 2.19.1 (Oct 23th 2022)

- Fix isTimestamp() issue with string values

# 2.19.0 (Aug 16th 2022)

- isArray() function now checks if value is an array and optionally if it is of length =, <, >, <= or >= than limit

# 2.18.0 (May 9th 2022)

- ContainsNumber() function now can take min and max parameters

# 2.17.2 (Jan 16th 2022)

- Fix isValidTimestamp() function
- Fix containsUpperCase() function
- Fix containsLowerCase() function

# 2.17.1 (Nov 21th 2021)

- Fix isValidDate() function
- Fix declaration file for Typescript

# 2.17.0 (Nov 20th 2021)

- Add isDate() function
- Add isValidDate() function
- Add isSlug() function
- Add isHexadecimal() function
- Add isTimestamp() function
- Add isValidTimestamp() function
- Add isValidNumber() function
- Add containsUpperCase() function
- Add containsLowerCase() function
- Add containsSpecialCharacter() function
- Add containsNumber() function

# 2.16.0 (Mar 28th 2021)

- Add 'length' parameter to isArray() function to check the length of the array

# 2.15.0 (Jan 11th 2021)

- Add isNil() function to test null and undefined values 
- Add isSymbol() to primitive checkers 

# 2.14.0 (Jan 10th 2021)

- Ch.js becomes CheckHard.js 
- Project transfered from LCluber to DWTechs

# 2.13.0 (Dec 6th 2020)

- Add typeCheck parameter to isNumber(), isOdd(), isOrigin(), isPositive(), isNegative(), isPowerOfTwo() functions
- Improved isNumber() performance

# 2.12.0 (Sep 13th 2020)

- Add IsPowerOfTwo() function

# 2.11.0 (Sep 11th 2020)

- IE9 compatibility for iife version
- Update Typescript to version 4

# 2.10.1 (2020-04-05)

- Add polyfill for typeof

# 2.10.0 (2019-12-25)

- Add isemail and isipaddress functions

# 2.9.0 (2019-10-16)

- Add typecheck to isregex function

# 2.8.0 (2019-10-15)

- Add isregex function 

# 2.7.1 (2019-10-06)

- Update readme.md documentation

# 2.7.0 (2019-09-19)

- Add commonjs version of Ch.js into dist folder

# 2.6.2 (2019-08-16)

- ch.js is now in ES6 format

# 2.6.1 (2019-08-10)

- Update description of the library 

# 2.6.0 (2019-08-09)

- isascii() function now accepts integers with string type

# 2.5.0 (2019-08-09)

- isfloat() function now with type checking parameter

# 2.4.0 (2019-08-08)

- isinteger() now with type checking parameter

# 2.3.1 (2019-07-31)

- Update documentation api reference

# 2.3.0 (2019-07-31)

- Add isHTMLEventAttribute() function

# 2.2.0 (2019-07-21)

- Add isEven(), isOdd(), isOrigin(), isPositive(), isNegative() functions

# 2.1.1 (2019-07-16)

- isfunction() function returns false if parameter is null or 0

# 2.1.0 (2019-07-16)

- Adde isnumber() function

# 2.0.1 (2019-07-15)

- isHtmlElement() & isNode() functions return false with null parameter
- Fix isAscii() function
- isObject() function now returns false with array as input

# 2.0.0 (2019-07-14)

- Fix husky pre-push command 
- Library exports functions instead of a static class
- Is.string function replaced by isString function, Is.array function replaced by
  isArray... please see README.md for exhaustive documentation

# 1.2.0 (2019-07-08)

- Add Is.boolean() function 

# 1.1.0 (Jun 19th 2019)

- Added Is.htmlElement() function
- Added Is.node() function

# 1.0.2 (Jun 03rd 2019)

- Improved Is.json() function

# 1.0.1 (Jun 02nd 2019)

- Updated README.md

# 1.0.0 (Jun 01st 2019)

- Deleted Mouette.js dependency
- Is.json() function now returns a boolean

# 0.1.2 (Apr 07th 2019)

- Updated README.md with documentation and Yarn install command

# 0.1.1 (Feb 17th 2019)

- Added Is.array() function
- Added Is.float() function

# 0.1.0 (Dec 23th 2018)

- Initial version from Wee.js library
