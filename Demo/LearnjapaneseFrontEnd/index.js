var express = require('express');
var app =express();
var socket = require('socket.io')
var connection =require('./common/connection');

var server = app.listen(3000,()=>{
  console.log('stared port 3000!');
});
var socketIo =socket(server);

socketIo.on('connection',(socket)=>{
  console.log('A connexion has been created with' + socket.id);
  socket.on(connection.change,(changes)=>{
    socketIo.sockets.emit(connection.change,changes);
  });

  socket.on(connection.create,(newData)=>{
    socketIo.sockets.emit(connection.create,newData);
  })
});

