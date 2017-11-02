## App Structure

The `App` folder is where most of the goodies are found in. Start with `Containers/App.js` (described below) and work your way down the walkthrough in order.

### Containers

Containers are (mostly) full screens, although they can be sections of screens or application containers.

* `App.js` - main Makeme application. We create a Redux store and configure it here
* `RootContainer.js` - main view of the Makeme application. Contains status bar and navigation component
* `LaunchScreen.js` - this is the first screen shown in the Makeme application. It's loaded into the Navigation component
* `LoginScreen.js` - login screen. 
* `Styles` - styling for each of the containers and screens

### Navigation

The Makeme primary and other navigation components reside here.

* `AppNavigation.js` - loads in initial screen and creates menu(s) in a StackNavigation
* `Styles` - styling for the navigation

### Components

React components go here...pretty self-explanatory. We won't go through each in detai.

### Themes

Styling themes used throughout the app.

* `ApplicationStyles.js` - app-wide styles
* `Colors.js` - defined app
* `Fonts.js` - defined fonts
* `Images.js` - loads and caches images used
* `Metrics.js` - useful measurements of things like searchBarHeight

### Config

Initialize and configure things here.

* `AppConfig.js` - simple React Native configuration 
* `DebugConfig.js` - defines how the debug environment should act
* `ReactotronConfig.js` - configures [Reactotron](https://github.com/infinitered/reactotron) 
* `ReduxPersist.js` - configures Redux Persist 

### Fixtures

Contains json files that mimic API responses for quicker development. These are used by the `Services/FixtureApi.js` object to mock API responses.

### Redux, Sagas

Configured Redux and Redux-Sagas setup. Review each file carefully to see how Redux interacts.

_TODO: explain more about Redux & Redux Sagas here_

### Services

Contains API service and other important utilities.

* `Api.js` - main API service, providing an interface to communicate with a REST back end
* `ExamplesRegistry.js` - lets us view component and plugin examples (will be removed)
* `FixtureApi.js` - mocks an API service, making it faster to develop (will be removed)
* `ImmutablePersistenceTransform.js` - part of the redux-persist implementation (will be removed)
* `RehydrationServices.js` - part of the redux-persist implementation (will be removed)

### Lib

It is recommended to use this folder for modules that can be extracted into their own NPM packages at some point.

### Images

Contains actual images (prefer png) used.

### Transforms

Helpers for transforming data between API and the application and vice versa. 

### Tests

This folder (located as a sibling to `App`) contains sample Jest snapshot and unit tests.
