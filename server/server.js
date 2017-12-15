const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const controller = require('./controller');
require('dotenv').config()

const app = express();
app.use(bodyParser.json());
app.use(cors());

// app.get('/api/shelf/:id', controller.readShelves)

const port = process.env.PORT
app.listen(port, () => console.log(`listening on port ${port}`));