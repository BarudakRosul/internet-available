declare module "checkCommand" {
  /**
   * Checks if a command is available on the system.
   *
   * @param {string} command - The command to check.
   * @returns {boolean|undefined} - Returns true if the command is available, otherwise throws an error.
   */
  function checkCommand(command: string): boolean | undefined;

  export = checkCommand;
}
