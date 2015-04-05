var React = require('react');
var ReactBootstrap = require('react-bootstrap');

var ListGroupItem = ReactBootstrap.ListGroupItem;

var ListItem = React.createClass({
	handleChangeView: function() {
		this.props.changeView(this.props.value);
	},
	render: function() {
		return (
			<ListGroupItem onClick={this.handleChangeView}>
				{this.props.children}
			</ListGroupItem>
		);
	}
});

module.exports = ListItem;