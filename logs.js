var stdout = document.getElementById('stdout');
stdout.innerHTML += 'Hello World\n';

var socket = io.connect('http://localhost:5000');
socket.on('news', function (data) {
    stdout.innerHTML += data.hello + '\n';    
    socket.emit('my other event', { my: 'data' });
});