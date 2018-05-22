import React from 'react';
import { render } from 'react-dom';
import { NavLink, Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PropTypes from 'prop-types';

import Header from '../Header/index';
import Home from '../Home';
import Portfolio from '../Portfolio';
import About from '../About';
import Contact from '../Contact';

const Frame = () => (
	<div className='app'>
		<Header />
		<main className="frame-content">
			<Navigation />
			<Main />
		</main>
	</div>
);

const Navigation = () => (
	<ChangeTracker />
)
//Navigation = withRouter(Navigation);
const ChangeTracker = withRouter(({match, location, history}) => {
	let cleanPath = location.pathname;
	cleanPath = cleanPath.replace(/\//g,'');
	if (cleanPath === '') { cleanPath = 'home'; }

    return (
    	<nav className={cleanPath}>
			<NavLink exact className="home home-link" activeClassName="current" to='/'>
				<i className="icon-home"></i>
			</NavLink>
			<NavLink exact className="portfolio portfolio-link" activeClassName="current" to='/portfolio'>
				<i className="icon-briefcase"></i>
			</NavLink>
			<NavLink exact className="about about-link" activeClassName="current" to='/about'>
				<i className="icon-user"></i>
			</NavLink>
			<NavLink exact className="contact" activeClassName="current" to='/contact'>
				<i className="icon-mail-alt"></i>
			</NavLink>
    	</nav>
    );
});

const Main = () => (
	<Switch>
		<Route exact path='/' component={Home}></Route>
		<Route exact path='/portfolio' component={Portfolio}></Route>
		<Route exact path='/about' component={About}></Route>
		<Route exact path='/contact' component={Contact}></Route>
	</Switch>
);

export default Frame;