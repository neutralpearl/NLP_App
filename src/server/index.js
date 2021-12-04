const path = require('path');
// const process = require('process'); // unless localhost:8080 is viewed in Chrome incognito mode, browser displays "ReferenceError: process is not defined" when running functions that use variables defined as properties of process.env.
const express = require('express');
const cors = require('cors');
// const fetch = require('node-fetch');
const bodyParser = require('body-parser');

const dotenv = require('dotenv');
dotenv.config({ path: path.resolve(__dirname, "../.env") });
console.log(path.resolve(__dirname, "../.env"));

const API_KEY = process.env.API_KEY;
console.log(API_KEY); 

const app = express();

// configure CORS
app.use(cors());

// configure Express
app.use(express.static('dist'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

app.get('/', (req, res) => {
    // res.sendFile('dist/index.html') <-- switch to this for production
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, () => {
    console.log('App listening on port 8081')
})

// callback function for GET route (allows client-side JS to retrieve API key from server)
// const getKey = 
// GET route — NOT WORKING!
app.get('/get-key', (req, res) => {
    res.status(200).send(JSON.stringify({key: API_KEY}));
});
