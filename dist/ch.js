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
function compare(a, c, b) {
    if (c) {
        if (c in comparisons) {
            if (c === '!0' || c === '0')
                return comparisons[c](a);
            if (!isNil(b))
                return comparisons[c](a, b);
        }
        return false;
    }
    return true;
}
function getTag(t) {
    return t == null ? t === undefined ? '[object Undefined]' : '[object Null]' : toString.call(t);
}

function isNum(v, type) {
    const n = Number(v);
    return type ? n === v : !Number.isNaN(n - Number.parseFloat(v));
}
function isArr(v) {
    return (v === null || v === void 0 ? void 0 : v.constructor) === Array;
}
function isStr(v) {
    return typeof v === "string";
}

function isBoolean(v) {
    return typeof v === "boolean";
}
function isNumber(v, type = true, comparator = null, limit = null) {
    return !isSymbol(v)
        && !((v === null || v === void 0 ? void 0 : v.constructor) === Array)
        && isNum(v, type) ?
        compare(v, comparator, limit)
        : false;
}
function isString(v, comparator = null, limit = null) {
    return isStr(v)
        ? compare(v.length, comparator, limit)
        : false;
}
function isSymbol(v) {
    const type = typeof v;
    return type === 'symbol' || (type === 'object' && v != null && getTag(v) === '[object Symbol]');
}
function isNil(v) {
    return v == null;
}
function isNull(v) {
    return v === null;
}
function isUndefined(v) {
    return v === undefined;
}

function isObject(v, empty = false) {
    return v !== null && typeof v === "object" && !isArray(v) && (empty ? !!Object.keys(v).length : true);
}
function isArray(v, comparator = null, limit = null) {
    return isArr(v) ? compare(v.length, comparator, limit) : false;
}
function isJson(v) {
    if (!isString(v, ">", 0))
        return false;
    try {
        JSON.parse(v);
    }
    catch (e) {
        return false;
    }
    return true;
}
function isRegex(v, type = true) {
    if (type)
        return v instanceof RegExp;
    try {
        new RegExp(v);
    }
    catch (e) {
        return false;
    }
    return true;
}
function isDate(v) {
    return !Number.isNaN(v) && v instanceof Date;
}
function isFunction(v) {
    return Boolean(v && getTag(v) === "[object Function]");
}

function isFalsy(v) {
    return !v;
}
function isTruthy(v) {
    return !!v;
}

