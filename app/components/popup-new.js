var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var PopupAbstract = require('./popup-abstract.js');
var Button = ReactBootstrap.Button;

var PopupNew = React.createClass({
	getInitialState: function() {
		var d = new Date();
		var month = d.getMonth() + 1;
		var date = d.getDate();
		var year = d.getFullYear();
		var tags = [];
		tags.push(year);
		tags.push(month + '/' + date);
		return {
			header: '',
			tags: tags,
			body: ''
		};
	},
	handleAddIdea: function() {
		if((this.state.header.length > 0) || (this.state.tags.length > 0) || (this.state.body.length > 0)) {
			var header;
			if(this.state.header == '') {
				header = '(Untitled)';
			} else {
				header = this.state.header;
			}
			this.props.addIdea(header, this.state.tags, this.state.body);	
		}
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
		buttons.push(<Button id='button' onClick={this.handleAddIdea}>Add</Button>);

		return (
			<PopupAbstract {...this.props} addTag={this.handleAddTag} removeTag={this.handleRemoveTag} changeHeader={this.handleChangeHeader} 
						changeBody={this.handleChangeBody} buttons={buttons} allTags={this.props.tags} header={this.state.header} 
						tags={this.state.tags} body={this.state.body} />

		);
	}
});

module.exports = PopupNew;