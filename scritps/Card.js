export default class Card {
    constructor(name, link, templateSelector, openPopup) {
        this._templateSelector = templateSelector;
        this._name = name;
        this._link = link;
        this._openPopup = openPopup;
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
        this._element.querySelector('.element__like').classList.toggle('element__like_active');
    }


    _handleTrashCard() {
        this._element.closest('.element').remove('element');
    }

    _handleViewCard() {
        const popupViewPic = document.querySelector('#popup-view-img');
        const popupOpenImgSrc = document.querySelector('.popup__view-img');
        const popupOpenImgName = document.querySelector('.popup__view-img-caption');

        popupOpenImgSrc.src = this._link;
        popupOpenImgSrc.alt = this._name;
        popupOpenImgName.textContent = this._name;
        this._openPopup(popupViewPic);
    }

    _setEventListeners() {
        this._element.querySelector('.element__like').addEventListener('click', () => {
            this._handleLikeCard();
        });

        this._element.querySelector('.element__trash').addEventListener('click', () => {
            this._handleTrashCard();
        });
        this._element.querySelector('.element__img').addEventListener('click', () => {
            this._handleViewCard();
        });
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();

        this._imgElement = this._element.querySelector('.element__img');
        this._imgElement.src = this._link;
        this._imgElement.alt = this._name;
        this._element.querySelector('.element__text').textContent = this._name;

        return this._element;

    }
}