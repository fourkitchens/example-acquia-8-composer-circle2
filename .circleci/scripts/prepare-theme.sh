#!/bin/bash

set -eo pipefail

#
# This script performs all tasks related to the site theme.
#

echo "Compiling theme..."

# Compile theme files and pattern lab.
cd ./docroot/themes/custom/sdsu

echo -e "Step 1: sudo npm install --unsafe-perm --no-save"
[ -f pattern-lab/composer.json ] && echo "Node libraries pulled from cache. Skipping..." || sudo npm install --unsafe-perm --no-save
echo -e "Step 2: gulp build"
gulp build
