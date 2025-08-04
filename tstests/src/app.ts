import { isArray, isObject, isProperty, isStringOfLength, isArrayOfLength, isInteger, isFloat, isNumber } from "../../dist/ch";

declare function isArray2(a: unknown): a is readonly unknown[];
 
function essaiArray(a?: readonly string[] | { a: true } | null) {
  if (isArray(a)) {
    // KO: type is any[]
    const b = a;
  }
 
  if (isArray2(a)) {
    // OK: type is readonly string[]
    const b = a;
  }
}

function essaiProperty(a: { a: boolean, c: string } | { b: boolean, c: string }) {
  if (isProperty(a, "a")) {
    const b = a;
  }
}
 
function essaiObject(a?: boolean | { readonly a: boolean } | null) {
  if (isObject(a)) {
    const b = a;
  }
}
 
function essaiObject2(a?: { readonly a: boolean } | null) {
  if (isObject(a)) {
    // KO: b is { readonly a: boolean;} | null | undefined
    const b = a;
  }
}

function testIsArrayOfLength(arr: string) {
  if (!isArrayOfLength(arr, 4, undefined))
    throw new Error(`Expected array of length 4. Received: ${arr.length}`);
}


function testIsStringOfLength(str: string) {
  if (!isStringOfLength(str, 4))
    throw new Error(`Expected string of length 4. Received: ${str.length}`);
}

function testIsFloat(n: number | null | undefined) {
  if (/*isNumber(n) && */!isFloat(n, true))
    throw new Error(`Expected string of length 4. Received: ${n.toString()}`);
}

function testIsFloat2(n: number | null | undefined) {
  if (/*isNumber(n) && */isFloat(n, false) && n < 10)
    throw new Error(`Expected string of length 4. Received: ${n.toString()}`);
}

function testIsInteger(n: number | null | undefined) {
  if (/*isNumber(n) && */!isInteger(n, true))
    throw new Error(`Expected string of length 4. Received: ${n.toString()}`);
}

function testIsInteger2(n: number | null | undefined) {
  if (/*isNumber(n) && */isInteger(n, false) && n < 10)
    throw new Error(`Expected string of length 4. Received: ${n.toString()}`);
}

