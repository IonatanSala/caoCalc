import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';


let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default class CaoCalcApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text >
          Testing
        </Text>
      </View>
    )
  }
}
