const express = require('express');
const path = require('path');

require('./config');

const app = express();

const port = process.env.PORT;

app.use(express.static('dist'));

app.get('*', (req, res) => {

	res.sendFile('index.html');
	
});

app.listen(port, () => {

	console.log('Server Listening on Port ', port);

});
