
// Import some code we need
var React = require('react-native');
var AppRegistry = React.AppRegistry;
var Text = React.Text;
var View = React.View;
var StyleSheet = React.StyleSheet;

// Create a react component
var Weekdays = React.createClass({
	render: function(){
		return <View>
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
		flexDirection: 'row'
		justifyContent: 'flex-end', //Moves stuff height wise
		alignItems: 'flex-start' //Moves stuff width wise
	}
});


// Show the react component on the screen
AppRegistry.registerComponent('weekdays',function() {
	return Weekdays	
});
