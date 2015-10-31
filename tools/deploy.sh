#!/bin/bash
NODE_ENV=production npm run build
(
 cd dist
 git init
 git config user.name "Ironhee"
 git config user.email "leechulhee95@gmail.com"
 git add -A
 git commit -m "Deployed to Github Pages"
 git push --force --quiet origin master:gh-pages > /dev/null 2>&1
 cd -
)
