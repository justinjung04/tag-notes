var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var TagLabel = require('./tag-label.js');

var Input = ReactBootstrap.Input;
var Label = ReactBootstrap.Label;	

var TagSearch = React.createClass({
	getInitialState: function() {
		return {
			value: '',
			width: 30
		};
	},
	handleChange: function() {
		var userInput = this.refs.input.getValue().toString();
		var canvas = document.createElement('canvas');
		var ctx = canvas.getContext("2d");
		ctx.font = "14px Arial";        
		var inputWidth = ctx.measureText(userInput).width;
		this.setState({
			value: userInput,
			width: 30 + inputWidth
		});
	},
	render: function() {
		return (
			<Input id='tag-search' type='text' value={this.state.value} onChange={this.handleChange} ref='input' style={{width:this.state.width}} />
		);
	}
});

//<Input type='text' value={this.state.value} onChange={this.handleChange} ref='input' style={{width:this.state.width}}/>

module.exports = TagSearch;