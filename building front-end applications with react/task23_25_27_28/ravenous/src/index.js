
import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';
import register from './registerServiceWorker.js';

ReactDOM.render(<App />, document.getElementById('root'));
register();


