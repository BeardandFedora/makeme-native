export const fbConfig = {
  debug: __DEV__ ? '*' : false,
  errorOnMissingPlayServices: false,
  persistence: true,
  apiKey: 'your-key-here',  // @NOTE - This needs ot be changed to ENV variable
  authDomain: 'makeme-dev.firebaseapp.com', // NOTE - may remove after testing
  databaseURL: 'https://makeme-dev.firebaseio.com', // NOTE - may remove after testing
  storageBucket: 'makeme-dev.appspot.com', // NOTE - may remove after testing
  enableRedirectHandling: false
}

export const reduxConfig = {
  enableLogging: false, // enable/disable Firebase Database Logging
  userProfile: 'users', // root that user profiles are written to
  updateProfileOnLogin: false, // enable/disable updating of profile on login
  profileDecorator: (userData) => ({ email: userData.email }), // customize format of user profile
  profileFactory: (userData) => {
    const { user } = userData
    return {
      email: user.email
    }
  }, // how profiles are stored in the database
  profileParamsToPopulate: [
    'contacts:users'
  ], // populate parameters within profile/user object
  enableRedirectHandling: false // disabled due to issue here: https://github.com/prescottprue/react-redux-firebase/issues/131#issuecomment-313593707
}

export default { fbConfig, reduxConfig }
