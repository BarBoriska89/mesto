import initialCards from './cards.js';
import options from './validationConfig.js';
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
const popupViewPic = document.querySelector('#popup-view-img');
const popupOpenImgSrc = document.querySelector('.popup__view-img');
const popupOpenImgName = document.querySelector('.popup__view-img-caption');
const keyForClose = 'Escape';
const formEditProfile = document.forms.editForm;
const formAddPlace = document.forms.addPlaceForm;
const formsForValidate = Array.from(document.querySelectorAll('.popup__form'));

const validators = {};

formsForValidate.forEach((form) => {
  const formValidator = new FormValidator(options, form);
  validators[form.getAttribute('name')] = formValidator;
  formValidator.enableValidation();
});

export function openPopupViewCard(name, link) {

  popupOpenImgSrc.src = link;
  popupOpenImgSrc.alt = name;
  popupOpenImgName.textContent = name;
  openPopup(popupViewPic);
}


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
  validators[formEditProfile.getAttribute('name')].checkForm();
  openPopup(popupEditProfile);
}

function addPlace() {
  formAddPlace.reset();
  validators[formAddPlace.getAttribute('name')].checkForm();
  openPopup(popupAddPlace);
}

const createNewPlace = (name, link, templateSelector, openFunc, viewCardFunc) => {
  const card = new Card(name, link, templateSelector, openFunc, viewCardFunc);
  return card.generateCard();
}

const renderCard = (cardsContainer, name, link, templateSelector, openFunc, viewCardFunc) => {
  cardsContainer.prepend(createNewPlace(name, link, templateSelector, openFunc, viewCardFunc));
}

initialCards.forEach((elem) => {
  const namePlace = elem.name;
  const linkPlace = elem.link;
  renderCard(listOfPlaces, namePlace, linkPlace, '#element-li', openPopup, openPopupViewCard);
})

addPlaceForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  renderCard(listOfPlaces, placeName.value, placeLink.value, '#element-li', openPopup, openPopupViewCard);
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
    const popupForClose = evt.target.closest('.popup');
    closePopup(popupForClose);
  })
});