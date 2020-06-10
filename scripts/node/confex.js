/**
 * Drush configuration import script for Drupal.
 */
const shell = require("shelljs");

// Export Drupal configuration.
shell.exec("lando drush cex sync -y");

shell.exit();
