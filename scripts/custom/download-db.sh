#!/bin/bash

today="$1"
yesterday="$2"

if [ -f "./reference/backup-$today.sql.gz" ]; then
  # Today's DB is available locally.
  echo "DB (today) already in place";
elif scp -r sdsuextension.prod@ded-31408.prod.hosting.acquia.com:/mnt/files/sdsuextension/backups/prod-sdsuextension-sdsuextension-$today.sql.gz ./reference/tmp-$today.sql.gz &&
rm -f ./reference/backup-* &&
chmod 644 ./reference/tmp-$today.sql.gz &&
mv ./reference/tmp-$today.sql.gz ./reference/backup-$today.sql.gz &&
cp ./reference/backup-$today.sql.gz ./reference/backup-current.sql.gz ||
FALSE; then
  # Today's DB downloaded from Acquia.
  echo "DB (today) transfer success";
elif [ -f "./reference/backup-$yesterday.sql.gz" ]; then
  # Yesterday's DB is available locally.
  echo "DB (yesterday) already in place (today\'s not available yet)";
elif scp -r sdsuextension.prod@ded-31408.prod.hosting.acquia.com:/mnt/files/sdsuextension/backups/prod-sdsuextension-sdsuextension-$yesterday.sql.gz ./reference/tmp-$yesterday.sql.gz &&
rm -f ./reference/backup-* &&
chmod 644 ./reference/tmp-$yesterday.sql.gz &&
mv ./reference/tmp-$yesterday.sql.gz ./reference/backup-$yesterday.sql.gz &&
cp ./reference/backup-$yesterday.sql.gz ./reference/backup-current.sql.gz ||
FALSE; then
# Yesterday's DB downloaded from Acquia.
  echo "DB (yesterday) transfer success";
# Nothing worked.
else echo "DB Transfer Failed";
fi
