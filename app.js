var express = require('express'); 
var http = require('http'); 
var app = express(); 
const PORT = process.env.PORT||80;
var server = http.createServer(app); 
app.get('/', function(req, res) {
     res.send('root page'); 
    }); 
app.get('/start', function(req, res){
     res.send('start page'); 
    }); 
server.listen(PORT,()=> {
     console.log('Server listen on port ' + server.address().port); 
    });
