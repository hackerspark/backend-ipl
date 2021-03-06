(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}((function () { 'use strict';

  // const WebSocket = require('ws');

  // const wss = new WebSocket.Server({ port: 8999 });

  // wss.on('connection', function connection(ws) {
  //   ws.on('message', function incoming(message) {
  //     console.log('received: %s', message);
  //   });

  //   ws.send('something');
  // });



  const WebSocket = require('ws');

  const wss = new WebSocket.Server({ port: 8999 });

  wss.on('connection', function connection(ws) {
    ws.onmessage = (message) => {
    	console.log('received: %s', message);
      updateClients(message.data);
    };
  });

  const updateClients = (message) => {
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  };

})));
//# sourceMappingURL=websocket.js.map
