const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const controller = require('./controller');
require('dotenv').config()

// Simulation-1 74C
const app = express();
app.use(bodyParser.json());
app.use(cors());

// Simulation-1 70C
massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db',db)
})

// Simulation-1 74D-1, 74D-2, 74D-3, 74D-4
app.get('/api/shelf/:id', controller.readShelves)
app.get('/api/bin/:id', controller.readBin)
app.put('/api/bin/:id', controller.updateBin)
app.delete('/api/bin/:id', controller.deleteBin)
app.post('/api/bin/:id', controller.createBin)

const port = process.env.PORT
app.listen(port, () => console.log(`listening on port ${port}`));