var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var AddButton = require('./components/add-button.js');
var Header = require('./components/header.js');
var TagCard = require('./components/tag-card.js');

require('./styles/main.css');

var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;

var Body = React.createClass({
	render: function() {
		return (
			<Grid>
				<Row>
					<Header />
					<AddButton />
				</Row>
				<TagCard id="tag-card-one">First Tag</TagCard>
				<TagCard id="tag-card-two">Second Tag</TagCard>
				<TagCard id="tag-card-three">Third Tag</TagCard>
				<TagCard id="tag-card-four">Fourth Tag</TagCard>
			</Grid>
		)
	}
});

React.render(<Body/>, document.body);