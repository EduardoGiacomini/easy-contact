import Controller from './controller/controller';

const ControllerContact = new Controller('contacts');
ControllerContact.initialize();

export default class Form {

    static onSubmit(event, ref) {
        event.preventDefault();

        const inputs = document.querySelectorAll(ref);

        const [name, email, phone] = inputs;

        const contact = {
            id: window.crypto.getRandomValues(new Uint32Array(1))[0],
            name: name.value,
            email: email.value,
            phone: phone.value,
            favorite: false,
        };

        ControllerContact.save(contact);

        inputs.forEach(input => input.value = "");
    };

    static onDelete(id) {
        ControllerContact.delete(id);
    };

    static onFavorite(id) {
        ControllerContact.favorite(id);
    };

};