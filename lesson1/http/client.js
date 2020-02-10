const http = require('http');

const URL = 'http://localhost:8123';

http.get(URL, (res) => {
    let data = '';

    /* A chunk of data was received */
    res.on('data', (chunk) => {
        data += chunk;
    });

    /* The whole data was received */
    res.on('end', () => {
        console.log(data);
    });
}).on('error', (err) => {
    console.log(`Error: ${err.message}`);
});
