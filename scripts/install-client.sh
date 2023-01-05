#!/usr/bin/env bash
set -e
OS=$(uname -s)
ARCH=$(uname -m)
if [[ "$ARCH" == "x86_64" ]]; then
  ARCH="amd64"
fi
DOWNLOAD_URL="https://github.com/transifex/cli/releases/latest/download/tx-$OS-$ARCH.tar.gz"
echo "Downloading $DOWNLOAD_URL"
TEMP_DIR=$(mktemp -d 2>/dev/null || mktemp -d -t 'mytmpdir')
curl -L "$DOWNLOAD_URL" -o $TEMP_DIR/tx.tar.gz
tar -C $TEMP_DIR -xvf $TEMP_DIR/tx.tar.gz
mv $TEMP_DIR/tx /usr/bin/tx
chmod +x /usr/bin/tx
rm -rf $TEMP_DIR
set +e
