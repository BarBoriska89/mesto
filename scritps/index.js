const container = document.querySelector('.profile__info');
const userName = container.querySelector('.profile__info-name');
const userProfession = container.querySelector('.profile__info-profession');
const editButton = container.querySelector('.profile__info-edit-button');
const addPlaceButton = document.querySelector('.profile__add-button');
const closePopupButton = document.querySelectorAll('.popup__button-close');

const popupEditProfile = document.querySelector('#popup-edit-profile');
const popupAddPlace = document.querySelector('#popup-add-place');
const popupViewPic = document.querySelector('#popup-view-img');

const editProfileForm = document.querySelector('#edit-form');
const addPlaceForm = document.querySelector('#add-place-form');

const openImgContainer = document.querySelector('.popup__view');
const popupOpenImgSrc = document.querySelector('.popup__view-img');
const popupOpenImgName = document.querySelector('.popup__view-img_caption');

const userNamePopup = popupEditProfile.querySelector('.popup__text_type_name');
const userProfessionPopup = popupEditProfile.querySelector('.popup__text_type_profession');

const saveButton = popupEditProfile.querySelector('.popup__button-save');

const trashButton = document.querySelector('.element__trash');

const listOfPlaces = document.querySelector('.elements__list');
const placeTemplate = document.querySelector('#element-li').content;


function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function editProfile() {
  userNamePopup.value = userName.textContent;
  userProfessionPopup.value = userProfession.textContent;
  openPopup(popupEditProfile);
}


function addPlace() {
  openPopup(popupAddPlace);
}


function createNewPlace(name, link) {
  const elementPlace = placeTemplate.querySelector('.element').cloneNode(true);
  const imgElement = elementPlace.querySelector('.element__img');
  imgElement.src = link;
  imgElement.alt = name;
  elementPlace.querySelector('.element__text').textContent = name;
  elementPlace.querySelector('.element__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_active');
  });
  elementPlace.querySelector('.element__trash').addEventListener('click', function (evt) {
    evt.target.closest('.element').remove('element');
  });
  imgElement.addEventListener('click', (evt) => {
    popupOpenImgSrc.src = evt.target.src;
    popupOpenImgSrc.alt = evt.target.alt;
    popupOpenImgName.textContent = evt.target.alt;
    openPopup(popupViewPic);
  })
  return elementPlace;

}

const renderCard = (arrList, name, link) => {
  arrList.prepend(createNewPlace(name, link));
}

initialCards.forEach((elem, index) => {
  const namePlace = initialCards[index].name;
  const linkPlace = initialCards[index].link;
  renderCard(listOfPlaces, namePlace, linkPlace);
})

addPlaceForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const placeName = popupAddPlace.querySelector('.popup__text_type_place').value;
  const placeLink = popupAddPlace.querySelector('.popup__text_type_place-img').value;
  if (placeName !== '' && placeLink !== '') {
    renderCard(listOfPlaces, placeName, placeLink);
    popupAddPlace.querySelector('.popup__text_type_place').value = '';
    popupAddPlace.querySelector('.popup__text_type_place-img').value = '';
    closePopup(popupAddPlace);
  }
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