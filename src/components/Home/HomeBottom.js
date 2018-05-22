import React from 'react';
import { render } from 'react-dom';

class HomeBottom extends React.Component {
	render() {
		return (
			<div class="main-container">
				<h2 class="headline"><span>What You'll Get</span></h2>
				<section class="features container">

					<section class="one-half">
						<div class="responsive">
							<h2 class="headline"><span>Responsive Design</span></h2>
								<div class="-text-center">
									<img src="img/respall.png" alt="Responsive Design" />
								</div>
								<p>In an increasingly mobile world, how can you deliver the same content to all visitors, regardless of the device from which they are visiting? The answer is responsive web design. Rather than redirect your visitors to a separate mobile site where they might miss out on some important content, Responsive Design scales your website's content to the screen resolution of the visitor's device, keeping all important content intact. I have mastered the art and every website I develop is responsive and mobile-ready.</p>
						</div>

						<div id="cms" class="cms">
							<h2 class="headline"><span>CMS</span></h2>
							<ul class="sprite-list">
								<li><a class="wp"><span class="tooltip">WordPress is the most popular blogging/content management system in the world. If you plan to blog or have lots of dynamic content, WordPress is likely a good fit for you.</span></a></li>
								<li><a class="dpl"><span class="tooltip" title="Drupal">Drupal is a complex CMS that is used more for corporate sites rather than for blogging. The interface is very different from WordPress, but still user-friendly.</span></a></li>
								<li><a class="jm"><span class="tooltip">Joomla is another CMS that again serves the need for storing content in an easily accessible, user-friendly format.</span></a></li>
							</ul>
							<p>The best Content Management System for your needs depends on the specifics of your project. Luckily, I have extensive experience with many CMS platforms and can develop a custom website tailored to your needs, with all content easily updatable via a user-friendly interface. </p>
						</div>
					</section>

					<section class="one-half">
						<div id="seo" class="seo">
							<h2 class="headline"><span>SEO</span></h2>
								<p>A very hot topic for businesses on the web today is SEO, short for Search Engine Optimization. SEO involves structuring your site and content in such a way so as to increase your website's ranking in search engine results. All websites I create are fully search engine optimized for maximum presence.</p>
						</div>

						<div id="language" class="language">
							<h2 class="headline"><span>Interaction</span></h2>
							<ul class="sprite-list">
								<li><a class="html5"><span class="tooltip">HTML5</span></a></li>
								<li><a class="css3"><span class="tooltip">CSS3</span></a></li>
								<li><a class="jquery"><span class="tooltip">jQuery</span></a></li>
							</ul>
							<p>You know all those fancy effects that make websites "pop"? Yeah, I do that. With broad knowledge of many web languages, I can create custom effects to bring your website to life.</p>
						</div>
						
						<div id="security" class="security">
							<h2 class="headline"><span>Data</span></h2>
							<ul class="sprite-list">
								<li><a class="php"><span class="tooltip">PHP</span></a></li>
								<li><a class="my"><span class="tooltip">MySQL</span></a></li>
								<li><a class="cf"><span class="tooltip">CloudFlare</span></a></li>
							</ul>
							<p>Improper coding can leave your website open to hacks. You need proper JavaScript, PHP, MySQL, and server-side protection to keep your website safe.</p>
						</div>
					</section>
				</section>

				<div class="overlay">
					<div class="img-controls">
						<a class="prev-img">Previous</a>|
						<a class="next-img">Next</a>|
						<a class="popup-close">Close</a>
					</div>
					<div class="overlay-img">
						<img class="popup-img" src="" />
					</div>
				</div>
				
			</div>
		);
	}
}

export default HomeBottom;
