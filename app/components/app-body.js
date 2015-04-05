var React = require('react');

var TagView = require('./tag-view.js');
var ListView = require('./list-view.js');
var ChangeViewButton = require('./change-view-button.js');

var AppBody = React.createClass({
	handleChangeView: function(view) {
		this.props.changeView(view);
	},
	render: function() {
		if(this.props.view == 'tag') {
			return (
				<TagView changeView={this.handleChangeView} />
			);
		} else {
			return (
				<ListView />
			);
		}
	}
});

module.exports = AppBody;