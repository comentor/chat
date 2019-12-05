const express = require('express');
const path = require('path');
const app = express();
const http = require('http').Server(app);
const { Server } = require('ws');
const wss = new Server({ server: http });
const  engines = require('consolidate');

// const environment = require('./src/environments/environment');

const fbAdmin = require("firebase-admin");

const serviceAccount = require("./firebase-admin.json");
fbAdmin.initializeApp({
  credential: fbAdmin.credential.cert(serviceAccount),
  databaseURL: "https://foko-chat.firebaseio.com"
});

const db = fbAdmin.firestore();
const listeningStartedAt = (new Date()).toISOString();
db.collection('rooms').onSnapshot(docSnapshot => {

    docSnapshot.docChanges().forEach((change) => {
        // console.log('======ROOMS');
        // console.log(change.doc.data());
        // console.log(change);
    });
    // console.log(`ROOMS: Received doc snapshot:`);
    // console.log(docSnapshot.changes);
    // console.log(docSnapshot);
    // ...
  }, err => {
    console.log(`Encountered error: ${err}`);
  });

  db.collection('messages').onSnapshot(docSnapshot => {
    docSnapshot.docChanges().forEach((change) => {
        const data = change.doc.data();
        if (data.sentAt > listeningStartedAt) {
            console.log(`I have to send an email from room ${data.roomId} except by ${data.sentBy}`);
        }
    });
    // console.log(`MESSAGES: Received doc snapshot:`);
    // console.log(docSnapshot.changes);
    // console.log(docSnapshot);
    // ...
  }, err => {
    console.log(`Encountered error: ${err}`);
  });

// const firebase = require("firebase/app");
// const defaultProject = firebase.initializeApp({
//     apiKey: 'AIzaSyBbykWqKtUw8A-gFY3sovcLZmX60YCdNDs',
//     authDomain: 'foko-chat.firebaseapp.com',
//     databaseURL: 'https://foko-chat.firebaseio.com',
//     projectId: 'foko-chat',
//     storageBucket: 'foko-chat.appspot.com',
// });
// const firestore = defaultProject.firestore();
// const ref = firestore.collection('messages');
// console.log(ref);

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