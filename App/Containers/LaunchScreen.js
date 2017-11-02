import React from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Container, Header, Content, Button, Text as NBText } from 'native-base'
import { Images } from '../Themes'
import CustomNavBar from '../Components/CustomNavBar'

import firebase from '../Services/Firebase'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends React.Component {
  constructor () {
    super()

    const currentUser = firebase.auth().currentUser
    if (currentUser != null) {
      this.userInfo = 'Logged in as: \n' + currentUser.displayName +
            ' \nuid:' + currentUser.uid + '\nemail: ' + currentUser.email
    } else {
      this.userInfo = 'Not logged in'
    }
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Container>
          <Header>
            <CustomNavBar title='Launch screen' />
          </Header>
          <Content padder>
            <ScrollView style={styles.container}>
              <View style={styles.centered}>
                <Image source={Images.ready} style={styles.small} />
              </View>
              <View style={styles.section} >
                <Text style={styles.sectionText}>
                  {'This is a launch screen used in development.'}
                </Text>
                <Text style={styles.sectionText}>
                  {this.userInfo}
                </Text>
              </View>
              <Button style={{alignSelf: 'center'}} onPress={() => this.context.drawer.open()}>
                <NBText>Quick nav to screens</NBText>
              </Button>
            </ScrollView>
          </Content>
        </Container>
      </View>
    )
  }
}

LaunchScreen.contextTypes = {
  drawer: React.PropTypes.object
}
