var React = require('react-native');
var {
  StyleSheet,
  Navigator
} = React;

var Parse = require('parse/react-native');
var Signin = require('./components/authentication/signin');
var Signup = require('./components/authentication/signup');

var ROUTES = {
  signin: Signin,
  signup: Signup
};

module.exports = React.createClass({
  componentWillMount: function(){
    Parse.initialize("yl1VthELCOZzdmq1SxBzA1C3hcemMSXoigjb6tYS", "SvkSbGPEWLZ7kjufztgmp5iheINjAcdtvcDvC5lM");
  },
  render: function(){
    return(
      <Navigator
         style={styles.container}
         initialRoute={{name:'signin'}}
         renderScene={this.renderScene}
         configureScene={ () => { return Navigator.SceneConfigs.FloatFromRight; }}
       />
    );
  },
  renderScene: function (route, navigator){
    var Component = ROUTES[route.name];
    return <Component />;
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
