var React = require('react');
var ReactBootstrap = require('react-bootstrap');

var TagCard = React.createClass({
	render: function() {
		return (
			<div id={this.props.id}>
				<div id="tag-name">
					{this.props.children}
				</div>
			</div>
		);
	}
});

module.exports = TagCard;