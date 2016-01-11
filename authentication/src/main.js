var React = require('react-native');
var {
  View,
  Text,
  StyleSheet
} = React;

var Parse = require('parse/react-native');

var Signin = require('./components/authentication/signin');

module.exports = React.createClass({
  componentWillMount: function(){
    Parse.initialize("yl1VthELCOZzdmq1SxBzA1C3hcemMSXoigjb6tYS", "SvkSbGPEWLZ7kjufztgmp5iheINjAcdtvcDvC5lM");
  },
  render: function(){
    return(
      <View style={styles.container}>
        <Signin />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
