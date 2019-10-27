import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';

const DEFAULT_BLUR_AMOUNT = 80;

export default class BlurContainer extends Component {

  blurPercentage() {
    const blur = this.props.blurAmount >= 0 && this.props.blurAmount <= 100 ? this.props.blurAmount : DEFAULT_BLUR_AMOUNT;

    return `rgba(0, 0, 0, ${blur/100})`;
  }

  render() {
    if (this.props.showBlur) {
      return (
        <View style={[
          styles.container,
          { backgroundColor: this.blurPercentage() },
          this.props.viewStyle,
        ]}>
          <Text style={[styles.text, this.props.textStyle]}>
            {this.props.text}
          </Text>
        </View>
      )
    } else {
      return null
    }
  }
}

// Prop Types
BlurContainer.propTypes = {
  showBlur: PropTypes.bool,
  text: PropTypes.string,
  viewStyle: PropTypes.object,
  textStyle: PropTypes.object,
  blurAmount: PropTypes.number, // Between 0 and 100
}

BlurContainer.defaultProps = {
  showBlur: true,
  text: '',
  viewStyle: {},
  textStyle: {},
  blurAmount: DEFAULT_BLUR_AMOUNT,
}

// StyleSheet
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1010,
  },
  text: {
    color: 'white',
    fontSize: 20,
  }
})