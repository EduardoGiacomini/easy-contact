/**
 * Classe LocalStorage. Fornece métodos para auxiliar nas funções do LocalStorage.
 */
export default class LocalStorage {

    /**
     * get() => Função responsável por buscar os dados do LocalStorage de acordo com a referência passada
     * via parâmetro.
     * Descrição: A String salva no LocalStorage, de acordo com a referência passada, é buscada e parseada
     * para JSON. Caso não tenha nenhum conteúdo salvo no LocalStorage, é retornado um array vazio.
     * @param {*} ref = Referência dos dados salvos - ref = String;
     */
    static get(ref) {
        return JSON.parse(localStorage.getItem(ref)) || [];
    };

    /**
     * save() => Função responsável por salvar os dados no LocalStorage de acordo com a referência passada
     * via parâmetro.
     * Descrição: O item passado por parâmetro é parseado para String e salvo com a referência passada, também,
     * por parâmetro.
     * @param {*} ref = Referência dos dados salvos - ref = String;
     * @param {*} item = Item a ser salvo no LocalStorage - item = generic
     */
    static save(ref, item) {
        localStorage.setItem(ref, JSON.stringify(item));
    };

};