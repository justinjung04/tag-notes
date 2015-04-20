var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var AppTitle = require('./app-title.js');
var AddButton = require('./add-button.js');
var HelpButton = require('./help-button.js');

var Button = ReactBootstrap.Button;
var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;
var ModalTrigger = ReactBootstrap.ModalTrigger;

var AppHeader = React.createClass({
	handleAddIdea: function(header, tags, body) {
		this.props.addIdea(header, tags, body);
	},
	render: function() {
		return (
			<Grid>
				<Row>
					<AppTitle />
				</Row>
                <Row>
                <Col xs={6} md={4} />
                <Col xs={6} md={4}>
                    <AddButton addIdea={this.handleAddIdea} tags={this.props.tags} />
                </Col>
                <Col xs={6} md={4}>
                	<HelpButton />
                </Col>
                </Row>
            </Grid>
		);
	}
});

module.exports = AppHeader;