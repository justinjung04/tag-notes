var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var TagButton = require('./tag-button.js');
var TagSuggestion = require('./tag-suggestion.js');
var TagSearchMain = require('./tag-search-main.js');
var Modal = ReactBootstrap.Modal;
var Button = ReactBootstrap.Button;
var Input = ReactBootstrap.Input;

var IdeaPopup = React.createClass({
	getInitialState: function() {
		if(this.props.id == 'idea-popup-update') {
			return {
				body: this.props.body,
				title: this.props.ideaTitle,
				tags: this.props.tags
			};
		} else {
			return {
				body: '',
				title: '',
				tags: ''
			};
		}
	},
	handleAddIdea: function() {
		this.props.addIdea(this.state.body, this.state.title, this.state.tags);
		this.props.onRequestHide();
	},
	handleChange: function() {
		this.setState({
	    	body: this.refs.body.getValue(),
	    	title: this.refs.title.getValue()
	    });
	},
	render: function() {
		var tagButtons = [];
		this.props.tags.forEach(function(tag) {
			tagButtons.push(<TagButton tag={tag} id='tag-card' />);
		}.bind(this));

		return (
			<Modal {...this.props} id="idea-modal" animation={false}>
		        <div className='modal-body'>
		        	<Input ref='title' onChange={this.handleChange} type='text' label='Title' value={this.state.title} />
					<h5>Tags</h5>
					{tagButtons}
					<div id='tag-search'>
						<TagSearch {...this.props} id='tag-search-popup' />
					</div>
					<Input ref='body' onChange={this.handleChange} id="idea-body" type='textarea' label='Body' rows="10" value={this.state.body} />
		        </div>
		        <div className='modal-footer'>
		        	<Button bsStyle="success" onClick={this.handleAddIdea}>Save</Button>
		        </div>
		    </Modal>
		);
	}
});

module.exports = IdeaPopup;