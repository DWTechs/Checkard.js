
type Comparator = '='|'<'|'>'|'<='|'>='|'!='|'!0'|'0';
type PasswordOptions = {
  lowerCase: boolean;
  upperCase: boolean;
  number: boolean;
  specialCharacter: boolean;
  maxLength: number;
  minLength: number;
};
export type { Comparator, PasswordOptions };

declare function isBoolean(v: unknown, throwErr?: boolean): v is boolean;
declare function isTruthy(v: unknown, throwErr?: boolean): boolean;
declare function isFalsy(v: unknown, throwErr?: boolean): boolean;
declare function isNumber(v: unknown, 
                          type?: boolean, 
                          comparator?: Comparator | null, 
                          limit?: number | null,
                          throwErr?: boolean
                         ): v is number;
declare function isString(v: unknown, 
                          comparator?: Comparator | null, 
                          limit?: number | null,
                          throwErr?: boolean
                         ): v is string;
declare function isSymbol(v: unknown, throwErr?: boolean): v is symbol;
declare function isNil(v: unknown, throwErr?: boolean): v is null | undefined;
declare function isNull(v: unknown, throwErr?: boolean): v is null;
declare function isUndefined(v: unknown, throwErr?: boolean): v is undefined;

declare function isObject<T = unknown>(v: unknown, empty?: boolean, throwErr?: boolean): v is object & T;
declare function isArray<T = unknown>(v: unknown, 
                                      comparator?: Comparator | null, 
                                      limit?: number | null,
                                      throwErr?: boolean
                                     ): v is T[];
declare function isJson(v: unknown, throwErr?: boolean): v is JSON;
declare function isRegex(v: unknown, type?: boolean, throwErr?: boolean): v is RegExp;
declare function isDate(v: unknown, throwErr?: boolean): v is Date;
declare function isFunction(v: unknown, throwErr?: boolean): v is (...args: unknown[]) => unknown;

declare function isArrayOfLength<T = unknown>(a: Array<T>, 
                                              min?: number, 
                                              max?: number,
                                              throwErr?: boolean
                                             ): boolean;
declare function isIn(a: unknown[], 
                      v: unknown, 
                      from?: number,
                      throwErr?: boolean
                     ): boolean;

declare function isInteger(n: number | string | undefined | null, type?: boolean, throwErr?: boolean): boolean;
declare function isAscii(n: number | undefined | null, ext?: boolean, throwErr?: boolean): boolean;
declare function isFloat(n: number | string | undefined | null, type?: boolean, throwErr?: boolean): boolean;
declare function isEven(n: number | string | undefined | null, type?: boolean, throwErr?: boolean): boolean;
declare function isOdd(n: number | string | undefined | null, type?: boolean, throwErr?: boolean): boolean;
declare function isOrigin(n: number | string | undefined | null, type?: boolean, throwErr?: boolean): boolean;
declare function isPositive(n: number | string | undefined | null, type?: boolean, throwErr?: boolean): boolean;
declare function isNegative(n: number | string | undefined | null, type?: boolean, throwErr?: boolean): boolean;
declare function isPowerOfTwo(n: number | string | undefined | null, type?: boolean, throwErr?: boolean): boolean;

declare function isValidNumber(n: number | string | undefined | null, min?: number, max?: number, type?: boolean, throwErr?: boolean): boolean;
declare function isValidInteger(n: number | string | undefined | null, min?: number, max?: number, type?: boolean, throwErr?: boolean): boolean;
declare function isValidFloat(n: number | string | undefined | null, min?: number, max?: number, type?: boolean, throwErr?: boolean): boolean;

declare function isHtmlElement(h: unknown, throwErr?: boolean): h is HTMLElement;
declare function isHtmlEventAttribute(h: string, throwErr?: boolean): boolean;
declare function isNode(n: unknown, throwErr?: boolean): n is Node;

declare function isProperty<K extends PropertyKey>(o: object, 
                                                   k: K, 
                                                   own?: boolean, 
                                                   enumerable?: boolean,
                                                   throwErr?: boolean
                                                  ): o is Record<K, unknown>;

declare function isStringOfLength(s: string | undefined | null, min?: number, max?: number, throwErr?: boolean): boolean;
declare function isEmail(s: string | undefined | null, throwErr?: boolean): boolean;
declare function isIpAddress(s: string | undefined | null, throwErr?: boolean): boolean;
declare function isBase64(s: string | undefined | null, urlEncoded?: boolean, throwErr?: boolean): boolean;
declare function isJWT(s: string | undefined | null, throwErr?: boolean): boolean;
declare function isSlug(s: string | undefined | null, throwErr?: boolean): boolean;
declare function isHexadecimal(s: string | undefined | null, throwErr?: boolean): boolean;
declare function containsUpperCase(s: string, throwErr?: boolean): boolean;
declare function containsLowerCase(s: string, throwErr?: boolean): boolean;
declare function containsSpecialCharacter(s: string, throwErr?: boolean): boolean;
declare function containsNumber(s: string, min?: number, max?: number | null, throwErr?: boolean): boolean;
declare function isValidPassword(s: string, options?: PasswordOptions, throwErr?: boolean): boolean;

declare function isValidDate(d: Date, 
                             min?: Date, 
                             max?: Date,
                             throwErr?: boolean
                            ): boolean;
declare function isTimestamp(t: number, type?: boolean, throwErr?: boolean): t is number;
declare function isValidTimestamp(t: number, 
                                  min?: number, 
                                  max?: number, 
                                  type?: boolean,
                                  throwErr?: boolean
                                 ): boolean;

declare function ucfirst(s: string, everyWords?: boolean, throwErr?: boolean): string;
declare function normalizeNickname(nickname: string, 
                                   firstName: string, 
                                   lastName: string,
                                   throwErr?: boolean
                                  ): string | false;
declare function normalizeName(s: string, throwErr?: boolean): string | false;
declare function normalizeEmail(s: string, throwErr?: boolean): string | false;

export { isBoolean,
         isTruthy,
         isFalsy,  
         isNil,
         isNull, 
         isUndefined,
         isSymbol,
         isJson,
         isFunction,
         isObject,
         isProperty,
         isArray,
         isArrayOfLength,
         isIn,
         isAscii,
         isInteger,
         isValidInteger,
         isFloat,
         isValidFloat,
         isNumber,
         isValidNumber,
         isString,
         isStringOfLength,
         isHtmlElement,
         isHtmlEventAttribute,
         isNode,
         isEven,
         isOdd,
         isOrigin,
         isPositive,
         isNegative,
         isPowerOfTwo,
         isRegex,
         isEmail,
         isIpAddress,
         isBase64,
         isJWT,
         isSlug,
         isHexadecimal,
         containsUpperCase,
         containsLowerCase,
         containsSpecialCharacter,
         containsNumber,
         isValidPassword,
         isDate,
         isValidDate,
         isTimestamp,
         isValidTimestamp,
         ucfirst,
         normalizeNickname,
         normalizeName,
         normalizeEmail };