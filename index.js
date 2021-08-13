const express = require('express');
const massive = require('massive')
require('dotenv').config()
const { SERVER_PORT, CONNECTION_STRING } = process.env;
const { create, getOne, getAll, update, deleteOne } = require('./products_controller');

const app = express();

app.use(express.json());

massive({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnauthorized: false }
})
    .then((dbInstance) => {
        app.set('db', dbInstance);
    })
    .catch(e => console.log(e));

app.get('/api/products', getAll);
app.get('/api/products/:id', getOne);
app.put('/api/products/:id', update);
app.post('/api/products', create);
app.delete('/api/products/:id', deleteOne);

app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`));