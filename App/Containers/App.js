import '../Config'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import RootContainer from './RootContainer'
import createStore from '../Redux'
import getTheme from '../Themes/makeme/components'
import platform from '../Themes/makeme/variables/platform'
import { StyleProvider } from 'native-base'

// create the Makeme store
const store = createStore()

/**
 * Provides an entry point into the Makeme application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading. BOOM!
 *
 * Also this is the main injection point for the Native Base custom themes, using StyleProvider.
 * The theming holds for descendants. Ref: https://docs.nativebase.io/Customize.html
 */
class App extends Component {
  render () {
    return (
      <StyleProvider style={getTheme(platform)}>
        <Provider store={store}>
          <RootContainer />
        </Provider>
      </StyleProvider>
    )
  }
}

export default App
