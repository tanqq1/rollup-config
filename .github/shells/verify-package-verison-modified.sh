#!/usr/bin/env bash
set -e

RED='\033[0;31m'     
BROWN_ORANGE='\033[0;33m'     
LIGHT_CYAN='\033[1;36m'

COMMIT_SHA=$1

git diff-tree --no-commit-id --name-only -r $COMMIT_SHA | grep -E "package.json" | while read -r line ; do
  git diff --name-only HEAD~2 | grep -E "package.json" | while read -r line ; do
    echo -e "$LIGHT_CYAN Processing $line"

    if ! git diff HEAD~2 $line | grep -q -E "\+\s+\"version\""; then
      echo -e "${BROWN_ORANGE}version field no change"
      continue
    fi
  done
done
