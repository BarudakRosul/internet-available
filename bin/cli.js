#!/bin/node
const path = require("path");
const { program } = require("commander");
const checknet = require("../index");
const getPackageVersion = require("../get-version");
const semver = require("semver");
const packageJsonPath = path.join(__dirname, "../package.json");
const packageJson = require(packageJsonPath);

const __program = String(process.argv.slice(1, 2)).replace(/.+\//g, "").replace(/(\.[^.]+)?$/, "");
const url = "https://raw.githubusercontent.com/BarudakRosul/internet-available/master/package.json";

try {
  (async () => {
    if (await checknet.checkWithAxios()) {
      const version = await getPackageVersion(url);

      if (semver.gt(version, packageJson.version)) {
        console.log(`${__program}: found new version 'v${version}'`);
        console.log(`Try 'npm install -g ${packageJson.name}@v${version}' to start updating.`);
      }
    }

    program
      .name(__program)
      .version(`Check Internet Available v${packageJson.version}`)
      .description("Check your internet connection is available or not.")
      .option("-v, --verbose", "verbose mode")
      .option("-p, --ping", "check with ping command")
      .option("-c, --curl", "check with curl command")
      .option("-w, --wget", "check with wget command")
      .option("-n, --net", "check with net module (not recommended to check internet quota)")
      .option("-a, --axios", "check with axios module (default)")
      .option("-H, --https", "check with https module (not recommended to check internet quota)")
      .action((options) => {
        const { verbose, ping, curl, wget, net, axios, https } = options;

        const message = {
          true: "internet is available",
          false: "internet isn't available"
        };

        (async () => {
          try {
            if (ping) {
              if (checknet.checkWithPing()) {
                if (verbose) {
                  process.stderr.write(`${__program}: ${message.true}\n`);
                }
                process.exit(0);
              } else {
                if (verbose) {
                  process.stderr.write(`${__program}: ${message.false}\n`);
                }
                process.exit(1);
              }
            } else if (curl) {
              if (checknet.checkWithCurl()) {
                if (verbose) {
                  process.stderr.write(`${__program}: ${message.true}\n`);
                }
                process.exit(0);
              } else {
                if (verbose) {
                  process.stderr.write(`${__program}: ${message.false}\n`);
                }
                process.exit(1);
              }
            } else if (wget) {
              if (checknet.checkWithWget()) {
                if (verbose) {
                  process.stderr.write(`${__program}: ${message.true}\n`);
                }
                process.exit(0);
              } else {
                if (verbose) {
                  process.stderr.write(`${__program}: ${message.false}\n`);
                }
                process.exit(1);
              }
            } else if (net) {
              if (await checknet.checkWithNet()) {
                if (verbose) {
                  process.stderr.write(`${__program}: ${message.true}\n`);
                }
                process.exit(0);
              } else {
                if (verbose) {
                  process.stderr.write(`${__program}: ${message.false}\n`);
                }
                process.exit(1);
              }
            } else if (https) {
              if (await checknet.checkWithHttps()) {
                if (verbose) {
                  process.stderr.write(`${__program}: ${message.true}\n`);
                }
                process.exit(0);
              } else {
                if (verbose) {
                  process.stderr.write(`${__program}: ${message.false}\n`);
                }
                process.exit(1);
              }
            } else {
              if (await checknet.checkWithAxios()) {
                if (verbose) {
                  process.stderr.write(`${__program}: ${message.true}\n`);
                }
                process.exit(0);
              } else {
                if (verbose) {
                  process.stderr.write(`${__program}: ${message.false}\n`);
                }
                process.exit(1);
              }
            }
          } catch (error) {
            process.stderr.write(`${__program}: ${error.message}\n`);
            const errorCode = typeof error.code === "number" ? error.code : 1;
            process.exit(errorCode);
          }
        })();
      })
      .on("--help", () => {
        console.log(`\nThis tool licensed under ${packageJson.license} License, see <${packageJson.homepage.replace("#readme", "/tree/master/LICENSE")}>`)
        console.log(`Report any bugs to <${packageJson.bugs.url}>`);
        console.log(`Full documentation <${packageJson.homepage}>`);
      })
      .parse(process.argv);
  })();
} catch(error) {
  process.stderr.write(`${__program}: ${error.message}\n`);
  const errorCode = typeof error.code === "number" ? error.code : 1;
  process.exit(errorCode);
}
