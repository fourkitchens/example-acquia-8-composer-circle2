 #!/bin/bash

if [ -z $1 ]; then
  DEPLOY_ENV='prod'
else
  DEPLOY_ENV=$1
fi
cd $( dirname $0 )/../../docroot;

echo ''
echo "Deploying $DEPLOY_ENV"

echo ''
echo 'Rebuilding cache...'
../vendor/bin/drush cache-rebuild

echo ''
echo 'Updating database...'
../vendor/bin/drush updatedb -y --entity-updates

echo ''
echo 'Rebuilding cache...'
../vendor/bin/drush cache-rebuild

echo ''
echo 'Importing configuration...'
../vendor/bin/drush config-import sync -y

echo ''
echo 'Rebuilding cache...'
../vendor/bin/drush cache-rebuild
