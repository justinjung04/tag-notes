var React = require('react');
var ReactBootstrap = require('react-bootstrap');

var Button = ReactBootstrap.Button;

var TagCard = React.createClass({
	render: function() {
		return (
			<Button {...this.props} id={this.props.id} className='tag-name' bsStyle='default' >
				{this.props.children}
			</Button>
		);
	}
});

module.exports = TagCard;