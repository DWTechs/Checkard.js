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

'use strict';

const comparisons = {
    "=": (a, b) => a == b,
    "<": (a, b) => a < b,
    ">": (a, b) => a > b,
    "<=": (a, b) => a <= b,
    ">=": (a, b) => a >= b,
    "!=": (a, b) => a != b,
    "!0": (a) => a != 0,
    "0": (a) => a == 0,
};
const ComparatorsToString = Object.keys(comparisons).join(', ');
function compare(a, c, b, throwError = false) {
    if (!c)
        return true;
    if (!(c in comparisons)) {
        if (throwError)
            throw new Error(`Comparison failed because of an invalid comparator : '${c}'. Valid comparators are: ${ComparatorsToString}`);
        return false;
    }
    if (c === '!0' || c === '0') {
        const result = comparisons[c](a);
        if (!result && throwError)
            throw new Error(`Comparison failed because ${a} is not '${c}'`);
        return result;
    }
    if (b == null) {
        if (throwError)
            throw new Error(`Comparison failed because Comparator '${c}' requires a second value`);
        return false;
    }
    const result = comparisons[c](a, b);
    if (!result && throwError)
        throw new Error(`Comparison failed because ${a} ${c} ${b} returned false`);
    return result;
}
function getTag(t) {
    return t == null ? t === undefined ? '[object Undefined]' : '[object Null]' : toString.call(t);
}

function throwError(expectedType, actualValue, causedBy) {
    const c = causedBy ? `. ${causedBy}` : '';
    throw new Error(`Checkard: Expected ${expectedType}, but received ${typeof actualValue}: ${String(actualValue)}${c}`);
}

function isNum(v, type, throwErr = false) {
    const n = Number(v);
    if (type ? n === v : !Number.isNaN(n - Number.parseFloat(v)))
        return true;
    if (throwErr)
        throwError('number', v);
    return false;
}
function isArr(v, throwErr = false) {
    if ((v === null || v === void 0 ? void 0 : v.constructor) === Array)
        return true;
    if (throwErr)
        throwError('array', v);
    return false;
}
function isStr(v, throwErr = false) {
    if (typeof v === "string")
        return true;
    if (throwErr)
        throwError('string', v);
    return false;
}

function isBoolean(v, throwErr = false) {
    if (typeof v === "boolean")
        return true;
    if (throwErr)
        throwError('boolean', v);
    return false;
}
function isNumber(v, type = true, comparator = null, limit = null, throwErr = false) {
    if (isSymbol(v) || (v === null || v === void 0 ? void 0 : v.constructor) === Array || !isNum(v, type)) {
        if (throwErr)
            throwError('number', v);
        return false;
    }
    try {
        return compare(v, comparator, limit, throwErr);
    }
    catch (err) {
        throwError('valid number', v, err.message);
        return false;
    }
}
function isString(v, comparator = null, limit = null, throwErr = false) {
    if (!isStr(v)) {
        if (throwErr)
            throwError('string', v);
        return false;
    }
    try {
        return compare(v.length, comparator, limit, throwErr);
    }
    catch (err) {
        throwError('valid string', v, err.message);
        return false;
    }
}
function isSymbol(v, throwErr = false) {
    const type = typeof v;
    if (type === 'symbol' || (type === 'object' && v != null && getTag(v) === '[object Symbol]'))
        return true;
    if (throwErr)
        throwError('symbol', v);
    return false;
}
function isNil(v, throwErr = false) {
    if (v == null)
        return true;
    if (throwErr)
        throwError('null or undefined', v);
    return false;
}
function isNull(v, throwErr = false) {
    if (v === null)
        return true;
    if (throwErr)
        throwError('null', v);
    return false;
}
function isUndefined(v, throwErr = false) {
    if (v === undefined)
        return true;
    if (throwErr)
        throwError('undefined', v);
    return false;
}

