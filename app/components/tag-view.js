var React = require('react');
var ReactBootstrap = require('react-bootstrap');

var TagSearch = require('./tag-search.js');
var TagCard = require('./tag-card.js');
var Label = ReactBootstrap.Label;

var TagView = React.createClass({
	handleAddFilterTag: function(filterTag) {
		this.props.addFilterTag(filterTag);
	},
	handleRemoveFilterTag: function(filterTag) {
		this.props.removeFilterTag(filterTag);
	},
	render: function() {
		var tags = [];
		var filterTags = [];

		this.props.filterTags.forEach(function(filterTag) {
			filterTags.push(filterTag);
		});

        this.props.ideas.forEach(function(idea) {
			idea.tags.forEach(function(tag) {
				var tagFound = false;
        		for(var i=0; i<tags.length; i++) {
        			if(tag == tags[i]) {
        				tagFound = true;
        				return;
        			}
        		}
        		for(var i=0; i<filterTags.length; i++) {
        			if(filterTags.indexOf(tag) != -1) {
        				tagFound = true;
        			}
        		}
        		
        		if(!tagFound) {
        			tags.push(tag);
        		}
        	});
		});

		tags.sort();

        var tagCards = [];
        var filterTagViews = [];
		var temp;

		tags.forEach(function(tagElement) {
			if(tagElement.substr(0,1) != temp) {
				temp = tagElement.substr(0,1);
				tagCards.push(<h4>{temp.toUpperCase()}</h4>);
			}
    		tagCards.push(<TagCard clickTag={this.handleAddFilterTag} tag={tagElement} id='tag-card' />);
		}.bind(this));

		filterTags.forEach(function(tagElement) {
    		filterTagViews.push(<TagCard clickTag={this.handleRemoveFilterTag} tag={tagElement} id='tag-card-filtered' />);
		}.bind(this));

		return (
			<div>
				<h4 id='filter-header'>Filter Tags:</h4>
				{filterTagViews}
				<div id='tag-search'>
					<TagSearch filterTags={this.props.filterTags} addFilterTag={this.handleAddFilterTag} removeFilterTag={this.handleRemoveFilterTag} ideas={this.props.ideas} />
				</div>
				<br /><br />
				{tagCards}
			</div>
		);
	}
});

module.exports = TagView;