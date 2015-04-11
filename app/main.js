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
	{body: 'This is my 1st idea', title: '1st idea', tags: 'Tag 1;Tag 2'},
	{body: 'This is my 2nd idea', title: '2nd idea', tags: 'Tag 1;Tag 3'},
	{body: 'This is my 3rd idea', title: '3rd idea', tags: 'Tag 1;Tag 2'},
	{body: 'This is my 4th idea', title: '4th idea', tags: 'Tag 1'},
	{body: 'This is my 5th idea', title: '5th idea', tags: 'Tag 1'},
	{body: 'This is my 6th idea', title: '6th idea', tags: 'Tag 2;Tag 3'},
	{body: 'This is my 7th idea', title: '7th idea', tags: 'Tag 2'},
	{body: 'This is my 8th idea', title: '8th idea', tags: 'Tag 1;Tag 2'},
	{body: 'This is my 9th idea', title: '9th idea', tags: 'Tag 3;Tag 4'},
	{body: 'This is my 10th idea', title: '10th idea', tags: 'Tag 4'},
	{body: 'This is my 11th idea', title: '11th idea', tags: 'Tag 4'},
	{body: 'This is my 12th idea', title: '12th idea', tags: 'Tag 1;Tag 2'},
	{body: 'This is my 13th idea', title: '13th idea', tags: 'Tag 1;Tag 2'},
	{body: 'This is my 14th idea', title: '14th idea', tags: 'Tag 1;Tag 3'},
	{body: 'This is my 15th idea', title: '15th idea', tags: 'Tag 1;Hello;Hi;This;Is;Really Long;Really Really Long Tag'}
];

var Body = React.createClass({
	getInitialState: function() {
		return {
			filterTag: ''
		};
	},
	handleSetFilterTag: function(filterTag) {
		this.setState({
			filterTag: filterTag
		})
	},
	render: function() {
		return (
			<Grid>
				<Row>
					<AppHeader setFilterTag={this.handleSetFilterTag} view={this.state.view} />
				</Row>
				<br />
				<br />
				<Row>
					<Col xs={9} md={6}>
						<TagView setFilterTag={this.handleSetFilterTag} ideas={IDEAS} />
					</Col>
	                <Col xs={9} md={6}>
	                    <ListView filterTag={this.state.filterTag} ideas={IDEAS} />
	                </Col>
				</Row>
			</Grid>
		)
	}
});

React.render(<Body/>, document.body);