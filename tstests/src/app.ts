import { isArray, isObject, isProperty, isStringOfLength, isArrayOfLength, isInteger, isFloat } from "../../dist/ch";

declare function isArray2(a: unknown): a is readonly unknown[];
 
function essaiArray(a?: readonly string[] | { a: true } | null) {
  if (isArray(a)) {
    // KO: type is any[]
    const b = a;
    void b;
  }
 
  if (isArray2(a)) {
    // OK: type is readonly string[]
    const b = a;
    void b;
  }
}

function essaiProperty(a: { a: boolean, c: string } | { b: boolean, c: string }) {
  if (isProperty(a, "a")) {
    const b = a;
    void b;
  }
}
 
function essaiObject(a?: boolean | { readonly a: boolean } | null) {
  if (isObject(a)) {
    const b = a;
    void b;
  }
}
 
function essaiObject2(a?: { readonly a: boolean } | null) {
  if (isObject(a)) {
    // KO: b is { readonly a: boolean;} | null | undefined
    const b = a;
    void b;
  }
}

function testIsArrayOfLength(arr: string) {
  if (!isArrayOfLength(arr, 4, undefined))
    throw new Error(`Expected array of length 4. Received: ${arr.length}`);
}


function testIsStringOfLength(str: unknown) {
  if (!isStringOfLength(str, 4))
    throw new Error(`Expected string of length 4. Received: ${String(str)}`);
}

function testIsFloat(n: number | null | undefined) {
  if (!isFloat(n, true))
    throw new Error(`Expected string of length 4. Received: ${String(n)}`);
}

function testIsFloat2(n: number | null | undefined) {
  if (isFloat(n, false) && n < 10)
    throw new Error(`Expected string of length 4. Received: ${n.toString()}`);
}

function testIsInteger(n: number | null | undefined) {
  if (!isInteger(n, true))
    throw new Error(`Expected string of length 4. Received: ${String(n)}`);
}

function testIsInteger2(n: number | null | undefined) {
  if (isInteger(n, false) && n < 10)
    throw new Error(`Expected string of length 4. Received: ${n.toString()}`);
}

essaiArray(["a", "b"]);
essaiProperty({ a: true, c: "x" });
essaiObject({ a: true });
essaiObject2({ a: true });
testIsArrayOfLength("test");
testIsStringOfLength("test");
testIsFloat(1.5);
testIsFloat2(1.5);
testIsInteger(1);
testIsInteger2(1);

