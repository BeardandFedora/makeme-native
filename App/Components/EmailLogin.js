import React, { PropTypes } from 'react'
import { Item, Form, Input, Label, connectStyle } from 'native-base'
import ApplicationStyles from '../Themes/ApplicationStyles'

class EmailLogin extends React.Component {

  static propTypes = {
    handlePressLogin: PropTypes.func
  }

  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.isAttempting = false
  }

  handleChangeUsername = text => {
    this.setState({ username: text })
  }

  handleChangePassword = text => {
    this.setState({ password: text })
  }

  render () {
    const { username, password } = this.state
    const { fetching } = this.props
    const editable = !fetching
    return (
      <Form>
        <Item floatingLabel>
          <Label>Username</Label>
          <Input
            ref='username'
            value={username}
            editable={editable}
            keyboardType='default'
            returnKeyType='next'
            autoCapitalize='none'
            autoCorrect={false}
            onChangeText={this.handleChangeUsername}
            underlineColorAndroid='transparent'
            onSubmitEditing={() => this.password._root.focus()}
          />
        </Item>
        <Item floatingLabel>
          <Label>Password</Label>
          <Input
            getRef={ref => (this.password = ref)}
            value={password}
            editable={editable}
            keyboardType='default'
            returnKeyType='go'
            autoCapitalize='none'
            autoCorrect={false}
            secureTextEntry
            onChangeText={this.handleChangePassword}
            underlineColorAndroid='transparent'
            onSubmitEditing={this.props.handlePressLogin}
          />
        </Item>
      </Form>
    )
  }
}

export default connectStyle('Makeme.EmailLogin', ApplicationStyles)(EmailLogin)
