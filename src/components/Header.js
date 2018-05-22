import React from 'react';

const Header = () => (
	<header className="flex">
		<section>
			<h1>K<span className="display-none">ristine</span>P<span className="display-none">emberton</span></h1>
		</section>
		<section>
			<a href="https://github.com/klpemberton" target="_blank">
				<i className="icon-github-circled"></i>
			</a>
			<a href="https://www.linkedin.com/in/klpemberton/" target="_blank">
				<i className="icon-linkedin-squared"></i>
			</a>
		</section>
	</header>
);

export default Header;