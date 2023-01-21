const express = require("express");
const path = require("path");

let app = express();

const port = 3000;

app.use(express.static(path.join(__dirname, 'views')))
app.set('view engine', 'pug');

app.get("/", (req, res) => {
	  res.render('index.pug', { greet: 'Hey'});
});

app.get("/receive", (req, res) => {
	res.render('receive.pug');
});

app.get("/send", (req, res) => {
	res.render('send.pug');
});

app.listen(port, () => {
	  console.log(`Express is running on port ${port}`);
});
