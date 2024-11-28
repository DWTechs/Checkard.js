export {  isBoolean,
          isNumber,
          isString,
          isSymbol } from './primitive';

export {  isFunction } from './function';

export {  isObject, 
          isNil } from './structural';

export {  isArray } from './array';

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

export {  isCustomType } from './custom';

export {  ucfirst,
          normalizeNickname,
          normalizeName,
          normalizeEmail } from './normalize';
  