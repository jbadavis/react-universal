import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import universalApp from './app/reducers';
import App from './app/App';

if (module.hot) {
  module.hot.accept('./app/App', () => require('./app/App'));

  module.hot.accept('./app/reducers', () => {
    const newRootReducer = require('./app/reducers');
    store.replaceReducer(newRootReducer);
  });
}

const preloadedState = window.__PRELOADED_STATE__;

const store = createStore(universalApp, preloadedState, applyMiddleware(thunk));

delete window.__PRELOADED_STATE__;

hydrate (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('main')
);
