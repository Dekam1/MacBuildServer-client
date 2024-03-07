import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store/store.js';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Router>
		<Provider store={store}>
			<App />
		</Provider>
	</Router>
);

