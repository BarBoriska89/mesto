import '../pages/index.css';
import options from '../scripts/validationConfig.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Api from '../components/Api.js';

import {
  container,
  editButton,
  addPlaceButton,
  editAvatarButton,
  editProfilePopup,
  addPlacePopup,
  userNamePopup,
  userProfessionPopup,
  formEditProfile,
  formAddPlace,
  formEditAvatar,
  formsForValidate,
  validators,
  optionsApi
} from '../scripts/constants.js';

let userId;
let cardForDelete;
let renderCardList;

const api = new Api({ optionsApi });

const promises = [api.getUser(), api.getCards()];

const editUserInfo = new UserInfo({
  UserInfoSelectors: {
    name: '.profile__info-name',
    about: '.profile__info-profession',
    avatar: '.profile__avatar',
  }
});

const getInfo = Promise.all(promises);

getInfo
  .then(([userData, cards]) => {
    userId = userData._id;

    editUserInfo.setUserInfo(userData);

    renderCardList = new Section({
      items: cards,
      renderer: (item) => {
       
        renderCardList.addItem(createNewPlace(item, userId, '#element-li', open, handleCardClick, cardDeletePopup, handleLike));
      }
    },
      '.elements__list');
    renderCardList.renderItems();
  }
  )
  .catch((err) => console.log("Ошибка запроса данных о пользователе или карточке", err));

const popupEditProfile = new PopupWithForm({
  popupSelector: '#popup-edit-profile',
  handleSubmit: (data) => {
    const userData = { name: data['user-name'], about: data['user-job'] };

    popupEditProfile.loadingChange(true);

    api.createUser(userData.name, userData.about)
      .then((res) => {
        editUserInfo.setUserInfo(res);
        popupEditProfile.close();
      })
      .catch((err) => {
        console.log("Ошибка редактирования профиля", err);
      })
      .finally(() => {
        popupEditProfile.loadingChange(false);
      });
  },
});
popupEditProfile.setEventListeners();

function editProfile() {
  userNamePopup.value = editUserInfo.getUserInfo().name;
  userProfessionPopup.value = editUserInfo.getUserInfo().about;
  validators[formEditProfile.getAttribute('name')].checkForm();
  popupEditProfile.open();
}

export function handleLike(card) {

  if (card.checkLike()) {
    api.deleteLike(card._cardId)
      .then((res) => {
        card.deleteLike(res);
      })
      .catch((err) => {
        console.log("Ошибка удаления лайка", err);
      });
  } else {
    api.addLike(card._cardId)
      .then((res) => {
        card.addLike(res);
      })
      .catch((err) => {
        console.log("Ошибка добавления лайка", err);
      });
  }
}

const popupAddPlace = new PopupWithForm({
  popupSelector: '#popup-add-place',
  handleSubmit: (data) => {

    popupAddPlace.loadingChange(true);

    api
      .postCard({
        name: data['place-title'],
        link: data['place-img'],
      })
      .then((res) => {
        renderCardList.addItem(createNewPlace(res, userId, '#element-li', open, handleCardClick, cardDeletePopup, handleLike));
        popupAddPlace.close();
      })
      .catch((err) => {
        console.log("Ошибка добавления новой карточки", err);
      })
      .finally(() => {
        popupAddPlace.loadingChange(false);
      });

  }
});
popupAddPlace.setEventListeners();

function addPlace() {
  formAddPlace.reset();
  validators[formAddPlace.getAttribute('name')].checkForm();
  popupAddPlace.open();

}
const popupViewCard = new PopupWithImage({ popupSelector: '#popup-view-img' });

popupViewCard.setEventListeners();

export function handleCardClick(name, link) {
  popupViewCard.open(name, link);
}

const popupDeleteCard = new PopupWithForm({
  popupSelector: '#popup-delete-place',

  handleSubmit: () => {

    popupDeleteCard.loadingChange(true);

    api
      .deleteCard(cardForDelete._cardId)
      .then(() => {
        cardForDelete.deleteCard();
        popupDeleteCard.close();
      })
      .catch((err) => {
        console.log("Ошибка удаления карточки", err);
      })
      .finally(() => {
        popupDeleteCard.loadingChange(false);
      });

  },
});

export function cardDeletePopup(card) {

  cardForDelete = card;
  popupDeleteCard.open();
}
popupDeleteCard.setEventListeners();

const createNewPlace = (cardPlace, userId, templateSelector, openFunc, viewCardFunc, cardDeleteFunc, cardLikeFunc) => {
  const card = new Card(cardPlace, userId, templateSelector, openFunc, viewCardFunc, cardDeleteFunc, cardLikeFunc);
  return card.generateCard();
}

const popupEditAvatar = new PopupWithForm({
  popupSelector: '#popup-edit-avatar',
  handleSubmit: (data) => {

    popupEditAvatar.loadingChange(true);

    api
      .patchAvatar({
        avatar: data['avatar-img']
      })
      .then((res) => {
        editUserInfo.setUserInfo(res);
        popupEditAvatar.close();
      })
      .catch((err) => {
        console.log("Ошибка изменения аватарки", err);
      })
      .finally(() => {
        popupEditAvatar.loadingChange(false);
      });

  }
});
popupEditAvatar.setEventListeners();


function editAvatar() {
  formEditAvatar.reset();
  validators[formEditAvatar.getAttribute('name')].checkForm();
  popupEditAvatar.open();
}

formsForValidate.forEach((form) => {
  const formValidator = new FormValidator(options, form);
  validators[form.getAttribute('name')] = formValidator;
  formValidator.enableValidation();
});

editButton.addEventListener('click', editProfile);

addPlaceButton.addEventListener('click', addPlace);

editAvatarButton.addEventListener('click', editAvatar);