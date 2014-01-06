var stdout = document.getElementById('stdout');
stdout.innerHTML += 'Hello World\n';

var socket = io.connect('http://localhost:5000');
socket.on('log', function (data) {
    stdout.innerHTML += data + '\n';    
});