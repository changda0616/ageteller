var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3000;

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});

app.use(express.static('public'));

io.on('connection', function(socket){
      socket.on('user login', function(){
        socket.emit('user login',{ 'username': 'Chad', 'img': '"Logo.png"'});
      });
      socket.on('login time', function(data){
        console.log(data);
      });
});
