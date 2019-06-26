const express = require('express')
const Responder = require('../../commons/Responder')
const deleteContact = require('../../usecase/contact/DeleteContact')

const router = express.Router()
router.delete('/contacts/:contactId', (req, res, next) => {
    const contactId = req.params.contactId
    deleteContact.execute(contactId, new Responder(req, res, next))
})

module.exports = router
