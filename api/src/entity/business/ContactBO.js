const Contact = require('../schema/Contact')

class ContactBO {
    async create(contact) {
        return await Contact.create(contact)
    }

    async delete(contact) {
        return await Contact.remove({_id: contact})
    }

    async findAll() {
        return await Contact.find({})
    }

    async update(contact) {
        return await Contact.updateOne({_id: contact._id}, contact)
    }
}

const contactBO = new ContactBO()
module.exports = contactBO
