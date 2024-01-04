const express = require('express')
const mysql = require('mysql')

const app = express()

const PORT = 3000

const configDB = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

const connection = mysql.createConnection(configDB)
const sql = `INSERT INTO people(name) values('Pedro')`
connection.query(sql)
connection.end()

const getPeople = 'SELECT * FROM people'
const people = connection.query(getPeople)
connection.end()

app.get('/', (_, res) => {
    res.send('<h1>Full Cycle Rocks!</h1>')
    res.send(people)
})

app.listen(PORT, () => {
    console.log(`Running in port ${PORT}`)
})
