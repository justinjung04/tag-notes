var React = require('react');
var ReactBootstrap = require('react-bootstrap');

var Modal = ReactBootstrap.Modal;
var Button = ReactBootstrap.Button;
var Input = ReactBootstrap.Input;

var IdeaPopup = React.createClass({
	getInitialState: function() {
		if(this.props.id == 'idea-popup-update') {
			var tagString = '';
			for(var i=0; i<this.props.tags.length; i++) {
				if(i == 0) {
					tagString += this.props.tags[i];
				} else {
					tagString += ', ' + this.props.tags[i];
				}
			}
			return {
				body: this.props.body,
				title: this.props.ideaTitle,
				tags: tagString
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
	    	title: this.refs.title.getValue(),
	    	tags: this.refs.tags.getValue()
	    });
	},
	render: function() {
		return (
			<Modal {...this.props} id="idea-modal" animation={false}>
		        <div className='modal-body'>
					<Input ref='body' onChange={this.handleChange} id="idea-body" type='textarea' label='Body' rows="10" value={this.state.body} />
					<Input ref='title' onChange={this.handleChange} type='text' label='Title' value={this.state.title} />
					<Input ref='tags' onChange={this.handleChange} type='text' label='Tags' value={this.state.tags} />
		        </div>
		        <div className='modal-footer'>
		        	<Button bsStyle="success" onClick={this.handleAddIdea}>Save</Button>
		        </div>
		    </Modal>
		)
	}
});

module.exports = IdeaPopup;