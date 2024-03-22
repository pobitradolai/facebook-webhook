const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // You can change this to any port you prefer

app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
    const body = req.body;
    console.log('Received webhook payload:', body);
    
    // Process the received lead data and insert into MySQL database
    insertLeadIntoDatabase(body);

    res.status(200).send('Webhook received successfully');
});

app.listen(port, () => {
    console.log(`Webhook server listening at http://localhost:${port}`);
});
