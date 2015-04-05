var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var IdeaModal = require('./idea-modal.js');

var Button = ReactBootstrap.Button;
var ModalTrigger = ReactBootstrap.ModalTrigger;

var AddButton = React.createClass({
    render: function() {
        return (
            <ModalTrigger modal={<IdeaModal />}>
                <Button id="add-button" bsSize='large' bsStyle='warning'>Spit out an idea!</Button>
            </ModalTrigger>
        );
    }
});

module.exports = AddButton;