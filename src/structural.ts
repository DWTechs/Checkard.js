import { isArray } from './array';

function isObject<T = any>(o: any, empty = false): o is object & T {
  return o !== null && typeof o === "object" && !isArray(o) && (empty ? !!Object.keys(o).length : true);
}

function hasProperty<T>(val: any, obj: T): boolean {
  return isObject<T>(obj) ? Object.keys(obj).includes(val) : false;
}

function isNil(n: any): n is null | undefined {
  return n == null;
}

export {
  isNil,
  isObject,
  hasProperty,
};
