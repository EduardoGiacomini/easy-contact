export default class GenerateHTMLCode {

    static generateCard(ref, contacts = []) {

        document.querySelector(ref).innerHTML = "";

        let cards = "";
        
        for (let index = 0; index < contacts.length; index++) {

            const { id, name, email, phone } = contacts[index];

            const card =
            `
                <div class="card" id="${id}">
                    <div class="card__content">
                        <p class="card__content--title">${name}</p>
                        <div class="card__content--information">
                            <svg class="card__content--icon">
                                <use xlink:href="assets/sprite.svg#icon-envelop"></use>
                            </svg>
                            <p class="card__content--text">${email}</p>
                        </div>
                        <div class="card__content--information">
                            <svg class="card__content--icon">
                                <use xlink:href="assets/sprite.svg#icon-phone"></use>
                            </svg>
                            <p class="card__content--text">${phone}</p>
                        </div>
                    </div>
                    <div class="card__options">
                        <button class="card__options--btn">
                            <svg class="card__options--icon card__options--icon-star">
                                <use xlink:href="assets/sprite.svg#icon-star-full"></use>
                            </svg>
                        </button>
                        <button class="card__options--btn" onclick="onDelete(${id})">
                            <svg class="card__options--icon card__options--icon-trash">
                                <use xlink:href="assets/sprite.svg#icon-bin2"></use>
                            </svg>
                        </button>
                    </div>
                </div>
            `;
            cards += card;
        };

        document.querySelector(ref).insertAdjacentHTML('afterbegin', cards);
    };

};