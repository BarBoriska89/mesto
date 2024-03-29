export const container = document.querySelector('.profile__info');
export const userName = container.querySelector('.profile__info-name');
export const userProfession = container.querySelector('.profile__info-profession');
export const editButton = container.querySelector('.profile__info-edit-button');
export const addPlaceButton = document.querySelector('.profile__add-button');
export const editAvatarButton = document.querySelector('.profile__section-avatar');
export const closePopupButton = document.querySelectorAll('.popup__button-close');
export const popupList = document.querySelectorAll('.popup');
export const editProfilePopup = document.querySelector('#popup-edit-profile');
export const addPlacePopup = document.querySelector('#popup-add-place');
export const editProfileForm = document.querySelector('#edit-form');
export const addPlaceForm = document.querySelector('#add-place-form');
export const userNamePopup = editProfilePopup.querySelector('.popup__input_type_name');
export const userProfessionPopup = editProfilePopup.querySelector('.popup__input_type_profession');
export const listOfPlaces = document.querySelector('.elements__list');
export const placeName = addPlacePopup.querySelector('.popup__input_type_place');
export const placeLink = addPlacePopup.querySelector('.popup__input_type_place-img');
export const popupViewPic = document.querySelector('#popup-view-img');
export const popupOpenImgSrc = document.querySelector('.popup__view-img');
export const popupOpenImgName = document.querySelector('.popup__view-img-caption');
export const keyForClose = 'Escape';
export const formEditProfile = document.forms.editForm;
export const formAddPlace = document.forms.addPlaceForm;
export const formEditAvatar = document.forms.editAvatarForm;
export const formsForValidate = Array.from(document.querySelectorAll('.popup__form'));
export const validators = {};
export const optionsApi = {
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-64',
    headers: {
        authorization: '9615b71d-c66b-4314-b250-e7089bed6442',
        'Content-Type': 'application/json'
    },
  };  