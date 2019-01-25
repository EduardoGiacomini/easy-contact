/**
 * import full sass code in main.js file
 */
import '../sass/main.scss';
import Form from './form';

const FormContact = new Form({ element: document.querySelector('#form-contact') });
document.querySelector('#btn-new-contact').addEventListener('click', () => FormContact.toggleForm());