function isObject(v, empty = false, throwErr = false) {
    if (v !== null && typeof v === "object" && !isArray(v) && (empty ? !!Object.keys(v).length : true))
        return true;
    if (throwErr)
        throwError('object', v);
    return false;
}
function isArray(v, comparator = null, limit = null, throwErr = false) {
    if (!isArr(v)) {
        if (throwErr)
            throwError('array', v);
        return false;
    }
    try {
        return compare(v.length, comparator, limit, throwErr);
    }
    catch (err) {
        throwError('valid array', v, err.message);
        return false;
    }
}
function isJson(v, throwErr = false) {
    if (isString(v, ">", 0)) {
        try {
            JSON.parse(v);
        }
        catch (e) {
            if (throwErr)
                throwError('valid JSON string', v);
            return false;
        }
        return true;
    }
    if (throwErr)
        throwError('valid JSON string', v);
    return false;
}
function isRegex(v, type = true, throwErr = false) {
    if (type) {
        if (v instanceof RegExp)
            return true;
        if (throwErr)
            throwError('valid RegExp pattern', v);
        return false;
    }
    try {
        new RegExp(v);
        return true;
    }
    catch (e) {
        if (throwErr)
            throwError('valid RegExp pattern', v);
        return false;
    }
}
function isDate(v, throwErr = false) {
    if (v instanceof Date && !Number.isNaN(v.getTime()))
        return true;
    if (throwErr)
        throwError('Date', v);
    return false;
}
function isFunction(v, throwErr = false) {
    if (Boolean(v && getTag(v) === "[object Function]"))
        return true;
    if (throwErr)
        throwError('function', v);
    return false;
}

function isFalsy(v, throwErr = false) {
    if (!v)
        return true;
    if (throwErr)
        throwError('falsy value', v);
    return false;
}
function isTruthy(v, throwErr = false) {
    if (!!v)
        return true;
    if (throwErr)
        throwError('truthy value', v);
    return false;
}

function isProperty(v, k, own = true, enumerable = true, throwErr = false) {
    if (!isObject(v, true, throwErr))
        return false;
    let isValid;
    if (enumerable)
        isValid = isEnumerable(v, k, own);
    else if (own)
        isValid = Object.prototype.hasOwnProperty.call(v, k);
    else
        isValid = k in v;
    if (isValid)
        return true;
    if (throwErr) {
        const scope = own ? 'own' : 'inherited';
        const type = enumerable ? 'enumerable' : 'any';
        throwError(`${scope} ${type} property '${String(k)}'`, v);
    }
    return false;
}
function isEnumerable(obj, key, own) {
    if (own)
        return Object.prototype.propertyIsEnumerable.call(obj, key);
    let currentObj = obj;
    while (currentObj) {
        const descriptor = Object.getOwnPropertyDescriptor(currentObj, key);
        if (descriptor)
            return !!(descriptor === null || descriptor === void 0 ? void 0 : descriptor.enumerable);
        currentObj = Object.getPrototypeOf(currentObj);
    }
    return false;
}

function isArrayOfLength(v, min = 0, max = 999999999, throwErr = false) {
    if (!isArray(v)) {
        if (throwErr)
            throwError(`array with length in range [${min}, ${max}]`, v);
        return false;
    }
    const n = v.length;
    if (n >= min && n <= max)
        return true;
    if (throwErr)
        throwError(`array with length in range [${min}, ${max}] (actual length: ${n})`, v);
    return false;
}
function isIn(a, v, from = 0, throwErr = false) {
    if (a.includes(v, from))
        return true;
    if (throwErr)
        throwError(`value ${String(v)} to be found in array`, a);
    return false;
}

