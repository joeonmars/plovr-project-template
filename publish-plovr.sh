#!/bin/sh

BASEDIR=$(dirname $0)
cd $BASEDIR

java -jar plovr.jar build config.js > development/js/main-compiled.js

#clean up deploy folder
DEPLOY_DIR=deploy
if [ -d "$DEPLOY_DIR" ]; then
    printf '%s\n' "Removing $DEPLOY_DIR"
    rm -rf "$DEPLOY_DIR"
fi

rsync -av \
	--exclude='soy' \
	--exclude='scss' \
	--exclude='js/project' \
	--exclude='js/main.js' \
	'development/' \
	'deploy' \

#delete compiled js in development directory
COMPILED_JS="development/js/main-compiled.js"
[[ -f "$COMPILED_JS" ]] && rm -f "$COMPILED_JS"