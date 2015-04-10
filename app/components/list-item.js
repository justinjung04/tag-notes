var React = require('react');
var ReactBootstrap = require('react-bootstrap');

var ListGroupItem = ReactBootstrap.ListGroupItem;

var ListItem = React.createClass({
	render: function() {
		return (
			<ListGroupItem>
				<b>{this.props.title}</b> ({this.props.tags})
			</ListGroupItem>
		);
	}
});

module.exports = ListItem;