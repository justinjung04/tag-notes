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

		tagsArray.sort(function(a, b){
		    if(a.tag < b.tag) return -1;
		    if(a.tag > b.tag) return 1;
		    return 0;
		});

        var tagCards = [];
		var left = 200;
		var top = 200;
		var width, height, fontSize, tagStyle, color;
		var temp;

		tagsArray.forEach(function(tagElement) {
			if(tagElement.tag.substr(0,1) != temp) {
				temp = tagElement.tag.substr(0,1);
				tagCards.push(<h4>{temp}</h4>);
			}
    		tagCards.push(<TagCard setFilterTag={this.handleSetFilterTag} tag={tagElement.tag} count={tagElement.count} />);
		}.bind(this));

		return (
			<div>
				<h4 id='filter-header'>Filter Tags:</h4>
				<TagCard setFilterTag={this.handleSetFilterTag} tag={'Tag 5'} count={1} />
				<TagSearch />
				<br /><br />
				{tagCards}
			</div>
		);
	}
});

module.exports = TagView;