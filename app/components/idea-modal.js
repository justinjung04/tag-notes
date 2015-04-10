var React = require('react');
var ReactBootstrap = require('react-bootstrap');

var Modal = ReactBootstrap.Modal;
var Button = ReactBootstrap.Button;
var Input = ReactBootstrap.Input;

var IdeaModal = React.createClass({
	addIdea: function() {
		this.props.onRequestHide();
	},
	render: function() {
		return (
			<Modal {...this.props} id="idea-modal" animation={false}>
		        <div className='modal-body'>
					<Input id="idea-body" type='textarea' label='Body' rows="10" />
					<Input type='text' label='Title' />
					<Input type='text' label='Tags' />
		        </div>
		        <div className='modal-footer'>
		        	<Button bsStyle="primary" bsSize='large' onClick={this.addIdea}>Save</Button>
		        </div>
		    </Modal>
		)
	}
});

module.exports = IdeaModal;