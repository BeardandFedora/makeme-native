import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'
// import { firebaseStateReducer } from 'react-redux-firebase'

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    github: require('./GithubRedux').reducer, // example
    login: require('./LoginRedux').reducer, // example
    search: require('./SearchRedux').reducer // example
    // firebase: firebaseStateReducer // react-redux-firebase
  })

  return configureStore(rootReducer, rootSaga)
}
