import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

export default class BlurContainer extends Component {
  render() {
    if (this.props.showBlur) {
      return (
        <View style={[styles.container, this.props.viewStyle]}>
          <Text style={[styles.text, this.props.textStyle]}>
            {this.props.message}
          </Text>
        </View>
      )
    } else {
      return null
    }
  }
}
