/**
 * Drush configuration export script for Drupal.
 */
const shell = require("shelljs");

// Import Drupal configuration.
shell.exec("lando drush cim sync -y");

shell.exit();
