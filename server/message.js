/*
 * @Author: zhou teng
 * @Date: 2020-09-21 10:45:41
 * @LastEditTime: 2020-09-21 10:47:53
 */
const WebSocket = require('ws');

const WebSocketServer = WebSocket.Server
const wss = new WebSocketServer({
    port: 9898
});

wss.on('connection', function (ws) {
    console.log(`[SERVER] connection()`);
    ws.on('message', function (message) {
        console.log(`[SERVER] Received: ${message}`);
        ws.send(`ECHO: ${message}`, (err) => {
            if (err) {
                console.log(`[SERVER] error: ${err}`);
            }
        });
    })
});