import React from 'react';
import Scrollbar from '../Scrollbar';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showingScrollbar: false,
			activeExp: false
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
	toggleClass() {
        const currentState = this.state.active;
        this.setState({ activeExp: !currentState });
    }
	render() {
		return (
			<Scrollbar>
				<HomeContent />
			</Scrollbar>
		);
	}
}

class Exp extends React.Component {
	constructor(props) {
		super(props);
		this.toggleClass= this.toggleClass.bind(this);
		this.state = {
			activeExp: false
		};
	}
	toggleClass() {
        const currentState = this.state.activeExp;
        this.setState({ activeExp: !currentState });
    }
	render() {
		return (
			<h3 
				className={`pro-exp${this.state.activeExp ? ' open' : ''}`} 
				onClick={this.toggleClass}>
				<span className={this.props.company}>
					<i className={`icon-angle-circled-${this.state.activeExp ? 'down' : 'right'}`}></i> 
					&nbsp;{this.props.company} – {this.props.title}
				</span>
				<span className="hide-small">{this.props.date}</span>
			</h3>
		);
	}
}

const HomeContent = () => (
	<div>
		<h1 className="text-align-center"><span>Kristine Pemberton</span></h1>
		<h2><span>Senior Front-End Developer</span></h2>
		<h3 className="text-align-center">8 years’ experience developing and maintaining front-end codebases within the full software development lifecycle.</h3>
		<p>Fluent in numerous front-end languages and related technologies; experienced with numerous content management systems, frameworks, templating engines, and build systems; proven to be adaptable in learning new languages and methodologies.</p>
		<h4 className="text-align-center margin-1-b">Areas of Expertise:</h4>
		<div className="flex row justify-space-between">
			<div className="col-7">
				<ul className="margin-0-t pad-2-l">
					<li>JavaScript, React, jQuery, HTML5, CSS3, PHP, SQL</li>
					<li>Version Control & Build Systems: Git, Subversion, Gulp, Grunt, Webpack, Jenkins</li>
					<li>Environments/Frameworks: Node.js, Angular, Laravel</li>
					<li>Troubleshooting & Debugging</li>
				</ul>
			</div>
			<div className="col-5">
				<ul className="margin-0-t pad-2-l">
					<li>Content Management Systems</li>
					<li>Responsive Design & Development</li>
					<li>Agile Development & the SDLC</li>
					<li>Back-end & DevOps Experience</li>
					<li>Proficient with CLI</li>
				</ul>
			</div>
		</div>

		<section>
			<h2><span>Professional Experience</span></h2>
			<Exp company={'TransUnion'} date={'2016 – Present'} title={'Senior Front-end Developer'} />
			<div className="exp-details pad-3-l-md-up pad-1-b">
				<h4>San Luis Obispo, CA<span className="hide-medium hide-large">, 2016 – Present</span></h4>	
				<p>Coordinate front-end deliverables as Project Lead; train junior developers on process and web development best practices; work independently and coordinate with multiple departments while maintaining effective communication and a shared knowledge base with the front-end team; provide front-end project design and guide sprint planning for front-end initiatives.</p>
				<p>Selected Accomplishments:</p>
				<ul>
					<li>One of only two front-end developers on the Partner Team, which brings in millions of dollars annually through contracts with Chase, American Express, and other large financial institutions</li>
					<li>As Project Lead, design and implement new features such as Multi-Bureau Credit Lock</li>
					<li>Constantly evaluate front-end workflow and make improvements in order to reduce technical debt, optimize our Node/npm build process, and improve coding efficiency</li>
				</ul>
			</div>
		</section>

		<section>
			<Exp company={'TransUnion'} date={'2015 – 2016'} title={'Front-end Developer'} />
			<div className="exp-details pad-3-l-md-up pad-1-b">
			<h4>San Luis Obispo, CA<span className="hide-medium hide-large">, 2015 – 2016</span></h4>	
				<p>Collaborate with multiple departments to envision, implement, and maintain top-quality web-based credit monitoring products viewed by millions of users daily; work independently or with a team of developers on project initiatives and deliver clean, efficient, and compliant code; ensure code compatibility and functionality across all supported desktop browsers and mobile devices; work closely with the quality assurance team to draft test cases for new features and to resolve bugs on existing features if/when they arise; maintain accurate documentation and task tracking via various project management systems (JIRA, Confluence) as part of the agile development process.</p>
				<p>Selected Accomplishments:</p>
				<ul>
					<li>Contributed to multiple new website and feature launches, such as trueidentity.com</li>
					<li>Implemented multiple new revenue-generating features such as dynamic ads and upsells</li>
				</ul>
			</div>
		</section>

		<section>
			<Exp company={'Cook Medical'} date={'2013 – 2015'} title={'Front-end Developer'} />
			<div className="exp-details pad-3-l-md-up pad-1-b">
				<h4>Bloomington, IN<span className="hide-medium hide-large">, 2013 – 2015</span></h4>	
				<p>Worked with visual designers, back-end developers, project stakeholders, and management to envision and implement quality business systems; wrote clean, compliant, and future-friendly code for enterprise applications and public-facing websites; ensured compatibility across all browsers, platforms, and devices and worked closely with UA team to draft unit tests and resolve bugs if/as they arise; drafted technical documentation for projects as part of the agile development process.</p>
				<p>Selected Accomplishments:</p>
				<ul>
					<li>Contributed to the complete overhaul and relaunch of the company’s flagship website, cookmedical.com</li>
					<li>Redesigned the UI and overhauled the code for the company’s Physician Cert Inventory System </li>
				</ul>
			</div>
		</section>

		<section>
			<Exp company={'KristinePemberton.com'} title={'Developer/Designer'} />
			<div className="exp-details pad-3-l-md-up pad-1-b">	
				<p>Complete small maintenance tasks or create entire websites from top to bottom for various  clients by hand-coding clean, compliant, and future-friendly code, including HTML, CSS, PHP, JavaScript, and jQuery to create a final product that is not only developmentally sound, but also accurately reflects the needs and wants of the client and their organization; provide outstanding customer service to clients and work closely with them to ensure the work is completed to their requirements and satisfaction; budget my time and projects carefully in order to ensure my freelance work does not interfere with my full-time employment.</p>
				<p>Selected Accomplishments:</p>
				<ul>
					<li>Designed & developed a new website for Monroe County, Indiana Prosecutor Chris Gaal; the site has a plethora of content that is helpful to the community at large and is viewed by thousands of users daily</li>
					<li>Implemented a new website and SEO for a local contractor, bringing them from the 10th page to the 1st page in Google search results</li>
				</ul>
			</div>
		</section>

		<section>
			<h4 className="margin-0-b">Additional Experience:</h4>
			<p className="margin-0-t"><strong>Web Developer/Designer</strong> • Author Solutions Inc., Bloomington, IN (2012 – 2013)<br />
			   <strong>Web Developer</strong> • HOPE Foundation, Bloomington, IN (2011 – 2012)<br />
			   <strong>Web Developer Intern</strong> • Smithville Communications Inc., Ellettsville, IN (2010 – 2011)</p>
		</section>

		<section className="text-align-center pad-1-t">
			<h2><span>Educational Background</span></h2>
			<h3 className="margin-0-b">Computer Information Systems: Database & Web Management</h3>
			<h4 className="margin-0-tb">Associate of Applied Science</h4>
			<h5 className="margin-0-t">IVY TECH COMMUNITY COLLEGE OF INDIANA, Bloomington, IN</h5>
		</section>
	</div>
);

export default Home;