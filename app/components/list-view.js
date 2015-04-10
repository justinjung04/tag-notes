var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var ListItem = require('./list-item.js');

var ListGroup = ReactBootstrap.ListGroup;
var Button = ReactBootstrap.Button;
var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;

var ListView = React.createClass({
	render: function() {
        var rows = [];
        this.props.ideas.forEach(function(idea) {
        	if(idea.tags.indexOf(this.props.filterTag) == -1) {
        		return;
        	}
        	rows.push(<ListItem body={idea.body} title={idea.title} tags={idea.tags} />)
        }.bind(this));

		return (
            <ListGroup>
				{rows}
			</ListGroup>
		);
	}
});

module.exports = ListView;