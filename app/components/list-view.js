var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var ListItem = require('./list-item.js');

var ListGroup = ReactBootstrap.ListGroup;
var Button = ReactBootstrap.Button;
var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;

var ListView = React.createClass({
    getInitialState: function() {
        return ({
            nextId: this.props.nextId
        });
    },
    handleUpdateIdea: function(id, header, tags, body) {
        this.setState({
            nextId: 10
        });
        this.props.updateIdea(id, header, tags, body);
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
                rows.push(<ListItem updateIdea={this.handleUpdateIdea} id={idea.id} header={idea.header} tags={idea.tags} body={idea.body} />);
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