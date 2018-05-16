import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Frame from './components/Container/Frame';

import './css/main.scss';

render((
	<BrowserRouter>
		<Frame />
	</BrowserRouter>
), document.getElementById('frame'));


