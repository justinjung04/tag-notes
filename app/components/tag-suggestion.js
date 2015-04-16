var React = require('react');
var ReactBootstrap = require('react-bootstrap');

var ListGroup = ReactBootstrap.ListGroup;
var ListGroupItem = ReactBootstrap.ListGroupItem;

var TagSuggestion = React.createClass({
	render: function() {
		var suggestionTags = [];
		var count = 0;

		this.props.suggestionTags.forEach(function(suggestion) {
			if(count == this.props.count) {
				suggestionTags.push(<ListGroupItem id='selected'>{suggestion}</ListGroupItem>);	
			} else {
				suggestionTags.push(<ListGroupItem>{suggestion}</ListGroupItem>);	
			}
			count++;
		}.bind(this));

		return (
			<div id='suggestion'>
				<ListGroup>
					{suggestionTags}
				</ListGroup>
			</div>
		);
	}
});

module.exports = TagSuggestion;