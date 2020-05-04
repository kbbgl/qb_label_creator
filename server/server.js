var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static('client'))

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname,'../client/index.html'));
});

app.post('/create', (req, res) => {
    console.log(`/create called`);

    console.log(`request body: ${JSON.stringify(req.body, null, 3)}`)

    var request = req.body;
    
    res.send(200);
})

app.listen(8080);