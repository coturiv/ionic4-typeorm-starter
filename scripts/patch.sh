#!/bin/bash
# file: patch.sh

replace() {
    # Explicitly specify file ending on Mac OSX.
    # @see https://myshittycode.com/2014/07/24/os-x-sed-extra-characters-at-the-end-of-l-command-error/
    if [[ "$OSTYPE" == "darwin"* ]]; then
      sed -i "" "s/$1/$2/g" "$3"
    else
      sed -i "s/$1/$2/g" "$3"
    fi
}

# ==========================
# Remove typeorm warnings: 
# ==========================
#
# WARNING in ./node_modules/typeorm/browser/driver/react-native/ReactNativeDriver.js
# Module not found: Error: Can't resolve 'react-native-sqlite-storage' in '.\node
# _modules\typeorm\browser\driver\react-native'

replace 'this.sqlite = require("react-native-sqlite-storage");' '' 'node_modules/typeorm/browser/driver/react-native/ReactNativeDriver.js'
