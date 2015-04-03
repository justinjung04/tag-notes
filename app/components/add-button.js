var React = require('react');
var ReactBootstrap = require('react-bootstrap');

var Button = ReactBootstrap.Button;
var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;

var AddButton = React.createClass({
    render: function() {
        return (
            <Grid>
                <Row>
                <Col xs={6} md={4} />
                <Col xs={6} md={4}>
                    <Button id="add-button" bsSize='large' bsStyle='warning'>Spit out an idea!</Button>
                </Col>
                <Col xs={6} md={4} />
                </Row>
            </Grid>
        );
    }
});

module.exports = AddButton;

// const buttonsInstance = (
//   <ButtonToolbar>
//     {/* Standard button */}
//     <Button>Default</Button>

//     {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
//     <Button bsStyle='primary'>Primary</Button>

//     {/* Indicates a successful or positive action */}
//     <Button bsStyle='success'>Success</Button>

//     {/* Contextual button for informational alert messages */}
//     <Button bsStyle='info'>Info</Button>

//     {/* Indicates caution should be taken with this action */}
//     <Button bsStyle='warning'>Warning</Button>

//     {/* Indicates a dangerous or potentially negative action */}
//     <Button bsStyle='danger'>Danger</Button>

//     {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
//     <Button bsStyle='link'>Link</Button>
//   </ButtonToolbar>
// );

// React.render(buttonsInstance, document.body);