const express = require('express')
const Responder = require('../../commons/Responder')
const updateContact = require('../../usecase/contact/UpdateContact')

const router = express.Router()
router.patch('/contacts/:contactId', (req, res, next) => {
    const contactId = req.params.contactId
    const contact = req.body
    updateContact.execute(contactId, contact, new Responder(req, res, next))
})

module.exports = router
