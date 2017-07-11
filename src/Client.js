import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import universalApp from './app/reducers';
import App from './app/App';

const store = createStore(universalApp);

if (module.hot) {
  // module.hot.accept();
  module.hot.accept('./app/reducers', () => {
    const newRootReducer = require('./app/reducers');
    store.replaceReducer(newRootReducer);
  });
}

render (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('main')
);
