
const { PeerServer } = require("peer");
const express = require("express");
const path = require("path");

let app = express();

clients = [];

const port = 3000;

const server = PeerServer({port: 9000, key: 'peerjs', path: '/peerjs'}, server => {
	  const host = server.address().address;
	  const port = server.address().port;

	  console.log("Started PeerServer on %s, port: %s", host, port);
});

app.use(express.static(path.join(__dirname, 'views')))
app.set('view engine', 'pug');

app.get("/", (req, res) => {
	  res.render('index.pug', { greet: 'Hey'});
});

app.get("/receive", (req, res) => {
	res.render('receive.pug');
});

app.get("/send", (req, res) => {
	res.render('send.pug', {clients: clients});
});


app.listen(port, () => {
	  console.log(`Express is running on port ${port}`);
});

server.on("connection", client => {
	clients.push(client.getId())
	console.log(`Client connected: ${clients}`);
});

server.on("disconnect", client => {
	clients = clients.filter(function(c) {return c !== client.getId()})
	console.log(`Client disconnected: ${clients}`);
});

