var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var PopupAbstract = require('./popup-abstract.js');
var Button = ReactBootstrap.Button;

var PopupEdit = React.createClass({
	getInitialState: function() {
		return {
			header: this.props.header,
			tags: this.props.tags,
			body: this.props.body
		};
	},
	handleUpdateIdea: function(header, tags, body) {
		this.props.updateIdea(this.state.header, this.state.tags, this.state.body);
		this.props.onRequestHide();
	},
	handleDeleteIdea: function() {
		this.props.deleteIdea();
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
		var buttons = [];
		buttons.push(<Button bsStyle="success" onClick={this.handleUpdateIdea}>Save</Button>);
		buttons.push(<Button bsStyle="success" style={{float:'left'}} onClick={this.handleDeleteIdea}>Delete</Button>);

		return (
			<PopupAbstract {...this.props} addTag={this.handleAddTag} removeTag={this.handleRemoveTag} changeHeader={this.handleChangeHeader} 
						changeBody={this.handleChangeBody} buttons={buttons} allTags={this.props.tags} header={this.state.header} 
						tags={this.state.tags} body={this.state.body} />

		);
	}
});

module.exports = PopupEdit;