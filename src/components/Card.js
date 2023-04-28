export default class Card {
    constructor(card, userId, templateSelector, openPopup, handleCardClick, handleCardDelete, handelLike) {
        this._templateSelector = templateSelector;
        this._name = card.name;
        this._link = card.link;
        this._likes = card.likes;
        this._userId = userId;
        this._ownerCard = card.owner['_id'];
        this._cardId = card._id;
        this._handleCardClick = handleCardClick;
        this._handleTrashCard = handleCardDelete;
        this._handleTrashCard = this._handleTrashCard.bind(this);
        this._handleLike = handelLike;

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
        this._handleLike(this);
    }

    checkLike() {
        return this._like.classList.contains('element__like_active');
    }

    addLike(res) {
        this._like.classList.add('element__like_active');
        this._likeCount.textContent = res.likes.length;
    }

    deleteLike(res) {
        this._like.classList.remove('element__like_active');
        this._likeCount.textContent = res.likes.length;
    }

    _setEventListeners() {
        this._like.addEventListener('click', () => {
            this._handleLikeCard();
        });

        this._trashElement.addEventListener('click', () => {
            this._handleTrashCard(this);
        });
        this._imgElement.addEventListener('click', () => {
            this._handleCardClick(this._name, this._link);
        });
    }

    generateCard() {
        this._element = this._getTemplate();
        this._like = this._element.querySelector('.element__like');
        this._likeCount = this._element.querySelector('.element__like-count');
        this._imgElement = this._element.querySelector('.element__img');
        this._trashElement = this._element.querySelector('.element__trash');
        this._setEventListeners();

        if (this._ownerCard != this._userId) {
            this._trashElement.remove();
        }

        for (let i = 0; i < this._likes.length; i++) {
            if (this._likes[i]._id != this._userId) {
                this._like.classList.remove('element__like_active');
            } else {
                this._like.classList.add('element__like_active');
            }
        }

        this._imgElement.src = this._link;
        this._imgElement.alt = this._name;
        this._element.querySelector('.element__text').textContent = this._name;
        this._likeCount.textContent = this._likes.length;
        return this._element;
    }
    deleteCard() {
        this._element.remove();

    }
}