import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { withRouter } from 'react-router-dom';

class Scrollbar extends React.Component {
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
		const { match, location, history } = this.props;
		let cleanPath = location.pathname;
		cleanPath = cleanPath.replace(/\//g,'');
		if (cleanPath === '') { cleanPath = 'home'; }

		return (
			<article className={ `home ${cleanPath}` }>
				<div className="scroll-wrap">
					<Scrollbars
						autoHide
						autoHideTimeout={500}
						className="container"
						renderView={props => <div {...props} className="view"/>}
						renderTrackVertical={props => <div className={`track-vertical ${this.state.showingScrollbar ? 'scrollbar-wait' : 'scrollbar-show'}`} />}
						renderThumbVertical={props => <div {...props} className="thumb-vertical"/>}>        
						{this.props.children}
					</Scrollbars>
				</div>
			</article>
		);
	}
}

export default withRouter(Scrollbar);