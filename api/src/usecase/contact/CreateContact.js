const contactBO = require('../../entity/business/ContactBO')

class CreateContact {
    async execute(contact, responder) {
        try {
            responder.success(await contactBO.create(contact))
        } catch (err) {
            responder.error(err)
        }
    }
}

const createContact = new CreateContact()
module.exports = createContact
