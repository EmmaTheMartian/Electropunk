#!/usr/bin/env sh
# Downloads, compiles, and installs Packboiler locally

python3 -m venv env
. ./env/bin/activate

git clone https://github.com/emmathemartian/packboiler .packboiler
if [ ! -d ".packboiler" ]; then
    echo "Failed to clone Packboiler"
    exit 1
fi
cd .packboiler

python3 -m pip install --upgrade pip
python3 -m pip install -r requirements.txt
python3 -m build && python3 -m pip install --force-reinstall ./dist/*.whl
