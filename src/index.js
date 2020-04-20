import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Helmet } from 'react-helmet'
import * as serviceWorker from './serviceWorker';
const TITLE = 'Documente';

ReactDOM.render(
  <React.StrictMode>
     <Helmet>
          <title>{ TITLE }</title>
          <link rel="icon" type="image/png" href="/img/favicon-16x16.png" sizes="16x16" />
        </Helmet>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
