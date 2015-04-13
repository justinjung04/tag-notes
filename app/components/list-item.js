var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var IdeaPopup = require('./idea-popup.js');

var ListGroupItem = ReactBootstrap.ListGroupItem;
var ModalTrigger = ReactBootstrap.ModalTrigger;

var ListItem = React.createClass({
	handleAddIdea: function(body, title, tags) {
		this.props.addIdea(body, title, tags);
	},
	handleUpdateIdea: function(body, title, tags) {
		this.props.updateIdea(body, title, tags);
	},
	render: function() {
		var tagString = '';
		for(var i=0; i<this.props.tags.length; i++) {
			if(i == 0) {
				tagString += this.props.tags[i];
			} else {
				tagString += ', ' + this.props.tags[i];
			}
		}

		return (
			<ModalTrigger modal={<IdeaPopup id='idea-popup-update' addIdea={this.handleAddIdea} updateIdea={this.handleUpdateIdea} body={this.props.body} ideaTitle={this.props.title} tags={this.props.tags} />}>
                <ListGroupItem>
					<b>{this.props.title}</b> ({tagString})
				</ListGroupItem>
            </ModalTrigger>
        );
	}
});

module.exports = ListItem;