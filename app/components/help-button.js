var React = require('react');
var ReactBootstrap = require('react-bootstrap');

var Button = ReactBootstrap.Button;
var Modal = ReactBootstrap.Modal;
var ModalTrigger = ReactBootstrap.ModalTrigger;

var HelpModal = React.createClass({
	render: function() {
		return (
			<Modal {...this.props}>
				<div className='modal-body'>
					<h4>Introduction</h4>
					<p><b>Tag Notes</b> introduces a revolutionary design for saving/sorting notes. Instead of following the traditional folder system, 
					notes are saved and sorted with tags ONLY.</p>
					<br />
					<h4>Writing a note</h4>
					<p>- Make the title <b>simple</b> and <b>intuitive</b>. You don't have to worry about making it unique, since tags will do the magic.<br />
					- Tag your note with <b>keywords</b> that correlates to it. As a default, today's date and year are tagged.</p>
					<br />
					<h4>Tagging a note</h4>
					<p>- To add a tag, <b>type it</b> in the input field and <b>press enter</b>. When you type, tags that you have previously used will be listed below as suggestions.<br/>
					- To delete a tag, <b>press backspace</b> from the input field or <b>click the tag</b>.</p>
					<br />
					<h4>Sorting a list of notes</h4>
					<p>- From the main page, use the left-side to sort with tags.<br />
					- To add a filter tag, <b>type it</b> in the input field and <b>press enter</b> or <b>click a tag</b> from below.<br />
					- To delete a filter tag, <b>press backspace</b> from the input field or <b>click the tag</b>.</p>
					<br />
					<br />
					<p style={{textAlign:'right', color:'#777', fontSize:'12px'}}>&copy; 2015 Justin Jung All Rights Reserved</p>
				</div>
			</Modal>
		)
	}
});

var HelpButton = React.createClass({
	render: function() {
		return (
			<ModalTrigger modal={<HelpModal />}>
				<Button id='button' bsSize='large' style={{float: 'right'}}>?</Button>
			</ModalTrigger>
		);
	}
});

module.exports = HelpButton;