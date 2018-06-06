#!/bin/sh

count=`ls -1 **/*.test.js -name 'Prams' -type d 2> /dev/null | wc -l`

if [ "$count" -gt "0" ]; then
  npm run test
else
  echo -e "Please add test files for better quality during build stage"
fi

