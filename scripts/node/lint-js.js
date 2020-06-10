/**
 * Linting for custom JS.
 */
const shell = require("shelljs");

// Linting note.
shell.echo("Linting custom project code for Javascript...");

// Lint for JS:
shell.exec("yarn eslint");

shell.exit();
