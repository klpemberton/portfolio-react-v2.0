import React from 'react';
import Scrollbar from '../Scrollbar';
import ImageGallery from 'react-image-gallery';

class Portfolio extends React.Component {
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
				<PortfolioContent />
			</Scrollbar>
		);
	}
}

class PrintGallery extends React.Component {
 
	render() {

		const images = [
			{
				original: 'https://kristinepemberton.com/assets/img/elderweb.jpg',
				thumbnail: 'https://kristinepemberton.com/assets/img/elderweb.jpg',
			},
				{
				original: 'https://kristinepemberton.com/assets/img/longslandingweb.jpg',
				thumbnail: 'https://kristinepemberton.com/assets/img/longslandingweb.jpg'
			},
			{
				original: 'https://kristinepemberton.com/assets/img/bira-web.png',
				thumbnail: 'https://kristinepemberton.com/assets/img/bira-web.png'
			},
			{
				original: 'https://kristinepemberton.com/assets/img/salad-web.jpg',
				thumbnail: 'https://kristinepemberton.com/assets/img/salad-web.jpg'
			},
			{
				original: 'https://kristinepemberton.com/assets/img/dancecircus-web.jpg',
				thumbnail: 'https://kristinepemberton.com/assets/img/dancecircus-web.jpg'
			},
			{
				original: 'https://kristinepemberton.com/assets/img/vance-web.png',
				thumbnail: 'https://kristinepemberton.com/assets/img/vance-web.png'
			},
			{
				original: 'https://kristinepemberton.com/assets/img/nadias-web.png',
				thumbnail: 'https://kristinepemberton.com/assets/img/nadias-web.png'
			},
			{
				original: 'https://kristinepemberton.com/assets/img/walters-web.png',
				thumbnail: 'https://kristinepemberton.com/assets/img/walters-web.png'
			},
			{
				original: 'https://kristinepemberton.com/assets/img/vintwarehouse-web.png',
				thumbnail: 'https://kristinepemberton.com/assets/img/vintwarehouse-web.png'
			},
			{
				original: 'https://kristinepemberton.com/assets/img/baker-web.png',
				thumbnail: 'https://kristinepemberton.com/assets/img/baker-web.png'
			}
		]

		return (
			<ImageGallery 
				items={images}
				showBullets={true}
				lazyLoad={true}
				showFullscreenButton={false}
				showGalleryFullscreenButton={false}
				showPlayButton={false}
			/>
		);
	}
}

const PortfolioContent = () => (
	<div>
		<h1><span>Portfolio</span></h1>
		<p>In my day job, I develop credit monitoring sites and tools that are viewed by millions of users daily, including Chase CreditJourney and American Express MyCredit Guide. Examples of my freelance work are presented below.</p>

		<h2><span>Web</span></h2>
		<section className="card margin-3-tb pad-2-l overflow-auto">
			<h3 className="margin-0-t">KristinePemberton.com</h3>
			<div className="flex">
				<div className="col-8 pad-0-l pad-3-r">
					<h4 className="margin-0-t">Summary</h4>
					<p>You are here! This is my personal portfolio site and testing ground for new technologies and ideas.</p>	
				</div>
				<div className="col-4 pad-l">
					<h4 className="margin-0-t">Tools Used</h4>
					<p>React 16.3.2</p>
				</div>
			</div>
		</section>

		<section className="card margin-3-t pad-2-l overflow-auto">
			<h3 className="margin-0-t">SLO Academy</h3>
			<div className="flex">
				<div className="col-8 pad-0-l pad-3-r">
					<h4 className="margin-0-t">Summary</h4>
					<p className="margin-1-t"><a href="https://www.sloacademy.com" target="_blank">SLO Academy</a> provides elite quality tutoring services in SLO County and online.</p>		
				</div>
				<div className="col-4 pad-l">
					<h4 className="margin-0-t">Tools Used</h4>
					<p>ECMAScript 2017</p>
				</div>
			</div>
		</section>

		<section className="card pad-2-l margin-3-t overflow-auto">
			<h3 className="margin-0-t">Monroe County Prosecutor</h3>
			<div className="flex">
				<div className="col-8 pad-0-l pad-3-r">
					<h4 className="margin-0-t">Summary</h4>
					<p>The <a href="http://www.monroeprosecutor.us" target="_blank">official website</a> of Monroe County, Indiana Prosecuting Attorney Chris Gaal.</p>		
				</div>
				<div className="col-4 pad-l">
					<h4 className="margin-0-t">Tools Used</h4>
					<p>WordPress</p>
				</div>
			</div>
		</section>

		<h2><span>Print</span></h2>
		<div className="col-8 col-offset-2">
		<p>I designed these ads using Adobe Photoshop & Illustrator for The Ryder, a local arts & entertainment magazine based out of Bloomington, Indiana.</p>
			<PrintGallery />
		</div>
	</div>
);

export default Portfolio;