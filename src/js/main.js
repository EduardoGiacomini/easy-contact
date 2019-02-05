/**
 * import full sass code in main.js file
 */
import '../sass/main.scss';
import Form from './form';

const FormContact = new Form({ element: document.querySelector('#form-contact') });

document.querySelector('#form-contact').addEventListener('submit', event => FormContact.onSubmit(event, '.form__input'));

function onDelete(id) {
    console.log(id);
};

document.querySelector('#btn-new-contact').addEventListener('click', () => {
    const icon = document.querySelector('#btn-new-contact svg');
    icon.style.transition = "all .3s";

    if (icon.style.transform === "" || icon.style.transform === "rotate(0deg)") {
        icon.style.transform = "rotate(180deg)";
    } else {
        icon.style.transform = "rotate(0deg)";
    }

    FormContact.toggleForm()
});