import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor({ popupSelector, handleSubmit }) {
        super({ popupSelector });
        this._handleSubmit = handleSubmit;
        this._form = this._popup.querySelector('.popup__form');
        this._inputList = this._form.querySelectorAll('.popup__input');
        this._handleFormSubmit = this._handleFormSubmit.bind(this);
    }

    _getInputValues() {
        const inputValues = {};
        this._inputList.forEach((input) => { inputValues[input.name] = input.value });
        return inputValues;
    }

    _handleFormSubmit(evt) {
        evt.preventDefault();
        this._handleSubmit(this._getInputValues());
    }
    
    setEventListeners() {
        this._form.addEventListener('submit', this._handleFormSubmit);
        super.setEventListeners();
    };

    close() {
        super.close();
        this._form.reset();
    }
}