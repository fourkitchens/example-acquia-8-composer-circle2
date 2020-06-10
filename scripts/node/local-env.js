/**
 * Build script for local Lando set-up.
 */
const shell = require("shelljs");

// We have the token, now we can setup the lando site.
shell.exec("lando destroy -y");

shell.exec("echo '################# MOVING LOCAL FILES! #################' ");
shell.exec("cp ./settings/local.drush.yml ./docroot/sites/default/");
shell.exec("cp ./settings/local.drushrc.php ./docroot/sites/default/");
shell.exec("cp ./settings/settings.local.php ./docroot/sites/default/");
shell.exec("cp ./settings/development.services.yml ./docroot/sites/");

shell.exec("lando start");

shell.exit();
