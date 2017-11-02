import React, { PropTypes } from 'react'
import { Keyboard, LayoutAnimation } from 'react-native'
import { connect } from 'react-redux'
import ApplicationStyles from '../Themes/ApplicationStyles'
import { Metrics } from '../Themes'
import LoginActions from '../Redux/LoginRedux'
import EmailLogin from '../Components/EmailLogin'
import { Actions as NavigationActions } from 'react-native-router-flux'
import { Button, Text, View, connectStyle, Header } from 'native-base'
import CustomNavBar from '../Components/CustomNavBar'
import firebase from '../Services/Firebase'

// *** Leaving commented out until I make this work! ***
// import { firebaseConnect } from 'react-redux-firebase'
import { LoginManager, AccessToken } from 'react-native-fbsdk'
// const initialState = { firebase: { authError: null, auth: undefined }}

class LoginScreen extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func,
    fetching: PropTypes.bool,
    attemptLogin: PropTypes.func
    // *** Leaving commented out until I make this work! ***
    /*
    firebase: PropTypes.shape({
      login: PropTypes.func.isRequired
    }),
    authError: PropTypes.shape({
      message: PropTypes.string
    })
    */
  }

  isAttempting = false
  keyboardDidShowListener = {}
  keyboardDidHideListener = {}

  constructor (props) {
    super(props)
    this.state = {
      visibleHeight: Metrics.screenHeight
    }
    this.isAttempting = false
  }

  componentWillReceiveProps (newProps) {
    this.forceUpdate()
    // Did the login attempt complete?
    if (this.isAttempting && !newProps.fetching) {
      NavigationActions.pop()
    }
  }

  componentWillMount () {
    // Using keyboardWillShow/Hide looks 1,000 times better, but doesn't work on Android
    // TODO: Revisit this if Android begins to support - https://github.com/facebook/react-native/issues/3468
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow)
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide)
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove()
    this.keyboardDidHideListener.remove()
  }

  keyboardDidShow = e => {
    // Animation types easeInEaseOut/linear/spring
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    let newSize = Metrics.screenHeight - e.endCoordinates.height
    this.setState({
      visibleHeight: newSize
    })
  }

  keyboardDidHide = e => {
    // Animation types easeInEaseOut/linear/spring
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    this.setState({
      visibleHeight: Metrics.screenHeight
    })
  }

  handlePressLogin = () => {
    const { username, password } = this.state
    this.isAttempting = true
    // attempt a login - a saga is listening to pick it up from here.
    this.props.attemptLogin(username, password)
    NavigationActions.launchScreen()
  }

  handleChangeUsername = text => {
    this.setState({ username: text })
  }

  handleChangePassword = text => {
    this.setState({ password: text })
  }

  handlePressFacebookLogin = () => {
    LoginManager
    .logInWithReadPermissions(['public_profile', 'email'])
    .then((result) => {
      if (result.isCancelled) {
        return Promise.resolve('cancelled')
      }
      console.log(`Login success with permissions: ${result.grantedPermissions.toString()}`)
      // get the access token
      return AccessToken.getCurrentAccessToken()
    })
    .then(data => {
      // create a new firebase credential with the token
      const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken)

      // login with credential
      return firebase.auth().signInWithCredential(credential)
    })
    .then((currentUser) => {
      if (currentUser === 'cancelled') {
        console.log('Login cancelled')
      } else {
        // now signed in
        console.warn(JSON.stringify(currentUser.toJSON()))
        NavigationActions.pop()
      }
    })
    .catch((error) => {
      console.log(`Login fail with error: ${error}`)
    })
  }

  render () {
    const { username, password } = this.state
    const { fetching } = this.props
    const editable = !fetching
    /* *** Leaving commented out until I make this work! ***
    // const textInputStyle = editable ? Styles.textInput : Styles.textInputReadonly
    const Login = React.createClass({
      render: function () {
        return (
          <View>
            <LoginButton
              publishPermissions={['publish_actions']}
              onLoginFinished={
                (error, result) => {
                  if (error) {
                    Alert.alert('Login failed with error: ' + result.error)
                  } else if (result.isCancelled) {
                    Alert.alert('Login was cancelled')
                  } else {
                    Alert.alert('Login was successful with permissions: ' + result.grantedPermissions)
                  }
                }
              }
              onLogoutFinished={() => Alert.alert('User logged out')} />
          </View>
        )
      }
    })
    */

    // const textInputStyle = editable ? Styles.textInput : Styles.textInputReadonly
    const styles = this.props.style
    return (
      <View
        contentContainerStyle={{ justifyContent: 'center' }}
        style={styles.loginContainer}
        keyboardShouldPersistTaps='always'
      >
        <Header>
          <CustomNavBar title='Login' />
        </Header>
        <View style={styles.loginForm}>
          <EmailLogin yellow handlePressLogin={this.handlePressLogin} />
          <View style={styles.loginColumn}>
            <Button full rounded primary shadow onPress={this.handlePressLogin}>
              <Text>Log in</Text>
            </Button>
            <Text style={styles.loginOrLabel}>
              OR
            </Text>
            <Button full rounded facebook shadow style={styles.loginFacebookButton} onPress={this.handlePressFacebookLogin}>
              <Text>Log in with facebook</Text>
            </Button>
            <Text style={styles.loginNoAccountLabel}>Don't have an account?</Text>
            <Button transparent info style={styles.loginSignUpButton}>
              <Text style={styles.loginSignUpLabel}>Sign up</Text>
            </Button>
          </View>
        </View>
      </View>
    )
  }
}

LoginScreen.contextTypes = {
  drawer: React.PropTypes.object
}

const mapStateToProps = state => {
  return {
    fetching: state.login.fetching
  }
}

const mapDispatchToProps = dispatch => {
  return {
    attemptLogin: (username, password) => dispatch(LoginActions.loginRequest(username, password))
  }
}
/*
  *** Wrap connect() in firebaseConnect() ***
  *** Leaving commented out until I make this work! ***

// sync /user from firebase into redux
const fbWrapped = firebaseConnect([
  'user'
])(LoginScreen)

// pass todos list from redux as this.props.todosList
export default connect(mapStateToProps, mapDispatchToProps, ({ firebase }) => ({
  // profile: pathToJS(firebase, 'profile'), // pass profile data as this.props.profile
  // auth: pathToJS(firebase, 'auth'), // pass auth data as this.props.auth
  // authError: pathToJS(firebase, 'authError')
}))(fbWrapped)

*** Leaving commented out until I make this work! ***
*/

export default connectStyle('Makeme.LoginScreen', ApplicationStyles)(connect(mapStateToProps, mapDispatchToProps)(LoginScreen)) // before wrapping in Firebase
