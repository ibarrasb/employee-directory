import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//renders app to the root of the html file
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
