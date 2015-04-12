var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var TagLabel = require('./tag-label.js');

var Input = ReactBootstrap.Input;
var Label = ReactBootstrap.Label;	

var TagSearch = React.createClass({
	getInitialState: function() {
		return {
			filterTag: '',
			width: 30
		};
	},
	handleKeydown: function(e) {
		if (!e) e = window.event;
	    var keyCode = e.keyCode || e.which;
	    if (keyCode == '13'){
	    	var tags = [];
	    	var filterTag = this.refs.input.getValue().toString().toLowerCase();
	    	this.props.ideas.forEach(function(idea) {
				idea.tags.forEach(function(tag) {
					var tagFound = false;
	        		for(var i=0; i<tags.length; i++) {
	        			if(tag == tags[i]) {
	        				tagFound = true;
	        				return;
	        			}
	        		}	        		
	        		if(!tagFound) {
	        			tags.push(tag);
	        		}
	        	});
			});
	    	if((tags.indexOf(filterTag) != -1) && (this.props.filterTags.indexOf(filterTag) == -1)) {
	    		this.props.addFilterTag(filterTag);
	    	}
	    	this.setState({
		    	filterTag: '',
		    	width: 30
		    });
	    }
	},
	handleChange: function() {
		this.setState({
	    	filterTag: this.refs.input.getValue()
	    });
	},
	componentWillMount: function() {
		document.addEventListener('keydown', this.handleKeydown, false);
	},
	componentWillUnmount: function() {
		document.removeEventListener('keydown', this.handleKeydown, false);
	},
	handleChange: function() {
		var userInput = this.refs.input.getValue().toString();
		var canvas = document.createElement('canvas');
		var ctx = canvas.getContext("2d");
		ctx.font = "14px Arial";        
		var inputWidth = ctx.measureText(userInput).width;
		this.setState({
			filterTag: userInput,
			width: 30 + inputWidth
		});
	},
	render: function() {
		return (
			<Input id='tag-search' type='text' value={this.state.filterTag} onChange={this.handleChange} ref='input' style={{width:this.state.width}} />
		);
	}
});

//<Input type='text' value={this.state.value} onChange={this.handleChange} ref='input' style={{width:this.state.width}}/>

module.exports = TagSearch;