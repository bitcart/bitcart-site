#!/usr/bin/env bash

pip install transifex-client
tx pull --parallel -asf
yarn build
