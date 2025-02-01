import { isNumeric, getTag } from './internal';

function isBoolean(b: unknown): b is boolean {
  return typeof b === "boolean";
}

function isNumber(n: unknown, type = true): n is number {
  return !isSymbol(n) && !(n?.constructor === Array) && (type ? Number(n) === n : isNumeric(n));
}

function isSymbol(s: unknown): s is symbol {
  const type = typeof s;
  return type === 'symbol' || (type === 'object' && s != null && getTag(s) === '[object Symbol]');
}

function isNil(n: unknown): n is null | undefined {
  return n == null;
}

export {
  isBoolean,
  isNumber,
  isSymbol,
  isNil,
};
