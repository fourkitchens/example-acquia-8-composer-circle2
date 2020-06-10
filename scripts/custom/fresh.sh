 #!/bin/sh

echo '\nInstalling PHP packages...'
cd $( dirname $0 )/../..;
composer install; cd docroot

echo '\nRemoving old files and Extracting reference files if any...'
bash -c '[ -f ../reference/files.tar.gz ] && \n rm -rf sites/default/files/* && \n tar -xzf ../reference/files.tar.gz -C sites/default/files || exit 0'

echo '\nDropping the database...'
../vendor/bin/drush sql-drop -y

echo '\nImporting reference database...'
gunzip < ../reference/backup.sql.gz | sed '/INSERT INTO `cache.*` VALUES/d' | ../vendor/bin/drush sql-cli

