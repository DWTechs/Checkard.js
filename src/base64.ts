/**
 * Decodes Base64 url encoded strings.
 * @param {string} str
 * @returns {string} Decoded string.
 */
function b64Decode(str: string, urlSafe = true): string {
  if (urlSafe)
	  str = str.replace(/-/g, "+").replace(/_/g, "/");
	  
	return Buffer.from(str + pad(str), "base64").toString("utf8");
}

/**
 * Encodes the given data and returns it as a url encoded base64 string.
 *
 * @param {string} data - The data to be encrypted.
 * @return {string} The encrypted data in base64 format.
 */
function b64Encode(str: string, urlSafe = true): string {
  let b64 = Buffer.from(str).toString("base64");
  if (urlSafe)
    b64 = b64.replace(/\+/g, "-")
             .replace(/\//g, "_")
             .replace(/=+$/, "");

	return b64;
		
}

function pad(str: string): string {
  return "=".repeat((4 - (str.length % 4)) % 4);
}

export { b64Encode, b64Decode };
