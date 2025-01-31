import { isArray, isObject, isProperty } from "../../dist/ch";

declare function isObject2(o: unknown, empty?: boolean | null): o is object;
declare function isProperty2<K extends PropertyKey>(
  val: K,
  obj: unknown,
): obj is Record<K, unknown>;
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
 
function essaiProperty(a: { a: boolean } | { b: boolean }) {
  if (isProperty("a", a)) {
    // KO: b is {a: boolean} | {b: boolean}
    const b = a;
  }
  if (isProperty2("a", a)) {
    // OK: b is {a: boolean}
    const b = a;
  }
}
 
function essaiObject(a?: boolean | { readonly a: boolean } | null) {
  if (isObject(a)) {
    // KO: b is boolean | { readonly a: boolean;} | null | undefined
    const b = a;
  }
  if (isObject2(a)) {
    // OK: b is { readonly a: boolean;}
    const b = a;
  }
}
 
function essaiObject2(a?: { readonly a: boolean } | null) {
  if (isObject(a)) {
    // KO: b is { readonly a: boolean;} | null | undefined
    const b = a;
  }
  if (isObject2(a)) {
    // OK: b is { readonly a: boolean;}
    const b = a;
  }
}
 
 