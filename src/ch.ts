export {  isBoolean,
          isNumber,
          isSymbol,
          isNil } from './primitive';

export {  isFunction } from './function';

export {  isObject,
          isProperty } from './object';

export {  isArray,
          isArrayOfLength,
          isIn } from './array';

export {  isAscii,
          isInteger,
          isFloat,
          isEven,
          isOdd,
          isOrigin,
          isPositive,
          isNegative,
          isPowerOfTwo } from './number';

export {  isValidNumber,
          isValidInteger,
          isValidFloat } from './validnumber';

export {  isString,
          isStringOfLength,
          isJson,
          isRegex,
          isEmail,
          isIpAddress,
          isJWT,
          isSlug,
          isHexadecimal,
          isValidPassword,
          containsUpperCase,
          containsLowerCase,
          containsSpecialCharacter,
          containsNumber } from './string';

export {  isHtmlElement,
          isHtmlEventAttribute,
          isNode } from './html';

export {  isDate,
          isValidDate,
          isTimestamp,
          isValidTimestamp } from './date';

export {  ucfirst,
          normalizeNickname,
          normalizeName,
          normalizeEmail } from './normalize';
  