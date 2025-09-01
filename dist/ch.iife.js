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

    var comparisons = {
      "=": function _(a, b) {
        return a == b;
      },
      "<": function _(a, b) {
        return a < b;
      },
      ">": function _(a, b) {
        return a > b;
      },
      "<=": function _(a, b) {
        return a <= b;
      },
      ">=": function _(a, b) {
        return a >= b;
      },
      "!=": function _(a, b) {
        return a != b;
      },
      "!0": function _(a) {
        return a != 0;
      },
      "0": function _(a) {
        return a == 0;
      }
    };
    function compare(a, c, b, throwError) {
      if (throwError === void 0) {
        throwError = false;
      }
      if (!c) return true;
      if (!(c in comparisons)) {
        if (throwError) throw new Error("Invalid comparator: " + c + ". Valid comparators are: " + Object.keys(comparisons).join(', '));
        return false;
      }
      if (c === '!0' || c === '0') {
        var _result = comparisons[c](a);
        if (!_result && throwError) throw new Error("Comparison failed: " + a + " " + c);
        return _result;
      }
      if (b == null) {
        if (throwError) throw new Error("Comparator '" + c + "' requires a second value, but received null");
        return false;
      }
      var result = comparisons[c](a, b);
      if (!result && throwError) throw new Error("Comparison failed: " + a + " " + c + " " + b);
      return result;
    }
    function getTag(t) {
      return t == null ? t === undefined ? '[object Undefined]' : '[object Null]' : toString.call(t);
    }

    function throwError(expectedType, actualValue) {
      throw new Error("Expected " + expectedType + ", but received " + typeof actualValue + ": " + String(actualValue));
    }

    function isNum(v, type, throwErr) {
      if (throwErr === void 0) {
        throwErr = false;
      }
      var n = Number(v);
      if (type ? n === v : !Number.isNaN(n - Number.parseFloat(v))) return true;
      if (throwErr) throwError('number', v);
      return false;
    }
    function isArr(v, throwErr) {
      if (throwErr === void 0) {
        throwErr = false;
      }
      if ((v === null || v === void 0 ? void 0 : v.constructor) === Array) return true;
      if (throwErr) throwError('array', v);
      return false;
    }
    function isStr(v, throwErr) {
      if (throwErr === void 0) {
        throwErr = false;
      }
      if (typeof v === "string") return true;
      if (throwErr) throwError('string', v);
      return false;
    }

    function isBoolean(v, throwErr) {
      if (throwErr === void 0) {
        throwErr = false;
      }
      if (typeof v === "boolean") return true;
      if (throwErr) throwError('boolean', v);
      return false;
    }
    function isNumber(v, type, comparator, limit, throwErr) {
      if (type === void 0) {
        type = true;
      }
      if (comparator === void 0) {
        comparator = null;
      }
      if (limit === void 0) {
        limit = null;
      }
      if (throwErr === void 0) {
        throwErr = false;
      }
      if (isSymbol(v) || (v === null || v === void 0 ? void 0 : v.constructor) === Array || !isNum(v, type)) {
        if (throwErr) throwError('number', v);
        return false;
      }
      return compare(v, comparator, limit, throwErr);
    }
    function isString(v, comparator, limit, throwErr) {
      if (comparator === void 0) {
        comparator = null;
      }
      if (limit === void 0) {
        limit = null;
      }
      if (throwErr === void 0) {
        throwErr = false;
      }
      if (!isStr(v)) {
        if (throwErr) throwError('string', v);
        return false;
      }
      return compare(v.length, comparator, limit, throwErr);
    }
    function isSymbol(v, throwErr) {
      if (throwErr === void 0) {
        throwErr = false;
      }
      var type = typeof v;
      if (type === 'symbol' || type === 'object' && v != null && getTag(v) === '[object Symbol]') return true;
      if (throwErr) throwError('symbol', v);
      return false;
    }
    function isNil(v, throwErr) {
      if (throwErr === void 0) {
        throwErr = false;
      }
      if (v == null) return true;
      if (throwErr) throwError('null or undefined', v);
      return false;
    }
    function isNull(v, throwErr) {
      if (throwErr === void 0) {
        throwErr = false;
      }
      if (v === null) return true;
      if (throwErr) throwError('null', v);
      return false;
    }
    function isUndefined(v, throwErr) {
      if (throwErr === void 0) {
        throwErr = false;
      }
      if (v === undefined) return true;
      if (throwErr) throwError('undefined', v);
      return false;
    }

    function isObject(v, empty, throwErr) {
      if (empty === void 0) {
        empty = false;
      }
      if (throwErr === void 0) {
        throwErr = false;
      }
      if (v !== null && typeof v === "object" && !isArray(v) && (empty ? !!Object.keys(v).length : true)) return true;
      if (throwErr) throwError('object', v);
      return false;
    }
    function isArray(v, comparator, limit, throwErr) {
      if (comparator === void 0) {
        comparator = null;
      }
      if (limit === void 0) {
        limit = null;
      }
      if (throwErr === void 0) {
        throwErr = false;
      }
      if (!isArr(v)) {
        if (throwErr) throwError('array', v);
        return false;
      }
      return compare(v.length, comparator, limit, throwErr);
    }
    function isJson(v, throwErr) {
      if (throwErr === void 0) {
        throwErr = false;
      }
      if (isString(v, ">", 0)) {
        try {
          JSON.parse(v);
        } catch (e) {
          if (throwErr) throwError('valid JSON string', v);
          return false;
        }
        return true;
      }
      if (throwErr) throwError('valid JSON string', v);
      return false;
    }
    function isRegex(v, type, throwErr) {
      if (type === void 0) {
        type = true;
      }
      if (throwErr === void 0) {
        throwErr = false;
      }
      if (type) {
        if (v instanceof RegExp) return true;
        if (throwErr) throwError('valid RegExp pattern', v);
        return false;
      }
      try {
        new RegExp(v);
        return true;
      } catch (e) {
        if (throwErr) throwError('valid RegExp pattern', v);
        return false;
      }
    }
    function isDate(v, throwErr) {
      if (throwErr === void 0) {
        throwErr = false;
      }
      if (v instanceof Date && !Number.isNaN(v.getTime())) return true;
      if (throwErr) throwError('Date', v);
      return false;
    }
    function isFunction(v, throwErr) {
      if (throwErr === void 0) {
        throwErr = false;
      }
      if (Boolean(v && getTag(v) === "[object Function]")) return true;
      if (throwErr) throwError('function', v);
      return false;
    }

    function isFalsy(v, throwErr) {
      if (throwErr === void 0) {
        throwErr = false;
      }
      if (!v) return true;
      if (throwErr) throwError('falsy value', v);
      return false;
    }
    function isTruthy(v, throwErr) {
      if (throwErr === void 0) {
        throwErr = false;
      }
      if (!!v) return true;
      if (throwErr) throwError('truthy value', v);
      return false;
    }

    function isProperty(v, k, own, enumerable, throwErr) {
      if (own === void 0) {
        own = true;
      }
      if (enumerable === void 0) {
        enumerable = true;
      }
      if (throwErr === void 0) {
        throwErr = false;
      }
      if (!isObject(v, true, throwErr)) return false;
      var isValid;
      if (enumerable) isValid = isEnumerable(v, k, own);else if (own) isValid = Object.prototype.hasOwnProperty.call(v, k);else isValid = k in v;
      if (isValid) return true;
      if (throwErr) {
        var scope = own ? 'own' : 'inherited';
        var type = enumerable ? 'enumerable' : 'any';
        throwError(scope + " " + type + " property '" + String(k) + "'", v);
      }
      return false;
    }
    function isEnumerable(obj, key, own) {
      if (own) return Object.prototype.propertyIsEnumerable.call(obj, key);
      var currentObj = obj;
      while (currentObj) {
        var descriptor = Object.getOwnPropertyDescriptor(currentObj, key);
        if (descriptor) return !!(descriptor === null || descriptor === void 0 ? void 0 : descriptor.enumerable);
        currentObj = Object.getPrototypeOf(currentObj);
      }
      return false;
    }

    function isArrayOfLength(v, min, max, throwErr) {
      if (min === void 0) {
        min = 0;
      }
      if (max === void 0) {
        max = 999999999;
      }
      if (throwErr === void 0) {
        throwErr = false;
      }
      if (!isArray(v)) {
        if (throwErr) throwError("array with length in range [" + min + ", " + max + "]", v);
        return false;
      }
      var n = v.length;
      if (n >= min && n <= max) return true;
      if (throwErr) throwError("array with length in range [" + min + ", " + max + "] (actual length: " + n + ")", v);
      return false;
    }
    function isIn(a, v, from, throwErr) {
      if (from === void 0) {
        from = 0;
      }
      if (throwErr === void 0) {
        throwErr = false;
      }
      if (a.includes(v, from)) return true;
      if (throwErr) throwError("value " + String(v) + " to be found in array", a);
      return false;
    }

    function isInteger(v, type, throwErr) {
      if (type === void 0) {
        type = true;
      }
      if (throwErr === void 0) {
        throwErr = false;
      }
      if (isNumber(v, type)) {
        var _int = Number.parseInt(String(v), 10);
        if (type ? v === _int : v == _int) return true;
      }
      if (throwErr) throwError('integer', v);
      return false;
    }
    function isFloat(v, type, throwErr) {
      if (type === void 0) {
        type = true;
      }
      if (throwErr === void 0) {
        throwErr = false;
      }
      if (isNumber(v, type)) {
        if (v % 1 !== 0) return true;
      }
      if (throwErr) throwError('floating-point number', v);
      return false;
    }
    function isEven(v, type, throwErr) {
      if (type === void 0) {
        type = true;
      }
      if (throwErr === void 0) {
        throwErr = false;
      }
      if (isInteger(v, type) && !(v & 1)) return true;
      if (throwErr) throwError('even integer', v);
      return false;
    }
    function isOdd(v, type, throwErr) {
      if (type === void 0) {
        type = true;
      }
      if (throwErr === void 0) {
        throwErr = false;
      }
      if (isInteger(v, type) && Boolean(v & 1)) return true;
      if (throwErr) throwError('odd integer', v);
      return false;
    }
    function isOrigin(v, type, throwErr) {
      if (type === void 0) {
        type = true;
      }
      if (throwErr === void 0) {
        throwErr = false;
      }
      if (type ? v === 0 : v == 0) return true;
      if (throwErr) throwError('zero', v);
      return false;
    }
    function isPositive(v, type, throwErr) {
      if (type === void 0) {
        type = true;
      }
      if (throwErr === void 0) {
        throwErr = false;
      }
      if (isNumber(v, type) && Number(v) > 0) return true;
      if (throwErr) throwError('positive number', v);
      return false;
    }
    function isNegative(v, type, throwErr) {
      if (type === void 0) {
        type = true;
      }
      if (throwErr === void 0) {
        throwErr = false;
      }
      if (isNumber(v, type) && Number(v) < 0) return true;
      if (throwErr) throwError('negative number', v);
      return false;
    }
    function isPowerOfTwo(v, type, throwErr) {
      if (type === void 0) {
        type = true;
      }
      if (throwErr === void 0) {
        throwErr = false;
      }
      if (isInteger(v, type) && !isOrigin(v, type) && (v & v - 1) === 0) return true;
      if (throwErr) throwError('power of two integer', v);
      return false;
    }
    function isAscii(v, ext, throwErr) {
      if (ext === void 0) {
        ext = true;
      }
      if (throwErr === void 0) {
        throwErr = false;
      }
      if (isNumber(v, false) && isInteger(v, false) && (ext && Number(v) >= 0 && Number(v) <= 255 || Number(v) >= 0 && Number(v) <= 127)) return true;
      if (throwErr) {
        var range = ext ? '0-255' : '0-127';
        throwError("ASCII code in range [" + range + "]", v);
      }
      return false;
    }

    var minNum = -999999999;
    var maxNum = 999999999;
    function isValidNumber(v, min, max, type, throwErr) {
      if (min === void 0) {
        min = minNum;
      }
      if (max === void 0) {
        max = maxNum;
      }
      if (type === void 0) {
        type = true;
      }
      if (throwErr === void 0) {
        throwErr = false;
      }
      if (!isNumber(v, type, null, null, throwErr)) return false;
      var minVal = isNumber(min, false) ? min : minNum;
      var maxVal = isNumber(max, false) ? max : maxNum;
      var numVal = v;
      if (numVal >= minVal && numVal <= maxVal) return true;
      if (throwErr) throwError("valid number in range [" + minVal + ", " + maxVal + "]", v);
      return false;
    }
    function isValidInteger(v, min, max, type, throwErr) {
      if (min === void 0) {
        min = minNum;
      }
      if (max === void 0) {
        max = maxNum;
      }
      if (type === void 0) {
        type = true;
      }
      if (throwErr === void 0) {
        throwErr = false;
      }
      if (!isInteger(v, type, throwErr)) return false;
      var minVal = isNumber(min, false) ? min : minNum;
      var maxVal = isNumber(max, false) ? max : maxNum;
      var numVal = v;
      if (numVal >= minVal && numVal <= maxVal) return true;
      if (throwErr) throwError("valid integer in range [" + minVal + ", " + maxVal + "]", v);
      return false;
    }
    var minFloat = -999999999.9;
    var maxFloat = 999999999.9;
    function isValidFloat(v, min, max, type, throwErr) {
      if (min === void 0) {
        min = minFloat;
      }
      if (max === void 0) {
        max = maxFloat;
      }
      if (type === void 0) {
        type = true;
      }
      if (throwErr === void 0) {
        throwErr = false;
      }
      if (!isFloat(v, type, throwErr)) return false;
      var minVal = isNumber(min, false) ? min : minFloat;
      var maxVal = isNumber(max, false) ? max : maxFloat;
      var numValue = v;
      if (numValue >= minVal && numValue <= maxVal) return true;
      if (throwErr) throwError("valid float in range [" + minVal + ", " + maxVal + "]", v);
      return false;
    }

    function isStringOfLength(v, min, max, throwErr) {
      if (min === void 0) {
        min = 0;
      }
      if (max === void 0) {
        max = 999999999;
      }
      if (throwErr === void 0) {
        throwErr = false;
      }
      if (!isString(v)) {
        if (throwErr) throwError("string with length in range [" + min + ", " + max + "]", v);
        return false;
      }
      var l = v.length;
      if (l >= min && l <= max) return true;
      if (throwErr) throwError("string with length in range [" + min + ", " + max + "] (actual length: " + l + ")", v);
      return false;
    }
    var emailReg = /^(?=[a-z0-9@.!$%&'*+\/=?^_'{|}~-]{6,254}$)(?=[a-z0-9.!#$%&'*+\/=?^_'{|}~-]{1,64}@)[a-z0-9!#$%&'*+\/=?^'{|}~]+(?:[\._-][a-z0-9!#$%&'*+\/=?^'{|}~]+)*@(?:(?=[a-z0-9-]{1,63}\.)[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?=[a-z][a-z0-9-]{1,62}$)[a-z](?:[a-z0-9-]*[a-z0-9])?$/;
    function isEmail(v, throwErr) {
      if (throwErr === void 0) {
        throwErr = false;
      }
      if (isString(v) && emailReg.test(v.toLowerCase())) return true;
      if (throwErr) throwError('valid email address', v);
      return false;
    }
    var ipReg = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    function isIpAddress(v, throwErr) {
      if (throwErr === void 0) {
        throwErr = false;
      }
      if (isString(v) && ipReg.test(v)) return true;
      if (throwErr) throwError('valid IP address', v);
      return false;
    }
    var b64UrlEncoded = /^[A-Za-z0-9-_]+$/;
    var b64 = /^(?=.{1,}$)(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/;
    function isBase64(v, urlEncoded, throwErr) {
      if (urlEncoded === void 0) {
        urlEncoded = false;
      }
      if (throwErr === void 0) {
        throwErr = false;
      }
      var regex = urlEncoded ? b64UrlEncoded : b64;
      if (isString(v) && regex.test(v)) return true;
      if (throwErr) {
        var encodingType = urlEncoded ? 'URL-safe Base64' : 'Base64';
        throwError("valid " + encodingType + " encoded string", v);
      }
      return false;
    }
    var b64Reg = /^[A-Za-z0-9\-_]+={0,2}$/;
    function isJWT(v, throwErr) {
      if (throwErr === void 0) {
        throwErr = false;
      }
      if (isString(v)) {
        var p = v.split('.');
        if (p.length === 3) {
          var header = p[0],
            payload = p[1],
            signature = p[2];
          if (b64Reg.test(header) && b64Reg.test(payload) && b64Reg.test(signature)) {
            try {
              if (isJson(atob(header)) && isJson(atob(payload))) return true;
            } catch (e) {
              if (throwErr) throwError('valid JWT', v);
              return false;
            }
          }
        }
      }
      if (throwErr) throwError('valid JWT', v);
      return false;
    }
    var slugReg = /^[^\s-_](?!.*?[-_]{2,})[a-z0-9-\\][^\s]*[^-_\s]$/;
    function isSlug(v, throwErr) {
      if (throwErr === void 0) {
        throwErr = false;
      }
      if (isString(v) && slugReg.test(v)) return true;
      if (throwErr) throwError('valid slug', v);
      return false;
    }
    var hexadecimal = /^(#|0x|0h)?[0-9A-F]+$/i;
    function isHexadecimal(v, throwErr) {
      if (throwErr === void 0) {
        throwErr = false;
      }
      if (isString(v) && hexadecimal.test(v)) return true;
      if (throwErr) throwError('hexadecimal number', v);
      return false;
    }
    var upperCaseReg = /[A-Z]+/;
    function containsUpperCase(s, throwErr) {
      if (throwErr === void 0) {
        throwErr = false;
      }
      if (upperCaseReg.test(s)) return true;
      if (throwErr) throwError('string containing uppercase letters', s);
      return false;
    }
    var lowerCaseReg = /[a-z]+/;
    function containsLowerCase(s, throwErr) {
      if (throwErr === void 0) {
        throwErr = false;
      }
      if (lowerCaseReg.test(s)) return true;
      if (throwErr) throwError('string containing lowercase letters', s);
      return false;
    }
    var specialReg = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?°`€£§]+/;
    function containsSpecialCharacter(s, throwErr) {
      if (throwErr === void 0) {
        throwErr = false;
      }
      if (specialReg.test(s)) return true;
      if (throwErr) throwError('string containing special characters', s);
      return false;
    }
    var digit = /\d/;
    var nonDigit = /[^0-9]/g;
    function containsNumber(s, min, max, throwErr) {
      if (min === void 0) {
        min = 1;
      }
      if (max === void 0) {
        max = null;
      }
      if (throwErr === void 0) {
        throwErr = false;
      }
      if (!digit.test(s)) {
        if (throwErr) {
          var range = max ? "[" + min + ", " + max + "]" : "[" + min + ", \u221E)";
          throwError("string containing " + range + " digits", s);
        }
        return false;
      }
      var nums = s.replace(nonDigit, '');
      if (!(nums.length >= min)) {
        if (throwErr) {
          var _range = max ? "[" + min + ", " + max + "]" : "[" + min + ", \u221E)";
          throwError("string containing " + _range + " digits (actual: " + nums.length + ")", s);
        }
        return false;
      }
      if (max && !(nums.length <= max)) {
        if (throwErr) throwError("string containing [" + min + ", " + max + "] digits (actual: " + nums.length + ")", s);
        return false;
      }
      return true;
    }
    var defaultOptions = {
      lowerCase: true,
      upperCase: true,
      number: true,
      specialCharacter: true,
      minLength: 12,
      maxLength: 64
    };
    function isValidPassword(s, options, throwErr) {
      if (options === void 0) {
        options = defaultOptions;
      }
      if (throwErr === void 0) {
        throwErr = false;
      }
      var o = Object.assign(Object.assign({}, defaultOptions), options);
      var l = s.length;
      if (!(l >= o.minLength && l <= o.maxLength)) {
        if (throwErr) throwError("password with length in range [" + o.minLength + ", " + o.maxLength + "] (actual length: " + l + ")", s);
        return false;
      }
      if (o.lowerCase && !containsLowerCase(s)) {
        if (throwErr) throwError('password containing lowercase letters', s);
        return false;
      }
      if (o.upperCase && !containsUpperCase(s)) {
        if (throwErr) throwError('password containing uppercase letters', s);
        return false;
      }
      if (o.number && !containsNumber(s, 1, null)) {
        if (throwErr) throwError('password containing numbers', s);
        return false;
      }
      if (o.specialCharacter && !containsSpecialCharacter(s)) {
        if (throwErr) throwError('password containing special characters', s);
        return false;
      }
      return true;
    }

    function isHtmlElement(v, throwErr) {
      if (throwErr === void 0) {
        throwErr = false;
      }
      if (typeof HTMLElement === "object" && v instanceof HTMLElement || v && typeof v === "object" && v.nodeType === 1 && typeof v.nodeName === "string") return true;
      if (throwErr) throwError('HTML element', v);
      return false;
    }
    function isHtmlEventAttribute(v, throwErr) {
      if (throwErr === void 0) {
        throwErr = false;
      }
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
          if (throwErr) throwError('HTML event attribute', v);
          return false;
      }
    }
    function isNode(v, throwErr) {
      if (throwErr === void 0) {
        throwErr = false;
      }
      if (typeof Node === "object" && v instanceof Node || v && typeof v === "object" && typeof v.nodeType === "number" && typeof v.nodeName === "string") return true;
      if (throwErr) throwError('DOM Node', v);
      return false;
    }

    var minDate = new Date('1/1/1900');
    var maxDate = new Date('1/1/2200');
    function isValidDate(v, min, max, throwErr) {
      if (min === void 0) {
        min = minDate;
      }
      if (max === void 0) {
        max = maxDate;
      }
      if (throwErr === void 0) {
        throwErr = false;
      }
      if (!isDate(v, throwErr)) return false;
      var from = isDate(min) ? min : isTimestamp(min, false) ? new Date(min) : minDate;
      var to = isDate(max) ? max : isTimestamp(max, false) ? new Date(max) : maxDate;
      if (v >= from && v <= to) return true;
      if (throwErr) throwError("date between " + from.toISOString() + " and " + to.toISOString(), v);
      return false;
    }
    function isTimestamp(v, type, throwErr) {
      if (type === void 0) {
        type = true;
      }
      if (throwErr === void 0) {
        throwErr = false;
      }
      if (isInteger(v, type) && isNum(new Date(Number.parseInt(String(v))).getTime(), type)) return true;
      if (throwErr) throwError('valid timestamp', v);
      return false;
    }
    var minTs = -2208989361000;
    var maxTs = 7258114800000;
    function isValidTimestamp(v, min, max, type, throwErr) {
      if (min === void 0) {
        min = minTs;
      }
      if (max === void 0) {
        max = maxTs;
      }
      if (type === void 0) {
        type = true;
      }
      if (throwErr === void 0) {
        throwErr = false;
      }
      if (!isTimestamp(v, type, throwErr)) return false;
      var from = minTs;
      if (isTimestamp(min, false)) from = Number(min);else if (isDate(min)) from = min.getTime();
      var to = maxTs;
      if (isTimestamp(max, false)) to = Number(max);else if (isDate(max)) to = max.getTime();
      var ts = Number(v);
      if (ts >= from && ts <= to) return true;
      if (throwErr) {
        var _minDate = new Date(from).toISOString();
        var _maxDate = new Date(to).toISOString();
        throwError("timestamp between " + from + " (" + _minDate + ") and " + to + " (" + _maxDate + ")", v);
      }
      return false;
    }

    function ucfirst(s, everyWords) {
      if (everyWords === void 0) {
        everyWords = true;
      }
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
    function normalizeNickname(nickname, firstName, lastName, throwErr) {
      if (throwErr === void 0) {
        throwErr = false;
      }
      if (!(isString(nickname, '!0') || isString(firstName, '!0') && isString(lastName, '!0'))) {
        if (throwErr) throwError('nickname or both firstName and lastName', {
          nickname: nickname,
          firstName: firstName,
          lastName: lastName
        });
        return false;
      }
      return createNickname(nickname, firstName, lastName);
    }
    function normalizeName(s, throwErr) {
      if (throwErr === void 0) {
        throwErr = false;
      }
      if (!isString(s, '!0')) {
        if (throwErr) throwError('non-empty string', s);
        return false;
      }
      return ucfirst(s, true);
    }
    function normalizeEmail(s, throwErr) {
      if (throwErr === void 0) {
        throwErr = false;
      }
      if (!isEmail(s)) {
        if (throwErr) throwError('valid email address', s);
        return false;
      }
      return s.toLowerCase();
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

    return exports;

})({});
