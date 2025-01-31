import { isArray } from './array';
import { isString } from './string';

function isObject<T = any>(o: any, empty = false): o is object & T {
  return o !== null && typeof o === "object" && !isArray(o) && (empty ? !!Object.keys(o).length : true);
}

function isProperty<K extends PropertyKey>(val: K, obj: { [key: PropertyKey]: any }, inherited = false, nonEnumerable = false): obj is Record<K, { [key: PropertyKey]: any }> {
  const v = String(val);
  if (!isString(v, true) || !isObject(obj))
    return false;
  
  if (inherited && nonEnumerable)
    return v in obj;
  else if (inherited && !nonEnumerable) {
    let currentObj = obj;
    while (currentObj) {
      if (Object.prototype.propertyIsEnumerable.call(currentObj, v)) {
        return true;
      }
      currentObj = Object.getPrototypeOf(currentObj);
    }
    return false;
    // return Object.prototype.hasOwnProperty.call(obj, v)
  } else if (!inherited && nonEnumerable)
    return Object.prototype.propertyIsEnumerable.call(obj, v);
  else if (!inherited && !nonEnumerable)
    return Object.prototype.hasOwnProperty.call(obj, v);
}

function isOwnNonEnumerableProperty(obj: object, key: string): boolean {
  const descriptor = Object.getOwnPropertyDescriptor(obj, key);
  return descriptor !== undefined && !descriptor.enumerable;
}

export {
    isObject,
    isProperty,
  };