import { isArray } from './array';

function isObject<T = any>(o: any, empty = false): o is object & T {
  return o !== null && typeof o === "object" && !isArray(o) && (empty ? !!Object.keys(o).length : true);
}

function isProperty<T>(val: any, obj: object): boolean {
  return isObject<T>(obj) ? Object.keys(obj).includes(val) : false;
}

export {
    isObject,
    isProperty,
  };