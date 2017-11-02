import React from 'react'
import { connect } from 'react-redux'
import { Content, Container, Header, Thumbnail, Button, connectStyle } from 'native-base'

import ApplicationStyles from '../Themes/ApplicationStyles'
import DetailTopTinfo from '../Components/DetailTopInfo'
import DetailsListItems from '../Components/DetailsListItems'
import { Images } from '../Themes'
import CustomNavBar from '../Components/CustomNavBar'
import firebase from '../Services/Firebase'
import { Actions as NavigationActions } from 'react-native-router-flux'

class Details extends React.Component {
  constructor (props) {
    super(props)

    if (typeof this.props. !== 'undefined') {
      console.log(' parameter', this.props.)

      this.state = {
        refreshing: false,
        : this.props.
      }
    } else {
      this.state = {
        refreshing: false,
        : {}
      }
    }
  }

  componentDidMount () {
    const id = this.props.id
    console.log('Details mounted ', id)

    if (typeof this.props. !== 'undefined') {
      console.log(' parameter', this.props.)
      this. = this.props.

      this.setState({
        refreshing: false,
        : this.props.
      })
    } else {
      this.setState({
        refreshing: true
      })

      this.ref = firebase.database().ref('content//' + id)
      this.ref.once('value', this.dataCallback)
    }

    console.log(' mount', this.)
  }

  dataCallback = (snapshot) => {
    if (snapshot.exists()) {
      snapshot.forEach((childSnapshot) => {
        console.log('got value ', childSnapshot.val())
        this. = childSnapshot.val()

        console.log(' firebase - ', this.)
      })

      this.setState({
        refreshing: false,
        : this.
      })
    }
  };

  render () {
    const  = this.state.
    const styles = this.props.style

    let thumbnailSource
    // local image needs require(.../hi.jpg)
    if (.image && .image.file && .image.file.url) {
      thumbnailSource = { uri: 'https:' + .image.file.url, cache: 'force-cache' }
    } else {
      thumbnailSource = Images.launch
    }

    return (
      <Container>
        <Header>
          <CustomNavBar title=' Details' subtitle='Primary' />
        </Header>
        <Content style={styles.DetailsContainer}>

          <DetailTopTinfo thumbnailSource={thumbnailSource} ={} />

          <DetailsListItems ={} />

          <Button style={styles.DetailsPlayButton} transparent onPress={() => NavigationActions.Player({ id: .id, :  })}>
            <Thumbnail Thumbnail source={Images.playButtonMorning} />
          </Button>
        </Content>
      </Container>
    )
  }
}

Details.contextTypes = { drawer: React.PropTypes.object }
const mapStateToProps = state => {
  return {
    // ...redux state to props here
  }
}

export default connectStyle('Makeme.Details', ApplicationStyles)(connect(mapStateToProps)(Details))
