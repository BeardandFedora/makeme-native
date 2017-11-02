import React, { Component } from 'react'
import { Image, BackHandler } from 'react-native'
import { ListItem, Text, View, Content } from 'native-base'
import { Actions as NavigationActions } from 'react-native-router-flux'

import styles from './Styles/DrawerContentStyles'
import { Images } from '../Themes'

class DrawerContent extends Component {
  componentDidMount () {
    BackHandler.addEventListener('hardwareBackPress', () => {
      if (this.context.drawer.props.open) {
        this.toggleDrawer()
        return true
      }
      return false
    })
  }

  toggleDrawer () {
    this.context.drawer.toggle()
  }

  render () {
    return (
      <View style={styles.container}>
        <Image source={Images.logoDark} style={styles.logo} />
        <Content>
          <ListItem
            onPress={() => {
              NavigationActions.launchScreen()
              this.context.drawer.close()
            }}
          >
            <Text>Launch screen</Text>
          </ListItem>
          <ListItem
            onPress={() => {
              NavigationActions.login()
              this.context.drawer.close()
            }}
          >
            <Text>Login screen (Facebook Only)</Text>
          </ListItem>
          <ListItem
            onPress={() => {
              NavigationActions.listViewExample()
              this.context.drawer.close()
            }}
          >
            <Text>Quick list (stub)</Text>
          </ListItem>
          <ListItem
            onPress={() => {
              NavigationActions.cardExample()
              this.context.drawer.close()
            }}
          >
            <Text>Quick card (stub)</Text>
          </ListItem>
          <ListItem
            onPress={() => {
              NavigationActions.List()
              this.context.drawer.close()
            }}
          >
            <Text>List</Text>
          </ListItem>
          <ListItem
            onPress={() => {
              NavigationActions.getStarted()
              this.context.drawer.close()
            }}
          >
            <Text>Get started</Text>
          </ListItem>
        </Content>
      </View>
    )
  }
}
DrawerContent.contextTypes = {
  drawer: React.PropTypes.object
}

export default DrawerContent
