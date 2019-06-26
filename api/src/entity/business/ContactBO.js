const Contact = require('../schema/Contact')

class ContactBO {
    async create(contact) {
        return await Contact.create(contact)
    }

    async delete(contactId) {
        return await Contact.remove({_id: contactId})
    }

    async findAll() {
        return await Contact.find({})
    }

    async find(contactId) {
        return await Contact.findOne({_id: contactId})
    }

    async update(contact) {
        return await Contact.updateOne({_id: contact._id}, contact)
    }
}

const contactBO = new ContactBO()
module.exports = contactBO
