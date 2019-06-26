const contactBO = require('../../entity/business/ContactBO')

class FindAllContacts {
    async execute(responder) {
        try {
            responder.success(await contactBO.findAll())
        } catch (err) {
            responder.error(err)
        }
    }
}

const findAllContacts = new FindAllContacts()
module.exports = findAllContacts
