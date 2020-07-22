const express = require('express')
const app = express()
const port = 3000
var os = require("os");
var hostname = os.hostname();

app.get('/', (req, res) => res.send(`Hello World from ${hostname}`))

app.listen(port, () => console.log(`Example app listening at http://${hostname}:${port}`))