#!/usr/bin/env bash

pip3 install transifex-client
tx pull --parallel -asf
yarn build
