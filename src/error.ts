
/**
 * Creates a standardized type error message.
 * 
 * @param {string} expectedType - The expected type (e.g., 'number', 'string', 'boolean').
 * @param {unknown} actualValue - The actual value that was received.
 * @returns {string} A formatted error message.
 */
function throwError(expectedType: string, actualValue: unknown): string {
  throw new Error(`Expected ${expectedType}, but received ${typeof actualValue}: ${String(actualValue)}`);
}


export {
  throwError,
};
