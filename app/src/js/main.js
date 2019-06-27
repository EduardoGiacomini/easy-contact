import '../sass/main.scss'
import FormContact from './Form'
import Theme from './theme'

document.querySelector('#form-contact').addEventListener('submit', event => FormContact.onSubmit(event, '.form__input'))

Window.prototype.onDelete = contactId => {
    confirm("Tem certeza que deseja excluir este contato?").valueOf() === true ? FormContact.onDelete(contactId) : false
}

Window.prototype.onFavorite = (contactId, isFavorite) => FormContact.onFavorite(contactId, isFavorite)

Theme.initialize()

Window.prototype.onChangeColor = (colorPrimaryLight, colorPrimaryDark) => Theme.onChangeTheme(colorPrimaryLight, colorPrimaryDark)