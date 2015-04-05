var React = require('react');
var ReactBootstrap = require('react-bootstrap');

var PageHeader = ReactBootstrap.PageHeader;

var AppTitle = React.createClass({
	render: function() {
		return (
			<PageHeader id="header">Spit It Out <small>by Justin Jung</small></PageHeader>
		);
	}
});

module.exports = AppTitle;