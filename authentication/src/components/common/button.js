var React = require('react-native');
var {
  Text,
  StyleSheet,
  TouchableHightlight
} = React;

module.exports = React.createClass({
  render: function(){
    return (
      <TouchableHightlight style={styles.button}
        underlayColor={'gray'}>
        <Text style={styles.buttonText} ></Text>
      </TouchableHightlight>
    )
  }
});

var styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    borderColor: 'black',
    marginTop: 10
  },
  buttonText: {
    flex:1,
    alignSelf: 'center',
    fontSize: 20
  }
})
