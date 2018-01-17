'use strict'

const WebSocket = require('ws');
let ws = new WebSocket('ws://0.0.0.0:8080');
/*
*  This function will be called for each event.  (eg: for each sensor reading)
*  Modify it as needed.
*/
module.exports = function(eventMsg, encoding, callback) {
  if (ws.readyState === ws.OPEN) {
		ws.send(JSON.stringify(eventMsg));
	}
	callback();
}
