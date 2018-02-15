/* eslint-env browser */
/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/normalize.css';
import App from './App';
import './styles/index.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
