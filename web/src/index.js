import React from 'react';
import ReactDOM from 'react-dom';
import Home from './src/Pages/Home';

import store from './src/store';

import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root')
);
