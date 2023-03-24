import initialCards from './cards.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';


const container = document.querySelector('.profile__info');
const userName = container.querySelector('.profile__info-name');
const userProfession = container.querySelector('.profile__info-profession');
const editButton = container.querySelector('.profile__info-edit-button');
const addPlaceButton = document.querySelector('.profile__add-button');
const closePopupButton = document.querySelectorAll('.popup__button-close');
const popupList = document.querySelectorAll('.popup');
const popupEditProfile = document.querySelector('#popup-edit-profile');
const popupAddPlace = document.querySelector('#popup-add-place');
const editProfileForm = document.querySelector('#edit-form');
const addPlaceForm = document.querySelector('#add-place-form');
const userNamePopup = popupEditProfile.querySelector('.popup__input_type_name');
const userProfessionPopup = popupEditProfile.querySelector('.popup__input_type_profession');
const listOfPlaces = document.querySelector('.elements__list');
const placeName = popupAddPlace.querySelector('.popup__input_type_place');
const placeLink = popupAddPlace.querySelector('.popup__input_type_place-img');
const keyForClose = 'Escape';
const formEditProfile = document.forms.editForm;
const formAddPlace = document.forms.addPlaceForm;
const formsForValidate = Array.from(document.querySelectorAll('.popup__form'));
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


formsForValidate.forEach((form) => {
  const formForValidate = new FormValidator(options, form);
  formForValidate.enableValidation();
});


function closePopupWithEsc(evt) {
  if (evt.key === keyForClose) {
    const popupActive = document.querySelector('.popup_opened');
    closePopup(popupActive);
  }
}

popupList.forEach((popup) => {
  popup.addEventListener('click', function (evt) {
    if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__button-close')) {
      closePopup(popup);
    }
  });
});

export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupWithEsc);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupWithEsc);
}

function editProfile() {
  formEditProfile.reset();
  userNamePopup.value = userName.textContent;
  userProfessionPopup.value = userProfession.textContent;
  const formForValidate = new FormValidator(options, formEditProfile);
  formForValidate.checkForm(formEditProfile);
  openPopup(popupEditProfile);
}

function addPlace() {
  formAddPlace.reset();
  const formForValidate = new FormValidator(options, formAddPlace);
  formForValidate.checkForm(formAddPlace);
  openPopup(popupAddPlace);
}

const createNewPlace = (name, link, templateSelector, openFunc) => {
  const card = new Card(name, link, templateSelector, openFunc);
  return card.generateCard();
}

const renderCard = (arrList, name, link, templateSelector, openFunc) => {
  arrList.prepend(createNewPlace(name, link, templateSelector, openFunc));
}

initialCards.forEach((elem, index) => {
  const namePlace = initialCards[index].name;
  const linkPlace = initialCards[index].link;
  renderCard(listOfPlaces, namePlace, linkPlace, '#element-li', openPopup);
})

addPlaceForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  renderCard(listOfPlaces, placeName.value, placeLink.value, '#element-li', openPopup);
  closePopup(popupAddPlace);
});

editButton.addEventListener('click', editProfile);

addPlaceButton.addEventListener('click', addPlace);

editProfileForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  userName.textContent = userNamePopup.value;
  userProfession.textContent = userProfessionPopup.value;
  closePopup(popupEditProfile);
})

closePopupButton.forEach((closeButton) => {
  closeButton.addEventListener('click', (evt) => {
    const popupForClose = document.querySelector(`#${evt.target.closest('.popup').id}`);
    closePopup(popupForClose);
  })
});