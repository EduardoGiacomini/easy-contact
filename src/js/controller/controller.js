import LocalStorage from '../utilities/localStorage';
import GenerateHTMLCode from '../utilities/generateHTMLCode';

/**
 * Controlador de contatos.
 */
export default class Controller {
    constructor(ref) {
        this.ref = ref;  // String de referência para utilizar no LocalStorage.
        this.items = []; // Array de contatos.
    };

    /**
     * initialize() => Função responsável por inicializar os contatos.
     * Descrição: Os dados são buscados no LocalStorage. Logo depois, a função list() é invocada.
     */
    initialize() {
        this.items = LocalStorage.get(this.ref) || [];
        this.list()
    };

    /**
     * save() => Função responsável por salvar um contato.
     * Descrição: O contato é salvo no LocalStorage. Logo depois, a função list() é invocada.
     * @param {*} params = Objeto de Contato - { id: Number, name: String, email: String, phone: String, favorite: Boolean };
     */
    save(params) {
        this.items.push({ ...params });
        LocalStorage.save(this.ref, this.items)
        this.list();
    };

    /**
     * list() => Função responsável por listar os contatos.
     * Descrição: os contatos são passados para a a função generateCard() presente na classe GenerateHTMLCode.
     */
    list() {
        GenerateHTMLCode.generateCard('.main', this.items);
    };

    /**
     * delete() => Função responsável por excluir permanentemente um contato.
     * Descrição: O contato que possui o id passado por parâmetro é retirado da lista de contatos. Logo depois,
     * os contatos restantes são salvos no LocalStorage. Por fim, a função list() é invocada.
     * @param {*} id = Referência para o contato - id = Number;
     */
    delete(id) {
        this.items = this.items.filter(item => item.id !== id);
        LocalStorage.save(this.ref, this.items);
        this.list();
    };

    /**
     * favorite() => Função responsável por favoritar OU retirar dos favoritos um contato.
     * Descrição: O contato que possui o id passado por parâmetro tem sua propriedade favorite alterada para true,
     * caso seja false anteriormente ou vice-versa. Logo depois, os contatos são salvos no LocalStorage e, por fim,
     * a função list() é invocada.
     * @param {*} id = Referência para o contato - id = Number;
     */
    favorite(id) {
        this.items = this.items.map(item => item.id === id ? { ...item, favorite: !item.favorite, } : item);
        LocalStorage.save(this.ref, this.items);
        this.list();
    };

};