#!/usr/bin/env bash
set -e
pip install transifex-client
tx pull --parallel -asf
yarn generate
set +e
