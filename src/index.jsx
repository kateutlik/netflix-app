import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import 'normalize.css';

ReactDOM.render(<App />, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
