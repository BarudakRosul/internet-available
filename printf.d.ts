/**
 * Module declaration for printing text.
 *
 * @module printf
 */
declare module "printf" {
  /**
   * Interface representing the print text function.
   */
  interface Printf {
    (text: string): Buffer | string;
  }

  const printf: Printf;

  export {
    printf,
    Printf
  };
  export default printf;
}
