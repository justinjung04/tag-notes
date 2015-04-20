var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var TagButton = require('./tag-button.js');
var TagSearchPopup = require('./tag-search-popup.js');
var Modal = ReactBootstrap.Modal;
var Input = ReactBootstrap.Input;

var PopupAbstract = React.createClass({
	handleChangeHeader: function() {
		this.props.changeHeader(this.refs.header.getValue());
	},
	handleChangeBody: function() {
		this.props.changeBody(this.refs.body.getValue());
	},
	handleAddTag: function(tag) {
		this.props.addTag(tag);
	},
	handleRemoveTag: function(tag) {
		this.props.removeTag(tag);
	},
	render: function() {
		var tagButtons = [];
		this.props.tags.forEach(function(tag) {
			tagButtons.push(<TagButton tag={tag} clickTag={this.handleRemoveTag} id='tag-card' />);
		}.bind(this));

		return (
			<Modal {...this.props}>
		        <div className='modal-body'>
		        	<Input ref='header' onChange={this.handleChangeHeader} id="idea-header" type='text' value={this.props.header} placeholder='Title' />
					{tagButtons}
					<div id='tag-search'>
						<TagSearchPopup allTags={this.props.allTags} tags={this.props.tags} addTag={this.handleAddTag} removeTag={this.handleRemoveTag} />
					</div>
					<br /><br />
					<Input ref='body' onChange={this.handleChangeBody} id="idea-body" type='textarea' rows="10" value={this.props.body} placeholder='Body' />
		        </div>
		        <div className='modal-footer'>
		        	{this.props.buttons}
		        </div>
		    </Modal>
		);
	}
});

module.exports = PopupAbstract;