import React from 'React';
import { renderToString } from 'react-dom/server';
import express from 'express';
import App from './app/App';

const app = express();

const port = 8080;

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use('/public', express.static('./dist/public'));

app.get('*', (req, res) => {
  const markup = renderToString(<App/>);
  return res.render('index', { markup });
});

app.listen(port, () => console.log(`Listening on ${ port }`));
