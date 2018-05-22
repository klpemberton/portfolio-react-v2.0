import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink,
	Redirect
} from "react-router-dom";

const AnimationExample = () => (
	<Router>
		<Route
			render={({ location }) => (
				<div style={styles.fill}>
					<Route
						exact
						path="/"
						/* render={() => <Redirect to="/" />} */
					/>

					<nav style={styles.nav}>
						<NavLinky className="home home-link" activeClassName="current" to='/'>
							<i className="icon-home"></i>
						</NavLinky>
						<NavLinky className="about about-link" activeClassName="current" to='/about'>
							<i className="icon-user"></i>
						</NavLinky>
						<NavLinky className="portfolio portfolio-link" activeClassName="current" to='/portfolio'>
							<i className="icon-briefcase"></i>
						</NavLinky>
						
						<NavLinky className="contact" activeClassName="current" to='/contact'>
							<i className="icon-mail-alt"></i>
						</NavLinky>
					</nav>

					<div style={styles.content}>
						<TransitionGroup>
							{/* no different than other usage of
								CSSTransition, just make sure to pass
								`location` to `Switch` so it can match
								the old location as it animates out
						*/}
							<CSSTransition key={location.key} classNames="fade" timeout={300}>
								<Switch location={location}>
									<Route path='/' component={Home}></Route>
									<Route path='/about' component={About}></Route>
									<Route path='/portfolio' component={Portfolio}></Route>
									<Route path='/contact' component={Contact}></Route>
									{/* Without this `Route`, we would get errors during
										the initial transition from `/` to `/hsl/10/90/50`
								*/}
									<Route render={() => <div>Not Found</div>} />
								</Switch>
							</CSSTransition>
						</TransitionGroup>
					</div>
				</div>
			)}
		/>
	</Router>
);

const NavLinky = props => (
	<li style={styles.navItem}>
		<NavLink {...props} style={{ color: "inherit" }} />
	</li>
);

const Home = ({ match: { params } }) => (
	<div
		style={{
			...styles.fill,
			...styles.hsl,
			background: `hsl(${params.h}, ${params.s}%, ${params.l}%)`
		}}
	>
		hsl({params.h}, {params.s}%, {params.l}%)
	</div>
);

const About = ({ match: { params } }) => (
	<div
		style={{
			...styles.fill,
			...styles.rgb,
			background: `rgb(${params.r}, ${params.g}, ${params.b})`
		}}
	>
		rgb({params.r}, {params.g}, {params.b})
	</div>
);

const Portfolio = ({ match: { params } }) => (
	<div
		style={{
			...styles.fill,
			...styles.rgb,
			background: `rgb(${params.r}, ${params.g}, ${params.b})`
		}}
	>
		rgb({params.r}, {params.g}, {params.b})
	</div>
);

const Contact = ({ match: { params } }) => (
	<div
		style={{
			...styles.fill,
			...styles.rgb,
			background: `rgb(${params.r}, ${params.g}, ${params.b})`
		}}
	>
		rgb({params.r}, {params.g}, {params.b})
	</div>
);

const styles = {};

styles.fill = {
	position: "absolute",
	left: 0,
	right: 0,
	top: 0,
	bottom: 0
};

styles.content = {
	...styles.fill,
	top: "40px",
	textAlign: "center"
};

styles.nav = {
	padding: 0,
	margin: 0,
	position: "absolute",
	top: 0,
	height: "100%",
	width: "100%",
	display: "flex"
};

styles.navItem = {
	position: "relative",
	height:  "100%",
	width: "4%",
	left: "4%",
	textAlign: "center",
	flex: 1,
	listStyleType: "none",
	padding: "10px"
};

styles.hsl = {
	...styles.fill,
	color: "white",
	paddingTop: "20px",
	fontSize: "30px"
};

styles.rgb = {
	...styles.fill,
	color: "white",
	paddingTop: "20px",
	fontSize: "30px"
};

export default AnimationExample;