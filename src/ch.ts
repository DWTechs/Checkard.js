export {  isBoolean,
          isString,
          isNumber,
          isSymbol,
          isNil,
          isNull,
          isUndefined } from './primitive';
        
export {  isObject,
          isArray,
          isJson,
          isRegex,
          isDate,
          isFunction } from './nonprimitive';

export {  isTruthy,
          isFalsy } from './boolean';  

export {  isProperty } from './object';

export {  isArrayOfLength,
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

export {  isStringOfLength,
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
          containsNumber } from './string';

export {  isHtmlElement,
          isHtmlEventAttribute,
          isNode } from './html';

export {  isValidDate,
          isTimestamp,
          isValidTimestamp } from './date';

export {  ucfirst,
          normalizeNickname,
          normalizeName,
          normalizeEmail } from './normalize';

export {  b64Encode, 
          b64Decode } from './base64';
  