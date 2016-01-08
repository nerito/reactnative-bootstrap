/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

//var TextInputExample = require('./textInputExample');

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  WithLabel,
  TextInput
} from 'react-native';

class playgroundproject extends Component {
  render() {
    return (

      <View>
        <TextInput autoCorrect={false} style={styles.default} />
        <TextInput autoCorrect={false} style={styles.default} />
        <TextInput autoCorrect={false} style={styles.default} />
        <TextInput autoCorrect={true} style={styles.default} />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  default: {
    height: 26,
    borderWidth: 0.5,
    borderColor: '#0f0f0f',
    flex: 1,
    fontSize: 13,
    padding: 4,
  }
});

AppRegistry.registerComponent('playgroundproject', () => playgroundproject);
