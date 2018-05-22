import React from 'react';
import { render } from 'react-dom';

class HomeHero extends React.Component {
	render() {
		return (
			<section class="main-container hero">
				<h1 class="headline"><span>There's more than one way to make a website...</span></h1>
				
				<div class="container">
					<div class="one-third">
						<p>...but only a skilled web developer like me knows how to code one properly. Your website needs to be modern, mobile-ready, and optimized for the future, all of which require top-notch development skills that can only come from years of hands-on experience.</p>
						<a class="button" href="portfolio"><span>View Portfolio</span></a>
					</div>
					<div class="one-third -text-center hero-img">
						<img src="../../dist/img/code.png" alt="Web Design for the 21st Century" />
					</div>
					<div class="one-third">
						<p>If you're looking for advanced functionality such as custom scripting, database integration, or any other complex solution, then you've come to the right place. Contact me today and let's discuss the difference proper web development skills can make.
						</p>
						<a class="button" href="contact"><span>Contact Me</span></a>
					</div>
				</div>
			</section>
		);
	}
}

export default HomeHero;
