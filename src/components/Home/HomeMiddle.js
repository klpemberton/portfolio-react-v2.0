import React from 'react';
import { render } from 'react-dom';

class HomeMiddle extends React.Component {
	render() {
		return (
			<section id="midstripe" class="midstripe">
				<div class="main-container">
					<h2 class="headline"><span>Why Hiring an Experienced Web Developer Makes a Difference</span></h2>
					<div class="container">
						<div class="one-half">
							<p>Consumers demand a lot from your website. You need it done right. As a professional web developer, I've acquired years of knowledge and in-depth experience in many different web languages and can hand-code your website from scratch, creating a totally custom experience.</p>
						</div>
						<div class="one-half">
							<p>A website is much more than just shiny graphics on a page. Creating a solid website requires the most current coding techniques to ensure the site's code is correct, clean, quick, and secure. Almost anyone can make a website, but not everyone should. Your website is too important to be left to chance.</p>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default HomeMiddle;