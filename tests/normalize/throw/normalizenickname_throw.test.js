import { normalizeNickname } from "../../../dist/ch";

describe('normalizeNickname throwErr tests', () => {
  describe('when nickname is invalid and no valid firstName/lastName combination', () => {
    test('should throw for null nickname with null firstName/lastName', () => {
      expect(() => normalizeNickname(null, null, null, true)).toThrow();
    });

    test('should throw for undefined nickname with undefined firstName/lastName', () => {
      expect(() => normalizeNickname(undefined, undefined, undefined, true)).toThrow();
    });

    test('should throw for empty nickname with empty firstName/lastName', () => {
      expect(() => normalizeNickname('', '', '', true)).toThrow();
    });

    test('should throw for null nickname with empty firstName', () => {
      expect(() => normalizeNickname(null, '', 'Doe', true)).toThrow();
    });

    test('should throw for null nickname with empty lastName', () => {
      expect(() => normalizeNickname(null, 'John', '', true)).toThrow();
    });

    test('should throw for empty nickname with null firstName', () => {
      expect(() => normalizeNickname('', null, 'Doe', true)).toThrow();
    });

    test('should throw for empty nickname with null lastName', () => {
      expect(() => normalizeNickname('', 'John', null, true)).toThrow();
    });

    test('should throw for number nickname with invalid names', () => {
      expect(() => normalizeNickname(123, 456, 789, true)).toThrow();
    });

    test('should throw for boolean nickname with invalid names', () => {
      expect(() => normalizeNickname(true, false, true, true)).toThrow();
    });

    test('should throw for object nickname with invalid names', () => {
      expect(() => normalizeNickname({}, {}, {}, true)).toThrow();
    });

    test('should throw for array nickname with invalid names', () => {
      expect(() => normalizeNickname([], [], [], true)).toThrow();
    });
  });

  describe('when nickname is invalid and only firstName provided (no lastName)', () => {
    test('should throw for null nickname with valid firstName but invalid lastName', () => {
      expect(() => normalizeNickname(null, 'John', null, true)).toThrow();
    });

    test('should throw for empty nickname with valid firstName but empty lastName', () => {
      expect(() => normalizeNickname('', 'John', '', true)).toThrow();
    });

    test('should throw for undefined nickname with valid firstName but undefined lastName', () => {
      expect(() => normalizeNickname(undefined, 'John', undefined, true)).toThrow();
    });

    test('should throw for invalid nickname with valid firstName but number lastName', () => {
      expect(() => normalizeNickname(123, 'John', 123, true)).toThrow();
    });

    test('should throw for invalid nickname with valid firstName but boolean lastName', () => {
      expect(() => normalizeNickname(false, 'John', false, true)).toThrow();
    });

    test('should throw for invalid nickname with valid firstName but object lastName', () => {
      expect(() => normalizeNickname({}, 'John', {}, true)).toThrow();
    });

    test('should throw for invalid nickname with valid firstName but array lastName', () => {
      expect(() => normalizeNickname([], 'John', [], true)).toThrow();
    });
  });

  describe('when nickname is invalid and only lastName provided (no firstName)', () => {
    test('should throw for null nickname with invalid firstName but valid lastName', () => {
      expect(() => normalizeNickname(null, null, 'Doe', true)).toThrow();
    });

    test('should throw for empty nickname with empty firstName but valid lastName', () => {
      expect(() => normalizeNickname('', '', 'Doe', true)).toThrow();
    });

    test('should throw for undefined nickname with undefined firstName but valid lastName', () => {
      expect(() => normalizeNickname(undefined, undefined, 'Doe', true)).toThrow();
    });

    test('should throw for invalid nickname with number firstName but valid lastName', () => {
      expect(() => normalizeNickname(123, 123, 'Doe', true)).toThrow();
    });

    test('should throw for invalid nickname with boolean firstName but valid lastName', () => {
      expect(() => normalizeNickname(false, false, 'Doe', true)).toThrow();
    });

    test('should throw for invalid nickname with object firstName but valid lastName', () => {
      expect(() => normalizeNickname({}, {}, 'Doe', true)).toThrow();
    });

    test('should throw for invalid nickname with array firstName but valid lastName', () => {
      expect(() => normalizeNickname([], [], 'Doe', true)).toThrow();
    });
  });

  describe('when all parameters are non-string types', () => {
    test('should throw for all parameters as numbers', () => {
      expect(() => normalizeNickname(123, 456, 789, true)).toThrow();
    });

    test('should throw for all parameters as booleans', () => {
      expect(() => normalizeNickname(true, false, true, true)).toThrow();
    });

    test('should throw for all parameters as objects', () => {
      expect(() => normalizeNickname({ nick: 'test' }, { first: 'John' }, { last: 'Doe' }, true)).toThrow();
    });

    test('should throw for all parameters as arrays', () => {
      expect(() => normalizeNickname(['nick'], ['John'], ['Doe'], true)).toThrow();
    });

    test('should throw for all parameters as functions', () => {
      expect(() => normalizeNickname(() => 'nick', () => 'John', () => 'Doe', true)).toThrow();
    });

    test('should throw for all parameters as Dates', () => {
      expect(() => normalizeNickname(new Date(), new Date(), new Date(), true)).toThrow();
    });

    test('should throw for all parameters as RegExp', () => {
      expect(() => normalizeNickname(/nick/, /John/, /Doe/, true)).toThrow();
    });

    test('should throw for all parameters as Symbols', () => {
      expect(() => normalizeNickname(Symbol('nick'), Symbol('John'), Symbol('Doe'), true)).toThrow();
    });

    test('should throw for all parameters as BigInt', () => {
      expect(() => normalizeNickname(BigInt(123), BigInt(456), BigInt(789), true)).toThrow();
    });
  });

  describe('when nickname is non-string with invalid firstName/lastName', () => {
    test('should throw for number nickname with number firstName and lastName', () => {
      expect(() => normalizeNickname(123, 456, 789, true)).toThrow();
    });

    test('should throw for object nickname with empty firstName/lastName', () => {
      expect(() => normalizeNickname({ name: 'nick' }, '', '', true)).toThrow();
    });

    test('should throw for array nickname with null firstName/lastName', () => {
      expect(() => normalizeNickname(['nick'], null, null, true)).toThrow();
    });

    test('should throw for function nickname with invalid firstName/lastName', () => {
      expect(() => normalizeNickname(() => 'nick', {}, [], true)).toThrow();
    });
  });

  describe('when parameters have empty strings', () => {
    test('should throw for empty nickname with empty firstName/lastName', () => {
      expect(() => normalizeNickname('', '', '', true)).toThrow();
    });

    test('should throw for empty nickname with one empty name', () => {
      expect(() => normalizeNickname('', 'John', '', true)).toThrow();
    });

    test('should throw for empty nickname with other empty name', () => {
      expect(() => normalizeNickname('', '', 'Doe', true)).toThrow();
    });
  });

  describe('when parameters are special values', () => {
    test('should throw for NaN parameters', () => {
      expect(() => normalizeNickname(NaN, NaN, NaN, true)).toThrow();
    });

    test('should throw for Infinity parameters', () => {
      expect(() => normalizeNickname(Infinity, Infinity, Infinity, true)).toThrow();
    });

    test('should throw for -Infinity parameters', () => {
      expect(() => normalizeNickname(-Infinity, -Infinity, -Infinity, true)).toThrow();
    });

    test('should throw for mixed special values', () => {
      expect(() => normalizeNickname(NaN, Infinity, -Infinity, true)).toThrow();
    });
  });

  describe('complex object scenarios', () => {
    test('should throw for objects with toString methods returning empty', () => {
      const objWithToString = { toString: () => '' };
      expect(() => normalizeNickname(objWithToString, objWithToString, objWithToString, true)).toThrow();
    });

    test('should throw for objects with valueOf methods', () => {
      const objWithValueOf = { valueOf: () => '' };
      expect(() => normalizeNickname(objWithValueOf, objWithValueOf, objWithValueOf, true)).toThrow();
    });

    test('should throw for Map objects', () => {
      expect(() => normalizeNickname(new Map(), new Map(), new Map(), true)).toThrow();
    });

    test('should throw for Set objects', () => {
      expect(() => normalizeNickname(new Set(), new Set(), new Set(), true)).toThrow();
    });

    test('should throw for WeakMap objects', () => {
      expect(() => normalizeNickname(new WeakMap(), new WeakMap(), new WeakMap(), true)).toThrow();
    });

    test('should throw for WeakSet objects', () => {
      expect(() => normalizeNickname(new WeakSet(), new WeakSet(), new WeakSet(), true)).toThrow();
    });

    test('should throw for Promise objects', () => {
      expect(() => normalizeNickname(Promise.resolve(''), Promise.resolve(''), Promise.resolve(''), true)).toThrow();
    });

    test('should throw for Error objects', () => {
      expect(() => normalizeNickname(new Error(''), new Error(''), new Error(''), true)).toThrow();
    });
  });

  describe('specific validation combinations', () => {
    test('should throw when nickname is empty and firstName is valid but lastName is empty', () => {
      expect(() => normalizeNickname('', 'John', '', true)).toThrow();
    });

    test('should throw when nickname is empty and lastName is valid but firstName is empty', () => {
      expect(() => normalizeNickname('', '', 'Doe', true)).toThrow();
    });

    test('should throw when nickname is null and firstName is valid but lastName is null', () => {
      expect(() => normalizeNickname(null, 'John', null, true)).toThrow();
    });

    test('should throw when nickname is null and lastName is valid but firstName is null', () => {
      expect(() => normalizeNickname(null, null, 'Doe', true)).toThrow();
    });

    test('should throw when all three are empty strings', () => {
      expect(() => normalizeNickname('', '', '', true)).toThrow();
    });

    test('should throw when nickname is empty with mixed invalid names', () => {
      expect(() => normalizeNickname('', 123, false, true)).toThrow();
    });

    test('should throw when nickname is null with mixed invalid names', () => {
      expect(() => normalizeNickname(null, {}, [], true)).toThrow();
    });

    test('should throw when nickname is undefined with mixed invalid names', () => {
      expect(() => normalizeNickname(undefined, 'John', 123, true)).toThrow();
    });
  });
});