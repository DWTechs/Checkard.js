import { isArray } from './array';
import { isString } from './string';
import { isNumber, isSymbol } from './primitive';

function isObject<T = unknown>(o: unknown, empty = false): o is object & T {
  return o !== null && typeof o === "object" && !isArray(o) && (empty ? !!Object.keys(o).length : true);
}

// own: boolean - whether to check inherited properties only
// enumerable: boolean - whether to check enumerable properties only
function isProperty<K extends PropertyKey>(
  obj: { [key: PropertyKey]: unknown }, 
  k: K, 
  own = true, 
  enumerable = true): obj is Record<K, { [key: PropertyKey]: unknown }>
{
  
  if ((!isString(k, true) && !isNumber(k, true) && !isSymbol(k)) || !isObject(obj))
    return false;
  
  // own property check
  if (own && !Object.prototype.hasOwnProperty.call(obj, k)) 
    return false;

  // enumerable property check
  if (enumerable && !isEnumerable(obj, k, own))
    return false;

  // property broad check 
  if (!(k in obj))
    return false;
  
  return true;

}

// checks for enumerables
function isEnumerable(obj: object, key: PropertyKey, own: boolean): boolean {
  if (own)
    return Object.prototype.propertyIsEnumerable.call(obj, key);

  let currentObj = obj;
  while (currentObj) {
    const descriptor = Object.getOwnPropertyDescriptor(currentObj, key);
    if (descriptor)
      return !!descriptor?.enumerable;
    currentObj = Object.getPrototypeOf(currentObj);
  }
  return false;
}


export {
    isObject,
    isProperty,
  };