let container = document.querySelector('.profile__info');
let UserName = container.querySelector('.profile__info-name');
let UserProfession = container.querySelector('.profile__info-profession');
let EditButton = container.querySelector('.profile__info-edit-button');
let CloseButton = document.querySelector('.popup__button-close');
let PopupClass = document.querySelector('.popup');
let UserNamePopup = PopupClass.querySelector('.popup__user-name');
let UserProfessionPopup = PopupClass.querySelector('.popup__user-profession');
let SaveButton = PopupClass.querySelector('.popup__button-save');


function AddClassPopup() {
    
    if (PopupClass.classList.contains('popup_opened') === false) {
        PopupClass.classList.add('popup_opened');
        
    }
    else {
        PopupClass.classList.remove('popup_opened');
        
    }
}

function SaveValue(evt) {
    evt.preventDefault(); 
    UserName.textContent = UserNamePopup.value;
    UserProfession.textContent = UserProfessionPopup.value;
}

UserNamePopup.value = UserName.textContent;
UserProfessionPopup.value = UserProfession.textContent;


EditButton.addEventListener('click', AddClassPopup);
CloseButton.addEventListener('click', AddClassPopup);
SaveButton.addEventListener('click', SaveValue);