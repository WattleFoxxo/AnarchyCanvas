// webserver
const express = require('express')
const app = express()
const http = require('http');
const server = http.createServer(app);
const nocache = require("nocache");
const path = require('path');

//app.use(nocache());

// image
const Jimp = require("jimp");

// sockets
const { Server } = require("socket.io");
const io = new Server(server);

// config
const config = require('./config.json')

var canvas;

// home page
app.get('/', function (req, res) {
    res.sendFile(__dirname+"/public/index.html")
})

// sockets
io.on("connection", (socket) => {

    socket.on("draw", (msg) => {
        canvas.setPixelColor(parseInt(config.canvas.colours[msg.colour]+"FF"), parseInt(msg.x), parseInt(msg.y));
        socket.broadcast.emit("server_draw", msg);
        socket.emit("server_draw", msg);
    });

    var address = socket.handshake.address;
    console.log("a user connected with ip: "+socket.request.connection.remoteAddress);
    socket.on("disconnect", () => {
        console.log("user disconnected");
    });
});

app.get('/api/canvas', function (req, res) {
    canvas.write(path.resolve(config.canvasPath))
    canvas.getBase64(Jimp.MIME_PNG, (err, src) => {
        res.send(src);
    });
})

app.get('/api/config', function (req, res) {
    res.send(JSON.stringify(config.canvas));
})

app.use(express.static('public'))

Jimp.read(path.resolve(config.canvasPath), (err, image) => {
    if (err) throw err;
    canvas = image
});

server.listen(config.port, () => {
    console.log(`listening on *:${config.port}`);
});