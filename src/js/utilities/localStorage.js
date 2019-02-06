export default class LocalStorage {

    static get(ref) {
        return JSON.parse(localStorage.getItem(ref)) || [];
    };

    static save(ref, item) {
        console.log(item)
        localStorage.setItem(ref, JSON.stringify(item));
    };

};