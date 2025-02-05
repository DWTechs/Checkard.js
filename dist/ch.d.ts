/*
MIT License

Copyright (c) 2009 DWTechs

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

https://github.com/DWTechs/Checkard.js
*/


type Comparator = '='|'<'|'>'|'<='|'>=';
type PasswordOptions = {
  lowerCase: boolean;
  upperCase: boolean;
  number: boolean;
  specialCharacter: boolean;
  maxLength: number;
  minLength: number;
};
export type { Comparator, PasswordOptions };

declare function isObject<T = unknown>(o: unknown, empty?: boolean): o is object & T;
declare function isProperty<K extends PropertyKey>(
  obj: { [key: PropertyKey]: unknown } | null | undefined,
  k: K,  
  own?: boolean, enumerable?: boolean
): obj is Record<K, unknown>;

declare function isNil(n: unknown): n is null | undefined;

declare function isBoolean(b: unknown): b is boolean;
declare function isNumber(n: unknown, type?: boolean): n is number;
declare function isSymbol(s: unknown): s is symbol;

declare function isFunction(func: unknown): func is (...args: unknown[]) => unknown;

declare function isArray<T = unknown>(a: unknown, comp?: Comparator | null, len?: number | null): a is ReadonlyArray<T>;
declare function isArrayOfLength<T = unknown>(a: Array<T> | null | undefined, min?: number, max?: number): boolean;
declare function isIn(val: unknown, arr: unknown[]): boolean;

declare function isAscii(c: unknown, ext?: boolean): c is number;
declare function isInteger(n: unknown, type?: boolean): n is number;
declare function isFloat(n: unknown, type?: boolean): n is number;
declare function isEven(n: unknown, type?: boolean): n is number;
declare function isOdd(n: unknown, type?: boolean): n is number;
declare function isOrigin(n: unknown, type?: boolean): n is number;
declare function isPositive(n: unknown, type?: boolean): n is number;
declare function isNegative(n: unknown, type?: boolean): n is number;
declare function isPowerOfTwo(n: unknown, type?: boolean): n is number;

declare function isValidNumber(n: unknown, min?: number, max?: number, type?: boolean): n is number;
declare function isValidInteger(n: unknown, min?: number, max?: number, type?: boolean): n is number;
declare function isValidFloat(n: unknown, min?: number, max?: number, type?: boolean): n is number;

declare function isHtmlElement(h: unknown): h is HTMLElement;
declare function isHtmlEventAttribute(h: unknown): h is string;
declare function isNode(n: unknown): n is Node;

declare function isString(s: unknown, required?: boolean): s is string;
declare function isStringOfLength(s: unknown, min?: number, max?: number): boolean;
declare function isJson(s: unknown): s is JSON;
declare function isRegex(r: unknown, type?: boolean): r is RegExp;
declare function isEmail(e: unknown): e is string;
declare function isIpAddress(i: unknown): i is string;
declare function isBase64(s: unknown, urlEncoded?: boolean): boolean;
declare function isJWT(t: unknown): t is string;
declare function isSlug(s: unknown): s is string;
declare function isHexadecimal(s: unknown): s is string;
declare function containsUpperCase(s: unknown): s is string;
declare function containsLowerCase(s: unknown): s is string;
declare function containsSpecialCharacter(s: unknown): s is string;
declare function containsNumber(s: unknown, min?: number | null, max?: number | null): s is string;
declare function isValidPassword(s: unknown, options?: PasswordOptions): s is string;

declare function isDate(d: unknown): d is Date;
declare function isValidDate(d: unknown, min?: Date, max?: Date): d is Date;
declare function isTimestamp(t: unknown, type?: boolean): t is number;
declare function isValidTimestamp(t: unknown, min?: number, max?: number, type?: boolean): t is number;

declare function ucfirst(s: string, everyWords?: boolean): string | false;
declare function normalizeNickname(nickname: string, firstName: string, lastName: string): string | false;
declare function normalizeName(s: string): string | false;
declare function normalizeEmail(s: string): string | false;

export { isBoolean, 
         isNil,
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