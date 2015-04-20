var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var TagSearchMain = require('./tag-search-main.js');
var TagButton = require('./tag-button.js');

var TagView = React.createClass({
	handleAddFilterTag: function(filterTag) {
		this.props.addFilterTag(filterTag);
	},
	handleRemoveFilterTag: function(filterTag) {
		this.props.removeFilterTag(filterTag);
	},
	render: function() {
        var filterTagButtons = [];
        var tagButtons = [];
		var startingLetter;

		this.props.filterTags.forEach(function(filterTag) {
    		filterTagButtons.push(<TagButton clickTag={this.handleRemoveFilterTag} tag={filterTag} id='tag-card-filtered' />);
		}.bind(this));

		this.props.tags.forEach(function(tag) {
			if(this.props.filterTags.indexOf(tag) == -1) {
				// if((tag.substr(0,1) != startingLetter) && (this.props.filterTags.indexOf(tag) == -1)) {
				// 	startingLetter = tag.substr(0,1);
				// 	tagButtons.push(<h4>{startingLetter.toUpperCase()}</h4>);
				// }
				tagButtons.push(<TagButton clickTag={this.handleAddFilterTag} tag={tag} id='tag-card' />);	
			}
		}.bind(this));		

		return (
			<div>
				<h4 id='filter-header'>Filter Tags:</h4>
				{filterTagButtons}
				<div id='tag-search'>
					<TagSearchMain {...this.props} />
				</div>
				<br /><hr />
				{tagButtons}
			</div>
		);
	}
});

module.exports = TagView;