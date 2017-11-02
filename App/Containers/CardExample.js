import React from 'react'
import { connect } from 'react-redux'
import { Image } from 'react-native'
import { Card, CardItem, Text, Container, Header, Content, Button, Icon } from 'native-base'
// import Icon from 'react-native-vector-icons/Ionicons'
import CustomNavBar from '../Components/CustomNavBar'

class CardExample extends React.Component {
  render () {
    return (
      <Container>
        <Header>
          <CustomNavBar title='Card view stub' />
        </Header>
        <Content padder>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Image
                style={{ resizeMode: 'cover', height: 200, flex: 1 }}
                source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }}
              />
            </CardItem>
            <CardItem>
              <Button transparent>
                <Icon name='logo-github' />
                <Text>41,926 stars</Text>
              </Button>
            </CardItem>
          </Card>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Image
                style={{ resizeMode: 'cover', height: 200, flex: 1 }}
                source={{ uri: 'https://assets-cdn.github.com/images/modules/logos_page/Octocat.png' }}
              />
            </CardItem>
            <CardItem>
              <Button transparent>
                <Icon name='logo-github' />
                <Text>15,021 stars</Text>
              </Button>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}
CardExample.contextTypes = { drawer: React.PropTypes.object }
const mapStateToProps = state => {
  return {
    // ...redux state to props here
  }
}

export default connect(mapStateToProps)(CardExample)
