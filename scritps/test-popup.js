const container = document.querySelector('.profile__info');
const userName = container.querySelector('.profile__info-name');
const userProfession = container.querySelector('.profile__info-profession');
const editButton = container.querySelector('.profile__info-edit-button');
const addPlaceButton = document.querySelector('.profile__add-button');
const trashButton = document.querySelector('.element__trash');

const closeButton = document.querySelector('.popup__button-close');
const popupClass = document.querySelector('#popup-edit-profile');
const popupClassAddPlace = document.querySelector('#popup-add-place');
const popupClassViewPic = document.querySelector('#popup-view-img');

const openImgContainer = document.querySelector('.popup__view');
const popupOpenImgSrc = document.createElement('img');
const popupOpenImgName = document.createElement('figcaption');

let imgSrc = '';
let imgPlaceName = '';

const popupForm = popupClass.querySelector('.popup__form');
const userNamePopup = popupClass.querySelector('.popup__text_type_name');
const userProfessionPopup = popupClass.querySelector('.popup__text_type_profession');

const saveButton = popupClass.querySelector('.popup__button-save');

let placeName = popupClassViewPic.querySelector('.popup__text_type_place');
let placeLink = popupClassViewPic.querySelector('.popup__text_type_place-img');

const listOfPlaces = document.querySelector('.elements__list');
let initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function clearPlaceCard() {
  document.querySelector('.popup__text_type_place').value = '';
  document.querySelector('.popup__text_type_place-img').value = '';
  let elementForClear = document.querySelectorAll('.element');
  elementForClear.forEach(function (elem) {
    elem.remove();
  })
}

function addPlace() {
  clearPlaceCard();
  for (let i = 0; i < initialCards.length; i++) {
    const placeTemplate = document.querySelector('#element-li').content;
    const elementPlace = placeTemplate.querySelector('.element').cloneNode(true);
    elementPlace.querySelector('.element__img').src = initialCards[i].link;
    elementPlace.querySelector('.element__img').alt = initialCards[i].name;
    elementPlace.querySelector('.element__text').textContent = initialCards[i].name;
    elementPlace.querySelector('.element__like').addEventListener('click', function (evt) {
      evt.target.classList.toggle('element__like_active');
    });
    listOfPlaces.prepend(elementPlace);
  }
}

function addNewPlace(evt) {
  evt.preventDefault();
  addClassPopup(popupClassAddPlace);
  const name = document.querySelector('.popup__text_type_place').value;
  const link = document.querySelector('.popup__text_type_place-img').value;
  if (name !== '') {
    initialCards.unshift({ name, link });
  }
  addPlace();
}

function editProfile() {
  addClassPopup(popupClass);
}

function choosePopup() {
  const popupForClose = document.querySelectorAll('.popup');
  popupForClose.forEach(function (elem, index) {
    if (popupForClose[index].classList.contains('popup_opened') === true) {
      addClassPopup(document.querySelector(`#${popupForClose[index].id}`));
    }
  }
  );
}

function addClassPopup(item) {

  if (item.classList.contains('popup_opened') === false) {
    item.classList.add('popup_opened');
    userNamePopup.value = userName.textContent;
    userProfessionPopup.value = userProfession.textContent;

    popupOpenImgSrc.classList.add('popup__view-img');
    popupOpenImgSrc.src = imgSrc;
    popupOpenImgName.alt = imgPlaceName;
    popupOpenImgName.classList.add('popup__view-img_caption');
    popupOpenImgName.textContent = imgPlaceName;
    openImgContainer.append(popupOpenImgSrc, popupOpenImgName);
  }
  else {
    item.classList.remove('popup_opened');
    openImgContainer.removeChild(popupOpenImgName, popupOpenImgSrc);
  }
}

function closePopup(evt) {
  if (evt.target.classList.contains('popup__button-close-img')) {
    choosePopup();
  }
}

function openPhoto(evt) {

  if (evt.target.classList.contains('element__img')) {
    imgSrc = evt.target.src;
    imgPlaceName = evt.target.alt;
    addClassPopup(popupClassViewPic);
  }
}

function saveValue(evt) {
  evt.preventDefault();
  userName.textContent = userNamePopup.value;
  userProfession.textContent = userProfessionPopup.value;
  addClassPopup(popupClass);
}

function trashPlace(evt) {
  if (evt.target.classList.contains('element__trash') === true) {
    const elementForDelete = evt.target.closest('.element');
    const elementNameForDelete = elementForDelete.querySelector('.element__img').alt;
    initialCards.forEach(function (elem, index) {
      if (initialCards[index].name === elementNameForDelete) {
        initialCards.splice(index, 1);
        addPlace();
      }
    });
  }
}

addPlace();
editButton.addEventListener('click', editProfile);
popupClass.addEventListener('click', closePopup);
popupClassAddPlace.addEventListener('click', closePopup);
popupClassViewPic.addEventListener('click', closePopup);

popupForm.addEventListener('submit', saveValue);
popupClassAddPlace.addEventListener('submit', addNewPlace);
addPlaceButton.addEventListener('click', addNewPlace);

// обработчик событий для всего списка картинок
listOfPlaces.addEventListener('click', openPhoto);

//обработчик для кнопки удаления
listOfPlaces.addEventListener('click', trashPlace);