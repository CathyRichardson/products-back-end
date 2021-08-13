const express = require('express');
const massive = require('massive')
require('dotenv').config()
const { SERVER_PORT } = process.env;

const app = express();

app.use(express.json());

app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`) );