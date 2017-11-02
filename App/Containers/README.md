### Containers Folder
A container is what they call a "Smart Component" in Redux.  It is a component
which knows about Redux.  They are usually used as "Screens".

Also located in here are 2 special containers: `App.js` and `RootContainer.js`.

`App.js` is first component loaded after `index.ios.js` or `index.android.js`.  The purpose of this file is to setup Redux or any other non-visual "global" modules.  Having Redux setup here helps with the hot-reloading process in React Native during development as it won't try to reload our sagas and reducers should our colors change (for example).

`RootContainer.js` is the first visual component in the app.  It is the ancestor of all other screens and components.

We'll probably find that we have great mileage without touching these 2 files.  When you're ready to add  non-visuals like Firebase or something visual like an overlay, we have spots to place these additions.
