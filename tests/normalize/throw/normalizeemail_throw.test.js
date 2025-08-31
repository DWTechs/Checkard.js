import { normalizeEmail } from "../../../dist/ch";

describe('normalizeEmail throwErr tests', () => {
  describe('when email is non-string type', () => {
    test('should throw for null email', () => {
      expect(() => normalizeEmail(null, true)).toThrow();
    });

    test('should throw for undefined email', () => {
      expect(() => normalizeEmail(undefined, true)).toThrow();
    });

    test('should throw for number email', () => {
      expect(() => normalizeEmail(123, true)).toThrow();
    });

    test('should throw for zero number', () => {
      expect(() => normalizeEmail(0, true)).toThrow();
    });

    test('should throw for negative number', () => {
      expect(() => normalizeEmail(-123, true)).toThrow();
    });

    test('should throw for float number', () => {
      expect(() => normalizeEmail(12.34, true)).toThrow();
    });

    test('should throw for boolean true', () => {
      expect(() => normalizeEmail(true, true)).toThrow();
    });

    test('should throw for boolean false', () => {
      expect(() => normalizeEmail(false, true)).toThrow();
    });

    test('should throw for object', () => {
      expect(() => normalizeEmail({ email: 'test@email.com' }, true)).toThrow();
    });

    test('should throw for array', () => {
      expect(() => normalizeEmail(['test@email.com'], true)).toThrow();
    });

    test('should throw for empty array', () => {
      expect(() => normalizeEmail([], true)).toThrow();
    });

    test('should throw for function', () => {
      expect(() => normalizeEmail(() => 'test@email.com', true)).toThrow();
    });

    test('should throw for Date object', () => {
      expect(() => normalizeEmail(new Date(), true)).toThrow();
    });

    test('should throw for RegExp object', () => {
      expect(() => normalizeEmail(/test@email\.com/, true)).toThrow();
    });

    test('should throw for Symbol', () => {
      expect(() => normalizeEmail(Symbol('test@email.com'), true)).toThrow();
    });

    test('should throw for BigInt', () => {
      expect(() => normalizeEmail(BigInt(123), true)).toThrow();
    });
  });

  describe('when email is empty or whitespace-only string', () => {
    test('should throw for empty string', () => {
      expect(() => normalizeEmail('', true)).toThrow();
    });

    test('should throw for single space', () => {
      expect(() => normalizeEmail(' ', true)).toThrow();
    });

    test('should throw for multiple spaces', () => {
      expect(() => normalizeEmail('   ', true)).toThrow();
    });

    test('should throw for tab character', () => {
      expect(() => normalizeEmail('\t', true)).toThrow();
    });

    test('should throw for newline character', () => {
      expect(() => normalizeEmail('\n', true)).toThrow();
    });

    test('should throw for carriage return', () => {
      expect(() => normalizeEmail('\r', true)).toThrow();
    });

    test('should throw for mixed whitespace characters', () => {
      expect(() => normalizeEmail(' \t\n\r', true)).toThrow();
    });

    test('should throw for zero-width space', () => {
      expect(() => normalizeEmail('\u200B', true)).toThrow();
    });

    test('should throw for non-breaking space', () => {
      expect(() => normalizeEmail('\u00A0', true)).toThrow();
    });
  });

  describe('when email has invalid format - missing @ symbol', () => {
    test('should throw for email without @ symbol', () => {
      expect(() => normalizeEmail('testexample.com', true)).toThrow();
    });

    test('should throw for email with only local part', () => {
      expect(() => normalizeEmail('test', true)).toThrow();
    });

    test('should throw for email with only domain part', () => {
      expect(() => normalizeEmail('example.com', true)).toThrow();
    });

    test('should throw for email with spaces instead of @', () => {
      expect(() => normalizeEmail('test example.com', true)).toThrow();
    });

    test('should throw for email with dots instead of @', () => {
      expect(() => normalizeEmail('test.example.com', true)).toThrow();
    });
  });

  describe('when email has invalid format - multiple @ symbols', () => {
    test('should throw for email with two @ symbols', () => {
      expect(() => normalizeEmail('test@@example.com', true)).toThrow();
    });

    test('should throw for email with multiple @ symbols', () => {
      expect(() => normalizeEmail('test@exam@ple.com', true)).toThrow();
    });

    test('should throw for email with @ at start', () => {
      expect(() => normalizeEmail('@example.com', true)).toThrow();
    });

    test('should throw for email with @ at end', () => {
      expect(() => normalizeEmail('test@', true)).toThrow();
    });

    test('should throw for email with only @ symbol', () => {
      expect(() => normalizeEmail('@', true)).toThrow();
    });
  });

  describe('when email has invalid local part', () => {
    test('should throw for email with empty local part', () => {
      expect(() => normalizeEmail('@example.com', true)).toThrow();
    });

    test('should throw for email with local part starting with dot', () => {
      expect(() => normalizeEmail('.test@example.com', true)).toThrow();
    });

    test('should throw for email with local part ending with dot', () => {
      expect(() => normalizeEmail('test.@example.com', true)).toThrow();
    });

    test('should throw for email with consecutive dots in local part', () => {
      expect(() => normalizeEmail('te..st@example.com', true)).toThrow();
    });

    test('should throw for email with spaces in local part', () => {
      expect(() => normalizeEmail('te st@example.com', true)).toThrow();
    });

    test('should throw for email with invalid characters in local part', () => {
      expect(() => normalizeEmail('test<script>@example.com', true)).toThrow();
    });

    test('should throw for email with quotes in local part', () => {
      expect(() => normalizeEmail('te"st@example.com', true)).toThrow();
    });

    test('should throw for email with brackets in local part', () => {
      expect(() => normalizeEmail('te[st]@example.com', true)).toThrow();
    });
  });

  describe('when email has invalid domain part', () => {
    test('should throw for email with empty domain part', () => {
      expect(() => normalizeEmail('test@', true)).toThrow();
    });

    test('should throw for email with domain starting with dot', () => {
      expect(() => normalizeEmail('test@.example.com', true)).toThrow();
    });

    test('should throw for email with domain ending with dot', () => {
      expect(() => normalizeEmail('test@example.com.', true)).toThrow();
    });

    test('should throw for email with consecutive dots in domain', () => {
      expect(() => normalizeEmail('test@exam..ple.com', true)).toThrow();
    });

    test('should throw for email with spaces in domain', () => {
      expect(() => normalizeEmail('test@exam ple.com', true)).toThrow();
    });

    test('should throw for email with invalid characters in domain', () => {
      expect(() => normalizeEmail('test@exam<ple.com', true)).toThrow();
    });

    test('should throw for email with domain without TLD', () => {
      expect(() => normalizeEmail('test@example', true)).toThrow();
    });

    test('should throw for email with numeric-only domain', () => {
      expect(() => normalizeEmail('test@123', true)).toThrow();
    });
  });

  describe('when email has invalid TLD', () => {
    test('should throw for email with single character TLD', () => {
      expect(() => normalizeEmail('test@example.c', true)).toThrow();
    });

    test('should throw for email with numeric TLD', () => {
      expect(() => normalizeEmail('test@example.123', true)).toThrow();
    });

    test('should throw for email with TLD starting with number', () => {
      expect(() => normalizeEmail('test@example.1com', true)).toThrow();
    });

    test('should throw for email with TLD containing special characters', () => {
      expect(() => normalizeEmail('test@example.-cm', true)).toThrow();
    });

    test('should throw for email with empty TLD', () => {
      expect(() => normalizeEmail('test@example.', true)).toThrow();
    });
  });

  describe('when email contains invalid special characters', () => {
    test('should throw for email with < character', () => {
      expect(() => normalizeEmail('test<@example.com', true)).toThrow();
    });

    test('should throw for email with > character', () => {
      expect(() => normalizeEmail('test>@example.com', true)).toThrow();
    });

    test('should throw for email with ( character', () => {
      expect(() => normalizeEmail('test(@example.com', true)).toThrow();
    });

    test('should throw for email with ) character', () => {
      expect(() => normalizeEmail('test)@example.com', true)).toThrow();
    });

    test('should throw for email with [ character', () => {
      expect(() => normalizeEmail('test[@example.com', true)).toThrow();
    });

    test('should throw for email with ] character', () => {
      expect(() => normalizeEmail('test]@example.com', true)).toThrow();
    });

    test('should throw for email with \\ character', () => {
      expect(() => normalizeEmail('test\\@example.com', true)).toThrow();
    });

    test('should throw for email with , character', () => {
      expect(() => normalizeEmail('test,@example.com', true)).toThrow();
    });

    test('should throw for email with ; character', () => {
      expect(() => normalizeEmail('test;@example.com', true)).toThrow();
    });

    test('should throw for email with : character', () => {
      expect(() => normalizeEmail('test:@example.com', true)).toThrow();
    });
  });

  describe('when email is too long', () => {
    test('should throw for email with very long local part', () => {
      const longLocal = 'a'.repeat(100);
      expect(() => normalizeEmail(`${longLocal}@example.com`, true)).toThrow();
    });

    test('should throw for email with very long domain part', () => {
      const longDomain = 'a'.repeat(100);
      expect(() => normalizeEmail(`test@${longDomain}.com`, true)).toThrow();
    });

    test('should throw for email with overall length exceeding limits', () => {
      const longEmail = 'a'.repeat(300) + '@' + 'b'.repeat(300) + '.com';
      expect(() => normalizeEmail(longEmail, true)).toThrow();
    });
  });

  describe('when email has suspicious patterns', () => {
    test('should throw for email with SQL injection patterns', () => {
      expect(() => normalizeEmail("test'; DROP TABLE users; --@example.com", true)).toThrow();
    });

    test('should throw for email with XSS patterns', () => {
      expect(() => normalizeEmail('test<script>alert("xss")</script>@example.com', true)).toThrow();
    });

    test('should throw for email with JavaScript code', () => {
      expect(() => normalizeEmail('javascript:alert(1)@example.com', true)).toThrow();
    });

    test('should throw for email with HTML tags', () => {
      expect(() => normalizeEmail('<div>test</div>@example.com', true)).toThrow();
    });

    test('should throw for email with newline injection', () => {
      expect(() => normalizeEmail('test\n@example.com', true)).toThrow();
    });

    test('should throw for email with carriage return injection', () => {
      expect(() => normalizeEmail('test\r@example.com', true)).toThrow();
    });
  });

  describe('when email has special numeric values', () => {
    test('should throw for NaN', () => {
      expect(() => normalizeEmail(NaN, true)).toThrow();
    });

    test('should throw for Infinity', () => {
      expect(() => normalizeEmail(Infinity, true)).toThrow();
    });

    test('should throw for -Infinity', () => {
      expect(() => normalizeEmail(-Infinity, true)).toThrow();
    });
  });

  describe('when email is complex object types', () => {
    test('should throw for Map object', () => {
      expect(() => normalizeEmail(new Map([['email', 'test@example.com']]), true)).toThrow();
    });

    test('should throw for Set object', () => {
      expect(() => normalizeEmail(new Set(['test@example.com']), true)).toThrow();
    });

    test('should throw for WeakMap object', () => {
      expect(() => normalizeEmail(new WeakMap(), true)).toThrow();
    });

    test('should throw for WeakSet object', () => {
      expect(() => normalizeEmail(new WeakSet(), true)).toThrow();
    });

    test('should throw for Promise object', () => {
      expect(() => normalizeEmail(Promise.resolve('test@example.com'), true)).toThrow();
    });

    test('should throw for Error object', () => {
      expect(() => normalizeEmail(new Error('test@example.com'), true)).toThrow();
    });

    test('should throw for ArrayBuffer object', () => {
      expect(() => normalizeEmail(new ArrayBuffer(8), true)).toThrow();
    });
  });

  describe('when email is object with custom toString/valueOf', () => {
    test('should throw for object with toString returning invalid email', () => {
      const obj = { toString: () => 'invalid-email' };
      expect(() => normalizeEmail(obj, true)).toThrow();
    });

    test('should throw for object with toString returning empty string', () => {
      const obj = { toString: () => '' };
      expect(() => normalizeEmail(obj, true)).toThrow();
    });

    test('should throw for object with valueOf returning invalid email', () => {
      const obj = { valueOf: () => 'invalid-email' };
      expect(() => normalizeEmail(obj, true)).toThrow();
    });

    test('should throw for object with both toString and valueOf', () => {
      const obj = { 
        toString: () => 'invalid@', 
        valueOf: () => 'also-invalid' 
      };
      expect(() => normalizeEmail(obj, true)).toThrow();
    });
  });

  describe('edge cases with string literals', () => {
    test('should throw for string "null"', () => {
      expect(() => normalizeEmail('null', true)).toThrow();
    });

    test('should throw for string "undefined"', () => {
      expect(() => normalizeEmail('undefined', true)).toThrow();
    });

    test('should throw for string "false"', () => {
      expect(() => normalizeEmail('false', true)).toThrow();
    });

    test('should throw for string "true"', () => {
      expect(() => normalizeEmail('true', true)).toThrow();
    });

    test('should throw for string "0"', () => {
      expect(() => normalizeEmail('0', true)).toThrow();
    });

    test('should throw for string "123"', () => {
      expect(() => normalizeEmail('123', true)).toThrow();
    });

    test('should throw for string "[object Object]"', () => {
      expect(() => normalizeEmail('[object Object]', true)).toThrow();
    });
  });

  describe('when email has unicode and international characters', () => {
    test('should throw for email with unicode characters in invalid positions', () => {
      expect(() => normalizeEmail('tëst@example.com', true)).toThrow();
    });

    test('should throw for email with emoji characters', () => {
      expect(() => normalizeEmail('test😀@example.com', true)).toThrow();
    });

    test('should throw for email with Chinese characters', () => {
      expect(() => normalizeEmail('测试@example.com', true)).toThrow();
    });

    test('should throw for email with Arabic characters', () => {
      expect(() => normalizeEmail('اختبار@example.com', true)).toThrow();
    });

    test('should throw for email with Cyrillic characters', () => {
      expect(() => normalizeEmail('тест@example.com', true)).toThrow();
    });

    test('should throw for email with mixed script characters', () => {
      expect(() => normalizeEmail('tëst测试@example.com', true)).toThrow();
    });
  });
});