/**
 * Arquivo JS principal.
 */
import '../sass/main.scss'; // Importando todo o código Sass para ser compilado juntamente com o JavaScript.
import FormContact from './form';
import Theme from './theme';

/**
 * Função responsável por invocar a função onSubmit() da classe FormContact após a submissão do formulário.
 */
document.querySelector('#form-contact').addEventListener('submit', event => FormContact.onSubmit(event, '.form__input'));

/**
 * onDelete() => Função responsável por solicitar a confirmação do usuário. Caso o usuário aceite, a função onSubmit()
 * da classe FormContact é invocada.
 */
Window.prototype.onDelete = id => {
    confirm("Tem certeza que deseja excluir este contato?").valueOf() === true ? FormContact.onDelete(id) : false;
};

/**
 * onFavorite() => Função responsável por invocar a função onFavorite() da classe FormContact passando o id do
 * contato via parâmetro.
 */
Window.prototype.onFavorite = id => FormContact.onFavorite(id);

Theme.initialize();
/**
 * onChangeColor() => Função responsável por invocar a função onChangeTheme da classe Theme passando as novas cores
 * via parâmetro.
 */
Window.prototype.onChangeColor = (colorPrimaryLight, colorPrimaryDark) => Theme.onChangeTheme(colorPrimaryLight, colorPrimaryDark);