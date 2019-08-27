const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const path = require('path');

const app = express();
const config = require('./config/webpack.dev');
const compiler = webpack(config);
const port = 3000;

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  logLevel: 'warn',
  publicPath: config.output.publicPath,
}));

app.use(webpackHotMiddleware(compiler, {
  log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000,
}));

app.listen(port, () => console.log(`Listening on port ${port}`));
