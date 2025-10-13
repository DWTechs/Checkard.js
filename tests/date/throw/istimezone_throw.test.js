import { isTimeZone } from "../../../dist/ch";

describe('isTimeZone throwErr tests', () => {
  describe('when value is not a valid type', () => {
    test('should throw for null', () => {
      expect(() => isTimeZone(null, true)).toThrow();
    });

    test('should throw for undefined', () => {
      expect(() => isTimeZone(undefined, true)).toThrow();
    });

    test('should throw for boolean true', () => {
      expect(() => isTimeZone(true, true)).toThrow();
    });

    test('should throw for boolean false', () => {
      expect(() => isTimeZone(false, true)).toThrow();
    });

    test('should throw for number', () => {
      expect(() => isTimeZone(42, true)).toThrow();
    });

    test('should throw for zero', () => {
      expect(() => isTimeZone(0, true)).toThrow();
    });

    test('should throw for negative number', () => {
      expect(() => isTimeZone(-1, true)).toThrow();
    });

    test('should throw for float', () => {
      expect(() => isTimeZone(3.14, true)).toThrow();
    });

    test('should throw for object', () => {
      expect(() => isTimeZone({ timezone: 'Europe/Paris' }, true)).toThrow();
    });

    test('should throw for array', () => {
      expect(() => isTimeZone(['Europe/Paris'], true)).toThrow();
    });

    test('should throw for function', () => {
      expect(() => isTimeZone(() => 'Europe/Paris', true)).toThrow();
    });

    test('should throw for Date object', () => {
      expect(() => isTimeZone(new Date(), true)).toThrow();
    });

    test('should throw for RegExp', () => {
      expect(() => isTimeZone(/Europe\/Paris/, true)).toThrow();
    });

    test('should throw for Symbol', () => {
      expect(() => isTimeZone(Symbol('timezone'), true)).toThrow();
    });

    test('should throw for NaN', () => {
      expect(() => isTimeZone(NaN, true)).toThrow();
    });
  });

  describe('when value is not a valid timezone format', () => {
    test('should throw for empty string', () => {
      expect(() => isTimeZone('', true)).toThrow();
    });

    test('should throw for plain string', () => {
      expect(() => isTimeZone('notimezone', true)).toThrow();
    });

    test('should throw for lowercase timezone', () => {
      expect(() => isTimeZone('europe/paris', true)).toThrow();
    });

    test('should throw for all uppercase timezone', () => {
      expect(() => isTimeZone('EUROPE/PARIS', true)).toThrow();
    });

    test('should throw for timezone without slash', () => {
      expect(() => isTimeZone('EuropeParis', true)).toThrow();
    });

    test('should throw for timezone with underscore instead of slash', () => {
      expect(() => isTimeZone('Europe_Paris', true)).toThrow();
    });

    test('should throw for timezone with spaces', () => {
      expect(() => isTimeZone('Europe Paris', true)).toThrow();
    });

    test('should throw for timezone with numbers', () => {
      expect(() => isTimeZone('Europe/Paris1', true)).toThrow();
    });

    test('should throw for timezone with special characters', () => {
      expect(() => isTimeZone('Europe/Par!s', true)).toThrow();
    });

    test('should throw for timezone with only region', () => {
      expect(() => isTimeZone('Europe', true)).toThrow();
    });

    test('should throw for timezone with only city', () => {
      expect(() => isTimeZone('Paris', true)).toThrow();
    });

    test('should throw for timezone with trailing slash', () => {
      expect(() => isTimeZone('Europe/Paris/', true)).toThrow();
    });

    test('should throw for timezone with leading slash', () => {
      expect(() => isTimeZone('/Europe/Paris', true)).toThrow();
    });

    test('should throw for timezone with double slash', () => {
      expect(() => isTimeZone('Europe//Paris', true)).toThrow();
    });

    test('should throw for timezone with lowercase region', () => {
      expect(() => isTimeZone('europe/Paris', true)).toThrow();
    });

    test('should throw for timezone with lowercase city', () => {
      expect(() => isTimeZone('Europe/paris', true)).toThrow();
    });

    test('should throw for timezone with uppercase city', () => {
      expect(() => isTimeZone('Europe/PARIS', true)).toThrow();
    });

    test('should throw for timezone with hyphen instead of underscore', () => {
      expect(() => isTimeZone('America/New-York', true)).toThrow();
    });

    test('should throw for timezone with space instead of underscore', () => {
      expect(() => isTimeZone('America/New York', true)).toThrow();
    });

    test('should throw for abbreviated timezone', () => {
      expect(() => isTimeZone('EST', true)).toThrow();
    });

    test('should throw for PST abbreviation', () => {
      expect(() => isTimeZone('PST', true)).toThrow();
    });

    test('should throw for UTC offset', () => {
      expect(() => isTimeZone('UTC+1', true)).toThrow();
    });

    test('should throw for GMT offset', () => {
      expect(() => isTimeZone('GMT-5', true)).toThrow();
    });

    test('should throw for numeric offset', () => {
      expect(() => isTimeZone('+01:00', true)).toThrow();
    });

    test('should throw for wrong capitalization in subregion', () => {
      expect(() => isTimeZone('America/north_Dakota/Center', true)).toThrow();
    });

    test('should throw for too many slashes', () => {
      expect(() => isTimeZone('America/North_Dakota/Center/Extra', true)).toThrow();
    });
  });

  describe('when value is a valid timezone', () => {
    test('should not throw for Europe/Paris', () => {
      expect(() => isTimeZone('Europe/Paris', true)).not.toThrow();
    });

    test('should not throw for America/New_York', () => {
      expect(() => isTimeZone('America/New_York', true)).not.toThrow();
    });

    test('should not throw for Asia/Tokyo', () => {
      expect(() => isTimeZone('Asia/Tokyo', true)).not.toThrow();
    });

    test('should not throw for America/Los_Angeles', () => {
      expect(() => isTimeZone('America/Los_Angeles', true)).not.toThrow();
    });

    test('should not throw for Europe/London', () => {
      expect(() => isTimeZone('Europe/London', true)).not.toThrow();
    });

    test('should not throw for Asia/Shanghai', () => {
      expect(() => isTimeZone('Asia/Shanghai', true)).not.toThrow();
    });

    test('should not throw for America/Chicago', () => {
      expect(() => isTimeZone('America/Chicago', true)).not.toThrow();
    });

    test('should not throw for Australia/Sydney', () => {
      expect(() => isTimeZone('Australia/Sydney', true)).not.toThrow();
    });

    test('should not throw for Pacific/Auckland', () => {
      expect(() => isTimeZone('Pacific/Auckland', true)).not.toThrow();
    });

    test('should not throw for Africa/Cairo', () => {
      expect(() => isTimeZone('Africa/Cairo', true)).not.toThrow();
    });

    test('should not throw for Indian/Maldives', () => {
      expect(() => isTimeZone('Indian/Maldives', true)).not.toThrow();
    });

    test('should not throw for Atlantic/Reykjavik', () => {
      expect(() => isTimeZone('Atlantic/Reykjavik', true)).not.toThrow();
    });

    test('should not throw for Europe/Berlin', () => {
      expect(() => isTimeZone('Europe/Berlin', true)).not.toThrow();
    });

    test('should not throw for Asia/Dubai', () => {
      expect(() => isTimeZone('Asia/Dubai', true)).not.toThrow();
    });

    test('should not throw for America/Sao_Paulo', () => {
      expect(() => isTimeZone('America/Sao_Paulo', true)).not.toThrow();
    });

    test('should not throw for Europe/Moscow', () => {
      expect(() => isTimeZone('Europe/Moscow', true)).not.toThrow();
    });

    test('should not throw for Asia/Kolkata', () => {
      expect(() => isTimeZone('Asia/Kolkata', true)).not.toThrow();
    });

    test('should not throw for America/Mexico_City', () => {
      expect(() => isTimeZone('America/Mexico_City', true)).not.toThrow();
    });

    test('should not throw for Pacific/Honolulu', () => {
      expect(() => isTimeZone('Pacific/Honolulu', true)).not.toThrow();
    });

    test('should not throw for Europe/Istanbul', () => {
      expect(() => isTimeZone('Europe/Istanbul', true)).not.toThrow();
    });

    test('should not throw for America/North_Dakota/Center', () => {
      expect(() => isTimeZone('America/North_Dakota/Center', true)).not.toThrow();
    });

    test('should not throw for America/Indiana/Indianapolis', () => {
      expect(() => isTimeZone('America/Indiana/Indianapolis', true)).not.toThrow();
    });

    test('should not throw for America/Kentucky/Louisville', () => {
      expect(() => isTimeZone('America/Kentucky/Louisville', true)).not.toThrow();
    });

    test('should not throw for America/Argentina/Buenos_Aires', () => {
      expect(() => isTimeZone('America/Argentina/Buenos_Aires', true)).not.toThrow();
    });

    test('should not throw for America/North_Dakota/New_Salem', () => {
      expect(() => isTimeZone('America/North_Dakota/New_Salem', true)).not.toThrow();
    });
  });

  describe('valid timezone should return true', () => {
    test('Europe/Paris should return true', () => {
      expect(isTimeZone('Europe/Paris', true)).toBe(true);
    });

    test('America/New_York should return true', () => {
      expect(isTimeZone('America/New_York', true)).toBe(true);
    });

    test('Asia/Tokyo should return true', () => {
      expect(isTimeZone('Asia/Tokyo', true)).toBe(true);
    });

    test('America/North_Dakota/Center should return true', () => {
      expect(isTimeZone('America/North_Dakota/Center', true)).toBe(true);
    });
  });
});
