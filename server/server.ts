const express = require('express');
const path = require('path');
const app = express();
const http = require('http').Server(app);
// const { Server } = require('ws');
// const wss = new Server({ server: http });
import { ChatApi } from './chatApi';
import * as bodyParser from 'body-parser'

const chatApi = new ChatApi(http);
const publicDir = path.join(__dirname, '../', 'public'); 

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
app.set('views', publicDir);
app.use(express.static(publicDir)); 
app.post('/api/createRoom', async function(req, res) {
  try {
    console.log(req.body);
    const result = await chatApi.createRoom(req.body);
    res.json(result);
  } catch (e) {
    res.json({success: false, errormsg: e});
  }
});
app.get('*', function(req, res) {
  res.sendFile(path.join(publicDir, 'index.html'));
});
// wss.on('connection', (ws) => {
//     ws.on('close', () => console.log('Client disconnected'));
//   });

// setInterval(() => {
// wss.clients.forEach((client) => {
//     client.send(new Date().toTimeString());
// });
// }, 1000);
// io.sockets.on('connection', function(socket) {
//     console.log('new client');
//     socket.on('username', function(username) {
//         socket.username = username;
//         io.emit('is_online', '🔵 <i>' + socket.username + ' join the chat..</i>');
//     });

//     socket.on('disconnect', function(username) {
//         io.emit('is_online', '🔴 <i>' + socket.username + ' left the chat..</i>');
//     })

//     socket.on('chat_message', function(message) {
//         io.emit('chat_message', '<strong>' + socket.username + '</strong>: ' + message);
//     });
// });

// setInterval(() => io.emit('time', new Date().toTimeString()), 1000);

const port = process.env.PORT || 8080;;
const server = http.listen(port, function() {
    console.log('listening on *:' + port);
});