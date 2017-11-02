import React from 'react'
import { connect } from 'react-redux'
import { Text, Container, Header, connectStyle, DeckSwiper, View } from 'native-base'
// import Icon from 'react-native-vector-icons/Ionicons'
import ApplicationStyles from '../Themes/ApplicationStyles'
import CustomNavBar from '../Components/CustomNavBar'
import QuestionStepScale from '../Components/QuestionStepScale'
import QuestionCard from '../Components/QuestionCard'
import { Images } from '../Themes'

import { TouchableOpacity } from 'react-native'

const cards = [{
  question: 'first question',
  questionIndex: 0,
  answers: [
    'first option, first question',
    'second option, first question',
    'third option, first question'
  ]
},
  {
    question: 'second question',
    questionIndex: 1,
    answers: [
      'first option, second question',
      'second option, second question',
      'third option, second question'
    ]
  },
  {
    question: 'third question',
    questionIndex: 2,
    answers: [
      'first option, third question',
      'second option, third question',
      'third option, third question'
    ]
  }]

class GetStarted extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      answers: ['', '', ''],
      currentQuestion: 0,
      stepImages: [
        Images.stepsOrangeActive,
        Images.stepsGray,
        Images.stepsGray
      ]
    }
  }

  render () {
    const styles = this.props.style

    return (
      <Container>
        <Header>
          <CustomNavBar title='Get Started' />
        </Header>
        <Text style={styles.getStartedQuestionHeader}>Please answer a couple of questions so we can propose you a suitable </Text>
        <QuestionStepScale currentQuestion={this.state.currentQuestion} stepImages={this.state.stepImages} />
        <DeckSwiper ref={(c) => this._deckSwiper = c}
          onSwipeLeft={this.handleSwipe}
          onSwipeRight={this.handleSwipe}
          dataSource={cards}
          renderEmpty={() =>
            <View style={{ alignSelf: 'center' }}>
              <Text>Done</Text>
            </View>}
          renderItem={item =>
            <QuestionCard question={item.question} answersOptions={item.answers} selectedAnswer={this.state.answers} questionIndex={item.questionIndex} handleOptionClick={this.handleOptionClick.bind(this)} />}
        />
        <TouchableOpacity style={styles.getStartedSkipStep}>
          <Text style={styles.getStartedSkipStepLabel}>Skip this step</Text>
        </TouchableOpacity>
      </Container>
    )
  }

  handleOptionClick (answer, questionIndex) {
    let updatedAnswers = this.state.answers
    updatedAnswers[questionIndex] = answer
    this.setState({ answers: updatedAnswers })
    this.handleSwipe()
    this._deckSwiper._root.swipeLeft()
  }

  handleSwipe = () => {
    const activeImages = [
      Images.stepsOrangeActive,
      Images.stepsBlueActive,
      Images.stepsPurpleActive
    ]
    const inactiveImages = [
      Images.stepsGray,
      Images.stepsGray,
      Images.stepsGray
    ]
    let newStepImages = inactiveImages
    let newQuestion = this.state.currentQuestion
    if (this.state.currentQuestion === 2) {
      newQuestion = 0
    } else {
      newQuestion = this.state.currentQuestion + 1
    }
    newStepImages[newQuestion] = activeImages[newQuestion]
    this.setState({
      currentQuestion: newQuestion,
      stepImages: newStepImages
    })
  }

}
GetStarted.contextTypes = { drawer: React.PropTypes.object }
const mapStateToProps = state => {
  return {
    // ...redux state to props here
  }
}

export default connectStyle('Makeme.GetStarted', ApplicationStyles)(connect(mapStateToProps)(GetStarted))
