/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
//'use strict';

// Import some code we need
var React = require('react-native');
var AppRegistry = React.AppRegistry;
var Text = React.Text;
var View = React.View;
var StyleSheet = React.StyleSheet;

// Create a react component
var Weekdays = React.createClass({
	render: function(){
		return <View style={styles.container}>
			<Text>
			 Days of the week:
			</Text>
		</View>
	}
});

// Style the React component
var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center', //Moves stuff height wise
		alignItems: 'center' //Moves stuff width wise
	}
});

// Show the react component on the screen
AppRegistry.registerComponent('udemycourse',function() {
	return Weekdays
});
