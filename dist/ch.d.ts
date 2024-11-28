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

declare function isObject<T = any>(o: any, empty?: boolean): o is object & T;
declare function isNil(n: any): n is null | undefined;

declare function isBoolean(b: any): b is boolean;
declare function isString(s: any, required?: boolean): s is string;
declare function isNumber(n: any, type?: boolean): n is number;
declare function isSymbol(s: any): s is symbol;

declare function isFunction(func: any): func is Function;

declare function isArray<T = any>(a: any, comp?: Comparator | null, len?: number | null): a is Array<T>;

declare function isAscii(c: any, ext?: boolean): c is number;
declare function isInteger(n: any, type?: boolean): n is number;
declare function isFloat(n: any, type?: boolean): n is number;
declare function isEven(n: any, type?: boolean): n is number;
declare function isOdd(n: any, type?: boolean): n is number;
declare function isOrigin(n: any, type?: boolean): n is number;
declare function isPositive(n: any, type?: boolean): n is number;
declare function isNegative(n: any, type?: boolean): n is number;
declare function isPowerOfTwo(n: any, type?: boolean): n is number;

declare function isValidNumber(n: any, min?: number, max?: number, type?: boolean): n is number;
declare function isValidInteger(n: any, min?: number, max?: number, type?: boolean): n is number;
declare function isValidFloat(n: any, min?: number, max?: number, type?: boolean): n is number;

declare function isHtmlElement(h: any): h is HTMLElement;
declare function isHtmlEventAttribute(h: any): h is string;
declare function isNode(n: any): n is Node;

declare function isStringOfLength(s: any, min?: number, max?: number): s is string;
declare function isJson(s: any): s is JSON;
declare function isRegex(r: any, type?: boolean): r is RegExp;
declare function isEmail(e: any): e is string;
declare function isIpAddress(i: any): i is string;
declare function isJWT(t: any): t is string;
declare function isSlug(s: any): s is string;
declare function isHexadecimal(s: any): s is string;
declare function containsUpperCase(s: any): s is string;
declare function containsLowerCase(s: any): s is string;
declare function containsSpecialCharacter(s: any): s is string;
declare function containsNumber(s: any, min?: number | null, max?: number | null): s is string;
declare function isValidPassword(s: any, options?: PasswordOptions): s is string;

declare function isDate(d: any): d is Date;
declare function isValidDate(d: any, min?: Date, max?: Date): d is Date;
declare function isTimestamp(t: any, type?: boolean): t is number;
declare function isValidTimestamp(t: any, min?: number, max?: number, type?: boolean): t is number;

declare function isCustomType<T>(val: any, customType: T | T[]): boolean;

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
         isArray,
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
         isCustomType,
         normalizeNickname,
         normalizeName,
         normalizeEmail };