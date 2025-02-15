
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

declare function isBoolean(v: unknown): v is boolean;
declare function isTruthy(v: unknown): boolean;
declare function isFalsy(v: unknown): boolean;
declare function isNumber(v: unknown, 
                          type?: boolean, 
                          comparator?: Comparator | null, 
                          limit?: number | null
                         ): v is number;
declare function isString(v: unknown, 
                          comparator?: Comparator | null, 
                          limit?: number | null
                         ): v is string;
declare function isSymbol(v: unknown): v is symbol;
declare function isNil(v: unknown): v is null | undefined;
declare function isNull(v: unknown): v is null;
declare function isUndefined(v: unknown): v is undefined;

declare function isObject<T = unknown>(v: unknown, empty?: boolean): v is object & T;
declare function isArray<T = unknown>(v: unknown, 
                                      comparator?: Comparator | null, 
                                      limit?: number | null
                                     ): v is T[];
declare function isJson(v: unknown): v is JSON;
declare function isRegex(v: unknown, type?: boolean): v is RegExp;
declare function isDate(v: unknown): v is Date;
declare function isFunction(v: unknown): v is (...args: unknown[]) => unknown;

declare function isArrayOfLength<T = unknown>(a: Array<T>, 
                                              min?: number, 
                                              max?: number
                                             ): boolean;
declare function isIn(a: unknown[], 
                      v: unknown, 
                      from?: number
                     ): boolean;

declare function isInteger(n: number, type?: boolean): boolean;
declare function isAscii(n: number, ext?: boolean): boolean;
declare function isFloat(n: number, type?: boolean): boolean;
declare function isEven(n: number, type?: boolean): boolean;
declare function isOdd(n: number, type?: boolean): boolean;
declare function isOrigin(n: number, type?: boolean): boolean;
declare function isPositive(n: number, type?: boolean): boolean;
declare function isNegative(n: number, type?: boolean): boolean;
declare function isPowerOfTwo(n: number, type?: boolean): boolean;

declare function isValidNumber(n: number, min?: number, max?: number, type?: boolean): boolean;
declare function isValidInteger(n: number, min?: number, max?: number, type?: boolean): boolean;
declare function isValidFloat(n: number, min?: number, max?: number, type?: boolean): boolean;

declare function isHtmlElement(h: unknown): h is HTMLElement;
declare function isHtmlEventAttribute(h: string): boolean;
declare function isNode(n: unknown): n is Node;

declare function isProperty<K extends PropertyKey>(o: {[key: PropertyKey]: unknown;}, 
                                                   k: K, 
                                                   own?: boolean, 
                                                   enumerable?: boolean
                                                  ): o is Record<K, unknown>;

declare function isStringOfLength(s: string, min?: number, max?: number): boolean;
declare function isEmail(s: string): boolean;
declare function isIpAddress(s: string): boolean;
declare function isBase64(s: string, urlEncoded?: boolean): boolean;
declare function isJWT(s: string): boolean;
declare function isSlug(s: string): boolean;
declare function isHexadecimal(s: string): boolean;
declare function containsUpperCase(s: string): boolean;
declare function containsLowerCase(s: string): boolean;
declare function containsSpecialCharacter(s: string): boolean;
declare function containsNumber(s: string, min?: number, max?: number | null): boolean;
declare function isValidPassword(s: string, options?: PasswordOptions): boolean;

declare function isValidDate(d: Date, 
                             min?: Date, 
                             max?: Date
                            ): boolean;
declare function isTimestamp(t: number, type?: boolean): t is number;
declare function isValidTimestamp(t: number, 
                                  min?: number, 
                                  max?: number, 
                                  type?: boolean
                                 ): boolean;

declare function ucfirst(s: string, everyWords?: boolean): string;
declare function normalizeNickname(nickname: string, 
                                   firstName: string, 
                                   lastName: string
                                  ): string | false;
declare function normalizeName(s: string): string | false;
declare function normalizeEmail(s: string): string | false;

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