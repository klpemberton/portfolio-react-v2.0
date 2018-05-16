import React from 'react';

const Header = () => (
	<header className="flex-header">
		<section>
			<div className="kp"><a href="/">K<span className="name-expand">ristine</span>P<span className="name-expand">emberton</span></a></div>
		</section>
		<section>
			<div className="find-me">
				<a href="https://github.com/klpemberton" target="_blank">
					<i className="icon-github-circled"></i>
				</a>
				<a href="https://www.linkedin.com/in/klpemberton/" target="_blank">
					<i className="icon-linkedin-squared"></i>
				</a>
			</div>
		</section>
	</header>
);

export default Header;