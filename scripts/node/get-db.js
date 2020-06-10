/**
 * Script to pull site files from Acquia environment.
 */
const shell = require("shelljs");

function dateFormat(date) {
  var dd = date.getDate();
  var mm = date.getMonth()+1; //January is 0!
  var yyyy = date.getFullYear();

  if(dd<10) {
    dd = '0'+dd;
  }

  if(mm<10) {
    mm = '0'+mm;
  }
  // Today in this format: 2018-01-31
  return yyyy + '-' + mm + '-' + dd;
}

var today = dateFormat(new Date());
var yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);
yesterday = dateFormat(yesterday);

// Pull the latest Prod data backup from server.
shell.exec("sh ./scripts/custom/download-db.sh " + today + " " + yesterday);

shell.exit();
