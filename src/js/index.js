import React from 'react';
import { render } from 'react-dom';
import Header from './components/Header';
import HomeHero from './components/Home/HomeHero';
import HomeMiddle from './components/Home/HomeMiddle';
import HomeBottom from './components/Home/HomeBottom';
import Footer from './components/Footer';

import './css/main.css';

class PortfolioItem extends React.Component {
	render() {
		//let url = this.props.websites.url;
		return (
			<a href="">"Kill me now"</a>
		);
	}
}

class ProperListRender extends React.Component {
	render() {
		const websites = [
			{'sitename':'sloa', 'url':'sloa.com'},
			{'sitename':'mcp', 'url':'mcp.com'}
		];
		return (
			<div>
				{websites.map(function(data, index) {
					return (<li key={index}>{data.sitename}</li>)
				})};
			</div>
		);
	}
}

render(<Header />, document.getElementById('header'));

render(<HomeHero />, document.getElementById('hero'));
render(<HomeMiddle />, document.getElementById('middle'));
render(<HomeBottom />, document.getElementById('bottom'));

render(<PortfolioItem />, document.getElementById('item'));

render(<Footer />, document.getElementById('footer'));

