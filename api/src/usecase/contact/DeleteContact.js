const contactBO = require('../../entity/business/ContactBO')

class DeleteContact {
    async execute(contactId, responder) {
        try {
            responder.success(await contactBO.delete(contactId))
        } catch (err) {
            responder.error(err)
        }
    }
}

const deleteContact = new DeleteContact()
module.exports = deleteContact
