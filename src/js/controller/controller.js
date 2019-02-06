import LocalStorage from '../utilities/localStorage';
import GenerateHTMLCode from '../utilities/generateHTMLCode';

export default class Controller {
    constructor(ref) {
        this.ref = ref;
        this.items = [];
    };

    initialize() {
        this.items = LocalStorage.get(this.ref) || [];
        this.list()
    };

    save(params) {
        this.items.push({ ...params });
        LocalStorage.save(this.ref, this.items)
        this.list();
    };

    list() {
        GenerateHTMLCode.generateCard('.main', this.items);
    };

    delete(id) {
        this.items = this.items.filter(item => item.id !== id);
        LocalStorage.save(this.ref, this.items);
        this.list();
    };

    favorite(id) {
        this.items = this.items.map(item => item.id === id ? { ...item, favorite: !item.favorite, } : item);
        LocalStorage.save(this.ref, this.items);
        this.list();
    };

};