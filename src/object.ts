import { isArray } from './array';
import { isString } from './string';
import { isNumber, isSymbol } from './primitive';

function isObject<T = any>(o: any, empty = false): o is object & T {
  return o !== null && typeof o === "object" && !isArray(o) && (empty ? !!Object.keys(o).length : true);
}

// own: boolean - whether to check inherited properties only
// enumerable: boolean - whether to check enumerable properties only
function isProperty<K extends PropertyKey>(v: K, obj: { [key: PropertyKey]: any }, own = true, enumerable = true): obj is Record<K, { [key: PropertyKey]: any }> {
  
  if ((!isString(v, true) && !isNumber(v, true) && !isSymbol(v)) || !isObject(obj))
    
    return false;
  
  if (!(v in obj)) // check broadly for property
    return false;

  let isOwn = true;
  let isEnum = true;
  
  if (own) // check if val is own property. enumerable or not
    isOwn = Object.prototype.hasOwnProperty.call(obj, v);

  if (enumerable) // check if val is enumerable
    isEnum = Object.prototype.propertyIsEnumerable.call(obj, v);
  
  return isOwn && isEnum;

}


export {
    isObject,
    isProperty,
  };