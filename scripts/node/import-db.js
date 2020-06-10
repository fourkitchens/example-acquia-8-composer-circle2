/**
 * Script to import database.
 */
const shell = require("shelljs");

// Sync db.
shell.exec("yarn get-db");

shell.exec("lando db-import reference/backup-current.sql.gz");

shell.exit();
