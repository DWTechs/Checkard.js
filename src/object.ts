
// import { isString } from './string';
// import { isNumber, isSymbol } from './primitive';

// own: boolean - whether to check inherited properties only
// enumerable: boolean - whether to check enumerable properties only
function isProperty<K extends PropertyKey>(
  obj: { [key: PropertyKey]: unknown; }, 
  k: K, 
  own = true, 
  enumerable = true): obj is Record<K, unknown>
{
  
  // if ((!isString(k, true) && !isNumber(k, true) && !isSymbol(k)) || !isObject(obj))
  //   return false;
  
  // enumerable property check
  if (enumerable)
    return isEnumerable(obj, k, own);

  // own property check
  if (own) 
    return Object.prototype.hasOwnProperty.call(obj, k);

  // property broad check   
  return k in obj;

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
  isProperty,
};