
const { PeerServer } = require("peer");
const express = require("express");
const path = require("path");

// PeerJS stuff
recvrs = [];

const port = 3000;

const server = PeerServer({port: 9000, key: 'peerjs', path: '/peerjs'}, server => {
	const host = server.address().address;
	const port = server.address().port;

	console.log("Started PeerServer on %s, port: %s", host, port);
});

server.on("connection", recvr => {
	id = recvr.getId()
	if (recvrs.includes(id) === false){
		recvrs.push(id)
	}
});

server.on("disconnect", recvr => {
	recvrs = recvrs.filter(function(c) {return c !== recvr.getId()})
});

// Web stuff
let app = express();

app.use(express.static(path.join(__dirname, 'views')))
app.set('view engine', 'pug');

app.get("/", (req, res) => {
	res.render('index.pug', { recvrs: recvrs});
});

app.listen(port, () => {
	console.log(`Express is running on port ${port}`);
});


