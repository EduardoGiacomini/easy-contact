const express = require('express')
const Responder = require('../../commons/Responder')
const createContact = require('../../usecase/contact/CreateContact')

const router = express.Router()
router.post('/contacts', (req, res, next) => {
    const contact = req.body
    createContact.execute(contact, new Responder(req, res, next))
})

module.exports = router
