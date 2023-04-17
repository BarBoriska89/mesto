export default class Card {
    constructor(name, link, templateSelector, openPopup, handleCardClick) {
        this._templateSelector = templateSelector;
        this._name = name;
        this._link = link;
        this._handleCardClick = handleCardClick;
    }

    _getTemplate() {

        const elementPlace = document
            .querySelector(this._templateSelector)
            .content
            .querySelector('.element')
            .cloneNode(true);
        return elementPlace;
    }

    _handleLikeCard() {
        this._like.classList.toggle('element__like_active');
    }


    _handleTrashCard() {
        this._element.remove();
    }

    _setEventListeners() {
        this._like.addEventListener('click', () => {
            this._handleLikeCard();
        });

        this._element.querySelector('.element__trash').addEventListener('click', () => {
            this._handleTrashCard();
        });
        this._imgElement.addEventListener('click', () => {
            this._handleCardClick(this._name, this._link);
        });
    }

    generateCard() {
        this._element = this._getTemplate();
        this._like = this._element.querySelector('.element__like');
        this._imgElement = this._element.querySelector('.element__img');
        this._setEventListeners();

        this._imgElement.src = this._link;
        this._imgElement.alt = this._name;
        this._element.querySelector('.element__text').textContent = this._name;
        return this._element;
    }
}