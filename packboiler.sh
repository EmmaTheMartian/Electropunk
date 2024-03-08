#!/usr/bin/env sh

if [ ! -d ".packboiler/" ]; then
    echo '-> Packboiler not found, downloading to ./.packboiler'
    sh ./scripts/init.sh
fi

. ./env/bin/activate
python3 -m packboiler $@
