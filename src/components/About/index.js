import React from 'react';
import Scrollbar from '../Scrollbar';
import ImageGallery from 'react-image-gallery';

class About extends React.Component {
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
				<AboutContent />
			</Scrollbar>
		);
	}
}

class AboutMeGallery extends React.Component {
 
  render() {
		const images = [
			{
				original: 'https://kristinepemberton.com/assets/img/kp-bigsur.jpg',
				thumbnail: 'https://kristinepemberton.com/assets/img/kp-bigsur.jpg'
			},
			{
				original: 'https://kristinepemberton.com/assets/img/dogs-mb.jpg',
				thumbnail: 'https://kristinepemberton.com/assets/img/dogs-mb.jpg'
			},
			{
				original: 'https://kristinepemberton.com/assets/img/kp-coulibri.jpg',
				thumbnail: 'https://kristinepemberton.com/assets/img/kp-coulibri.jpg'
			},
			{
				original: 'https://kristinepemberton.com/assets/img/kp-lita.jpg',
				thumbnail: 'https://kristinepemberton.com/assets/img/kp-lita.jpg'
			},
			{
				original: 'https://kristinepemberton.com/assets/img/kp-kayak.jpg',
				thumbnail: 'https://kristinepemberton.com/assets/img/kp-kayak.jpg'
			},
			{
				original: 'https://kristinepemberton.com/assets/img/kp-freddie.jpg',
				thumbnail: 'https://kristinepemberton.com/assets/img/kp-freddie.jpg'
			},
			{
				original: 'https://kristinepemberton.com/assets/img/pismo.jpg',
				thumbnail: 'https://kristinepemberton.com/assets/img/pismo.jpg'
			},
			{
				original: 'https://kristinepemberton.com/assets/img/kp-randi.jpg',
				thumbnail: 'https://kristinepemberton.com/assets/img/kp-randi.jpg'
			},
			{
				original: 'https://kristinepemberton.com/assets/img/goldfish.png',
				thumbnail: 'https://kristinepemberton.com/assets/img/goldfish.png'
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

const AboutContent = () => (
	<div>
		<h1><span>About Me</span></h1>
		<div>
			<p className="margin-0-b">I'm Kristine and I'm a web developer. I began creating websites as a little kid. Here's my very first site, <a href="https://geocities.ws/purrfectpetzplace" target="_blank">Purrfect Petz Place</a>, based on the old <em>Petz</em> PC games (turn on your ad blocker! Someone mirrored the Geocities servers long ago and flooded all the sites with ads). Making websites is still what I do today, with 8 years of hands-on professional experience at major corporations in Bloomington, Indiana and now San Luis Obispo, California. I'm currently a full-time Senior Front-end Developer at a large corporation in SLO.</p>
		</div>
		<div className="row">
			<div className="col-6">
				<p>I am at my happiest when spending time with animals and nature, and have 4 dogs of my own, ages 12, 12, 6, and 4. They are, of course, all Very Good Dogs (The Best Dogs!) and they make me a better human. I also have a gaggle of fish: 3 goldfish and a variety of tropical freshwater fish.</p>
				<p>I relocated to the Central Coast of California a few years ago after having lived my whole life in Bloomington, Indiana. I enjoy being outdoors with plants, animals, and nature and experiencing all the beautiful Central Coast has to offer.</p>
			</div>
			<div className="col-6 margin-2-t-md-up">
				<AboutMeGallery />
			</div>
		</div>
	</div>
);

export default About;