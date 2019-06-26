const express = require('express')
const cors = require('cors')

const createContact = require('./router/contact/CreateContact')
const deleteContact = require('./router/contact/DeleteContact')
const findAllContacts = require('./router/contact/FindAllContacts')

class Server {
    constructor() {
        this.express = express()
        this.middlewares()
        this.routes()
    }

    middlewares() {
        this.express.use(express.json())
        this.express.use(express.urlencoded({ extended: true }))
        this.express.use(cors())
    }

    routes() {
        this.express.use('/api', createContact)
        this.express.use('/api', deleteContact)
        this.express.use('/api', findAllContacts)
    }
}

module.exports = new Server().express
