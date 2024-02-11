/**
 * Module declaration for the "@barudakrosul/internet-available" module.
 *
 * @module @barudakrosul/internet-available
 */
declare module "@barudakrosul/internet-available" {
  /**
   * Interface representing the check with ping function.
   */
  interface CheckWithPing {
    (): boolean;
  }

  /**
   * Interface representing the check with curl function.
   */
  interface CheckWithCurl {
    (): boolean;
  }

  /**
   * Interface representing the check with wget function.
   */
  interface CheckWithWget {
    (): boolean;
  }

  /**
   * Interface representing the check with net function.
   */
  interface CheckWithNet {
    (): Promise<boolean>;
  }

  /**
   * Interface representing the check with axios function.
   */
  interface CheckWithAxios {
    (): Promise<boolean>;
  }

  /**
   * Interface representing the check with https function.
   */
  interface CheckWithHttps {
    (): Promise<boolean>;
  }

  /**
   * Interface representing the checknet module.
   */
  interface Checknet {
    checkWithPing: CheckWithPing;
    checkWithCurl: CheckWithCurl;
    checkWithWget: CheckWithWget;
    checkWithNet: CheckWithNet;
    checkWithAxios: CheckWithAxios;
    checkWithHttps: CheckWithHttps;
    checknet: Checknet;
  }

  const checkWithPing: CheckWithPing;
  const checkWithCurl: CheckWithCurl;
  const checkWithWget: CheckWithWget;
  const checkWithNet: CheckWithNet;
  const checkWithAxios: CheckWithAxios;
  const checkWithHttps: CheckWithHttps;
  const checknet: Checknet;

  export {
    checkWithPing,
    checkWithCurl,
    checkWithWget,
    checkWithNet,
    checkWithAxios,
    checkWithHttps,
    checknet,
    CheckWithPing,
    CheckWithCurl,
    CheckWithWget,
    CheckWithNet,
    CheckWithAxios,
    CheckWithHttps,
    Checknet
  };
  export default checknet;
}
