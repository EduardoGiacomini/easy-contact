import LocalStorage from './localStorage';

export default class Controller {
    constructor({ ref }) {
        this.ref = ref;
        this.items = [];
    };

    listItems() {
        this.items = LocalStorage.get(this.ref);
        return this.items;
    };

    saveItem(params) {
        this.items.push({ ...params });
        LocalStorage.save(this.ref, this.items)
        return this.listItems();
    };

    deleteItem(id) {
        this.items = this.items.filter(item => item.id !== id);
        LocalStorage.save(this.ref, this.items);
        return this.listItems();
    };

    updateItem(params) {
        this.items = this.items.filter(item => item.id !== params.id);
        return this.saveItem(params);
    };
};