var express = require('express');
var app = express();
// for parsing the body in POST request
var bodyParser = require('body-parser');

var commands =[{
    name: "hello"
}];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// GET /commands
app.get('/commands', function(req, res){
    return res.json(commands);    
});

/* POST /commands
    {
        "command": {
            "name": "hello world"
        }
    }
*/
app.post('/commands', function (req, res) {
    var command = req.body.command;
    commands.push(command);

    return res.send('command recorded');
});

app.listen('3000', function(){
    console.log('Server listening on port 3000');
});