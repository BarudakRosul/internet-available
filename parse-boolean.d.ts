declare module "parse-boolean" {
  /**
   * Parse a boolean value from either a boolean or string representation.
   *
   * @param {boolean | string} value - The input value to parse as a boolean.
   * @returns {boolean | undefined} - The parsed boolean value, or undefined if parsing fails.
   */
  function parseBoolean(value: boolean | string): boolean | undefined;

  export = parseBoolean;
}
