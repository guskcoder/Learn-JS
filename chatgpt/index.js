const WebSocket = require('ws');
const request = require('request');

const ws = new WebSocket(
  'wss://websocket.br4bet.com/app/app_key?protocol=7&client=js&version=5.1.1&flash=false'
);

let currentData = null;

ws.on('game', function incoming(data) {
  console.log(data);
});
