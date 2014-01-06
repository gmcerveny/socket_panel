var stdout = document.getElementById('stdout');
stdout.innerHTML += 'Hello World\n';

var socket = io.connect('http://localhost:5000');
socket.on('log', function (data) {
    stdout.innerHTML += data + '\n';    
});
socket.on('reload', function (data) {
    stdout.innerHTML += 'RELOAD - APP_ID: ' + data.APP_ID + '\n';
    chrome.devtools.inspectedWindow.reload();
})