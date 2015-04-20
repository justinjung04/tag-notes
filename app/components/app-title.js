var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var TestImage = require('../images/tag.png');

var PageHeader = ReactBootstrap.PageHeader;

var AppTitle = React.createClass({
	render: function() {
		return (
			<div>
			<img src={TestImage}/>
			<h1 id="header">Tag Notes <small>by Justin Jung</small></h1>
			</div>
		);
	}
});

module.exports = AppTitle;