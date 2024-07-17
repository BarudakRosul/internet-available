declare module "checknet" {
  /**
   * Check internet availability with a ping command.
   *
   * @return {boolean} - Resolves to true if internet is available, false otherwise.
   */
  function checkWithPing(): boolean;

  /**
   * Check internet availability with a curl command.
   *
   * @return {boolean} - Resolves to true if internet is available, false otherwise.
   */
  function checkWithCurl(): boolean;

  /**
   * Check internet availability with a wget command.
   *
   * @return {boolean} - Resolves to true if internet is available, false otherwise.
   */
  function checkWithWget(): boolean;

  /**
   * Checks internet availability with net module.
   *
   * @returns {Promise<boolean>} - A promise that resolves to true if internet is available, false otherwise.
   */
  function checkWithNet(): Promise<boolean>;

  /**
   * Checks internet availability with axios module.
   *
   * @returns {Promise<boolean>} - A promise that resolves to true if internet is available, false otherwise.
   */
  function checkWithAxios(): Promise<boolean>;

  /**
   * Checks internet availability with https module.
   *
   * @returns {Promise<boolean>} - A promise that resolves to true if internet is available, false otherwise.
   */
  function checkWithHttps(): Promise<boolean>;

  export {
    checkWithPing,
    checkWithCurl,
    checkWithWget,
    checkWithNet,
    checkWithAxios,
    checkWithHttps
  };
}

export = checknet;
