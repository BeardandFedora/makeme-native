import React from 'react'

import { connect } from 'react-redux'
import { Content, Text, Container, Header, Button } from 'native-base'
import { View, StyleSheet, ImageBackground } from 'react-native'

import CustomNavBar from '../Components/CustomNavBar'
import VideoPlayer from 'react-native-video-player'

class Player extends React.Component {
  constructor (props) {
    super(props)

    if (typeof this.props. !== 'undefined') {
      this.state. = this.props.
    }
  }

  state = {
    volume: 1,
    muted: false,
    duration: 0.0,
    currentTime: 0.0,
    : {},
    currentIndex: 0
  }

  render () {
    const  = this.state.

    // Defaults
    let Title = .name
    let title = 'First Element'
    let totalElements = .elements.length
    let videoSource = { uri: 'https://videos.contentful.com/d38fafuoyllw/13KIcpNF7oGmyqcyM8Us46/7a71d3f553f9d76f7afd6b5c1e202010/Projection_holographique.mp4' }
    let imageSource = {}

    let currentElement = this.state..elements[this.state.currentIndex]
    if (currentElement !== 'undefined') {
      // TODO: Make a Element object, getCurrentAsset/getAssetForDay
      // TODO: If this is a pack, determine which asset to use from the pack, based on what day it is
      let currentAsset = currentElement.assets[0]
      title = currentAsset.title
      videoSource = { uri: 'https:' + currentAsset.file.url }
      imageSource = { uri: 'https:' + currentElement.backgroundImage.file.url, cache: 'force-cache' }
    }

    // TODO: Calculate % completion of , based on total duration, etc

    return (
      <Container>
        <ImageBackground source={imageSource}
          style={styles.backgroundImage}
          cache>
          <Header>
            <CustomNavBar title={Title} />
          </Header>
          <Content>
            <Text note>35% of this  is done</Text>
            <View>
              <VideoPlayer
                video={videoSource}
                loop
                style={{
                  top: 50,
                  height: 300
                }}
                playInBackground
                playWhenInactive
                autoplay
                hideControlsOnStart={false}
                disableControlsAutoHide
                customStyles={{
                  controls: { marginTop: 5 }
                }}
              />

            </View>
            <View>
              <Text note>Now Playing</Text>
              <Text>{title}</Text>
              <Text note>{this.state.currentIndex + 1} of {totalElements} elements</Text>
            </View>
            <View>
              <Button onPress={() => { this.prevButtonPressed() }}><Text>Prev</Text></Button>
              <Button onPress={() => { this.nextButtonPressed() }}><Text>Next</Text></Button>
            </View>
          </Content>
        </ImageBackground>
      </Container>
    )
  }

  nextButtonPressed () {
    if (this.state.currentIndex === this.state..elements.length - 1) {
      this.setState({ currentIndex: 0 })
    } else {
      this.setState({ currentIndex: this.state.currentIndex + 1 })
    }
  }

  prevButtonPressed () {
    if (this.state.currentIndex === 0) {
      this.setState({ currentIndex: this.state..elements.length - 1 })
    } else {
      this.setState({ currentIndex: this.state.currentIndex - 1 })
    }
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null
  }
})

Player.contextTypes = { drawer: React.PropTypes.object }
const mapStateToProps = state => {
  return {
    // ...redux state to props here
  }
}

export default connect(mapStateToProps)(Player)
