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
if [ "$NETLIFY" = "true" ]; then
  # a hack to make it work on Netlify
  mv $TEMP_DIR/tx /opt/buildhome/python3.8/bin/tx
  chmod +x /opt/buildhome/python3.8/bin/tx
else
  mv $TEMP_DIR/tx /usr/local/bin/tx
  chmod +x /usr/local/bin/tx
fi
rm -rf $TEMP_DIR
set +e
