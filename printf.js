const { execSync } = require("child_process");

/**
 * Prints the specified text.
 *
 * @param {string} text - The text to be printed.
 * @throws {Error} Throws an error if the input text is null, undefined, an empty string, or contains only a newline character.
 * @throws {Error} Throws an error if there is an issue executing the printf command.
 */
function printf(text) {
  if (text === null || text === undefined || text === "" || text === "\n") {
    throw Error("Input your text for print");
  }

  try {
    execSync(`printf >&2 '%s\\n' "${text}"`, { encoding: "utf-8" });
  } catch(error) {
    throw Error(error.message);
  }
}

module.exports = printf;
