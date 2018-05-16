import React from 'react';
import Scrollbar from '../Scrollbar';

class Contact extends React.Component {
	constructor() {
		super();
		this.state = {
			showingScrollbar: false
		};
	}
	componentDidMount() {
		this.setState({
			showingScrollbar: true
		});

		setTimeout(() => {
			this.setState({
				showingScrollbar: false
			});
		}, 500);
	}
	render() {
		return (
			<Scrollbar>
				<ContactContent />
			</Scrollbar>
		);
	}
}

const ContactContent = () => (
	<div>
		<h1><span>Contact Me</span></h1>
		<form>
			<div className="row margin-2-b">
				<div className="col-6 margin-2-b-mobile">
					<input type="text" id="name" name="name" placeholder="Your Name" tabIndex="1" />
					<span>&nbsp;</span>
				</div>
				<div className="col-6">
					<input type="email" id="email" name="email" placeholder="Email Address" tabIndex="1" />
					<span>&nbsp;</span>
				</div>
			</div>
			<div className="col-12 pad-0-l">
				<textarea id="message" name="message" placeholder="Your Message" tabIndex="3" />
				<span>&nbsp;</span>
			</div>
			<div className="col-12 margin-2-t text-align-center">
				<button className="btn btn-fluid" tabIndex="4">Send</button>
			</div>
		</form>
	</div>
);

export default Contact;