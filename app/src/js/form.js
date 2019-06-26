import Controller from './controller/controller';

const ControllerContact = new Controller('contacts');
ControllerContact.initialize();

/**
 * Classe Form. Fornece métodos para auxiliar nas funções referentes ao formulário.
 */
export default class Form {

    /**
     * onSubmit() => Função responsável por tratar a submissão do formulário.
     * Descrição: Os dados dos campos do formulário são resgatados e passados ao Controller por meio
     * da função save().
     * @param {*} event = Evento padrão da submissão de formulários.
     * @param {*} ref = Referência dos campos - ref = String;
     */
    static onSubmit(event, ref) {
        event.preventDefault();

        const [name, email, phone] = document.querySelectorAll(ref);

        const contact = {
            id: window.crypto.getRandomValues(new Uint32Array(1))[0], // Gerando ID randômico por meio de funcionalidades nativas da linguagem.
            name: name.value,
            email: email.value,
            phone: phone.value,
            favorite: false,
        };

        ControllerContact.save(contact);

        document.querySelectorAll(ref).forEach(input => input.value = ""); // Resetando os campos.
    };

    /**
     * onDelete() => Função responsável por excluir um contato de acordo com o id passado por parâmetro.
     * Descrição: A função delete() do Controller é invocada passando o id do contato que deve ser excluído.
     * @param {*} id = Referência para o contato - id = Number;
     */
    static onDelete(id) {
        ControllerContact.delete(id);
    };

    /**
     * onFavorite() => Função responsável por favoritar ou retirar dos favoritos um determinado contato.
     * Descrição: A função favorite do Controller é invocada passando o id do contato que deve ter sua
     * propriedade favorite alterada.
     * @param {*} id = Referência para o contato - id = Number;
     */
    static onFavorite(id) {
        ControllerContact.favorite(id);
    };

};