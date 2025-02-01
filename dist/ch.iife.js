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

var ch = (function (exports) {
    'use strict';

    function isNumeric(n) {
      return !Number.isNaN(Number(n) - Number.parseFloat(n));
    }
    function getTag(t) {
      return t == null ? t === undefined ? '[object Undefined]' : '[object Null]' : toString.call(t);
    }

    function isBoolean(b) {
      return typeof b === "boolean";
    }
    function isNumber(n, type) {
      if (type === void 0) {
        type = true;
      }
      return !isSymbol(n) && !((n === null || n === void 0 ? void 0 : n.constructor) === Array) && (type ? Number(n) === n : isNumeric(n));
    }
    function isSymbol(s) {
      var type = typeof s;
      return type === 'symbol' || type === 'object' && s != null && getTag(s) === '[object Symbol]';
    }
    function isNil(n) {
      return n == null;
    }

    function isFunction(func) {
      return Boolean(func && getTag(func) === "[object Function]");
    }

    var comparisons = {
      '=': function _(a, b) {
        return a == b;
      },
      '<': function _(a, b) {
        return a < b;
      },
      '>': function _(a, b) {
        return a > b;
      },
      '<=': function _(a, b) {
        return a <= b;
      },
      '>=': function _(a, b) {
        return a >= b;
      }
    };

    function isAscii(c, ext) {
      if (ext === void 0) {
        ext = true;
      }
      return isInteger(c, false) && (ext && c >= 0 && c <= 255 || c >= 0 && c <= 127);
    }
    function isInteger(n, type) {
      if (type === void 0) {
        type = true;
      }
      if (!isNumber(n, type)) return false;
      var _int = Number.parseInt(String(n), 10);
      return type ? n === _int : n == _int;
    }
    function isFloat(n, type) {
      if (type === void 0) {
        type = true;
      }
      if (isSymbol(n)) return false;
      var modulo = Number(n) % 1 !== 0;
      return type ? Number(n) === n && modulo : Number(n) == n && modulo;
    }
    function isEven(n, type) {
      if (type === void 0) {
        type = true;
      }
      return isInteger(n, type) && !(n & 1);
    }
    function isOdd(n, type) {
      if (type === void 0) {
        type = true;
      }
      return isInteger(n, type) && Boolean(n & 1);
    }
    function isOrigin(n, type) {
      if (type === void 0) {
        type = true;
      }
      return type ? n === 0 : n == 0;
    }
    function isPositive(n, type) {
      if (type === void 0) {
        type = true;
      }
      return isNumber(n, type) && n > 0;
    }
    function isNegative(n, type) {
      if (type === void 0) {
        type = true;
      }
      return isNumber(n, type) && n < 0;
    }
    function isPowerOfTwo(n, type) {
      if (type === void 0) {
        type = true;
      }
      return isInteger(n, type) && !isOrigin(n, type) && (n & n - 1) === 0;
    }

    function isValidNumber(n, min, max, type) {
      if (min === void 0) {
        min = -999999999;
      }
      if (max === void 0) {
        max = 999999999;
      }
      if (type === void 0) {
        type = true;
      }
      return isNumber(n, type) && n >= min && n <= max;
    }
    function isValidInteger(n, min, max, type) {
      if (min === void 0) {
        min = -999999999;
      }
      if (max === void 0) {
        max = 999999999;
      }
      if (type === void 0) {
        type = true;
      }
      return isInteger(n, type) && n >= min && n <= max;
    }
    function isValidFloat(n, min, max, type) {
      if (min === void 0) {
        min = -999999999.9;
      }
      if (max === void 0) {
        max = 999999999.9;
      }
      if (type === void 0) {
        type = true;
      }
      return isFloat(n, type) && n >= min && n <= max;
    }

    function isArray(a, comp, len) {
      return (a === null || a === void 0 ? void 0 : a.constructor) === Array ? comp && isValidInteger(len, 0, 999999999) ? Object.prototype.hasOwnProperty.call(comparisons, comp) ? comparisons[comp](a.length, len) : false : true : false;
    }
    function isArrayOfLength(a, min, max) {
      if (min === void 0) {
        min = -999999999;
      }
      if (max === void 0) {
        max = 999999999;
      }
      if (isArray(a, null, null)) {
        var n = a.length;
        return n >= min && n <= max;
      }
      return false;
    }
    function isIn(val, arr) {
      return isArray(arr, '>', 0) ? arr.includes(val) : false;
    }

    function isString(s, required) {
      if (required === void 0) {
        required = false;
      }
      return typeof s === "string" && (required ? !!s : true);
    }
    function isStringOfLength(s, min, max) {
      if (min === void 0) {
        min = 0;
      }
      if (max === void 0) {
        max = 999999999;
      }
      if (isString(s, false)) {
        var l = s.length;
        return l >= min && l <= max;
      }
      return false;
    }
    function isJson(s) {
      if (!isString(s, true)) return false;
      try {
        JSON.parse(s);
      } catch (e) {
        return false;
      }
      return true;
    }
    function isRegex(r, type) {
      if (type === void 0) {
        type = true;
      }
      if (type) return r instanceof RegExp;
      try {
        new RegExp(r);
      } catch (e) {
        return false;
      }
      return true;
    }
    var emailReg = /^(?=[a-z0-9@.!$%&'*+\/=?^_‘{|}~-]{6,254}$)(?=[a-z0-9.!#$%&'*+\/=?^_‘{|}~-]{1,64}@)[a-z0-9!#$%&'*+\/=?^‘{|}~]+(?:[\._-][a-z0-9!#$%&'*+\/=?^‘{|}~]+)*@(?:(?=[a-z0-9-]{1,63}\.)[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?=[a-z0-9-]{2,63}$)[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    function isEmail(e) {
      return !isSymbol(e) && emailReg.test(String(e).toLowerCase());
    }
    var ipReg = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    function isIpAddress(i) {
      return !isSymbol(i) && ipReg.test(String(i));
    }
    function isBase64(s, urlEncoded) {
      if (urlEncoded === void 0) {
        urlEncoded = false;
      }
      var regex = urlEncoded ? /^(?:[A-Za-z0-9-_]{4})*(?:[A-Za-z0-9-_]{2}==|[A-Za-z0-9-_]{3}=)?$/ : /^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/;
      return isString(s, true) && regex.test(s);
    }
    var b64Reg = /^[A-Za-z0-9\-_]+={0,2}$/;
    function isJWT(t) {
      if (!isString(t, true)) return false;
      var p = t.split('.');
      if (p.length !== 3) return false;
      var header = p[0];
      var payload = p[1];
      var signature = p[3];
      if (b64Reg.test(header) && b64Reg.test(payload) && b64Reg.test(signature)) {
        try {
          return isJson(atob(header)) && isJson(atob(payload));
        } catch (e) {
          return false;
        }
      }
      return false;
    }
    var slugReg = /^[^\s-_](?!.*?[-_]{2,})[a-z0-9-\\][^\s]*[^-_\s]$/;
    function isSlug(s) {
      return isString(s, true) && slugReg.test(s);
    }
    var hexadecimal = /^(#|0x|0h)?[0-9A-F]+$/i;
    function isHexadecimal(s) {
      return isString(s, true) && hexadecimal.test(s);
    }
    var upperCaseReg = /[A-Z]+/;
    function containsUpperCase(s) {
      return isString(s, true) && upperCaseReg.test(s);
    }
    var lowerCaseReg = /[a-z]+/;
    function containsLowerCase(s) {
      return isString(s, true) && lowerCaseReg.test(s);
    }
    var specialReg = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?°`€£§]+/;
    function containsSpecialCharacter(s) {
      return isString(s, true) && specialReg.test(s);
    }
    var numberReg = /\d/;
    var lengthReg = /[^0-9]/g;
    function containsNumber(s, min, max) {
      if (numberReg.test(s)) {
        var isMin = true;
        var isMax = true;
        if (isString(s, true)) {
          if (min) isMin = s.replace(lengthReg, '').length >= min;
          if (max) isMax = s.replace(lengthReg, '').length <= max;
        } else if (min) isMin = min <= 1;
        return isMin && isMax;
      }
      return false;
    }
    var defaultOptions = {
      lowerCase: true,
      upperCase: true,
      number: true,
      specialCharacter: true,
      minLength: 12,
      maxLength: 64
    };
    function isValidPassword(s, options) {
      if (options === void 0) {
        options = defaultOptions;
      }
      var o = Object.assign(Object.assign({}, defaultOptions), options);
      if (!isString(s, true)) return false;
      var l = s.length;
      return l >= o.minLength && l <= o.maxLength && (o.lowerCase ? containsLowerCase(s) : true) && (o.upperCase ? containsUpperCase(s) : true) && (o.number ? containsNumber(s, 1, null) : true) && (o.specialCharacter ? containsSpecialCharacter(s) : true);
    }

    function isObject(o, empty) {
      if (empty === void 0) {
        empty = false;
      }
      return o !== null && typeof o === "object" && !isArray(o) && (empty ? !!Object.keys(o).length : true);
    }
    function isProperty(v, obj, own, enumerable) {
      if (own === void 0) {
        own = true;
      }
      if (enumerable === void 0) {
        enumerable = true;
      }
      if (!isString(v, true) && !isNumber(v, true) && !isSymbol(v) || !isObject(obj)) return false;
      if (!(v in obj)) return false;
      var isOwn = true;
      var isEnum = true;
      if (own) isOwn = Object.prototype.hasOwnProperty.call(obj, v);
      if (enumerable) isEnum = Object.prototype.propertyIsEnumerable.call(obj, v);
      return isOwn && isEnum;
    }

    function isHtmlElement(h) {
      return Boolean(typeof HTMLElement === "object" ? h instanceof HTMLElement : h && typeof h === "object" && h.nodeType === 1 && typeof h.nodeName === "string");
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
      return Boolean(typeof Node === "object" ? n instanceof Node : n && typeof n === "object" && typeof n.nodeType === "number" && typeof n.nodeName === "string");
    }

    function isDate(d) {
      return !Number.isNaN(d) && d instanceof Date;
    }
    var minDate = new Date('1/1/1900');
    var maxDate = new Date('1/1/2200');
    function isValidDate(d, min, max) {
      if (min === void 0) {
        min = minDate;
      }
      if (max === void 0) {
        max = maxDate;
      }
      return isDate(d) && d >= min && d <= max;
    }
    function isTimestamp(t, type) {
      if (type === void 0) {
        type = true;
      }
      return isInteger(t, type) && isNumeric(new Date(Number.parseInt(String(t))).getTime());
    }
    function isValidTimestamp(t, min, max, type) {
      if (min === void 0) {
        min = -2208989361000;
      }
      if (max === void 0) {
        max = 7258114800000;
      }
      if (type === void 0) {
        type = true;
      }
      return isTimestamp(t, type) && t >= min && t <= max;
    }

    function ucfirst(s, everyWords) {
      if (everyWords === void 0) {
        everyWords = true;
      }
      if (!isString(s, true)) return false;
      var newStr = s.toLowerCase();
      if (everyWords) {
        var words = newStr.split(" ");
        for (var i = 0; i < words.length; i++) {
          words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
        return words.join(" ");
      }
      return newStr.charAt(0).toUpperCase() + newStr.slice(1);
    }
    function normalizeNickname(nickname, firstName, lastName) {
      return isString(nickname, true) || isString(firstName, true) && isString(lastName, true) ? createNickname(nickname, firstName, lastName) : false;
    }
    function normalizeName(s) {
      return ucfirst(s, true);
    }
    function normalizeEmail(s) {
      return isEmail(s) ? s.toLowerCase() : false;
    }
    function createNickname(nickname, firstName, lastName) {
      var n = nickname || firstName[0] + lastName;
      return n.toLowerCase().normalize("NFD").replace(/(?:[\^`\xA8\xAF\xB4\xB7\xB8\u02B0-\u034E\u0350-\u0357\u035D-\u0362\u0374\u0375\u037A\u0384\u0385\u0483-\u0487\u0559\u0591-\u05A1\u05A3-\u05BD\u05BF\u05C1\u05C2\u05C4\u064B-\u0652\u0657\u0658\u06DF\u06E0\u06E5\u06E6\u06EA-\u06EC\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F5\u0818\u0819\u0898-\u089F\u08C9-\u08D2\u08E3-\u08FE\u093C\u094D\u0951-\u0954\u0971\u09BC\u09CD\u0A3C\u0A4D\u0ABC\u0ACD\u0AFD-\u0AFF\u0B3C\u0B4D\u0B55\u0BCD\u0C3C\u0C4D\u0CBC\u0CCD\u0D3B\u0D3C\u0D4D\u0DCA\u0E3A\u0E47-\u0E4C\u0E4E\u0EBA\u0EC8-\u0ECC\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F82-\u0F84\u0F86\u0F87\u0FC6\u1037\u1039\u103A\u1063\u1064\u1069-\u106D\u1087-\u108D\u108F\u109A\u109B\u135D-\u135F\u1714\u1715\u1734\u17C9-\u17D3\u17DD\u1939-\u193B\u1A60\u1A75-\u1A7C\u1A7F\u1AB0-\u1ABE\u1AC1-\u1ACB\u1B34\u1B44\u1B6B-\u1B73\u1BAA\u1BAB\u1BE6\u1BF2\u1BF3\u1C36\u1C37\u1C78-\u1C7D\u1CD0-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1D2C-\u1D6A\u1DC4-\u1DCF\u1DF5-\u1DFF\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2CEF-\u2CF1\u2E2F\u302A-\u302F\u3099-\u309C\u30FC\uA66F\uA67C\uA67D\uA67F\uA69C\uA69D\uA6F0\uA6F1\uA700-\uA721\uA788-\uA78A\uA7F8\uA7F9\uA806\uA82C\uA8C4\uA8E0-\uA8F1\uA92B-\uA92E\uA953\uA9B3\uA9C0\uA9E5\uAA7B-\uAA7D\uAABF-\uAAC2\uAAF6\uAB5B-\uAB5F\uAB69-\uAB6B\uABEC\uABED\uFB1E\uFE20-\uFE2F\uFF3E\uFF40\uFF70\uFF9E\uFF9F\uFFE3]|\uD800\uDEE0|\uD801[\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD22-\uDD27\uDD4E\uDD69-\uDD6D\uDEFD-\uDEFF\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC46\uDC70\uDCB9\uDCBA\uDD33\uDD34\uDD73\uDDC0\uDDCA-\uDDCC\uDE35\uDE36\uDEE9\uDEEA\uDF3B\uDF3C\uDF4D\uDF66-\uDF6C\uDF70-\uDF74\uDFCE-\uDFD0\uDFD2\uDFD3\uDFE1\uDFE2]|\uD805[\uDC42\uDC46\uDCC2\uDCC3\uDDBF\uDDC0\uDE3F\uDEB6\uDEB7\uDF2B]|\uD806[\uDC39\uDC3A\uDD3D\uDD3E\uDD43\uDDE0\uDE34\uDE47\uDE99]|\uD807[\uDC3F\uDD42\uDD44\uDD45\uDD97\uDF41\uDF42\uDF5A]|\uD80D[\uDC47-\uDC55]|\uD818\uDD2F|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDD6B\uDD6C\uDF8F-\uDF9F\uDFF0\uDFF1]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD67-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD]|\uD838[\uDC30-\uDC6D\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD839[\uDDEE\uDDEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD46\uDD48-\uDD4A])|(?:[\0-\x08\x0E-\x1F!-,\.-@\[-\^`\{-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g, "") || false;
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

    return exports;

})({});
