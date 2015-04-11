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
	{body: 'This is my 9th idea', title: '9th idea', tags: ['Tag 3', 'Tag 4']},
	{body: 'This is my 10th idea', title: '9th idea', tags: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4']},
	{body: 'This is my 11th idea', title: '11th idea', tags: ['Tag 4']},
	{body: 'This is my 13th idea', title: '13th idea', tags: ['Tag 1', 'Tag 2']},
	{body: 'This is my 14th idea', title: '14th idea', tags: ['Tag 1', 'Tag 3']},
	{body: 'This is my 15th idea', title: '15th idea', tags: ['Tag 1', 'Hello', 'Hi', 'This', 'Is' ,'Really Long', 'Really Really Long Tag']}
];

var Body = React.createClass({
	getInitialState: function() {
		return {
			filterTags: []
		};
	},
	handleAddFilterTag: function(filterTag) {
		var filterTags = this.state.filterTags;
		filterTags.push(filterTag);
		this.setState({
			filterTags: filterTags
		})
	},
	handleRemoveFilterTag: function(filterTag) {
		var filterTags = this.state.filterTags;
		var index = filterTags.indexOf(filterTag);
		filterTags.splice(index, 1);
		this.setState({
			filterTags: filterTags
		})
	},
	render: function() {
		return (
			<Grid>
				<Row>
					<AppHeader />
				</Row>
				<br />
				<br />
				<Row>
					<Col xs={9} md={6}>
						<TagView addFilterTag={this.handleAddFilterTag} removeFilterTag={this.handleRemoveFilterTag} filterTags={this.state.filterTags} ideas={IDEAS} />
					</Col>
	                <Col xs={9} md={6}>
	                    <ListView filterTag={this.state.filterTags} ideas={IDEAS} />
	                </Col>
				</Row>
			</Grid>
		)
	}
});

React.render(<Body/>, document.body);