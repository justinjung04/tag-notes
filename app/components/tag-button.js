var React = require('react');
var ReactBootstrap = require('react-bootstrap');

var Button = ReactBootstrap.Button;
var Badge = ReactBootstrap.Badge;

var TagButton = React.createClass({
	handleClickTag: function() {
		this.props.clickTag(this.props.tag);
	},
	render: function() {
		return (
			<Button onClick={this.handleClickTag} id={this.props.id} className={this.props.className} >
				{this.props.tag}
			</Button>
		);
	}
});

module.exports = TagButton;