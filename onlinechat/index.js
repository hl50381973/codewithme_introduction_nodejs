                var app = require('express')();
                var http = require('http').Server(app);
                var io = require('socket.io')(http);

                app.get('/', function(req, res){
                  res.sendFile(__dirname + '/index.html');
                });

                http.listen(3000, function(){
                  console.log('listening on *:3000');
                });
				
				app.get('/lib/*', function(req, res){
					
                  res.sendFile(__dirname + '/lib/' + req.params[0]);
                });
				
io.on('connection', function(socket){
	socket.on('chat', function(msg){
	console.log('message: ' + msg);
	});
});


io.on('connection', function(socket){
    socket.on('chat', function(msg){
        console.log('message: ' + msg);
        io.emit('message', msg);
  });
});