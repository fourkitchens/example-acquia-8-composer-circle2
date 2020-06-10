/**
 * Site setup JS/shell script.
 */
const shell = require("shelljs");

// Run Local
shell.exec("yarn local-env");

// Run site build
shell.exec("yarn build");

shell.exit();