function isInteger(v, type = true, throwErr = false) {
    if (isNumber(v, type)) {
        const int = Number.parseInt(String(v), 10);
        if (type ? v === int : v == int)
            return true;
    }
    if (throwErr)
        throwError('integer', v);
    return false;
}
function isFloat(v, type = true, throwErr = false) {
    if (isNumber(v, type)) {
        if (v % 1 !== 0)
            return true;
    }
    if (throwErr)
        throwError('floating-point number', v);
    return false;
}
function isEven(v, type = true, throwErr = false) {
    if (isInteger(v, type) && !(v & 1))
        return true;
    if (throwErr)
        throwError('even integer', v);
    return false;
}
function isOdd(v, type = true, throwErr = false) {
    if (isInteger(v, type) && Boolean(v & 1))
        return true;
    if (throwErr)
        throwError('odd integer', v);
    return false;
}
function isOrigin(v, type = true, throwErr = false) {
    if (type ? v === 0 : v == 0)
        return true;
    if (throwErr)
        throwError('zero', v);
    return false;
}
function isPositive(v, type = true, throwErr = false) {
    if (isNumber(v, type) && Number(v) > 0)
        return true;
    if (throwErr)
        throwError('positive number', v);
    return false;
}
function isNegative(v, type = true, throwErr = false) {
    if (isNumber(v, type) && Number(v) < 0)
        return true;
    if (throwErr)
        throwError('negative number', v);
    return false;
}
function isPowerOfTwo(v, type = true, throwErr = false) {
    if (isInteger(v, type) && !isOrigin(v, type) && (v & (v - 1)) === 0)
        return true;
    if (throwErr)
        throwError('power of two integer', v);
    return false;
}
function isAscii(v, ext = true, throwErr = false) {
    if (isNumber(v, false) && isInteger(v, false) && ((ext && Number(v) >= 0 && Number(v) <= 255) || (Number(v) >= 0 && Number(v) <= 127)))
        return true;
    if (throwErr) {
        const range = ext ? '0-255' : '0-127';
        throwError(`ASCII code in range [${range}]`, v);
    }
    return false;
}

const minNum = -999999999;
const maxNum = 999999999;
function isValidNumber(v, min = minNum, max = maxNum, type = true, throwErr = false) {
    if (!isNumber(v, type, null, null, throwErr))
        return false;
    const minVal = isNumber(min, false) ? min : minNum;
    const maxVal = isNumber(max, false) ? max : maxNum;
    const numVal = v;
    if (numVal >= minVal && numVal <= maxVal)
        return true;
    if (throwErr)
        throwError(`valid number in range [${minVal}, ${maxVal}]`, v);
    return false;
}
function isValidInteger(v, min = minNum, max = maxNum, type = true, throwErr = false) {
    if (!isInteger(v, type, throwErr))
        return false;
    const minVal = isNumber(min, false) ? min : minNum;
    const maxVal = isNumber(max, false) ? max : maxNum;
    const numVal = v;
    if (numVal >= minVal && numVal <= maxVal)
        return true;
    if (throwErr)
        throwError(`valid integer in range [${minVal}, ${maxVal}]`, v);
    return false;
}
const minFloat = -999999999.9;
const maxFloat = 999999999.9;
function isValidFloat(v, min = minFloat, max = maxFloat, type = true, throwErr = false) {
    if (!isFloat(v, type, throwErr))
        return false;
    const minVal = isNumber(min, false) ? min : minFloat;
    const maxVal = isNumber(max, false) ? max : maxFloat;
    const numValue = v;
    if (numValue >= minVal && numValue <= maxVal)
        return true;
    if (throwErr)
        throwError(`valid float in range [${minVal}, ${maxVal}]`, v);
    return false;
}

