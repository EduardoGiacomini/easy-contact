export default class Form {
    constructor({ element }) {
        this.isOpen = false;
        this.element = element;
    };

    toggleForm() {
        this.isOpen = !this.isOpen;
        this.changeFormPosition();
    };

    changeFormPosition() {
        if (this.isOpen) {
            this.element.style.zIndex = "0";
            this.element.style.boxShadow = "0 2rem 4rem rgba(0, 0, 0, .2)";
            this.element.style.transform = "translateY(0)";
            this.element.style.visibility = "visible";
            this.element.style.transition = "all 1s ease, z-index 1s ease 1s";
        } else {
            this.element.style.zIndex = "-10";
            this.element.style.boxShadow = "none";
            this.element.style.transform = "translateY(-100%)";
            this.element.style.visibility = "hidden";
            this.element.style.transition = "all 1s ease";
        }
    };
};