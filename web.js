
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
	if (id.substr(id.length - 5) === '-recv'){
		recvrs.push(id.replace('-recv', ''))
	}

});

server.on("disconnect", recvr => {
	recvrs = recvrs.filter(function(c) {return c+'-recv' !== recvr.getId()})
});

// Web stuff
let app = express();

app.use(express.static(path.join(__dirname, 'views')))
app.set('view engine', 'pug');

app.get("/", (req, res) => {
	  res.render('index.pug', { greet: 'Hey'});
});

app.get("/receive", (req, res) => {
	res.render('receive.pug');
});

app.get("/send", (req, res) => {
	res.render('send.pug', {recvrs: recvrs});
});


app.listen(port, () => {
	  console.log(`Express is running on port ${port}`);
});


