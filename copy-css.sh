#!/bin/bash

mkdir -p dist/Public && find src/Public -type f -exec sh -c 'mkdir -p dist/Public/$(dirname "{}" | sed "s,src/Public/,," ) && cp "{}" dist/Public/$(dirname "{}" | sed "s,src/Public/,," )/' \;
