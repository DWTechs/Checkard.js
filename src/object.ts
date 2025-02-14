
/**
 * Checks if a given property exists on an object.
 * own: boolean - whether to check inherited properties only
 * enumerable: boolean - whether to check enumerable properties only
 *
 * @template K - The type of the property key.
 * @param {object} obj - The object to check the property on.
 * @param {K} k - The property key to check for.
 * @param {boolean} [own=true] - If true, checks if the property is an own property of the object. Defaults to true.
 * @param {boolean} [enumerable=true] - If true, checks if the property is enumerable. Defaults to true.
 * @returns True if the property exists on the object based on the specified conditions, otherwise false.
 */
function isProperty<K extends PropertyKey>(
  o: { [key: PropertyKey]: unknown; }, 
  k: K, 
  own = true, 
  enumerable = true): o is Record<K, unknown>
{
  // enumerable property check
  if (enumerable)
    return isEnumerable(o, k, own);

  // own property check
  if (own) 
    return Object.prototype.hasOwnProperty.call(o, k);

  // property broad check   
  return k in o;

}

/**
 * Checks if a property is enumerable in an object.
 *
 * @param obj - The object to check.
 * @param key - The property key to check for enumerability.
 * @param own - If true, only checks the object's own properties. If false, checks the entire prototype chain.
 * @returns `true` if the property is enumerable, `false` otherwise.
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