import { isArray } from './array';
import { isString } from './string';

function isObject<T = any>(o: any, empty = false): o is object & T {
  return o !== null && typeof o === "object" && !isArray(o) && (empty ? !!Object.keys(o).length : true);
}

function isProperty(val: any, obj: { [key: string]: any }): boolean {
  const v = String(val);
  return isString(v, true) && isObject(obj) ? Object.keys(obj).includes(v) : false;
}

export {
    isObject,
    isProperty,
  };