const express = require('express');
const path = require('path');
const app = express();
const http = require('http').Server(app);
const { Server } = require('ws');
const wss = new Server({ server: http });

var engines = require('consolidate');

app.set('views', path.join(__dirname, 'public'));
app.engine('html', engines.mustache);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public'))); 

app.get('*', function(req, res) {
    res.render('index.html');
});

wss.on('connection', (ws) => {
    console.log('Client connected');
    ws.on('close', () => console.log('Client disconnected'));
  });

setInterval(() => {
wss.clients.forEach((client) => {
    client.send(new Date().toTimeString());
});
}, 1000);
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