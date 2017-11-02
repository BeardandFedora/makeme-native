import React from 'react'
import { connect } from 'react-redux'
import { List, Text, Container, Header, connectStyle } from 'native-base'
import ApplicationStyles from '../Themes/ApplicationStyles'
import ListItem from '../Components/ListItem'

import { Images } from '../Themes'
import CustomNavBar from '../Components/CustomNavBar'
import firebase from '../Services/Firebase'

class List extends React.Component {
  constructor () {
    super()

    this.state = {
      refreshing: true
    }

    this. = []
  }

  componentDidMount () {
    this.ref = firebase.database().ref('content/')
    this.ref.once('value', this.dataCallback)
    console.log('mounted')
  }

  dataCallback = (snapshot) => {
    if (snapshot.exists()) {
      snapshot.forEach((childSnapshot) => {
        console.log('got value ', childSnapshot.val())
        this..push(childSnapshot.val())
        /*        this. = {
        ...this. || {},
        [childSnapshot.key]: childSnapshot.value,
      };
      */
        console.log(' - ', this.)
      })

      this.setState({
        refreshing: false
      })
    }
  };

  render () {
    const styles = this.props.style
    return (
      <Container style={styles.Container}>
        <Header>
          <CustomNavBar title='My ' />
        </Header>
        <Text style={styles.PrimaryLabel} uppercase >Primary </Text>
        <List
          dataArray={this.}
          renderRow={this.renderRow}
        />
      </Container>
    )
  }

  renderRow () {
    let thumbnailSource
    // local image needs require(.../hi.jpg)
    if (.image && .image.file && .image.file.url) {
      thumbnailSource = { uri: 'https:' + .image.file.url, cache: 'force-cache' }
    } else {
      thumbnailSource = Images.launch
    }
    return (
      <ListItem ={} thumbnailSource={thumbnailSource} />
    )
  }
}

List.contextTypes = { drawer: React.PropTypes.object }
const mapStateToProps = state => {
  return {
    // ...redux state to props here
  }
}

export default connectStyle('Makeme.List', ApplicationStyles)(connect(mapStateToProps)(List))
