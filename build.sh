#!/bin/bash

set -e
set -o errexit -o nounset

DEPLOY_REPO="https://${DEPLOY_TOKEN}@${GITHUB_REPO}"

if [ -z "$TRAVIS_PULL_REQUEST" ]; then
    echo "Don't publish site for pull requests. No deploy."
    exit 0
elif [ "$TRAVIS_BRANCH" != "master" ]; then
	echo "This commit was made against the $TRAVIS_BRANCH and not the master. No deploy."
  	exit 0
fi

function main {
	clean
	get_current_site
	build_site
	deploy
}

function clean { 
	echo "-> cleaning _site folder"
	if [ -d "_site" ]; then rm -Rf _site; fi 
}

function get_current_site { 
	echo "-> getting latest site"
	git clone --depth 1 $DEPLOY_REPO _site >/dev/null 2>&1
}

function build_site { 
	echo "-> building site"
	bundle exec jekyll build
}

function deploy {
	echo "-> deploying changes"
	cd _site
	touch .nojekyll
	git init
	git config user.name "5j4"
	git config user.email "5j4@users.noreply.github.com"
	git add -A
	git commit -m "Generated Jekyll Site by Travis CI (Build #${TRAVIS_BUILD_NUMBER})"
	git push -f $DEPLOY_REPO master:gh-pages >/dev/null 2>&1
}

main
