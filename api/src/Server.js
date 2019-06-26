const express = require('express')
const cors = require('cors')

const createNewContact = require('./router/contact/CreateNewContact')

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
    }
}

module.exports = new Server().express
