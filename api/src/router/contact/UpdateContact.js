const express = require('express')
const Responder = require('../../commons/Responder')
const updateContact = require('../../usecase/contact/UpdateContact')

const router = express.Router()
router.patch('/contacts', (req, res, next) => {
    const contact = req.body
    updateContact.execute(contact, new Responder(req, res, next))
})

module.exports = router
