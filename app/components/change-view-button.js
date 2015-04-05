var React = require('react');
var ReactBootstrap = require('react-bootstrap');

var Button = ReactBootstrap.Button;
var Glyphicon = ReactBootstrap.Glyphicon;

var ChangeViewButton = React.createClass({
	handleChangeView: function() {
		this.props.changeView();
	},
	render: function() {
		var glyphStyle = 'th-large';
		if(this.props.view == 'tag') {
			glyphStyle = 'menu-hamburger';
		}
		return (
			<Button id='change-view-button' bsStyle='success' bsSize='large' onClick={this.handleChangeView}><Glyphicon glyph={glyphStyle} /></Button>
		);
	}
});

module.exports = ChangeViewButton;