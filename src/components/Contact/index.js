import React from 'react';
import Scrollbar from '../Scrollbar';

class Contact extends React.Component {
	constructor() {
		super();
		this.state = {
			showingScrollbar: false,
			name: '',
			email: '',
			msg: '',
			showForm: '',
			showConfirmation: '',

			visited: {
				name: false,
				email: false,
				msg: false
			}
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
	nameChange = (event) => {
		this.setState({ name: event.target.value });
	}
	emailChange = (event) => {
		this.setState({ email: event.target.value });
	}
	msgChange = (event) => {
		this.setState({ msg: event.target.value });
	}
	fieldBlur = (field) => (event) => {
		this.setState({
			visited: { ...this.state.visited, [field]: true },
		});
	}
	formHandler = (event) => {
		event.preventDefault();

		if (!this.isValidForm()) {
			return;
		} else {
			const { name, email, msg } = this.state;
			const message = encodeURIComponent(msg.trim());
			const dataString = 'name=' + name + '&email=' + email + '&message=' + message;

			fetch('https://kristinepemberton.com/processForm.php', {
				method: 'POST',
				headers: {
					"Content-type": "application/x-www-form-urlencoded"
				},
				body: dataString
			}).then((response) => {
				return response.text();
			}).then((text) => {
				this.setState({ showForm: "hide" });
				this.setState({ showConfirmation: "show" });
			}).catch((error) => {
				console.error('Message failed: ' + error);
			});
		}
    }

	isValidForm() {
		const errors = validateForm(this.state.name, this.state.email, this.state.msg);
		const isDisabled = Object.keys(errors).some(x => errors[x]);
		return !isDisabled;
	}

	render() {
		const errors = validateForm(this.state.name, this.state.email, this.state.msg);
		const isDisabled = Object.keys(errors).some(x => errors[x]);

		const throwError = (field) => {
			const errorField = errors[field];
			const showError = this.state.visited[field];

			return errorField ? showError : false;
		};

		return (
			<Scrollbar>
				<div>
					<h1><span>Contact Me</span></h1>
					<p className={`confirmation ${this.state.showConfirmation}`}>Thanks for reaching out! I'll get back to you asap at the email address you provided.</p>
					<form onSubmit={this.formHandler} className={this.state.showForm}>
						<div className="row margin-2-b">
							<div className="col-6 margin-2-b-mobile">
								<input
									id="name"
									className={throwError('name') ? "error" : ""}
									type="text"
									name="name"
									placeholder="Your Name"
									tabIndex="1"
									value={this.state.name} 
									onChange={this.nameChange}
									onBlur={this.fieldBlur('name')}
								/>
								<span>&nbsp;</span>
								<p className="helper">{throwError('name') ? "Please enter your name, minimum 2 characters." : ""}</p>
							</div>
							<div className="col-6">
								<input 
									id="email"
									className={throwError('email') ? "error" : ""}
									type="email"
									name="email" 
									placeholder="Email Address"
									tabIndex="1"
									value={this.state.email} 
									onChange={this.emailChange}
									onBlur={this.fieldBlur('email')}
								/>
								<span>&nbsp;</span>
								<p className="helper">{throwError('email') ? "Please enter a valid email address." : ""}</p>
							</div>
						</div>
						<div className="col-12 pad-0-l">
							<textarea
								id="message"
								className={throwError('msg') ? "error" : ""}
								name="message"
								placeholder="Your Message"
								tabIndex="3"
								value={this.state.msg}
								onChange={this.msgChange} 
								onBlur={this.fieldBlur('msg')}
							/>
							<span>&nbsp;</span>
							<p className="helper">{throwError('msg') ? "Please enter a detailed message." : ""}</p>
						</div>
						<div className="col-12 margin-2-t text-align-center">
							<button 
								type="submit" 
								className="btn btn-fluid"
								tabIndex="4" 
								disabled={isDisabled}>
								Send
							</button>
						</div>
					</form>
				</div>
			</Scrollbar>
		);
	}
}

function validateForm(name, email, msg) {
	return {
		name: name.length < 2,
		email: !email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i),
		msg: msg.length < 5
	};
}

export default Contact;