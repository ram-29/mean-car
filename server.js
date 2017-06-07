const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

const api = require('./server/routes/api');

const envPort = 1337;
const dbUrl = "mongodb://localhost/mean-car";

//Middleware
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Static Folder
app.use(express.static(path.join(__dirname, 'dist')));

//API
app.use('/api', api);

//DB Connection
mongoose.connect(dbUrl);
let db = mongoose.connection;

db.on('error', (err) => consloe.log(err));
db.once('open',() => console.log(`Connected on database: ${ dbUrl }`));

//App Init
app.listen(envPort, () => console.log(`Server running on port: ${ envPort }`));