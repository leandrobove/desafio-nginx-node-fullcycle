// Server
const express = require('express')

const app = express();
const port = 3000

// Database
const config = {
    host: 'db',
    user: 'root',
    password: '',
    database: 'nodedb'
};

const mysql = require('mysql2')
const connection = mysql.createConnection(config)

connection.query(`CREATE TABLE IF NOT EXISTS people (id int not null auto_increment, name varchar(255), primary key(id))`)

connection.query(`INSERT INTO people(name) VALUES('Leandro'),('Nome 2'),('Nome 3')`)

var people = []
connection.query('SELECT name FROM people', function (err, result) {
    people = result
});


// Controller
app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html')
    res.write('<h1>Full Cycle Rocks!</h1>');
    for (const i in people) {
        res.write('<p>- ' + people[i].name + '</p>');
    }
    res.end();
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

// Close database connection
connection.end()