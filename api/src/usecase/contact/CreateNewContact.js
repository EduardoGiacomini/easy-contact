const contactBO = require('../../entity/business/ContactBO')

class CreateNewContact {
    async execute(contact, responder) {
        try {
            responder.success(await contactBO.create(contact))
        } catch (err) {
            responder.error(err)
        }
    }
}

const createNewContact = new CreateNewContact()
module.exports = createNewContact