function isStringOfLength(v, min = 0, max = 999999999, throwErr = false) {
    if (!isString(v)) {
        if (throwErr)
            throwError(`string with length in range [${min}, ${max}]`, v);
        return false;
    }
    const l = v.length;
    if (l >= min && l <= max)
        return true;
    if (throwErr)
        throwError(`string with length in range [${min}, ${max}] (actual length: ${l})`, v);
    return false;
}
const emailReg = /^(?=[a-z0-9@.!$%&'*+\/=?^_'{|}~-]{6,254}$)(?=[a-z0-9.!#$%&'*+\/=?^_'{|}~-]{1,64}@)[a-z0-9!#$%&'*+\/=?^'{|}~]+(?:[\._-][a-z0-9!#$%&'*+\/=?^'{|}~]+)*@(?:(?=[a-z0-9-]{1,63}\.)[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?=[a-z][a-z0-9-]{1,62}$)[a-z](?:[a-z0-9-]*[a-z0-9])?$/;
function isEmail(v, throwErr = false) {
    if (isString(v) && emailReg.test(v.toLowerCase()))
        return true;
    if (throwErr)
        throwError('valid email address', v);
    return false;
}
const ipReg = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
function isIpAddress(v, throwErr = false) {
    if (isString(v) && ipReg.test(v))
        return true;
    if (throwErr)
        throwError('valid IP address', v);
    return false;
}
const b64UrlEncoded = /^[A-Za-z0-9-_]+$/;
const b64 = /^(?=.{1,}$)(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/;
function isBase64(v, urlEncoded = false, throwErr = false) {
    const regex = urlEncoded ? b64UrlEncoded : b64;
    if (isString(v) && regex.test(v))
        return true;
    if (throwErr) {
        const encodingType = urlEncoded ? 'URL-safe Base64' : 'Base64';
        throwError(`valid ${encodingType} encoded string`, v);
    }
    return false;
}
const b64Reg = /^[A-Za-z0-9\-_]+={0,2}$/;
function isJWT(v, throwErr = false) {
    if (isString(v)) {
        const p = v.split('.');
        if (p.length === 3) {
            const [header, payload, signature] = p;
            if (b64Reg.test(header) && b64Reg.test(payload) && b64Reg.test(signature)) {
                try {
                    if (isJson(atob(header)) && isJson(atob(payload)))
                        return true;
                }
                catch (e) {
                    if (throwErr)
                        throwError('valid JWT', v);
                    return false;
                }
            }
        }
    }
    if (throwErr)
        throwError('valid JWT', v);
    return false;
}
const slugReg = /^[^\s-_](?!.*?[-_]{2,})[a-z0-9-\\][^\s]*[^-_\s]$/;
function isSlug(v, throwErr = false) {
    if (isString(v) && slugReg.test(v))
        return true;
    if (throwErr)
        throwError('valid slug', v);
    return false;
}
const hexadecimal = /^(#|0x|0h)?[0-9A-F]+$/i;
function isHexadecimal(v, throwErr = false) {
    if (isString(v) && hexadecimal.test(v))
        return true;
    if (throwErr)
        throwError('hexadecimal number', v);
    return false;
}
const upperCaseReg = /[A-Z]+/;
function containsUpperCase(s, throwErr = false) {
    if (upperCaseReg.test(s))
        return true;
    if (throwErr)
        throwError('string containing uppercase letters', s);
    return false;
}
const lowerCaseReg = /[a-z]+/;
function containsLowerCase(s, throwErr = false) {
    if (lowerCaseReg.test(s))
        return true;
    if (throwErr)
        throwError('string containing lowercase letters', s);
    return false;
}
const specialReg = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?°`€£§]+/;
function containsSpecialCharacter(s, throwErr = false) {
    if (specialReg.test(s))
        return true;
    if (throwErr)
        throwError('string containing special characters', s);
    return false;
}
const digit = /\d/;
const nonDigit = /[^0-9]/g;
function containsNumber(s, min = 1, max = null, throwErr = false) {
    if (!digit.test(s)) {
        if (throwErr) {
            const range = max ? `[${min}, ${max}]` : `[${min}, ∞)`;
            throwError(`string containing ${range} digits`, s);
        }
        return false;
    }
    const nums = s.replace(nonDigit, '');
    if (!(nums.length >= min)) {
        if (throwErr) {
            const range = max ? `[${min}, ${max}]` : `[${min}, ∞)`;
            throwError(`string containing ${range} digits (actual: ${nums.length})`, s);
        }
        return false;
    }
    if (max && !(nums.length <= max)) {
        if (throwErr)
            throwError(`string containing [${min}, ${max}] digits (actual: ${nums.length})`, s);
        return false;
    }
    return true;
}
const defaultOptions = {
    lowerCase: true,
    upperCase: true,
    number: true,
    specialCharacter: true,
    minLength: 12,
    maxLength: 64,
};
function isValidPassword(s, options = defaultOptions, throwErr = false) {
    const o = Object.assign(Object.assign({}, defaultOptions), options);
    const l = s.length;
    if (!(l >= o.minLength && l <= o.maxLength)) {
        if (throwErr)
            throwError(`password with length in range [${o.minLength}, ${o.maxLength}] (actual length: ${l})`, s);
        return false;
    }
    if (o.lowerCase && !containsLowerCase(s)) {
        if (throwErr)
            throwError('password containing lowercase letters', s);
        return false;
    }
    if (o.upperCase && !containsUpperCase(s)) {
        if (throwErr)
            throwError('password containing uppercase letters', s);
        return false;
    }
    if (o.number && !containsNumber(s, 1, null)) {
        if (throwErr)
            throwError('password containing numbers', s);
        return false;
    }
    if (o.specialCharacter && !containsSpecialCharacter(s)) {
        if (throwErr)
            throwError('password containing special characters', s);
        return false;
    }
    return true;
}

function isHtmlElement(v, throwErr = false) {
    if (typeof HTMLElement === "object" && v instanceof HTMLElement
        || v
            && typeof v === "object"
            && v.nodeType === 1
            && typeof v.nodeName === "string")
        return true;
    if (throwErr)
        throwError('HTML element', v);
    return false;
}
function isHtmlEventAttribute(v, throwErr = false) {
    switch (v) {
        case "onafterprint":
        case "onbeforeprint":
        case "onbeforeunload":
        case "onerror":
        case "onhashchange":
        case "onload":
        case "onmessage":
        case "onoffline":
        case "ononline":
        case "onpagehide":
        case "onpageshow":
        case "onpopstate":
        case "onresize":
        case "onstorage":
        case "onunload":
        case "onblur":
        case "onchange":
        case "oncontextmenu":
        case "onfocus":
        case "oninput":
        case "oninvalid":
        case "onreset":
        case "onsearch":
        case "onselect":
        case "onsubmit":
        case "onkeydown":
        case "onkeypress":
        case "onkeyup":
        case "onclick":
        case "ondblclick":
        case "onmousedown":
        case "onmousemove":
        case "onmouseout":
        case "onmouseover":
        case "onmouseup":
        case "onmousewheel":
        case "onwheel":
        case "ondrag":
        case "ondragend":
        case "ondragenter":
        case "ondragleave":
        case "ondragover":
        case "ondragstart":
        case "ondrop":
        case "onscroll":
        case "oncopy":
        case "oncut":
        case "onpaste":
        case "onabort":
        case "oncanplay":
        case "oncanplaythrough":
        case "oncuechange":
        case "ondurationchange":
        case "onemptied":
        case "onended":
        case "onloadeddata":
        case "onloadedmetadata":
        case "onloadstart":
        case "onpause":
        case "onplay":
        case "onplaying":
        case "onprogress":
        case "onratechange":
        case "onseeked":
        case "onseeking":
        case "onstalled":
        case "onsuspend":
        case "ontimeupdate":
        case "onvolumechange":
        case "onwaiting":
        case "ontoggle":
            return true;
        default:
            if (throwErr)
                throwError('HTML event attribute', v);
            return false;
    }
}
function isNode(v, throwErr = false) {
    if (typeof Node === "object" && v instanceof Node
        || v
            && typeof v === "object"
            && typeof v.nodeType === "number"
            && typeof v.nodeName === "string")
        return true;
    if (throwErr)
        throwError('DOM Node', v);
    return false;
}

const minDate = new Date('1/1/1900');
const maxDate = new Date('1/1/2200');
function isValidDate(v, min = minDate, max = maxDate, throwErr = false) {
    if (!isDate(v, throwErr))
        return false;
    const from = isDate(min) ? min : isTimestamp(min, false) ? new Date(min) : minDate;
    const to = isDate(max) ? max : isTimestamp(max, false) ? new Date(max) : maxDate;
    if (v >= from && v <= to)
        return true;
    if (throwErr)
        throwError(`date between ${from.toISOString()} and ${to.toISOString()}`, v);
    return false;
}
function isTimestamp(v, type = true, throwErr = false) {
    if (isInteger(v, type) && isNum(new Date(Number.parseInt(String(v))).getTime(), type))
        return true;
    if (throwErr)
        throwError('valid timestamp', v);
    return false;
}
const minTs = -2208989361000;
const maxTs = 7258114800000;
function isValidTimestamp(v, min = minTs, max = maxTs, type = true, throwErr = false) {
    if (!isTimestamp(v, type, throwErr))
        return false;
    let from = minTs;
    if (isTimestamp(min, false))
        from = Number(min);
    else if (isDate(min))
        from = min.getTime();
    let to = maxTs;
    if (isTimestamp(max, false))
        to = Number(max);
    else if (isDate(max))
        to = max.getTime();
    const ts = Number(v);
    if (ts >= from && ts <= to)
        return true;
    if (throwErr) {
        const minDate = new Date(from).toISOString();
        const maxDate = new Date(to).toISOString();
        throwError(`timestamp between ${from} (${minDate}) and ${to} (${maxDate})`, v);
    }
    return false;
}

function ucfirst(s, everyWords = true) {
    const newStr = s.toLowerCase();
    if (everyWords) {
        const words = newStr.split(" ");
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
        return words.join(" ");
    }
    return newStr.charAt(0).toUpperCase() + newStr.slice(1);
}
function normalizeNickname(nickname, firstName, lastName, throwErr = false) {
    if (!(isString(nickname, '!0') || (isString(firstName, '!0') && isString(lastName, '!0')))) {
        if (throwErr)
            throwError('nickname or both firstName and lastName', { nickname, firstName, lastName });
        return false;
    }
    return createNickname(nickname, firstName, lastName);
}
function normalizeName(s, throwErr = false) {
    if (!isString(s, '!0')) {
        if (throwErr)
            throwError('non-empty string', s);
        return false;
    }
    return ucfirst(s, true);
}
function normalizeEmail(s, throwErr = false) {
    if (!isEmail(s)) {
        if (throwErr)
            throwError('valid email address', s);
        return false;
    }
    return s.toLowerCase();
}
function createNickname(nickname, firstName, lastName) {
    const n = nickname || firstName[0] + lastName;
    return n.toLowerCase()
        .normalize("NFD")
        .replace(/\p{Diacritic}|[^a-zA-Z\s_-]/gu, "") || false;
}

exports.containsLowerCase = containsLowerCase;
exports.containsNumber = containsNumber;
exports.containsSpecialCharacter = containsSpecialCharacter;
exports.containsUpperCase = containsUpperCase;
exports.isArray = isArray;
exports.isArrayOfLength = isArrayOfLength;
exports.isAscii = isAscii;
exports.isBase64 = isBase64;
exports.isBoolean = isBoolean;
exports.isDate = isDate;
exports.isEmail = isEmail;
exports.isEven = isEven;
exports.isFalsy = isFalsy;
exports.isFloat = isFloat;
exports.isFunction = isFunction;
exports.isHexadecimal = isHexadecimal;
exports.isHtmlElement = isHtmlElement;
exports.isHtmlEventAttribute = isHtmlEventAttribute;
exports.isIn = isIn;
exports.isInteger = isInteger;
exports.isIpAddress = isIpAddress;
exports.isJWT = isJWT;
exports.isJson = isJson;
exports.isNegative = isNegative;
exports.isNil = isNil;
exports.isNode = isNode;
exports.isNull = isNull;
exports.isNumber = isNumber;
exports.isObject = isObject;
exports.isOdd = isOdd;
exports.isOrigin = isOrigin;
exports.isPositive = isPositive;
exports.isPowerOfTwo = isPowerOfTwo;
exports.isProperty = isProperty;
exports.isRegex = isRegex;
exports.isSlug = isSlug;
exports.isString = isString;
exports.isStringOfLength = isStringOfLength;
exports.isSymbol = isSymbol;
exports.isTimestamp = isTimestamp;
exports.isTruthy = isTruthy;
exports.isUndefined = isUndefined;
exports.isValidDate = isValidDate;
exports.isValidFloat = isValidFloat;
exports.isValidInteger = isValidInteger;
exports.isValidNumber = isValidNumber;
exports.isValidPassword = isValidPassword;
exports.isValidTimestamp = isValidTimestamp;
exports.normalizeEmail = normalizeEmail;
exports.normalizeName = normalizeName;
exports.normalizeNickname = normalizeNickname;
exports.ucfirst = ucfirst;
