var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var PopupEdit = require('./popup-edit.js');

var ListGroupItem = ReactBootstrap.ListGroupItem;
var ModalTrigger = ReactBootstrap.ModalTrigger;
var Label = ReactBootstrap.Label;

var ListItem = React.createClass({
	handleUpdateIdea: function(header, tags, body) {
		this.props.updateIdea(this.props.id, header, tags, body);
	},
	handleDeleteIdea: function() {
		this.props.deleteIdea(this.props.id);
	},
	render: function() {
		var tagLabels = [];
		this.props.tags.forEach(function(tag) {
			tagLabels.push(<Label>{tag}</Label>);
		}.bind(this));

		return (
			<ModalTrigger modal={<PopupEdit updateIdea={this.handleUpdateIdea} deleteIdea={this.handleDeleteIdea} allTags={this.props.allTags} header={this.props.header} tags={this.props.tags} body={this.props.body} />}>
                <ListGroupItem>
					<b>{this.props.header}</b> {tagLabels}
				</ListGroupItem>
            </ModalTrigger>
        );
	}
});

module.exports = ListItem;