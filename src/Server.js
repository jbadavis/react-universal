import React from 'React';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import express from 'express';
import App from './app/App';

const app = express();
const port = 8080;
const context = {};

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use('/', express.static('./dist/public'));

app.get('*', (req, res) => {
  const markup = renderToString(
    <StaticRouter location={req.url} context={context} >
      <App/>
    </StaticRouter>
  );

  return res.render('index', { markup });
});

app.listen(port, () => console.log(`Listening on ${ port }`));
