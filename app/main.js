var React = require('react');
var ReactBootstrap = require('react-bootstrap');

var AppHeader = require('./components/app-header.js');
var AppBody = require('./components/app-body.js');
var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;

require('./styles/main.css');

var Items = [
	{body: 'This is my 1st idea', title: '1st idea', tags: 'Tag 1; Tag 2'},
	{body: 'This is my 2nd idea', title: '1st idea', tags: 'Tag 1; Tag 3'},
	{body: 'This is my 3rd idea', title: '1st idea', tags: 'Tag 1; Tag 2'},
	{body: 'This is my 4th idea', title: '1st idea', tags: 'Tag 1'},
	{body: 'This is my 5th idea', title: '1st idea', tags: 'Tag 1'},
	{body: 'This is my 6th idea', title: '1st idea', tags: 'Tag 2; Tag 3'},
	{body: 'This is my 7th idea', title: '1st idea', tags: 'Tag 2'},
	{body: 'This is my 8th idea', title: '1st idea', tags: 'Tag 1; Tag 2'},
	{body: 'This is my 9th idea', title: '1st idea', tags: 'Tag 3; Tag 4'},
	{body: 'This is my 10th idea', title: '1st idea', tags: 'Tag 4'},
	{body: 'This is my 11th idea', title: '1st idea', tags: 'Tag 4'},
	{body: 'This is my 12th idea', title: '1st idea', tags: 'Tag 1; Tag 2'},
	{body: 'This is my 13th idea', title: '1st idea', tags: 'Tag 1; Tag 2'},
	{body: 'This is my 14th idea', title: '1st idea', tags: 'Tag 1; Tag 3'},
	{body: 'This is my 15th idea', title: '1st idea', tags: 'Tag 1'}
];

var Body = React.createClass({
	getInitialState: function() {
		return {
			view: 'tag'
		};
	},
	handleChangeView: function() {
		var viewType = 'tag';
		if(this.state.view == 'tag') {
			viewType = 'list';
		}
		this.setState({
			view: viewType
		});
	},
	render: function() {
		return (
			<Grid>
				<Row>
					<AppHeader changeView={this.handleChangeView} view={this.state.view} />
				</Row>
				<br />
				<br />
				<Row>
					<AppBody changeView={this.handleChangeView} view={this.state.view} />
				</Row>
			</Grid>
		)
	}
});

React.render(<Body/>, document.body);