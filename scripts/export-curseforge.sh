#!/usr/bin/env sh
cd output && mkdir -p exports
rm exports/modrinth.zip
packwiz curseforge export --output exports/curseforge.zip
