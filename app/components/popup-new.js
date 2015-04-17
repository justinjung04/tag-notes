var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var PopupAbstract = require('./popup-abstract.js');

var PopupNew = React.createClass({
	getInitialState: function() {
		return {
			header: '',
			tags: [],
			body: ''
		};
	},
	handleAddIdea: function() {
		this.props.addIdea(this.state.header, this.state.tags, this.state.body);
		this.props.onRequestHide();
	},
	handleAddTag: function(tag) {
		var tags = this.state.tags;
		tags.push(tag);
		this.setState({
			tags: tags
		});
	},
	handleRemoveTag: function(tag) {
		var tags = this.state.tags;
		var index = tags.indexOf(tag);
		tags.splice(index, 1);
		this.setState({
			tags: tags
		});
	},
	handleChangeHeader: function(header) {
		this.setState({
			header: header
		});
	},
	handleChangeBody: function(body) {
		this.setState({
			body: body
		});
	},
	render: function() {
		return (
			<PopupAbstract {...this.props} addIdea={this.handleAddIdea} addTag={this.handleAddTag} removeTag={this.handleRemoveTag}
						changeHeader={this.handleChangeHeader} changeBody={this.handleChangeBody}
						addIea={this.handleAddIdea} allTags={this.props.tags} header={this.state.header} tags={this.state.tags} body={this.state.body} />
		);
	}
});

module.exports = PopupNew;