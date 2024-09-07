import express from 'express';

const app = express();


app.get('/', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
});

app.get('/transactions', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/json'});
    res.end(JSON.stringify({transactions: []}));
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})