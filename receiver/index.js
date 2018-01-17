'use strict'

/*
*  Modify this file as needed.
*/

const wsServer = require("ws").Server,
  wss = new wsServer({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
        console.log( message);
  });

});
