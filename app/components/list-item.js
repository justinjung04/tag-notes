var React = require('react');
var ReactBootstrap = require('react-bootstrap');

var ListGroupItem = ReactBootstrap.ListGroupItem;

var ListItem = React.createClass({
	render: function() {
		var tagString = '';

		for(var i=0; i<this.props.tags.length; i++) {
			if(i == 0) {
				tagString += this.props.tags[i];
			} else {
				tagString += ', ' + this.props.tags[i];
			}
		}

		return (
			<ListGroupItem>
				<b>{this.props.title}</b> ({tagString})
			</ListGroupItem>
		);
	}
});

module.exports = ListItem;