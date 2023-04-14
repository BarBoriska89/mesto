export default class Popup {
    constructor({ popupSelector }) {
        this._popup = document.querySelector(popupSelector);
        this._handleClickClose = this._handleClickClose.bind(this);
        this._handleEscClose = this._handleEscClose.bind(this);

    }
    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleClickClose(evt) {
        if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__button-close-img')) {
            this.close();
        }
    }

    _handleEscClose(evt) {
        console.log(evt.key);
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    setEventListeners() {
        this._popup.addEventListener('click', this._handleClickClose);
    }
}
