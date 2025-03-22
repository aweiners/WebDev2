const express = require('express');
const posts = express.Router()

posts.get("/", (req, res) => {
    res.send("User List")
}) 

posts.get("/new", (req, res) => {
    res.send("User New Form")
})

posts.post('/', (req, res) => {
    res.send("Create User!")
})

posts.get('/:id', (req, res) => {
    res.send(`Get User with ID ${render.params.id}`)
})

module.exports = posts