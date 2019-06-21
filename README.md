# Using TypeORM in an Ionic project
You can use TypeORM in connection with the `cordova-sqlite-storage` plugin in your Ionic app.
This project demonstrates how that would work.

## Installation

To run this example in production or development mode you have to make sure, `ionic` and `cordova` are installed globally on your machine. After that you can install all necessary dependencies for running this example.

0. Check if `npm` is installed. Otherwise please [install `node.js` and `npm`](https://nodejs.org/en/download/package-manager/).
```bash
npm -v
```

1. Install ionic and cordova command line interface globally.
```bash
npm install -g cordova ionic
```

2. Install all dependencies listed in [`package.json`](/package.json).
```bash
npm install
```

### Running the example in your browser
```bash
ionic serve
```

### Running the example on your device
3. Add an iOS or Android to the project.
```bash
ionic cordova platform add ios 
# or 
ionic cordova platform add android
```

4. Run the app on your device.
```bash
ionic cordova run ios
# or
ionic cordova run android
```

*For further information please read [ionic's deployment guide](https://ionicframework.com/docs/intro/deploying/).*

![screenshot](./screenshot.png)

### Using TypeORM in your own app
1. Install the plugin
```bash
ionic cordova plugin add cordova-sqlite-storage --save
```

2. Install TypeORM
```bash
npm install typeorm --save
```

3. Install node.js-Types
```bash
npm install @types/node --save-dev
```

4. Install @angular-builders/custom-webpack, is needed for apply custom webpack config.
```bash
npm i -D @angular-builders/custom-webpack@^7.2.0
```

5. Install @angular-builders/dev-server, is needed for apply custom webpack config during `ionic serve`.
```bash
npm install --save @angular-builders/dev-server@^7.3.1
```

6. Install sql.js, to use TypeOrm on browser when develop, [used in](src/app/services/db.service.ts#L39-L53).
```bash
npm i sql.js@^0.5.0 --save
```

7. Add `"typeRoots": ["node_modules/@types"]` to your `tsconfig.json` under `compilerOptions`

8. Create a custom webpack config file like the one [included in this project](config/webpack.config.js) to use the correct TypeORM version and add the config file to your [`angular.json`](angular.json#L17-19) (Required with TypeORM >= 0.1.7)

9. In [`angular.json`](angular.json#L15)(already with the change), modify `"builder": "@angular-devkit/build-angular:browser",` for `"builder": "@angular-builders/custom-webpack:browser",`

10. In [`angular.json`](angular.json#L78)(already with the change), modify `"builder": "@angular-devkit/build-angular:dev-server",` for `"builder": "@angular-builders/dev-server:generic",`

[Optional]
11. Create a bash script inside a `scripts` folder for remove warning of module not found for react native, the script is [included in this project](scripts/patch.sh), and add `"postinstall": "bash ./scripts/patch.sh"` line in `package.json` under `scripts`, [here](package.json#L13).

> References: https://www.techiediaries.com/ionic-angular-typeorm-custom-webpack-configuration/

### Limitations to TypeORM when using production builds

Since Ionic make a lot of optimizations while building for production, the following limitations will occur:

1. Entities have to be marked with the table name (eg `@Entity('table_name')`)

2. `getRepository()` has to be called with the name of the entity instead of the class (*eg `getRepository('post') as Repository<Post>`*)

3. Date fields are **not supported**:
```ts
@Column()
birthdate: Date;
```
