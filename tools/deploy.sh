#!/bin/bash
NODE_ENV=production npm run build
(
cd dist
git init
git add -A
git commit -m "Deployed to Github Pages"
git push --force --quiet git@github.com:ironhee/ironhee-frontend-boilerplate.git master:gh-pages > /dev/null 2>&1
cd -
)
