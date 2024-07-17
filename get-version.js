const axios = require("axios");

async function getPackageVersion(url) {
  const response = await axios.get(url);
  const packageJson = response.data;
  const version = packageJson.version;

  return version;
}

module.exports = getPackageVersion;
