var React = require('react');
var ReactBootstrap = require('react-bootstrap');

var Button = ReactBootstrap.Button;

var HelpButton = React.createClass({
	render: function() {
		return (
			<Button id='button' bsSize='large' style={{float: 'right'}}>?</Button>
		);
	}
});

module.exports = HelpButton;