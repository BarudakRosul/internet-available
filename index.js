const { execSync } = require("child_process");
const net = require("net");
const https = require("https");
const axios = require("axios");
const parseBoolean = require("./parse-boolean");

/**
 * Check internet availability with a ping command.
 *
 * @return {boolean} - Resolves to true if internet is available, false otherwise.
 */
function checkWithPing() {
  const command = `
    if ping -q -c 1 -W 1 www.google.com >/dev/null 2>&1; then
      printf true
    else
      printf false
    fi
  `;
  const connection = execSync(command, { encoding: "utf-8" });
  return parseBoolean(connection);
}

/**
 * Check internet availability with a curl command.
 *
 * @return {boolean} - Resolves to true if internet is available, false otherwise.
 */
function checkWithCurl() {
  const command = `
    if curl --head --fail www.google.com >/dev/null 2>&1; then
      printf true
    else
      printf false
    fi
  `;
  const connection = execSync(command, { encoding: "utf-8" });
  return parseBoolean(connection);
}

/**
 * Check internet availability with a wget command.
 *
 * @return {boolean} - Resolves to true if internet is available, false otherwise.
 */
function checkWithWget() {
  const command = `
    if wget --spider --timeout=3 https://www.google.com >/dev/null 2>&1; then
      printf true
    else
      printf false
    fi
  `;
  const connection = execSync(command, { encoding: "utf-8" });
  return parseBoolean(connection);
}

/**
 * Checks internet availability with net module.
 *
 * @returns {Promise<boolean>} - A promise that resolves to true if internet is available, false otherwise.
 */
async function checkWithNet() {
  return new Promise((resolve) => {
    const socket = net.createConnection(80, "www.google.com");

    socket.on("connect", () => {
      socket.end();
      resolve(true);
    });

    socket.on("error", () => {
      resolve(false);
    });

    const timeoutId = setTimeout(() => {
      socket.end();
      resolve(false);
    }, 3000);

    socket.on("connect", () => {
      clearTimeout(timeoutId);
    });
  });
}

/**
 * Checks internet availability with axios module.
 *
 * @returns {Promise<boolean>} - A promise that resolves to true if internet is available, false otherwise.
 */
async function checkWithAxios() {
  const timeout = 3000;
  try {
    const response = await axios.head("https://www.google.com", { timeout });
    return true;
  } catch (error) {
    return false;
  }
}

/**
 * Checks internet availability with https module.
 *
 * @returns {Promise<boolean>} - A promise that resolves to true if internet is available, otherwise false.
 */
async function checkWithHttps() {
  const timeout = 3000;
  return new Promise((resolve) => {
    const request = https.request("https://www.google.com", { method: "HEAD", timeout }, (response) => {
      resolve(response.statusCode === 200);
    });

    request.on("error", () => {
      resolve(false);
    });

    request.end();
  });
}

exports = module.exports = {
  checkWithPing,
  checkWithCurl,
  checkWithWget,
  checkWithNet,
  checkWithAxios,
  checkWithHttps
};
exports.checknet = exports;
