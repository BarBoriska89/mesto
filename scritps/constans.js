const container = document.querySelector('.profile__info');
const userName = container.querySelector('.profile__info-name');
const userProfession = container.querySelector('.profile__info-profession');
const editButton = container.querySelector('.profile__info-edit-button');
const addPlaceButton = document.querySelector('.profile__add-button');
const closePopupButton = document.querySelectorAll('.popup__button-close');
const popupList = document.querySelectorAll('.popup');
const popupEditProfile = document.querySelector('#popup-edit-profile');
const popupAddPlace = document.querySelector('#popup-add-place');
const popupViewPic = document.querySelector('#popup-view-img');
const editProfileForm = document.querySelector('#edit-form');
const addPlaceForm = document.querySelector('#add-place-form');
const openImgContainer = document.querySelector('.popup__view');
const popupOpenImgSrc = document.querySelector('.popup__view-img');
const popupOpenImgName = document.querySelector('.popup__view-img-caption');
const userNamePopup = popupEditProfile.querySelector('.popup__input_type_name');
const userProfessionPopup = popupEditProfile.querySelector('.popup__input_type_profession');
const saveButton = popupEditProfile.querySelector('.popup__button');
const trashButton = document.querySelector('.element__trash');
const listOfPlaces = document.querySelector('.elements__list');
const placeTemplate = document.querySelector('#element-li').content;
const placeName = popupAddPlace.querySelector('.popup__input_type_place');
const placeLink = popupAddPlace.querySelector('.popup__input_type_place-img');
const keyForClose = 'Escape';
const formEditProfile = document.forms.editForm;
const formAddPlace = document.forms.addPlaceForm;
const options = {
    formSelector: '.popup__form',
    formSectionClass: '.popup__form-section',
    submitButtonSelector: '.popup__button',
    inputSelector: '.popup__input',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorSelector: '.popup__error',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};