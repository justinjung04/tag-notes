var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var AppHeader = require('./components/app-header.js');
var TagView = require('./components/tag-view.js');
var ListView = require('./components/list-view.js');
var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;

require('./styles/main.css');

// var IDEAS = [
// 	{id: 0, body: 'http://www.cbc.ca/news/technology/sony-tv-producers-force-netflix-to-fight-technology-that-jumps-geofences-1.3037747', header: 'Netflix', tags:['2015', '4/16', 'news', 'url']},
// 	{id: 1, body: '- Created component tree diagram for subclasses\n- Fixed bug #32\n- Implemented new function for ListView', header: 'Milestones - BM0', tags: ['2015', '4/17', 'bm0', 'personal project']},
// 	{id: 2, body: 'See You Again - Wiz Khalifa\nUptown Funk - Mark Ronson\nSugar - Maroon 5\nTrap Queen - Fetty Wap\nThinking Out Loud - Ed Sheeran', header: 'Billboard top 5', tags: ['2015', '4/17', 'song']},
// 	{id: 3, body: 'Mobile app for expense management. Number of options already available at Google Play, but none of them seem to be the best fit.', header: 'Expense manager', tags: ['2015', '4/17', 'idea', 'software']},
// 	{id: 4, body: '- Steak\n- Lattice\n- Potato\n- Greek Salad Sauce\n- Applie Juice', header: 'Grocery', tags: ['2015', '4/18', 'grocery']},
// 	{id: 5, body: '- Call CRA\n- Buy a gift for anniversary', header: 'Daily todo', tags: ['2015', '4/18', 'todo']},
// 	{id: 6, body: 'An alarm clock that feeds a person at specified time. For example, at 7:00AM, the clock finds a person\'s mouth and feeds a piece of apple.', header: 'Food alarm clock', tags: ['2015', '4/18', 'hardware', 'idea']},
// 	{id: 7, body: '- Update resume\n- Upload the website to public domain\n- Bake pancake', header: 'Daily todo', tags: ['2015', '4/19', 'todo']},
// 	{id: 8, body: '- [App-to-server] Save real-time data from app to server\n- [Device firmware] Update C# for data formatting\n- [User interface] Create custom plot\n\nDue 2015/05/01', header: 'Action items', tags: ['2015', '4/19', 'due 5/1', 'todo', 'work']},
// 	{id: 9, body: 'A small pedometer that can be attached to anywhere. Bluetooth communication for data transmission could be optional.', header: 'Attachable pedometer', tags: ['2015', '4/19', 'hardware', 'idea']}
// ];

var Body = React.createClass({
	getInitialState: function() {
		return {
			ideas: [],
			tags: [],
			filterTags: [],
			nextId: 10
		};
	},
	componentWillMount: function() {
		var self = this;
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
			if(xmlhttp.readyState==4 && xmlhttp.status==200) {
				var response = JSON.parse(xmlhttp.responseText);
				console.log(response);
				self.setState({
					ideas: response,
					tags: self.getTags(response)
				});
			}
		}
		xmlhttp.open("GET", "notes.json", true);
		xmlhttp.send();
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
		tags.sort();
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