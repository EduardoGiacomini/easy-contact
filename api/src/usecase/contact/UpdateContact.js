const contactBO = require('../../entity/business/ContactBO')

class UpdateContact {
    async execute(contact, responder) {
        try {
            await contactBO.update(contact)
            responder.success(await contactBO.find(contact._id))
        } catch (err) {
            responder.error(err)
        }
    }
}

const updateContact = new UpdateContact()
module.exports = updateContact
