var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var TagSuggestion = require('./tag-suggestion.js');
var Input = ReactBootstrap.Input;

var TagSearchAbstract = React.createClass({
	getInitialState: function() {
		return {
			searchTag: '',
			width: 30
		};
	},
	handleKeydown: function(e) {
		if (!e) e = window.event;
	    var keyCode = e.keyCode || e.which;
	    if (keyCode == '13') {
	    	this.props.enterPressed();
	    	this.setState({
		    	searchTag: '',
		    	width: 30
		    });
	    } else if(keyCode == '8') {
	    	if(this.refs.input.getValue().length == 0) {
	    		this.props.backSpacePressed();
	    	}
	    } else if(keyCode == '38') {
	    	this.props.upArrowPressed();
	    	e.preventDefault();
	    } else if(keyCode == '40') {
	    	this.props.downArrowPressed();
	    	e.preventDefault();
	    }
	},
	handleChange: function() {
		var searchTag = this.refs.input.getValue().toString();
		var canvas = document.createElement('canvas');
		var ctx = canvas.getContext("2d");
		ctx.font = "14px Arial";        
		var inputWidth = ctx.measureText(searchTag).width;
		this.props.getSuggestionTags(searchTag);
		this.setState({
			searchTag: searchTag,
			width: 30 + inputWidth
		});
	},
	componentWillMount: function() {
		document.addEventListener('keydown', this.handleKeydown, false);
	},
	componentWillUnmount: function() {
		document.removeEventListener('keydown', this.handleKeydown, false);
	},
	render: function() {
		return (
			<div>
				<Input type='text' value={this.state.searchTag} onChange={this.handleChange} ref='input' style={{width:this.state.width}} />
				<TagSuggestion suggestionTags={this.props.suggestionTags} searchTag={this.state.searchTag} count={this.props.count} />
			</div>
		);
	}
});

module.exports = TagSearchAbstract;