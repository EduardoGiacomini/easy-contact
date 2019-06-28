import '../sass/main.scss'
import FormContact from './Form'
import Theme from './theme'

Theme.initialize()

document.querySelector('#form-contact').addEventListener('submit', event => {
    FormContact.onSubmit(event, '.form__input')
})

Window.prototype.onDelete = contactId => {
    const response = confirm('Tem certeza que deseja excluir este contato?').valueOf()
    if (response) {
        FormContact.onDelete(contactId)
    }
}

Window.prototype.onFavorite = (contactId, isFavorite) => {
    FormContact.onFavorite(contactId, isFavorite)
}

Window.prototype.onChangeColor = (colorPrimaryLight, colorPrimaryDark) => {
    Theme.onChangeTheme(colorPrimaryLight, colorPrimaryDark)
}
