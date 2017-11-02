import React from 'react'
import { Card, CardItem, Title, connectStyle } from 'native-base'
import { TouchableOpacity } from 'react-native'
import AnswerOption from './AnswerOption'
import ApplicationStyles from '../Themes/ApplicationStyles'

class QuestionCard extends React.Component {

  render () {
    const styles = this.props.style
    return (
      <Card style={styles.questionCardContainer}>
        <CardItem style={styles.questionCardTitle}>
          <Title >{this.props.question}</Title>
        </CardItem>
        <CardItem cardBody style={styles.questionCardItemContainer}>
          {this.props.answersOptions.map(
            (answer, answerIndex) => (
              <TouchableOpacity key={answer} onPress={() => this.props.handleOptionClick(answer, this.props.questionIndex)}>
                <AnswerOption option={answer} isSelectedAnswer={this.props.selectedAnswer[this.props.questionIndex] === answer} questionIndex={this.props.questionIndex} />
              </TouchableOpacity>
              )
            )
          }
        </CardItem>
      </Card>
    )
  }

}

export default connectStyle('Makeme.QuestionCard', ApplicationStyles)(QuestionCard)
