
import { throwError } from './error';
import { isObject } from './nonprimitive';

/**
 * Checks if a given property exists on an object.
 * Performs internal object validation using isObject() before checking property.
 * own: boolean - whether to check inherited properties only
 * enumerable: boolean - whether to check enumerable properties only
 *
 * @template K - The type of the property key.
 * @param {unknown} v - The value to check the property on (performs internal object validation).
 * @param {K} k - The property key to check for.
 * @param {boolean} [own=true] - If true, checks if the property is an own property of the object. Defaults to true.
 * @param {boolean} [enumerable=true] - If true, checks if the property is enumerable. Defaults to true.
 * @param {boolean} [throwErr=false] - If true, throws an error when property doesn't exist. If false, returns false.
 * @returns {boolean} True if the value is an object and the property exists based on the specified conditions, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not an object or the property doesn't exist and throwErr is true.
 */
function isProperty<K extends PropertyKey>(
  v: unknown, 
  k: K, 
  own = true, 
  enumerable = true,
  throwErr: boolean = false): v is Record<K, unknown>
{
  // First validate that v is an object
  if (!isObject(v, true, throwErr))
    return false;

  let isValid: boolean;
  
  // enumerable property check
  if (enumerable) 
    isValid = isEnumerable(v, k, own);
  
  // own property check
  else if (own)
    isValid = Object.prototype.hasOwnProperty.call(v, k);
  
  // property broad check   
  else
    isValid = k in v;

  if (isValid)
    return true;
  
  if (throwErr) {
    const scope = own ? 'own' : 'inherited';
    const type = enumerable ? 'enumerable' : 'any';
    throwError(`${scope} ${type} property '${String(k)}'`, v);
  }
  
  return false;
}

/**
 * Checks if a property is enumerable in an object.
 *
 * @param obj - The object to check.
 * @param key - The property key to check for enumerability.
 * @param own - If true, only checks the object's own properties. If false, checks the entire prototype chain.
 * @returns {boolean} `true` if the property is enumerable, `false` otherwise.
 */
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