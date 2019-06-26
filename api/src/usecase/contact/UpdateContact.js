const contactBO = require('../../entity/business/ContactBO')

class UpdateContact {
    async execute(contactId, contact, responder) {
        try {
            await contactBO.update(contactId, contact)
            responder.success(await contactBO.find(contactId))
        } catch (err) {
            responder.error(err)
        }
    }
}

const updateContact = new UpdateContact()
module.exports = updateContact
