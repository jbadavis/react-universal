import React from 'React';
import { renderToString } from 'react-dom/server';
import express from 'express';
import App from './App';

const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use('/dist', express.static('dist'));

app.get('*', (req, res) => {
  const markup = renderToString(<App/>);
  return res.render('index', { markup });
});

app.listen(8080, () => console.log('Listening on 3000'));
