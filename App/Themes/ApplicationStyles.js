import Fonts from './Fonts'
import Metrics from './Metrics'
import Colors from './Colors'

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
  screen: {
    mainContainer: {
      flex: 1,
      backgroundColor: Colors.background
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    },
    container: {
      flex: 1,
      paddingTop: Metrics.baseMargin,
      backgroundColor: Colors.transparent
    },
    section: {
      margin: Metrics.section,
      padding: Metrics.baseMargin
    },
    sectionText: {
      ...Fonts.style.normal,
      paddingVertical: Metrics.doubleBaseMargin,
      color: Colors.charcoal,
      marginVertical: Metrics.smallMargin,
      textAlign: 'center'
    },
    subtitle: {
      color: Colors.snow,
      padding: Metrics.smallMargin,
      marginBottom: Metrics.smallMargin,
      marginHorizontal: Metrics.smallMargin
    },
    titleText: {
      ...Fonts.style.h2,
      fontSize: 14,
      color: Colors.text
    }
  },
  darkLabelContainer: {
    padding: Metrics.smallMargin,
    paddingBottom: Metrics.doubleBaseMargin,
    borderBottomColor: Colors.border,
    borderBottomWidth: 1,
    marginBottom: Metrics.baseMargin
  },
  darkLabel: {
    fontFamily: Fonts.type.bold,
    color: Colors.snow
  },
  groupContainer: {
    margin: Metrics.smallMargin,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  sectionTitle: {
    ...Fonts.style.h4,
    color: Colors.coal,
    backgroundColor: Colors.ricePaper,
    padding: Metrics.smallMargin,
    marginTop: Metrics.smallMargin,
    marginHorizontal: Metrics.baseMargin,
    borderWidth: 1,
    borderColor: Colors.ember,
    alignItems: 'center',
    textAlign: 'center'
  },

  /**
   * CustomNavBar Component
   */

  customNavBarContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: Metrics.navBarHeight,
    paddingHorizontal: Metrics.baseMargin,
    backgroundColor: Colors.background,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  customNavBarLeftButton: {
    paddingTop: Metrics.baseMargin,
    alignSelf: 'center'
  },
  customNavBarLogo: {
    height: Metrics.navBarHeight - Metrics.doubleBaseMargin,
    width: Metrics.navBarHeight - Metrics.doubleBaseMargin,
    resizeMode: 'contain'
  },
  customNavBarRightButton: {
    paddingTop: Metrics.baseMargin
  },
  customNavBarTitle: {
    alignSelf: 'center'
  },
  customNavBarSubtitle: {
    fontSize: 12,
    alignSelf: 'center'
  },

  /**
   * EmailLogin component styling
   */
  EmailLogin: {
    flex: 1
  },

  /**
   * LoginScreen component styling
   */

  loginContainer: {
    backgroundColor: Colors.background,
    height: Metrics.screenHeight
  },
  loginForm: {
    margin: Metrics.baseMargin,
    paddingBottom: 10,
    borderRadius: 4
  },
  loginColumn: {
    padding: Metrics.doubleBaseMargin,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 10
  },
  loginOrLabel: {
    justifyContent: 'center',
    fontSize: 12,
    marginTop: 40
  },
  loginFacebookButton: {
    marginTop: 40,
    marginBottom: 30
  },
  loginNoAccountLabel: {
    fontSize: 14
  },
  loginSignUpButton: {
    justifyContent: 'center',
    alignSelf: 'stretch',
    flex: 1,
    paddingTop: 10
  },
  loginSignUpLabel: {
    color: '#61AFCE',
    fontSize: 14
  },

  /**
   * GetStarted container styling
   */
  getStartedQuestionHeader: {
    marginTop: 15,
    fontSize: 12,
    alignSelf: 'center'
  },

  getStartedSkipStep: {
    margin: 10,
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center'
  },

  getStartedSkipStepLabel: {
    fontSize: 14,
    marginBottom: 10
  },
  /**
   * QuestionStepScale component styling
   */

  questionStepContainer: {
    marginTop: 15,
    flexDirection: 'row',
    alignSelf: 'center',
    height: 50,
    width: Metrics.screenWidth - (3 * Metrics.doubleBaseMargin)
  },
  questionStepsScale: {
    flex: 1,
    alignSelf: 'center'
  },
  questionStepsOrange: {
  },
  questionStepsBlue: {
  },
  questionStepsPurple: {
  },
  questionStepsButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0
  },

  /**
   * QuestionCard component styles
   */

  questionCardItemContainer: {
    flex: 1,
    marginTop: 15,
    flexDirection: 'column',
    alignSelf: 'center',
    height: 300
  },

  questionCardContainer: {
    flex: 1,
    elevation: 3,
    marginTop: 40,
    flexDirection: 'column',
    alignSelf: 'center'
  },

  questionCardTitle: {
    marginTop: 30,
    marginBottom: 10,
    justifyContent: 'center'
  },

  /**
   * AnswerOption component style
   */
  answerOptionContainer: {
    height: 60,
    width: Metrics.screenWidth - 2 * Metrics.doubleBaseMargin,
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    shadowColor: 'grey',
    shadowOffset: null,
    shadowRadius: 5,
    shadowOpacity: 0.30,
    borderRadius: 5
  },

  answerOptionText: {
    flex: 12,
    margin: 10,
    alignSelf: 'center'
  },

  answerOptionRadio: {
    flex: 1,
    alignSelf: 'center',
    padding: 10
  },

  /**
   * List component style
   */
  PrimaryLabel: {
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 10,
    fontSize: 12
  },

  Container: {
    backgroundColor: Colors.background
  },

  /**
   * ListItem component styling
   */
  Primary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 100,
    shadowColor: 'grey',
    shadowOffset: {width: 0, height: 5},
    shadowRadius: 3,
    shadowOpacity: 0.30
  },

  ThumbnailSource: {
  },

  TextContainerDescription: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    flex: 6
  },

  PlayButtonImage: {
    shadowColor: 'grey',
    shadowOffset: null,
    shadowRadius: 3,
    shadowOpacity: 0.30
  },

  PlayButton: {
    flex: 2,
    alignSelf: 'center'
  },

  /**
   * Details component styling
   */

  DetailsContainer: {
    backgroundColor: Colors.background
  },

  DetailsLabel: {
    fontSize: 12,
    alignSelf: 'center'
  },

  DetailsPlayButton: {
    position: 'absolute',
    shadowColor: 'grey',
    left: Metrics.screenWidth / 2 - 70,
    top: Metrics.screenHeight / 2 - 60,
    right: 0,
    bottom: 0
  },
  /**
   * DetailTopInfo component styling
   */
  DetailTopInfoContainer: {
    alignItems: 'center',
    height: Metrics.screenHeight / 2 - Metrics.navBarHeight + 25
  },

  DetailsInfoThumbnail: {
    marginTop: 10,
    marginBottom: 10
  },

  DetailsInfoName: {
    marginBottom: 15,
    marginTop: 30
  },

  DetailsInfoDescription: {
  },

  DetailTopInfoShadow: {
    backgroundColor: Colors.background,
    shadowColor: 'black',
    alignSelf: 'flex-end',
    height: 1,
    width: Metrics.screenWidth,
    shadowOffset: null,
    shadowRadius: 3,
    shadowOpacity: 0.50
  },

  /**
   * DetailsLintItem component styling
   */

  DetailsListItemsTitleContainer: {
    marginTop: 30,
    marginLeft: 15,
    marginBottom: 10,
    marginRight: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  DetailsListItemsElements: {
    fontSize: 11
  },

  DetailsListItemsLength: {
    fontSize: 11
  },

  DetailsListItemsItem: {
    shadowColor: 'grey',
    shadowOffset: null,
    shadowRadius: 5,
    shadowOpacity: 0.50
  }
}

export default ApplicationStyles
