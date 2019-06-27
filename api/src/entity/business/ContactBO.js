const Contact = require('../schema/Contact')

class ContactBO {
    async create(contact) {
        return await Contact.create(contact)
    }

    async delete(contactId) {
        return await Contact.deleteOne({_id: contactId})
    }

    async findAll() {
        return await Contact.find({})
    }

    async find(contactId) {
        return await Contact.findOne({_id: contactId})
    }

    async update(contactId, contact) {
        return await Contact.updateOne({_id: contactId}, contact)
    }
}

const contactBO = new ContactBO()
module.exports = contactBO
