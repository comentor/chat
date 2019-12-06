import { ChatApi } from './chatApi';
import * as bodyParser from 'body-parser'

const express = require('express');
const path = require('path');
const app = express();
const http = require('http').Server(app); 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Allow any method from any host and log requests
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
  if('OPTIONS' === req.method) {
      res.sendStatus(200);
  } else {
      console.log(`${req.ip} ${req.method} ${req.url}`);
      next();
  }
});

const publicDir = path.join(__dirname, '../', 'public');

app.set('views', publicDir);
app.use(express.static(publicDir)); 

const chatApi = new ChatApi(http);
app.post('/api/room', async (req, res) => {
  try {
    res.json({success: true, response: await chatApi.apiRoom(req.body.data, req.body.method)});
  } catch (e) {
    res.json({success: false, errormsg: String(e)});
  }
});

app.post('/api/message', async (req, res) => {
  try {
    res.json({success: true, response: await chatApi.apiMessage(req.body.data, req.body.method)});
  } catch (e) {
    res.json({success: false, errormsg: e});
  }
});

app.get('*', function(req, res) {
  res.sendFile(path.join(publicDir, 'index.html'));
});

const port = process.env.PORT || 8080;;
const server = http.listen(port, function() {
    console.log('listening on *:' + port);
});