var React = require('react-native');

var {
  Text,
  View,
  StyleSheet,
  TextInput,
} = React;
var Parse = require('parse/react-native');
var Button = require('../common/button');

//<Button text={'Sign In'} onPress={this.onPress} />
module.exports = React.createClass({
  getInitialState: function() {
    return {
      username: '',
      password: '',
      errorMessage: '',
    };
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Text>Sign in</Text>
        <Text style={styles.label}>Username:</Text>
        <TextInput
          style={styles.input}
          value={this.state.username}
          onChangeText={ (text) => this.setState({ username: text }) }
        />
        <Text style={styles.label}>Password:</Text>
        <TextInput secureTextEntry={true}
          style={styles.input}
          value={this.state.password}
          onChangeText={ (text) => this.setState({ password: text }) }
          />
        <Text style={styles.label} >{this.state.errorMessage}</Text>
        <Button text={'Sign in'} onPress={this.onPress} />
        <Button text={'Sign Up'} onPress={this.onSignUp} />
      </View>
    );
  },

  onPress: function() {
    Parse.User.logIn(this.state.username, this.state.password, {
      success: (user) => { console.log(user); },

      error: (data, error) => { this.setState({ errorMessage: error.message }); },
    });
  },

  onPress: function() {
    Parse.User.logIn(this.state.username, this.state.password, {
      success: (user) => { console.log(user); },

      error: (data, error) => { this.setState({ errorMessage: error.message }); },
    });
  },
});

var styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    padding: 4,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    width: 200,
    alignSelf: 'center',
  },
  label: {
    fontSize: 18,
  },
});
