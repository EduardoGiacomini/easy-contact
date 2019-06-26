const express = require('express')
const Responder = require('../../commons/Responder')
const findAllContacts = require('../../usecase/contact/FindAllContacts')

const router = express.Router()
router.get('/contacts', (req, res, next) => {
    findAllContacts.execute(new Responder(req, res, next))
})

module.exports = router
