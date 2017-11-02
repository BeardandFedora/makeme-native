import React from 'react'
import { View, Text, connectStyle } from 'native-base'
import { Image } from 'react-native'
import ApplicationStyles from '../Themes/ApplicationStyles'
import { Images } from '../Themes'

class AnswerOption extends React.Component {

  render () {
    const styles = this.props.style
    return (
      <View style={styles.answerOptionContainer}>
        <Text style={styles.answerOptionText}>{this.props.option}</Text>
        <Image style={styles.answerOptionRadio} resizeMode='contain' source={this.props.isSelectedAnswer ? Images.checkboxActive : Images.checkboxNormal} />
      </View>
    )
  }
}

export default connectStyle('Makeme.AnswerOption', ApplicationStyles)(AnswerOption)
