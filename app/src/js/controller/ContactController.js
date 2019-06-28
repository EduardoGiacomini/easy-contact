import GeneratorHTMLCode from '../utilities/generatorHTMLCode'
import axios from '../utilities/axios'

export default class ControllerController {
    constructor() {
        this.contacts = []
    }

    create(contact) {
        axios.post('contacts', contact)
            .then(response => {
                this.contacts.push(response.data)
                this.renderContacts()
            })
            .catch(() => {
                alert('Ocorreu um erro durante a criação do contato :(')
            })
    }

    delete(contactId) {
        axios.delete(`contacts/${contactId}`)
            .then(() => {
                this.contacts = this.contacts.filter(contact => contact._id !== contactId)
                this.renderContacts()
            })
            .catch(() => {
                alert('Ocorreu um erro durante a exclusão do contato :(')
            })
    }

    findAll() {
        axios.get('contacts')
            .then(response => {
                this.contacts = response.data
                this.renderContacts()
            })
            .catch(() => {
                alert('Ocorreu um erro durante a busca pelos contatos :(')
            })
    }

    update(contactId, contactUpdate) {
        axios.patch(`contacts/${contactId}`, contactUpdate)
            .then(response => {
                this.contacts = this.contacts.map(contact => contact._id === response.data._id ? response.data : contact)
                this.renderContacts()
            })
            .catch(() => {
                alert('Ocorreu um erro durante a edição do contato :(')
            })
    }

    renderContacts() {
        GeneratorHTMLCode.generateCard('.main', this.contacts)
    }
}