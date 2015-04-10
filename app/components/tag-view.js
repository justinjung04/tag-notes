var React = require('react');
var ReactBootstrap = require('react-bootstrap');

var TagSearch = require('./tag-search.js');
var TagCard = require('./tag-card.js');
var Label = ReactBootstrap.Label;

var TagView = React.createClass({
	handleSetFilterTag: function(filterTag) {
		this.props.setFilterTag(filterTag);
	},
	render: function() {
		var tagsArray = [];
        this.props.ideas.forEach(function(idea) {
        	var tagNames = idea.tags.split(';');
			tagNames.forEach(function(tagName) {
				var i;
				var tagFound = false;
        		for(i=0; i<tagsArray.length; i++) {
        			if(tagName == tagsArray[i].tag) {
        				tagsArray[i].count++;
        				tagFound = true;
        				return;
        			}
        		}
        		if(!tagFound) {
        			tagsArray.push({tag: tagName, count: 1});
        		}
        	});
		}.bind(this));

        var tagCards = [];
		var left = 200;
		var top = 200;
		var width, height, fontSize, tagStyle, color;
		
		tagsArray.forEach(function(tagElement) {
    		tagCards.push(<TagCard setFilterTag={this.handleSetFilterTag} tag={tagElement.tag} count={tagElement.count} />);
		}.bind(this));

		return (
			<div>
					<TagSearch />
				{tagCards}
			</div>
		);
	}
});

module.exports = TagView;