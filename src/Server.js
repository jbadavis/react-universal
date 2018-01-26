import React from 'React';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Express from 'express';
import nunjucks  from 'nunjucks';
import thunk from 'redux-thunk';
import universalApp from './app/reducers';
import App from './app/App';

const app = Express();
const port = 8080;
const context = {};

nunjucks.configure('./src/views', {
  autoescape: false,
  express: app
});

app.use('/', Express.static('./dist/public'));

app.get('*', (req, res) => {
  const store = createStore(universalApp, applyMiddleware(thunk));

  const markup = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context} >
        <App/>
      </StaticRouter>
    </Provider>
  );
  
  const state = store.getState();

  state.title = process.argv[2] === '--demo' ? 'I\'m from the Server' : 'Hello';

  const preloadedState = JSON.stringify(state);
  
  return res.render('index.prod.njk', { markup, preloadedState });
});

app.listen(port, () => console.log(`Listening on ${ port }`));
