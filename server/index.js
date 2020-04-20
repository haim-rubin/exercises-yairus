const express = require('express')
const path = require('path')
const open = require('open')
const port = 3000

const server =  ({ port }) => {
    const app = express()
    app.use('/js', express.static(path.join(__dirname, '../client/js')))
    app.use('/css', express.static(path.join(__dirname, '../client/css')))
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname,'../client/html/index.html'));
    });
    app.get('/say', (req, res) => res.send('Hello World!'))

    const listener = app.listen(port, () => {
        const url = `http://localhost:${listener.address().port}`
        console.log(`Example app listening at ${url}`)
        open(url)
    })
}

server({ port })