/**
 * Linting for custom PHP/JS.
 */
const shell = require("shelljs");

const phpCSArgs =
  "--standard=./vendor/drupal/coder/coder_sniffer/Drupal " +
  "--extensions=php,inc,module,install,theme --colors " +
  "--ignore=" +
  "**/autoload.php," +
  "**/vendor/**/*," +
  "**/node_modules/**/*," +
  ".circleci/**/*," +
  "scripts/**/*," +
  "**/pattern-lab/**/*," +
  "**/emulsify/components/**/*," +
  "drush/**/*," +
  "docroot/core/**/*," +
  "docroot/modules/contrib/**/*," +
  "docroot/profiles/contrib/**/*," +
  "docroot/themes/contrib/**/*," +
  "docroot/sites/example.*," +
  "docroot/sites/default/default.*," +
  "**/source/_twig-components/**/*," +
  "**/components/_twig-components/**/*," +
  "**/sites/**/files/**/*," +
  "**/example.settings.php," +
  "**/example.local.settings.php," +
  "**/local.settings.php," +
  "acquia-utils/**/*," +
  "library/**/*," +
  "hooks/**/*," +
  "simplesamlphp/**/*," +
  "docroot/simplesaml/**/*," +
  "docroot/sites/default/settings.php," +
  "docroot/sites/default/circle.settings.php," +
  "docroot/sites/default/drushrc.php," +
  "docroot/themes/custom/sdsu/pattern-lab/**/*, " +
  "*.md " +
  "./docroot/modules/custom ./docroot/themes/custom ";
const tryFix = process.argv[3] === "fix";

// Linting note.
shell.echo("Linting custom project code for PHP...");

// Run linting
// shell.exec("./bin/phplint");
shell.exec(`./bin/phpcs ${phpCSArgs}`);

// Run code beautifier.
if (tryFix) {
  shell.exec(`./bin/phpcbf ${phpCSArgs}`);
}

shell.exit();
