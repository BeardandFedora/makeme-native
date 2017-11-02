import React, { PropTypes } from 'react'
import { Colors } from '../Themes'
import Icon from 'react-native-vector-icons/Ionicons'
import { Actions as NavigationActions } from 'react-native-router-flux'
import ApplicationStyles from '../Themes/ApplicationStyles'
import { View, Text, Button, connectStyle } from 'native-base'

class CustomNavBar extends React.Component {
  static defaultProps = { show: true }
  static propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    icon: PropTypes.string,
    show: PropTypes.bool
  }
  render () {
    const { title } = this.props
    const styles = this.props.style
    let subtitle = null
    if (this.props.subtitle && this.props.subtitle !== '') {
      subtitle = <Text style={styles.customNavBarSubtitle}>{this.props.subtitle}</Text>
    }
    if (this.props.show) {
      return (
        <View style={styles.customNavBarContainer}>
          <Button transparent style={styles.customNavBarLeftButton} onPress={NavigationActions.pop}>
            <Icon name='ios-arrow-back' size={24} color={Colors.charcoal} />
          </Button>
          <View>
            <Text style={styles.customNavBarTitle}>{title}</Text>
            {subtitle}
          </View>
          <View style={styles.customNavBarRightButton}>
            <Button transparent style={styles.customNavBarRightButton} onPress={() => this.context.drawer.open()}>
              <Icon name='ios-menu' size={34} color={Colors.facebook} />
            </Button>
          </View>
        </View>
      )
    }
  }
}

CustomNavBar.contextTypes = {
  drawer: React.PropTypes.object
}

export default connectStyle('Makeme.CustomNavBar', ApplicationStyles)(CustomNavBar)
