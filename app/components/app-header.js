var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var AppTitle = require('./app-title.js');
var AddButton = require('./add-button.js');

var Button = ReactBootstrap.Button;
var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;
var ModalTrigger = ReactBootstrap.ModalTrigger;

var AppHeader = React.createClass({
	render: function() {
		return (
			<Grid>
				<Row>
					<AppTitle />
				</Row>
                <Row>
                <Col xs={6} md={4} />
                <Col xs={6} md={4}>
                    <AddButton />
                </Col>
                <Col xs={6} md={4} />
                </Row>
            </Grid>
		);
	}
});

module.exports = AppHeader;