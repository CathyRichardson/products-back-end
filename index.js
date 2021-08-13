const express = require('express');
const massive = require('massive')
require('dotenv').config()
const { SERVER_PORT, CONNECTION_STRING} = process.env;

const app = express();

app.use(express.json());

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
})
.then((dbInstance) => {
    app.set('db', dbInstance);
})
.catch(e => console.log(e));

app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`) );