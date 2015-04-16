var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var TagSuggestion = require('./tag-suggestion.js');
var Input = ReactBootstrap.Input;

var TagSearch = React.createClass({
	getInitialState: function() {
		return {
			searchTag: '',
			suggestionTags: [],
			width: 30,
			count: 0
		};
	},
	handleKeydown: function(e) {
		if (!e) e = window.event;
	    var keyCode = e.keyCode || e.which;
	    if (keyCode == '13') {
	    	if(this.state.suggestionTags.length > 0) {
	    		this.props.addFilterTag(this.state.suggestionTags[this.state.count]);
	    	}
	    	this.setState({
		    	searchTag: '',
		    	suggestionTags: [],
		    	width: 30,
		    	count: 0
		    });
	    } else if(keyCode == '8') {
	    	if(this.refs.input.getValue().length == 0) {
	    		this.props.removeFilterTag();	
	    	}
	    } else if(keyCode == '38') {
	    	if(this.state.count > 0) {
	    		var count = this.state.count - 1;
	    		this.setState({
	    			count: count
	    		});
	    	}
	    	e.preventDefault();
	    } else if(keyCode == '40') {
	    	if(this.state.count < this.state.suggestionTags.length - 1) {
		    	var count = this.state.count + 1;
	    		this.setState({
	    			count: count
	    		});
	    	}
	    	e.preventDefault();
	    }
	},
	handleChange: function() {
		var searchTag = this.refs.input.getValue().toString();
		var canvas = document.createElement('canvas');
		var ctx = canvas.getContext("2d");
		ctx.font = "14px Arial";        
		var inputWidth = ctx.measureText(searchTag).width;
		this.setState({
			searchTag: searchTag,
			suggestionTags: this.getSuggestionTags(searchTag),
			width: 30 + inputWidth
		});
	},
	getSuggestionTags: function(searchTag) {
		var suggestionTags = [];
		if(searchTag.length > 0) {
			this.props.tags.forEach(function(tag) {
				if((tag.indexOf(searchTag) != -1) && (this.props.filterTags.indexOf(tag) == -1)) {
					suggestionTags.push(tag);
				}
			}.bind(this));	
		}
		return suggestionTags;
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
				<TagSuggestion suggestionTags={this.state.suggestionTags} searchTag={this.state.searchTag} count={this.state.count} />
			</div>
		);
	}
});

module.exports = TagSearch;