const express = require('express')
const Responder = require('../../commons/Responder')
const createNewContact = require('../../usecase/contact/CreateNewContact')

const router = express.Router()
router.post('/contacts', (req, res, next) => {
    const contact = req.body
    createNewContact.execute(contact, new Responder(req, res, next))
})

module.exports = router
