var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var ListItem = require('./list-item.js');

var ListGroup = ReactBootstrap.ListGroup;
var Button = ReactBootstrap.Button;

var ListView = React.createClass({
	render: function() {
		return (
			<ListGroup>
				<ListItem>Idea 1</ListItem>
				<ListItem>Idea 2</ListItem>
				<ListItem>Idea 3</ListItem>
			</ListGroup>
		);
	}
});

module.exports = ListView;