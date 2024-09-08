import express from 'express';

const app = express();


app.get('/', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello GCP Cloud Run!!!!!');
});

app.get('/transactions', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/json'});
    res.end(JSON.stringify({transactions: [{
        id: 1,
        amount: 100,
        description: 'Deposit',
        date: '2021-10-01T00:00:00.000Z'
    }, {
        id: 2,
        amount: 50,
        description: 'Withdraw',
        date: '2021-10-02T00:00:00.000Z'
    }]}));
})

app.get('/balance', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/json'});
    res.end(JSON.stringify({ balance: 1000, accountId: 1 }));
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})