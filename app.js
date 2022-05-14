const express = require("express")
const {projects} = require("./handlers/projects")
require('dotenv').config()


var app = express();
const PORT = process.env.PORT || 5000;


app.get("/", (req, res) => {
    res.send("Hi dear welcome to my nodejs & firebase project")
})


app.get("/projects", projects)


app.listen(PORT, function () {
    console.info(`enjoy the project it's started at: ${PORT}!`)
})

