# hexaworld-mobile

Super work-in-progress build of hexaworld as a mobile app using phonegap.

Right now as a demo the www folder is just the hexaworld-64 branch of the main hexaworld repo with slight modifications.

## Running on osx

Link with local hexaworld-app & hexaworld

```
npm link hexaworld hexaworld-app
```

Install dependencies:

```
npm i -g phonegap ios-sim
```

Emulate in ios:

```
phonegap emulate ios
```

