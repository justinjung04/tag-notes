var React = require('react');
var ReactBootstrap = require('react-bootstrap');

var Modal = ReactBootstrap.Modal;
var Button = ReactBootstrap.Button;
var Input = ReactBootstrap.Input;

var IdeaPopup = React.createClass({
	getInitialState: function() {
		return {
			body: this.props.body,
			ideaTitle: this.props.ideaTitle,
			tags: this.props.tags
		};
	},
	addIdea: function() {
		this.props.addIdea(this.refs.body.getValue(), this.refs.title.getValue(), this.refs.tags.getValue());
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
		var tagString = '';
		for(var i=0; i<this.props.tags.length; i++) {
			if(i == 0) {
				tagString += this.props.tags[i];
			} else {
				tagString += ', ' + this.props.tags[i];
			}
		}
		return (
			<Modal {...this.props} id="idea-modal" animation={false}>
		        <div className='modal-body'>
					<Input ref='body' onChange={this.handleChange} id="idea-body" type='textarea' label='Body' rows="10" value={this.state.body} />
					<Input ref='title' onChange={this.handleChange} type='text' label='Title' value={this.state.ideaTitle} />
					<Input ref='tags' onChange={this.handleChange} type='text' label='Tags' value={this.state.tags} />
		        </div>
		        <div className='modal-footer'>
		        	<Button bsStyle="success" onClick={this.addIdea}>Save</Button>
		        </div>
		    </Modal>
		)
	}
});

module.exports = IdeaPopup;