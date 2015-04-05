var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var AppTitle = require('./app-title.js');
var AddButton = require('./add-button.js');
var ChangeViewButton = require('./change-view-button.js');

var Button = ReactBootstrap.Button;
var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;
var ModalTrigger = ReactBootstrap.ModalTrigger;

var AppHeader = React.createClass({
	handleChangeView: function() {
		this.props.changeView();
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
                    <AddButton />
                </Col>
                <Col xs={6} md={4}>
                    <ChangeViewButton view={this.props.view} changeView={this.handleChangeView} />
                </Col>
                </Row>
            </Grid>
		);
	}
});

module.exports = AppHeader;