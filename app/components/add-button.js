var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var IdeaPopup = require('./idea-popup.js');
var Button = ReactBootstrap.Button;
var ModalTrigger = ReactBootstrap.ModalTrigger;

var AddButton = React.createClass({
	handleAddIdea: function(body, title, tags) {
		this.props.addIdea(body, title, tags);
	},
    render: function() {
        return (
            <ModalTrigger modal={<IdeaPopup id='idea-popup-add' addIdea={this.handleAddIdea} />}>
                <Button id="add-button" bsSize='large' bsStyle='success' >Spit out an idea!</Button>
            </ModalTrigger>
        );
    }
});

module.exports = AddButton;