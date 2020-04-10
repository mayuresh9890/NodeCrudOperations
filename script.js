//const mysql = require('mysql');
const express = require('express');
const bodyparser = require('body-parser');
const fs = require('fs');
var app = express();
//Configuring express server
app.use(bodyparser.json());
//app.use(bodyParser.urlencoded({ extended: true }));

//MySQL details
// var mysqlConnection = mysql.createConnection({
// host: 'localhost',
// user: 'root',
// password: 'edu1234',
// database: 'learner',
// multipleStatements: true
// });

// mysqlConnection.connect((err)=> {
// if(!err)
// console.log('Connection Established Successfully');
// else
// console.log('Connection Failed!'+ JSON.stringify(err,undefined,2));
// });

//Establish the server connection
//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));

// variables
const dataPath = './user.json';

// READ
app.get('/api/users', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            throw err;
        }
        res.send(JSON.parse(data));
    });
});


    // mysqlConnection.query('SELECT * FROM learnerdetails', (err, rows, fields) => {
    // if (!err)
    // res.send(rows);
    // else
    // console.log(err);
    // })