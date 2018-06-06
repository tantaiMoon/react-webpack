import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

let destnation = document.querySelector('#root');
ReactDOM.render(
		<div>
			<App bgcolor = "#ff66d3"/>
			<App bgcolor = "#ff6623"/>
		</div>,
		destnation
	)