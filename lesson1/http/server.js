const http = require('http');

const port = 8123;

http.createServer((req, res) => {
    res.write('Hello World');
    res.end();
}).listen(port).on('connection', () => {
    console.log('One more request');
});

console.log(`Listening to the port ${port}`);
