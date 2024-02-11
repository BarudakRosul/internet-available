/**
 * Module declaration for parse boolean value.
 *
 * @module parse-boolean
 */
declare module "parse-boolean" {
  /**
   * Interface representing the parsing boolean function.
   */
  interface ParseBoolean {
    (value: boolean | string): boolean | undefined;
  }

  const parseBoolean: ParseBoolean;

  export {
    parseBoolean,
    ParseBoolean
  };
  export default parseBoolean;
}
