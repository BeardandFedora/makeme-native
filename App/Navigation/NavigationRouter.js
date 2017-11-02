import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import NavigationDrawer from './NavigationDrawer'
// import Styles from './Styles/NavigationContainerStyles'

// screens identified by the router
import LaunchScreen from '../Containers/LaunchScreen'
import ListviewExample from '../Containers/ListviewExample'
import CardExample from '../Containers/CardExample'
import Login from '../Containers/LoginScreen'
import List from '../Containers/List'
import Details from '../Containers/Details'
import Player from '../Containers/Player'
import GetStarted from '../Containers/GetStarted'

/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

class NavigationRouter extends Component {
  render () {
    return (
      <Router>
        <Scene key='drawer' component={NavigationDrawer} open={false}>
          <Scene key='login' component={Login} title='Login' />
          <Scene initial key='launchScreen' component={LaunchScreen} title='LaunchScreen' />
          <Scene key='listViewExample' component={ListviewExample} />
          <Scene key='cardExample' component={CardExample} />
          <Scene key='List' component={List} />
          <Scene key='Details' component={Details} />
          <Scene key='Player' component={Player} />
          <Scene key='getStarted' component={GetStarted} />
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
