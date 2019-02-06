/**
 * import full sass code in main.js file
 */
import '../sass/main.scss';
import FormContact from './form';
import Theme from './theme';

document.querySelector('#form-contact').addEventListener('submit', event => FormContact.onSubmit(event, '.form__input'));

Window.prototype.onDelete = id => {
    confirm(`Tem certeza que deseja excluir este contato?`).valueOf() === true ? FormContact.onDelete(id) : false;
};

Window.prototype.onFavorite = id => FormContact.onFavorite(id);

Theme.initialize();
Window.prototype.onChangeColor = (colorPrimaryLight, colorPrimaryDark) => Theme.onChangeTheme(colorPrimaryLight, colorPrimaryDark);