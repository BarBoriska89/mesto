enableValidation(options);

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

function openPopup(popup) {
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
  checkForm(formEditProfile, options);
  openPopup(popupEditProfile);
}

function addPlace() {
  formAddPlace.reset();
  openPopup(popupAddPlace);
  checkForm(formAddPlace, options);
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
    popupOpenImgSrc.src = link;
    popupOpenImgSrc.alt = name;
    popupOpenImgName.textContent = name;
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
  renderCard(listOfPlaces, placeName.value, placeLink.value);
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