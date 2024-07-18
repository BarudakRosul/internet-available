/**
 * Parse a boolean value from either a boolean or string representation.
 *
 * @param {boolean|string} value - The input value to parse as a boolean.
 * @returns {boolean|undefined} - The parsed boolean value, or undefined if parsing fails.
 */
function parseBoolean(value) {
  if (typeof value === "boolean") {
    return value;
  }

  if (typeof value === "string") {
    if (value.toLowerCase() === "true") {
      return true;
    } else if (value.toLowerCase() === "false") {
      return false;
    }
  }

  return undefined;
}

module.exports = parseBoolean;
