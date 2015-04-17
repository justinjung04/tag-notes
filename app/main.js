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
	{id: 1, body: 'This is my 9th idea', title: '9th idea', tags: ['tag 3', 'tag 4']},
	{id: 2, body: 'This is my 10th idea', title: '9th idea', tags: ['tag 1', 'tag 2', 'tag 3', 'tag 4']},
	{id: 3, body: 'This is my 11th idea', title: '11th idea', tags: ['tag 4']},
	{id: 4, body: 'This is my 13th idea', title: '13th idea', tags: ['tag 1', 'tag 2']},
	{id: 5, body: 'This is my 14th idea', title: '14th idea', tags: ['tag 1', 'tag 3']},
	{id: 6, body: 'This is my 15th idea', title: '15th idea', tags: ['tag 1', 'hello', 'hi', 'this', 'is' ,'really long', 'really really long tag']}
];

var Body = React.createClass({
	getInitialState: function() {
		return {
			ideas: IDEAS,
			tags: this.getTags(IDEAS),
			filterTags: []
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
		ideas.push({body: body, title: header, tags: tags});
		this.setState({
			ideas: ideas,
			tags: this.getTags(ideas)
		});
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
	                    <ListView addIdea={this.handleAddIdea} filterTag={this.state.filterTags} ideas={IDEAS} tags={this.state.tags} />
	                </Col>
				</Row>
			</Grid>
		)
	}
});

React.render(<Body/>, document.body);