function isProperty(o, k, own = true, enumerable = true) {
    if (enumerable)
        return isEnumerable(o, k, own);
    if (own)
        return Object.prototype.hasOwnProperty.call(o, k);
    return k in o;
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

function isArrayOfLength(a, min = 0, max = 999999999) {
    const n = a === null || a === void 0 ? void 0 : a.length;
    return n >= min && n <= max;
}
function isIn(a, v, from = 0) {
    return a.includes(v, from);
}

function isInteger(n, type = true) {
    const int = Number.parseInt(String(n), 10);
    return type ? n === int : n == int;
}
function isFloat(n, type = true) {
    const num = Number(n);
    const modulo = num % 1 !== 0;
    return type ? (num === n && modulo) : (num == n && modulo);
}
function isEven(n, type = true) {
    return isInteger(n, type) && !(n & 1);
}
function isOdd(n, type = true) {
    return isInteger(n, type) && Boolean(n & 1);
}
function isOrigin(n, type = true) {
    return type ? n === 0 : n == 0;
}
function isPositive(n, type = true) {
    return isNumber(n, type) && n > 0;
}
function isNegative(n, type = true) {
    return isNumber(n, type) && n < 0;
}
function isPowerOfTwo(n, type = true) {
    return isInteger(n, type) && !isOrigin(n, false) && (n & (n - 1)) === 0;
}
function isAscii(n, ext = true) {
    return isInteger(n, false) && ((ext && n >= 0 && n <= 255) || (n >= 0 && n <= 127));
}

function isValidNumber(n, min = -999999999, max = 999999999, type = true) {
    return isNumber(n, type) && n >= min && n <= max;
}
function isValidInteger(n, min = -999999999, max = 999999999, type = true) {
    return isInteger(n, type) && n >= min && n <= max;
}
function isValidFloat(n, min = -999999999.9, max = 999999999.9, type = true) {
    return isFloat(n, type) && n >= min && n <= max;
}

function isStringOfLength(s, min = 0, max = 999999999) {
    const l = s.length;
    return l >= min && l <= max;
}
const emailReg = /^(?=[a-z0-9@.!$%&'*+\/=?^_‘{|}~-]{6,254}$)(?=[a-z0-9.!#$%&'*+\/=?^_‘{|}~-]{1,64}@)[a-z0-9!#$%&'*+\/=?^‘{|}~]+(?:[\._-][a-z0-9!#$%&'*+\/=?^‘{|}~]+)*@(?:(?=[a-z0-9-]{1,63}\.)[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?=[a-z0-9-]{2,63}$)[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
function isEmail(s) {
    return emailReg.test(String(s).toLowerCase());
}
const ipReg = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
function isIpAddress(s) {
    return ipReg.test(String(s));
}
const b64UrlEncoded = /^[A-Za-z0-9-_]+$/;
const b64 = /^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/;
function isBase64(s, urlEncoded = false) {
    const regex = urlEncoded ? b64UrlEncoded : b64;
    return regex.test(s);
}
const b64Reg = /^[A-Za-z0-9\-_]+={0,2}$/;
function isJWT(s) {
    if (!s)
        return false;
    const p = s.split('.');
    if (p.length !== 3)
        return false;
    const header = p[0];
    const payload = p[1];
    const signature = p[3];
    if (b64Reg.test(header) && b64Reg.test(payload) && b64Reg.test(signature)) {
        try {
            return isJson(atob(header)) && isJson(atob(payload));
        }
        catch (e) {
            return false;
        }
    }
    return false;
}
const slugReg = /^[^\s-_](?!.*?[-_]{2,})[a-z0-9-\\][^\s]*[^-_\s]$/;
function isSlug(s) {
    return s ? slugReg.test(s) : false;
}
const hexadecimal = /^(#|0x|0h)?[0-9A-F]+$/i;
function isHexadecimal(s) {
    return hexadecimal.test(s);
}
const upperCaseReg = /[A-Z]+/;
function containsUpperCase(s) {
    return upperCaseReg.test(s);
}
const lowerCaseReg = /[a-z]+/;
function containsLowerCase(s) {
    return lowerCaseReg.test(s);
}
const specialReg = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?°`€£§]+/;
function containsSpecialCharacter(s) {
    return specialReg.test(s);
}
const digit = /\d/;
const nonDigit = /[^0-9]/g;
function containsNumber(s, min = 1, max = null) {
    if (!digit.test(s))
        return false;
    const nums = s.replace(nonDigit, '');
    if (!(nums.length >= min))
        return false;
    if (max && !(nums.length <= max))
        return false;
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
function isValidPassword(s, options = defaultOptions) {
    const o = Object.assign(Object.assign({}, defaultOptions), options);
    const l = s.length;
    return l >= o.minLength && l <= o.maxLength
        && (o.lowerCase ? containsLowerCase(s) : true)
        && (o.upperCase ? containsUpperCase(s) : true)
        && (o.number ? containsNumber(s, 1, null) : true)
        && (o.specialCharacter ? containsSpecialCharacter(s) : true);
}

function isHtmlElement(h) {
    return Boolean(typeof HTMLElement === "object"
        ? h instanceof HTMLElement
        : h &&
            typeof h === "object" &&
            h.nodeType === 1 &&
            typeof h.nodeName === "string");
}
function isHtmlEventAttribute(h) {
    switch (h) {
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
            return false;
    }
}
function isNode(n) {
    return Boolean(typeof Node === "object"
        ? n instanceof Node
        : n &&
            typeof n === "object" &&
            typeof n.nodeType === "number" &&
            typeof n.nodeName === "string");
}

const minDate = new Date('1/1/1900');
const maxDate = new Date('1/1/2200');
function isValidDate(d, min = minDate, max = maxDate) {
    return isDate(d) && d >= min && d <= max;
}
function isTimestamp(t, type = true) {
    return isInteger(t, type) && isNum(new Date(Number.parseInt(String(t))).getTime(), type);
}
function isValidTimestamp(t, min = -2208989361000, max = 7258114800000, type = true) {
    return isTimestamp(t, type) && t >= min && t <= max;
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
function normalizeNickname(nickname, firstName, lastName) {
    return (nickname || firstName && lastName) ? createNickname(nickname, firstName, lastName) : false;
}
function normalizeName(s) {
    return s ? ucfirst(s, true) : false;
}
function normalizeEmail(s) {
    return (s && isEmail(s)) ? s.toLowerCase() : false;
}
function createNickname(nickname, firstName, lastName) {
    const n = nickname || firstName[0] + lastName;
    return n.toLowerCase()
        .normalize("NFD")
        .replace(/\p{Diacritic}|[^a-zA-Z\s_-]/gu, "") || false;
}

function b64Decode(str, urlSafe = true) {
    if (urlSafe)
        str = str.replace(/-/g, "+").replace(/_/g, "/");
    return Buffer.from(str + pad(str), "base64").toString("utf8");
}
function b64Encode(str, urlSafe = true) {
    let b64 = Buffer.from(str).toString("base64");
    if (urlSafe)
        b64 = b64.replace(/\+/g, "-")
            .replace(/\//g, "_")
            .replace(/=+$/, "");
    return b64;
}
function pad(str) {
    return "=".repeat((4 - (str.length % 4)) % 4);
}

export { b64Decode, b64Encode, containsLowerCase, containsNumber, containsSpecialCharacter, containsUpperCase, isArray, isArrayOfLength, isAscii, isBase64, isBoolean, isDate, isEmail, isEven, isFalsy, isFloat, isFunction, isHexadecimal, isHtmlElement, isHtmlEventAttribute, isIn, isInteger, isIpAddress, isJWT, isJson, isNegative, isNil, isNode, isNull, isNumber, isObject, isOdd, isOrigin, isPositive, isPowerOfTwo, isProperty, isRegex, isSlug, isString, isStringOfLength, isSymbol, isTimestamp, isTruthy, isUndefined, isValidDate, isValidFloat, isValidInteger, isValidNumber, isValidPassword, isValidTimestamp, normalizeEmail, normalizeName, normalizeNickname, ucfirst };
