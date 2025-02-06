import { isNumber } from './primitive';
// import { isNum } from './internal';

function isInteger(n: number, type = true): boolean {
  // if (!isNumber(n, type))
  //   return false;
  
  const int = Number.parseInt(String(n), 10);
  return type ? n === int : n == int;
}

function isAscii(c: number, ext = true): boolean {
  return isInteger(c, false) && ((ext && c >= 0 && c <= 255) || (c >= 0 && c <= 127));
}

function isFloat(n: number, type = true): boolean {
  const num = Number(n);
  const modulo = num % 1 !== 0;
  return type ? (num === n && modulo) : (num == n && modulo);
}

function isEven(n: number, type = true): boolean {
  return isInteger(n, type) && !(n & 1);
}

function isOdd(n: number, type = true): boolean {
  return isInteger(n, type) && Boolean(n & 1);
}

function isOrigin(n: number, type = true): boolean {
  return type ? n === 0 : n == 0;
}

function isPositive(n: number, type = true): boolean {
  return isNumber(n, type) && n > 0;
}

function isNegative(n: number, type = true): boolean {
  return isNumber(n, type) && n < 0;
}

function isPowerOfTwo(n: number, type = true): boolean {
  return isInteger(n, type) && !isOrigin(n, false) && (n & (n - 1)) === 0;
}

export {
  isAscii,
  isInteger,
  isFloat,
  isEven,
  isOdd,
  isOrigin,
  isPositive,
  isNegative,
  isPowerOfTwo
};
