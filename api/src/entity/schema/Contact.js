const mongoose = require('../../config/database')

const ContactSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String, required: true},
    isFavorite: {type: Boolean, default: false}
})

const Contact = mongoose.model('Contact', ContactSchema)

module.exports = Contact
