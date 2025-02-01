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

function isNumeric(n) {
    return !Number.isNaN(Number(n) - Number.parseFloat(n));
}
function getTag(t) {
    return t == null ? t === undefined ? '[object Undefined]' : '[object Null]' : toString.call(t);
}

function isBoolean(b) {
    return typeof b === "boolean";
}
function isNumber(n, type = true) {
    return !isSymbol(n) && !((n === null || n === void 0 ? void 0 : n.constructor) === Array) && (type ? Number(n) === n : isNumeric(n));
}
function isSymbol(s) {
    const type = typeof s;
    return type === 'symbol' || (type === 'object' && s != null && getTag(s) === '[object Symbol]');
}
function isNil(n) {
    return n == null;
}

function isFunction(f) {
    return Boolean(f && getTag(f) === "[object Function]");
}

const comparisons = {
    '=': (a, b) => a == b,
    '<': (a, b) => a < b,
    '>': (a, b) => a > b,
    '<=': (a, b) => a <= b,
    '>=': (a, b) => a >= b
};

function isAscii(c, ext = true) {
    return isInteger(c, false) && ((ext && c >= 0 && c <= 255) || (c >= 0 && c <= 127));
}
function isInteger(n, type = true) {
    if (!isNumber(n, type))
        return false;
    const int = Number.parseInt(String(n), 10);
    return type ? n === int : n == int;
}
function isFloat(n, type = true) {
    if (isSymbol(n))
        return false;
    const modulo = Number(n) % 1 !== 0;
    return type ? (Number(n) === n && modulo) : (Number(n) == n && modulo);
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
    return isInteger(n, type) && !isOrigin(n, type) && (n & (n - 1)) === 0;
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

function isArray(a, comp, len) {
    return (a === null || a === void 0 ? void 0 : a.constructor) === Array
        ? (comp && isValidInteger(len, 0, 999999999))
            ? Object.prototype.hasOwnProperty.call(comparisons, comp)
                ? comparisons[comp](a.length, len)
                : false
            : true
        : false;
}
function isArrayOfLength(a, min = -999999999, max = 999999999) {
    if (isArray(a, null, null)) {
        const n = a.length;
        return n >= min && n <= max;
    }
    return false;
}
function isIn(v, arr) {
    return isArray(arr, '>', 0) ? arr.includes(v) : false;
}

function isString(s, required = false) {
    return typeof s === "string" && (required ? !!s : true);
}
function isStringOfLength(s, min = 0, max = 999999999) {
    if (isString(s, false)) {
        const l = s.length;
        return l >= min && l <= max;
    }
    return false;
}
function isJson(j) {
    if (!isString(j, true))
        return false;
    try {
        JSON.parse(j);
    }
    catch (e) {
        return false;
    }
    return true;
}
function isRegex(r, type = true) {
    if (type)
        return r instanceof RegExp;
    try {
        new RegExp(r);
    }
    catch (e) {
        return false;
    }
    return true;
}
const emailReg = /^(?=[a-z0-9@.!$%&'*+\/=?^_‘{|}~-]{6,254}$)(?=[a-z0-9.!#$%&'*+\/=?^_‘{|}~-]{1,64}@)[a-z0-9!#$%&'*+\/=?^‘{|}~]+(?:[\._-][a-z0-9!#$%&'*+\/=?^‘{|}~]+)*@(?:(?=[a-z0-9-]{1,63}\.)[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?=[a-z0-9-]{2,63}$)[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
function isEmail(e) {
    return !isSymbol(e) && emailReg.test(String(e).toLowerCase());
}
const ipReg = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
function isIpAddress(i) {
    return !isSymbol(i) && ipReg.test(String(i));
}
function isBase64(s, urlEncoded = false) {
    const regex = urlEncoded
        ? /^(?:[A-Za-z0-9-_]{4})*(?:[A-Za-z0-9-_]{2}==|[A-Za-z0-9-_]{3}=)?$/
        : /^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/;
    return isString(s, true) && regex.test(s);
}
const b64Reg = /^[A-Za-z0-9\-_]+={0,2}$/;
function isJWT(t) {
    if (!isString(t, true))
        return false;
    const p = t.split('.');
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
    return isString(s, true) && slugReg.test(s);
}
const hexadecimal = /^(#|0x|0h)?[0-9A-F]+$/i;
function isHexadecimal(s) {
    return isString(s, true) && hexadecimal.test(s);
}
const upperCaseReg = /[A-Z]+/;
function containsUpperCase(s) {
    return isString(s, true) && upperCaseReg.test(s);
}
const lowerCaseReg = /[a-z]+/;
function containsLowerCase(s) {
    return isString(s, true) && lowerCaseReg.test(s);
}
const specialReg = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?°`€£§]+/;
function containsSpecialCharacter(s) {
    return isString(s, true) && specialReg.test(s);
}
const numberReg = /\d/;
const lengthReg = /[^0-9]/g;
function containsNumber(s, min, max) {
    if (numberReg.test(s)) {
        let isMin = true;
        let isMax = true;
        if (isString(s, true)) {
            if (min)
                isMin = s.replace(lengthReg, '').length >= min;
            if (max)
                isMax = s.replace(lengthReg, '').length <= max;
        }
        else if (min)
            isMin = min <= 1;
        return isMin && isMax;
    }
    return false;
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
    if (!isString(s, true))
        return false;
    const l = s.length;
    return l >= o.minLength && l <= o.maxLength
        && (o.lowerCase ? containsLowerCase(s) : true)
        && (o.upperCase ? containsUpperCase(s) : true)
        && (o.number ? containsNumber(s, 1, null) : true)
        && (o.specialCharacter ? containsSpecialCharacter(s) : true);
}

function isObject(o, empty = false) {
    return o !== null && typeof o === "object" && !isArray(o) && (empty ? !!Object.keys(o).length : true);
}
function isProperty(v, obj, own = true, enumerable = true) {
    if ((!isString(v, true) && !isNumber(v, true) && !isSymbol(v)) || !isObject(obj))
        return false;
    if (!(v in obj))
        return false;
    let isOwn = true;
    let isEnum = true;
    if (own)
        isOwn = Object.prototype.hasOwnProperty.call(obj, v);
    if (enumerable)
        isEnum = Object.prototype.propertyIsEnumerable.call(obj, v);
    return isOwn && isEnum;
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

function isDate(d) {
    return !Number.isNaN(d) && d instanceof Date;
}
const minDate = new Date('1/1/1900');
const maxDate = new Date('1/1/2200');
function isValidDate(d, min = minDate, max = maxDate) {
    return isDate(d) && d >= min && d <= max;
}
function isTimestamp(t, type = true) {
    return isInteger(t, type) && isNumeric(new Date(Number.parseInt(String(t))).getTime());
}
function isValidTimestamp(t, min = -2208989361000, max = 7258114800000, type = true) {
    return isTimestamp(t, type) && t >= min && t <= max;
}

function ucfirst(s, everyWords = true) {
    if (!isString(s, true))
        return false;
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
    return isString(nickname, true) || (isString(firstName, true) && isString(lastName, true)) ? createNickname(nickname, firstName, lastName) : false;
}
function normalizeName(s) {
    return ucfirst(s, true);
}
function normalizeEmail(s) {
    return isEmail(s) ? s.toLowerCase() : false;
}
function createNickname(nickname, firstName, lastName) {
    const n = nickname || firstName[0] + lastName;
    return n.toLowerCase()
        .normalize("NFD")
        .replace(/\p{Diacritic}|[^a-zA-Z\s_-]/gu, "") || false;
}

export { containsLowerCase, containsNumber, containsSpecialCharacter, containsUpperCase, isArray, isArrayOfLength, isAscii, isBase64, isBoolean, isDate, isEmail, isEven, isFloat, isFunction, isHexadecimal, isHtmlElement, isHtmlEventAttribute, isIn, isInteger, isIpAddress, isJWT, isJson, isNegative, isNil, isNode, isNumber, isObject, isOdd, isOrigin, isPositive, isPowerOfTwo, isProperty, isRegex, isSlug, isString, isStringOfLength, isSymbol, isTimestamp, isValidDate, isValidFloat, isValidInteger, isValidNumber, isValidPassword, isValidTimestamp, normalizeEmail, normalizeName, normalizeNickname, ucfirst };
