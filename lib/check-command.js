const { execSync } = require("child_process");
const parseBoolean = require("./parse-boolean");

/**
 * Checks if a command is available on the system.
 *
 * @param {string} command - The command to check.
 * @returns {boolean|undefined} - Returns true if the command is available, otherwise throws an error.
 */
function checkCommand(command) {
  const platform = process.platform;
  const check = platform === "win32" ? `where ${command}` : `which ${command}`;
  const available = execSync(`
    if ${check} >/dev/null 2>&1; then
      printf true
    else
      printf false
    fi
  `, { encoding: "utf-8" });

  return parseBoolean(available);
}

module.exports = checkCommand;
