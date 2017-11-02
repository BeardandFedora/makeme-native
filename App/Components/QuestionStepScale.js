import React from 'react'
import { View, connectStyle } from 'native-base'
import ApplicationStyles from '../Themes/ApplicationStyles'
import { Image, TouchableOpacity } from 'react-native'
import { Images } from '../Themes'

class QuestionStepScale extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      currentQuestion: this.props.currentQuestion,
      stepImages: this.props.stepImages
    }
  }

  render () {
    const styles = this.props.style
    return (
      <View style={styles.questionStepContainer}>
        <Image style={styles.questionStepsScale} source={Images.stepsScale} resizeMode='stretch' />
        <View style={styles.questionStepsButtonContainer}>
          <TouchableOpacity>
            <Image source={this.props.stepImages[0]} style={styles.questionStepsOrange} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={this.props.stepImages[1]} style={styles.questionStepsBlue} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={this.props.stepImages[2]} style={styles.questionStepsPurple} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default connectStyle('Makeme.LoginScreen', ApplicationStyles)(QuestionStepScale)
