import React from 'React';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Express from 'express';
import nunjucks  from 'nunjucks';
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
  const store = createStore(universalApp);

  const markup = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context} >
        <App/>
      </StaticRouter>
    </Provider>
  );

  const preloadedState = JSON.stringify(store.getState());

  return res.render('index.prod.njk', { markup, preloadedState });
});

app.listen(port, () => console.log(`Listening on ${ port }`));
