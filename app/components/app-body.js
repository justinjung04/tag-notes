var React = require('react');

var TagView = require('./tag-view.js');
var ListView = require('./list-view.js');

var AppBody = React.createClass({
	handleSetFilterTag: function(filterTag) {
		this.props.setFilterTag(filterTag);
	},
	render: function() {
		if(this.props.view == 'tag') {
			return (
				<TagView setFilterTag={this.handleSetFilterTag} ideas={this.props.ideas} />
			);
		} else {
			return (
				<ListView filterTag={this.props.filterTag} ideas={this.props.ideas} />
			);
		}
	}
});

module.exports = AppBody;