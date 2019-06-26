const express = require('express')
const cors = require('cors')

const createNewContact = require('./router/contact/CreateNewContact')
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
        this.express.use('/api', createNewContact)
        this.express.use('/api', findAllContacts)
    }
}

module.exports = new Server().express
