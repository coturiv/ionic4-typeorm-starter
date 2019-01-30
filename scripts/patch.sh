#!/bin/bash
# file: patch.sh

replace() {    
    sed -i "s/$1/$2/g" "$3"
}

# ==========================
# Remove typeorm warnings: 
# ==========================
#
# WARNING in ./node_modules/typeorm/browser/driver/react-native/ReactNativeDriver.js
# Module not found: Error: Can't resolve 'react-native-sqlite-storage' in '.\node
# _modules\typeorm\browser\driver\react-native'

replace 'this.sqlite = require("react-native-sqlite-storage");' '' 'node_modules/typeorm/browser/driver/react-native/ReactNativeDriver.js'