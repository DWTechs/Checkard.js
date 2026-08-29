export {  isBoolean,
          isString,
          isNumber,
          isSymbol,
          isNil,
          isNull,
          isUndefined } from './primitive';
        
export {  isObject,
          isArray,
          isSet,
          isJson,
          isRegex,
          isDate,
          isFunction } from './nonprimitive';

export {  isTruthy,
          isFalsy } from './boolean';  

export {  isProperty } from './object';

export {  isArrayOfLength,
          isIn } from './array';

export {  isSetOfLength } from './set';

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

export {  isStringOfLength,
          isEmail,
          isIpAddress,
          isBase64,
          isJWT,
          isSlug,
          isHexadecimal,
          isAnsiEscapeCode,
          isValidPassword,
          containsUpperCase,
          containsLowerCase,
          containsSpecialCharacter,
          containsNumber } from './string';

export {  isHtmlElement,
          isHtmlEventAttribute,
          isNode } from './html';

export {  isValidDate,
          isTimestamp,
          isValidTimestamp,
          isLocale,
          isTimeZone } from './date';

export {  ucfirst,
          normalizeNickname,
          normalizeName,
          normalizeEmail } from './normalize';
  