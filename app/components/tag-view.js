var React = require('react');

var TagCard = require('./tag-card.js');

var TagView = React.createClass({
	handleChangeView: function(event) {
		this.props.changeView(event.target.value);
	},
	render: function() {
		return (
			<div>
				<TagCard id='tag-card-one' onClick={this.handleChangeView} value='list'>First Tag</TagCard>
				<TagCard id='tag-card-two'>Second Tag</TagCard>
				<TagCard id='tag-card-three'>Third Tag</TagCard>
				<TagCard id='tag-card-four'>Fourth Tag</TagCard>
			</div>
		);
	}
});

module.exports = TagView;