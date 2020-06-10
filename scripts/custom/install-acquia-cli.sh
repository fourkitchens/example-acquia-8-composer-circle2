#!/bin/sh
echo '\nPulling down and installing Acquia CLI to vendor/bin...'
cd vendor
git clone https://github.com/typhonius/acquia_cli.git
cd acquia_cli
git checkout 27dc8a70ee4e0e882961ea4a49769fd0f8e4d853
composer install
ln -s ../acquia_cli/bin/acquiacli ../bin/acquiacli
ln -s ../../acquiacli.yml ./acquiacli.yml
cd ../../
