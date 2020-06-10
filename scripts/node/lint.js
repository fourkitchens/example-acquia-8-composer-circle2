/**
 * Linting for custom PHP/JS.
 */
const shell = require("shelljs");

shell.echo("Linting custom project code for PHP & JavaScript...");

// Run site build
shell.exec("yarn lint-js");

// Run site build
shell.exec("yarn lint-php");

shell.exit();
