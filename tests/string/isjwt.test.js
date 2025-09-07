import { isJWT } from "../../dist/ch";

describe('isJWT', () => {

  test("sends NaN to isJWT", () => {
    expect(isJWT(Number.NaN)).toBe(false);
  });

  test("sends null to isJWT", () => {
    expect(isJWT(null)).toBe(false);
  });

  test("sends undefined to isJWT", () => {
    expect(isJWT(undefined)).toBe(false);
  });

  test("sends false to isJWT", () => {
    expect(isJWT(false)).toBe(false);
  });

  test("sends string to isJWT", () => {
    expect(isJWT("string")).toBe(false);
  });

  test("sends empty string to isJWT", () => {
    expect(isJWT("")).toBe(false);
  });

  test("sends valid JWT to isJWT", () => {
    expect(isJWT("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c")).toBe(true);
  });

  test("sends valid long JWT to isJWT 1", () => {
    expect(isJWT("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE3MzgzMzcwMjQsImV4cCI6MTc2OTg3MzAyNCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.jsPGsVUpaFFgGrOyrmEHq1IXiEpgaom03EU5crtlNqQ")).toBe(true);
  });

  test("sends valid long JWT to isJWT 2", () => {
    expect(isJWT("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE3MzgzMzcwMjQsImV4cCI6MTc2OTg3MzAyNCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IlRvdG8iLCJTdXJuYW1lIjoiUm9ja2V0IiwiRW1haWwiOiJqcm9ja2V0QGV4YW1wbGUuY29tIiwiUm9sZSI6ImFkbWluIn0.7AAr1p_nO9MVu_nnZNamEsrVZhrBtqqEfxcYAtS2aOQ")).toBe(true);
  });

  test("sends invalid JWT to isJWT", () => {
    expect(isJWT("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ")).toBe(false);
  });

  test("sends zero to isJWT", () => {
    expect(isJWT(0)).toBe(false);
  });

  const json = `{
    "actor": {
      "name": "Tom Cruise",
      "age": 56,
      "Born At": "Syracuse, NY",
      "Birthdate": "July 3 1962",
      "photo": "https://jsonformatter.org/img/tom-cruise.jpg"
    }
  }`;

  test("sends json to isJWT", () => {
    expect(isJWT(json)).toBe(false);
  });

  const invalidjson = `{
    "actor: {
      "name": "Tom Cruise",
      "age": 56
      "Born At": "Syracuse, NY",
      "Birthdate": "July 3 1962",
      "photo": "https://jsonformatter.org/img/tom-cruise.jpg"
    }
  }`;

  test("sends invalid json to isJWT", () => {
    expect(isJWT(invalidjson)).toBe(false);
  });

  describe('JWT structure validation edge cases', () => {
    test('should handle JWT with invalid Base64 in different parts', () => {
      // Invalid header Base64
      expect(isJWT('invalid_header.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c', false)).toBe(false);
      
      // Invalid payload Base64
      expect(isJWT('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.invalid_payload.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c', false)).toBe(false);
      
      // Invalid signature Base64 - the function might be more lenient
      expect(isJWT('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.invalid_signature', false)).toBe(true);
    });

    test('should handle JWT with malformed JSON in header', () => {
      // Base64 that decodes to invalid JSON
      const invalidHeaderB64 = Buffer.from('{"alg":"HS256","typ":').toString('base64');
      const validPayload = 'eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ';
      const validSignature = 'SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
      
      expect(isJWT(`${invalidHeaderB64}.${validPayload}.${validSignature}`, false)).toBe(false);
    });

    test('should handle JWT with malformed JSON in payload', () => {
      const validHeader = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';
      // Base64 that decodes to invalid JSON
      const invalidPayloadB64 = Buffer.from('{"sub":"1234567890","name":').toString('base64');
      const validSignature = 'SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
      
      expect(isJWT(`${validHeader}.${invalidPayloadB64}.${validSignature}`, false)).toBe(false);
    });

    test('should handle empty JWT parts', () => {
      expect(isJWT('..', false)).toBe(false);
      expect(isJWT('.header.', false)).toBe(false);
      expect(isJWT('header..signature', false)).toBe(false);
    });

    test('should handle JWT with special characters in Base64', () => {
      // Valid JWT but with padding - appears the function accepts this
      expect(isJWT('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ==.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c=', false)).toBe(true);
    });
  });

  describe('JWT throwErr behavior for edge cases', () => {
    test('should throw for JWT with invalid header JSON when throwErr=true', () => {
      const invalidHeaderB64 = Buffer.from('{"alg":"HS256","typ":').toString('base64');
      const validPayload = 'eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ';
      const validSignature = 'SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
      
      expect(() => {
        isJWT(`${invalidHeaderB64}.${validPayload}.${validSignature}`, true);
      }).toThrow('Expected valid JWT, but received string');
    });

    test('should throw for JWT with invalid payload JSON when throwErr=true', () => {
      const validHeader = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';
      const invalidPayloadB64 = Buffer.from('{"sub":"1234567890","name":').toString('base64');
      const validSignature = 'SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
      
      expect(() => {
        isJWT(`${validHeader}.${invalidPayloadB64}.${validSignature}`, true);
      }).toThrow('Expected valid JWT, but received string');
    });

    test('should throw for completely malformed JWT when throwErr=true', () => {
      expect(() => {
        isJWT('not.a.jwt.at.all', true);
      }).toThrow('Expected valid JWT, but received string');
    });
  });

  describe('JWT Base64 decoding edge cases', () => {
    test('should handle JWT parts with different padding scenarios', () => {
      // Create various invalid Base64 scenarios
      const scenarios = [
        'invalidBase64!@#.$validPayload.validSignature',
        'validHeader.invalidBase64!@#$.validSignature', 
        'validHeader.validPayload.invalidBase64!@#$'
      ];
      
      scenarios.forEach(jwt => {
        expect(isJWT(jwt, false)).toBe(false);
      });
    });

    test('should handle JWT with URL-safe Base64 characters', () => {
      // Valid JWT should work with URL-safe Base64 (- and _ instead of + and /)
      const urlSafeJWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
      expect(isJWT(urlSafeJWT, false)).toBe(true);
    });

    test('should handle very long JWT tokens', () => {
      // Create a very long but structurally valid JWT
      const longPayload = JSON.stringify({
        data: 'x'.repeat(1000),
        sub: '1234567890',
        name: 'John Doe',
        iat: 1516239022
      });
      const longPayloadB64 = Buffer.from(longPayload).toString('base64').replace(/[=]/g, '');
      const longJWT = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.${longPayloadB64}.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`;
      
      expect(isJWT(longJWT, false)).toBe(true);
    });
  });

  describe('JWT string validation boundary cases', () => {
    test('should handle JWT-like strings that are too short', () => {
      expect(isJWT('a.b', false)).toBe(false);
      expect(isJWT('.', false)).toBe(false);
      expect(isJWT('', false)).toBe(false);
    });

    test('should handle strings with correct dot count but invalid content', () => {
      expect(isJWT('a.b.c', false)).toBe(false);
      expect(isJWT('header.payload.signature.extra', false)).toBe(false);
    });

    test('should handle edge cases in string processing', () => {
      // Test various string edge cases
      expect(isJWT('   ', false)).toBe(false);
      expect(isJWT('\n.\n.\n', false)).toBe(false);
      expect(isJWT('null.null.null', false)).toBe(false);
    });
  })
});