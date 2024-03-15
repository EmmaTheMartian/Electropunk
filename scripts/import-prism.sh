#!/usr/bin/env sh
if [ -z "$1" ]; then
    echo "usage: import-prism.sh (OUTPUT FILE)"
    echo "example: \`import-prism.sh modrinth\` will import the zip at ./output/exports/modrinth.zip"
    exit 1
fi

prismlauncher -I ./output/exports/$1.zip
