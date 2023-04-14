import '../pages/index.css';
import initialCards from './cards.js';
import options from './validationConfig.js';
import Card from './Card.js';
import Section from './Section.js';
import UserInfo from './UserInfo.js';
import FormValidator from './FormValidator.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';

import {
  container,
  editButton,
  addPlaceButton,
  editProfilePopup,
  addPlacePopup,
  userNamePopup,
  userProfessionPopup,
  formEditProfile,
  formAddPlace,
  formsForValidate,
  validators
} from './constants.js';


const editUserInfo = new UserInfo({
  UserInfoSelectors: {
    name: '.profile__info-name',
    about: '.profile__info-profession',
  }
});

const popupEditProfile = new PopupWithForm({
  popupSelector: '#popup-edit-profile',
  handleSubmit: (data) => {
    const userData = { name: data['user-name'], about: data['user-job'] };
    editUserInfo.setUserInfo(userData);
    popupEditProfile.close();
  }
});

function editProfile() {
  formEditProfile.reset();
  userNamePopup.value = editUserInfo.getUserInfo().name;
  userProfessionPopup.value = editUserInfo.getUserInfo().about;
  validators[formEditProfile.getAttribute('name')].checkForm();
  popupEditProfile.open();
  popupEditProfile.setEventListeners();
}


const popupAddPlace = new PopupWithForm({
  popupSelector: '#popup-add-place',
  handleSubmit: (data) => {
    renderCardList.addItem(createNewPlace(data['place-title'], data['place-img'], '#element-li', open, handleCardClick));
    popupAddPlace.close();
  }
});

function addPlace() {
  formAddPlace.reset();
  validators[formAddPlace.getAttribute('name')].checkForm();
  popupAddPlace.open();
  popupAddPlace.setEventListeners();
}

export function handleCardClick(name, link) {
  const popupViewCard = new PopupWithImage({ popupSelector: '#popup-view-img' });
  popupViewCard.open(name, link);
  popupViewCard.setEventListeners();
}

const renderCardList = new Section({
  items: initialCards,
  renderer: (item) => {
    renderCardList.addItem(createNewPlace(item.name, item.link, '#element-li', open, handleCardClick));
  }
},
  '.elements__list');

const createNewPlace = (name, link, templateSelector, openFunc, viewCardFunc) => {
  const card = new Card(name, link, templateSelector, openFunc, viewCardFunc);
  return card.generateCard();
}

renderCardList.renderItems();

formsForValidate.forEach((form) => {
  const formValidator = new FormValidator(options, form);
  validators[form.getAttribute('name')] = formValidator;
  formValidator.enableValidation();
});

editButton.addEventListener('click', editProfile);

addPlaceButton.addEventListener('click', addPlace);
