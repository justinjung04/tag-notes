var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var TagSearchAbstract = require('./tag-search-abstract.js');

var TagSearchMain = React.createClass({
	getInitialState: function() {
		return {
			suggestionTags: [],
			count: 0
		};
	},
	handleEnterPressed: function() {
		if(this.state.suggestionTags.length > 0) {
    		this.props.addFilterTag(this.state.suggestionTags[this.state.count]);
    	}
    	this.setState({
	    	suggestionTags: [],
	    	count: 0
	    });
	},
	handleBackSpacePressed: function() {
    	this.props.removeFilterTag();
	},
	handleUpArrowPressed: function() {
		if(this.state.count > 0) {
    		var count = this.state.count - 1;
    		this.setState({
    			count: count
    		});
    	}
	},
	handleDownArrowPressed: function() {
		if(this.state.count < this.state.suggestionTags.length - 1) {
	    	var count = this.state.count + 1;
    		this.setState({
    			count: count
    		});
    	}
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
		this.setState({
			suggestionTags: suggestionTags
		})
	},
	render: function() {
		return (
			<TagSearchAbstract enterPressed={this.handleEnterPressed} backSpacePressed={this.handleBackSpacePressed} 
							upArrowPressed={this.handleUpArrowPressed} downArrowPressed={this.handleDownArrowPressed} 
							getSuggestionTags={this.getSuggestionTags} suggestionTags={this.state.suggestionTags} count={this.state.count} />
		);
	}
});

module.exports = TagSearchMain;