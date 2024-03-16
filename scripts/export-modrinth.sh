#!/usr/bin/env sh
cd output && mkdir -p exports
rm exports/modrinth.zip
packwiz modrinth export --output exports/modrinth.zip
