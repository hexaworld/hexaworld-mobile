# hexaworld-mobile

Super work-in-progress build of hexaworld as a mobile app using phonegap.

Right now as a demo the www folder is just the hexaworld-64 branch of the main hexaworld repo with slight modifications.

## Running on osx

### Clone this repository and cd into it.

### Install npm dependencies from package.json

```
npm i
```

### Link with local hexaworld-app & hexaworld

```
npm link hexaworld hexaworld-app
```

### Install dev dependencies:

```
npm i -g cordova ios-sim ios-deploy
```

### Run on device:

```
cordova run --device
```

### Emulate in ios:
(this has awful performance)

```
cordova emulate ios
```

