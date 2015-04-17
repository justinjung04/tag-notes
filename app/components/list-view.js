var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var ListItem = require('./list-item.js');

var ListGroup = ReactBootstrap.ListGroup;
var Button = ReactBootstrap.Button;
var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;

var ListView = React.createClass({
    handleAddIdea: function(body, title, tags) {
        this.props.addIdea(body, title, tags);
    },
	render: function() {
        var rows = [];
        var tagFound;
        this.props.ideas.forEach(function(idea) {
            if(this.props.filterTag.length == 0) {
                tagFound = true;
            } else if(idea.tags.length < this.props.filterTag.length) {
                tagFound = false;
            } else {
                for(var i=0; i<this.props.filterTag.length; i++) {
                   if(idea.tags.indexOf(this.props.filterTag[i]) == -1) {
                        tagFound = false;
                        break;
                    } else {
                        tagFound = true;
                    }
                }
            }
            if(tagFound) {
                rows.push(<ListItem addIdea={this.handleAddIdea} updateIdea={this.handleUpdateIdea} allTags={this.props.tags} body={idea.body} title={idea.title} tags={idea.tags} />);
            }
        }.bind(this));

		return (
            <ListGroup>
				{rows}
			</ListGroup>
		);
	}
});

module.exports = ListView;