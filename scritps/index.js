let container = document.querySelector('.profile__info');
let userName = container.querySelector('.profile__info-name');
let userProfession = container.querySelector('.profile__info-profession');
let editButton = container.querySelector('.profile__info-edit-button');
let closeButton = document.querySelector('.popup__button-close');
let popupClass = document.querySelector('.popup');
let popupForm = popupClass.querySelector('.popup__form');
let userNamePopup = popupClass.querySelector('.popup__text_type_name');
let userProfessionPopup = popupClass.querySelector('.popup__text_type_profession');
let saveButton = popupClass.querySelector('.popup__button-save');


function addClassPopup() {

    if (popupClass.classList.contains('popup_opened') === false) {
        popupClass.classList.add('popup_opened');
        userNamePopup.value = userName.textContent;
        userProfessionPopup.value = userProfession.textContent;
    }
    else {
        popupClass.classList.remove('popup_opened');
    }
}

function saveValue(evt) {
    evt.preventDefault();
    userName.textContent = userNamePopup.value;
    userProfession.textContent = userProfessionPopup.value;
    addClassPopup();
}

editButton.addEventListener('click', addClassPopup);
closeButton.addEventListener('click', addClassPopup);
popupForm.addEventListener('submit', saveValue);