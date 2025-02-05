export {  isBoolean,
          isString,
          isNumber,
          isSymbol,
          isNil } from './primitive';
        
export {  isObject,
          isArray,
          isJson,
          isRegex } from './nonprimitive';

export {  isFunction } from './function';

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

export {  isDate,
          isValidDate,
          isTimestamp,
          isValidTimestamp } from './date';

export {  ucfirst,
          normalizeNickname,
          normalizeName,
          normalizeEmail } from './normalize';
  