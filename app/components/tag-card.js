var React = require('react');
var ReactBootstrap = require('react-bootstrap');

var Button = ReactBootstrap.Button;
var Badge = ReactBootstrap.Badge;

var TagCard = React.createClass({
	handleSetFilterTag: function() {
		this.props.setFilterTag(this.props.tag);
	},
	render: function() {
		return (
			<Button onClick={this.handleSetFilterTag} id='tag-card' className={this.props.className} >
				{this.props.tag}
			</Button>
		);
	}
});

module.exports = TagCard;