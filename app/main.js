var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var AppHeader = require('./components/app-header.js');
var TagView = require('./components/tag-view.js');
var ListView = require('./components/list-view.js');
var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;

require('./styles/main.css');

var IDEAS = [
	{id: 0, body: 'Mobile app for expense management. Number of options already available at Google Play, but none of them seem to be the best fit. Analyze pros/cons of each and come up with an app that is perfect for my needs.', header: 'Expense manager', tags: ['existing', 'management', 'mobile', 'software']},
	{id: 1, body: 'Create a small pedometer that can be attached to anywhere. Bluetooth communication for data transmission could be optional.', header: 'Attachable pedometer', tags: ['fitness', 'hardware', 'integration', 'management']},
	{id: 2, body: 'A website that has limited access for family members only. Could be synchronized to mobile phones, so whenever new picture is taken, it is uploaded to the website automatically.', header: 'Family website', tags: ['social', 'software', 'web']},
	{id: 3, body: 'A new mod for League of Legends. The objective is to destroy the nexus, but a team must achieve the objective WITHOUT killing the enemies.', header: 'Priest mod (League of Legends)', tags: ['existing', 'software', 'game', 'funny']},
	{id: 4, body: 'An alarm clock that feeds a person at specified time. For example, at 7:00AM, the clock finds a person\'s mouth and feeds a piece of apple.', header: 'Food alarm clock', tags: ['fitness', 'hardware', 'funny']},
	{id: 5, body: 'Scent is transmitted as a digital signal. For example, when woman are shopping cosmetics online, they can get a sample scent of the cosmetic.', header: 'Digital scent', tags: ['chemistry', 'hardware', 'innovation']}
];

var Body = React.createClass({
	getInitialState: function() {
		return {
			ideas: IDEAS,
			tags: this.getTags(IDEAS),
			filterTags: [],
			nextId: 6
		};
	},
	getTags: function(ideas) {
		var tags = [];
    	ideas.forEach(function(idea) {
			idea.tags.forEach(function(tag) {
				var tagFound = false;
        		for(var i=0; i<tags.length; i++) {
        			if(tag == tags[i]) {
        				tagFound = true;
        				return;
        			}
        		}	        		
        		if(!tagFound) {
        			tags.push(tag);
        		}
        	});
		});
		tags.sort();
		return tags;
	},
	handleAddFilterTag: function(filterTag) {
		var filterTags = this.state.filterTags;
		filterTags.push(filterTag);
		this.setState({
			filterTags: filterTags
		});
	},
	handleRemoveFilterTag: function(filterTag) {
		var filterTags = this.state.filterTags;
		var index;
		if(filterTag == undefined) {
			index = filterTags.length - 1;
		} else {
			index = filterTags.indexOf(filterTag);
		}
		filterTags.splice(index, 1);
		this.setState({
			filterTags: filterTags
		});
	},
	handleAddIdea: function(header, tags, body) {
		var ideas = this.state.ideas;
		var nextId = this.state.nextId;
		tags.sort();	
		ideas.push({id: nextId, body: body, header: header, tags: tags});
		this.setState({
			nextId: nextId + 1,
			ideas: ideas,
			tags: this.getTags(ideas)
		});
		console.log(ideas);
	},
	handleUpdateIdea: function(id, header, tags, body) {
		var ideas = this.state.ideas;
		ideas.forEach(function(idea) {
			if(idea.id == id) {
				idea.header = header;
				idea.tags = tags;
				idea.body = body;
			}
		});
		this.setState({
			ideas: ideas,
			tags: this.getTags(ideas)
		});
	},
	handleDeleteIdea: function(id) {
		var ideas = this.state.ideas;
		var index;
		for(var i=0; i<ideas.length; i++) {
			if(ideas[i].id == id) {
				index = i;
				break;
			}
		}
		ideas.splice(index, 1);
		this.setState({
			ideas: ideas,
			tags: this.getTags(ideas)
		})
	},
	render: function() {
		return (
			<Grid>
				<Row>
					<AppHeader addIdea={this.handleAddIdea} tags={this.state.tags} />
				</Row>
				<br />
				<br />
				<Row>
					<Col xs={9} md={6}>
						<TagView ideas={this.state.ideas} tags={this.state.tags} filterTags={this.state.filterTags} addFilterTag={this.handleAddFilterTag} removeFilterTag={this.handleRemoveFilterTag} />
					</Col>
	                <Col xs={9} md={6}>
	                    <ListView updateIdea={this.handleUpdateIdea} deleteIdea={this.handleDeleteIdea} filterTag={this.state.filterTags} ideas={this.state.ideas} tags={this.state.tags} />
	                </Col>
				</Row>
			</Grid>
		)
	}
});

React.render(<Body/>, document.body);