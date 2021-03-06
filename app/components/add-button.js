var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var PopupNew = require('./popup-new.js');
var Button = ReactBootstrap.Button;
var ModalTrigger = ReactBootstrap.ModalTrigger;

var AddButton = React.createClass({
	handleAddIdea: function(header, tags, body) {
		this.props.addIdea(header, tags, body);
	},
    render: function() {
        return (
            <ModalTrigger modal={<PopupNew addIdea={this.handleAddIdea} tags={this.props.tags} />}>
                <Button id='button' bsSize='large' style={{width: '100%'}}>Create a Note</Button>
            </ModalTrigger>
        );
    }
});

module.exports = AddButton;