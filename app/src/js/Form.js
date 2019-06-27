import ContactController from './controller/ContactController'

const contactController = new ContactController()
contactController.findAll()

export default class Form {
    static onSubmit(event, ref) {
        event.preventDefault()

        const [name, email, phone] = document.querySelectorAll(ref)

        const contact = {
            name: name.value,
            email: email.value,
            phone: phone.value
        }

        contactController.create(contact)

        document.querySelectorAll(ref).forEach(input => input.value = '')
    }

    static onDelete(contactId) {
        contactController.delete(contactId)
    }

    static onFavorite(contactId, isFavorite) {
        if (isFavorite === 'true') {
            contactController.update(contactId, {isFavorite: true})
        } else {
            contactController.update(contactId, {isFavorite: false})
        }
    }
}