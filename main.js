(()=>{"use strict";const e={formSelector:".popup__form",formSectionClass:".popup__form-section",submitButtonSelector:".popup__button",inputSelector:".popup__input",inactiveButtonClass:"popup__button_disabled",inputErrorSelector:".popup__error",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function n(e,n){for(var o=0;o<n.length;o++){var r=n[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var r=o.call(e,"string");if("object"!==t(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===t(i)?i:String(i)),r)}var i}var o=function(){function e(t,n,o,r,i,u){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._templateSelector=o,this._name=t.name,this._link=t.link,this._likesCount=t.likes,this._userId=n,this._ownerCard=t.owner._id,this._cardId=t._id,this._handleCardClick=i,this._handleTrashCard=u,this._handleTrashCard=this._handleTrashCard.bind(this)}var t,o;return t=e,(o=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_handleLikeCard",value:function(){this._like.classList.toggle("element__like_active")}},{key:"_setEventListeners",value:function(){var e=this;this._like.addEventListener("click",(function(){e._handleLikeCard()})),this._trashElement.addEventListener("click",(function(){console.log(e),e._handleTrashCard(e)})),this._imgElement.addEventListener("click",(function(){e._handleCardClick(e._name,e._link)}))}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._like=this._element.querySelector(".element__like"),this._likeCount=this._element.querySelector(".element__like-count"),this._imgElement=this._element.querySelector(".element__img"),this._trashElement=this._element.querySelector(".element__trash"),this._setEventListeners(),this._ownerCard!=this._userId&&this._trashElement.remove(),this._imgElement.src=this._link,this._imgElement.alt=this._name,this._element.querySelector(".element__text").textContent=this._name,this._likeCount.textContent=this._likesCount.length,this._element}},{key:"deleteCard",value:function(){this._element.remove()}}])&&n(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function i(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var u=function(){function e(t,n){var o=t.items,r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=o,this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._renderedItems.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function l(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,r=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==a(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===a(r)?r:String(r)),o)}var r}var c=function(){function e(t){var n=t.UserInfoSelectors;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(n.name),this._userAbout=document.querySelector(n.about),this._avatar=document.querySelector(n.avatar)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,about:this._userAbout.textContent}}},{key:"setUserInfo",value:function(e){this._userName.textContent=e.name,this._userAbout.textContent=e.about,this._avatar.src=e.avatar,this._avatar.alt=e.name}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function p(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,r=function(e,t){if("object"!==s(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==s(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===s(r)?r:String(r)),o)}var r}var f=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._options=t,this._form=n,this._inputs=Array.from(n.querySelectorAll(this._options.inputSelector)),this._buttonElement=n.querySelector(this._options.submitButtonSelector)}var t,n;return t=e,(n=[{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"_setEventListeners",value:function(){var e=this;this._inputs.forEach((function(t){t.addEventListener("input",(function(){e._toggleInputState(t),e._toggleButtonState()}))})),this._toggleButtonState()}},{key:"_toggleInputState",value:function(e){var t=e.validity.valid;this._setInputState(e,t)}},{key:"_setInputState",value:function(e,t){var n=this._findErrorElement(e);t?(this._hideErrorClassForInput(e,this._options.inputErrorClass),this._hideError(n)):(this._showErrorClassForInput(e,this._options.inputErrorClass),this._showError(n,e.validationMessage,this._options.errorClass))}},{key:"_findErrorElement",value:function(e){return e.closest(this._options.formSectionClass).querySelector(this._options.inputErrorSelector)}},{key:"_hideErrorClassForInput",value:function(e,t){e.classList.remove(t)}},{key:"_showErrorClassForInput",value:function(e,t){e.classList.add(t)}},{key:"checkForm",value:function(){var e=this;this._inputs.forEach((function(t){e._hideErrorForInput(t),e._hideErrorClassForInput(t,e._options.inputErrorClass)})),this._toggleButtonState()}},{key:"_hideErrorForInput",value:function(e){var t=this._findErrorElement(e);this._hideError(t,this._options.errorClass)}},{key:"_toggleButtonState",value:function(){this._inputs.every((function(e){return e.validity.valid}))?this._enableButton():this._disableButton()}},{key:"_hideError",value:function(e){e.textContent="",e.classList.remove(this._options.errorClass)}},{key:"_showError",value:function(e,t){e.textContent=t,e.classList.add(this._options.errorClass)}},{key:"_enableButton",value:function(){this._buttonElement.removeAttribute("disabled"),this._buttonElement.classList.remove(this._options.inactiveButtonClass)}},{key:"_disableButton",value:function(){this._buttonElement.setAttribute("disabled","true"),this._buttonElement.classList.add(this._options.inactiveButtonClass)}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function m(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,r=function(e,t){if("object"!==y(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==y(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===y(r)?r:String(r)),o)}var r}var h=function(){function e(t){var n=t.popupSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(n),this._handleClickClose=this._handleClickClose.bind(this),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleClickClose",value:function(e){(e.target===e.currentTarget||e.target.classList.contains("popup__button-close-img"))&&this.close()}},{key:"_handleEscClose",value:function(e){console.log(e.key),"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){this._popup.addEventListener("click",this._handleClickClose)}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function b(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,r=function(e,t){if("object"!==d(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==d(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===d(r)?r:String(r)),o)}var r}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},v.apply(this,arguments)}function _(e,t){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},_(e,t)}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_(e,t)}(u,e);var t,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(o);if(r){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t,n=e.popupSelector;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,{popupSelector:n}))._popupOpenImgSrc=t._popup.querySelector(".popup__view-img"),t._popupOpenImgName=t._popup.querySelector(".popup__view-img-caption"),t}return t=u,(n=[{key:"open",value:function(e,t){v(S(u.prototype),"open",this).call(this),this._popupOpenImgSrc.src=t,this._popupOpenImgSrc.alt=e,this._popupOpenImgName.textContent=e}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(h);function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function E(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,r=function(e,t){if("object"!==k(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==k(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===k(r)?r:String(r)),o)}var r}function w(){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=O(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},w.apply(this,arguments)}function C(e,t){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},C(e,t)}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&C(e,t)}(u,e);var t,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O(o);if(r){var n=O(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===k(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return j(e)}(this,e)});function u(e){var t,n=e.popupSelector,o=e.handleSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,{popupSelector:n}))._handleSubmit=o,t._form=t._popup.querySelector(".popup__form"),t._inputList=t._form.querySelectorAll(".popup__input"),t._handleFormSubmit=t._handleFormSubmit.bind(j(t)),t}return t=u,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){e[t.name]=t.value})),e}},{key:"_handleFormSubmit",value:function(e){e.preventDefault(),console.log(this._getInputValues()),this._handleSubmit(this._getInputValues())}},{key:"setEventListeners",value:function(){this._form.addEventListener("submit",this._handleFormSubmit),w(O(u.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){w(O(u.prototype),"close",this).call(this),this._form.reset()}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(h);function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}function I(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,r=function(e,t){if("object"!==T(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==T(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===T(r)?r:String(r)),o)}var r}var L=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.baseUrl,this._headers=t.headers}var t,n;return t=e,(n=[{key:"getUser",value:function(){return fetch("https://mesto.nomoreparties.co/v1/cohort-64/users/me",{headers:{authorization:"9615b71d-c66b-4314-b250-e7089bed6442","Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"createUser",value:function(e,t){return fetch("https://mesto.nomoreparties.co/v1/cohort-64/users/me",{method:"PATCH",headers:{authorization:"9615b71d-c66b-4314-b250-e7089bed6442","Content-Type":"application/json"},body:JSON.stringify({name:e,about:t})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"getCards",value:function(){return fetch("https://mesto.nomoreparties.co/v1/cohort-64/cards",{headers:{authorization:"9615b71d-c66b-4314-b250-e7089bed6442","Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"postCard",value:function(e){return fetch("https://mesto.nomoreparties.co/v1/cohort-64/cards",{method:"POST",headers:{authorization:"9615b71d-c66b-4314-b250-e7089bed6442","Content-Type":"application/json"},body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"deleteCard",value:function(e){return fetch("https://mesto.nomoreparties.co/v1/cohort-64/cards/".concat(e),{method:"DELETE",headers:{authorization:"9615b71d-c66b-4314-b250-e7089bed6442","Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"addLike",value:function(e){return fetch("https://mesto.nomoreparties.co/v1/cohort-64/cards/".concat(e,"/likes"),{method:"PUT",headers:{authorization:"9615b71d-c66b-4314-b250-e7089bed6442","Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"deleteLike",value:function(e){return fetch("https://mesto.nomoreparties.co/v1/cohort-64/cards/".concat(e,"/likes"),{method:"DELETE",headers:{authorization:"9615b71d-c66b-4314-b250-e7089bed6442","Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),q=document.querySelector(".profile__info"),A=(q.querySelector(".profile__info-name"),q.querySelector(".profile__info-profession"),q.querySelector(".profile__info-edit-button")),R=document.querySelector(".profile__add-button"),B=(document.querySelectorAll(".popup__button-close"),document.querySelectorAll(".popup"),document.querySelector("#popup-edit-profile")),F=document.querySelector("#popup-add-place"),U=(document.querySelector("#edit-form"),document.querySelector("#add-place-form"),B.querySelector(".popup__input_type_name")),x=B.querySelector(".popup__input_type_profession"),z=(document.querySelector(".elements__list"),F.querySelector(".popup__input_type_place"),F.querySelector(".popup__input_type_place-img"),document.querySelector("#popup-view-img"),document.querySelector(".popup__view-img"),document.querySelector(".popup__view-img-caption"),document.forms.editForm),N=document.forms.addPlaceForm,D=Array.from(document.querySelectorAll(".popup__form")),V={};function J(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var M,H,$=new L({optionsApi:{baseUrl:"https://mesto.nomoreparties.co/v1/cohort-64",headers:{authorization:"9615b71d-c66b-4314-b250-e7089bed6442","Content-Type":"application/json"}}}),G=[$.getUser(),$.getCards()],K=new c({UserInfoSelectors:{name:".profile__info-name",about:".profile__info-profession",avatar:".profile__avatar"}});Promise.all(G).then((function(e){var t,n,o=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,i,u,a=[],l=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(o=i.call(n)).done)&&(a.push(o.value),a.length!==t);l=!0);}catch(e){c=!0,r=e}finally{try{if(!l&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(c)throw r}}return a}}(t,n)||function(e,t){if(e){if("string"==typeof e)return J(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?J(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),r=o[0],i=o[1];M=r._id,K.setUserInfo(r),console.log(i);var a=new u({items:i,renderer:function(e){console.log(e),a.addItem(te(e,M,"#element-li",open,Y,ee))}},".elements__list");a.renderItems()})).catch((function(e){return console.log("Ошибка запроса данных о пользователе или карточке",e)}));var Q=new P({popupSelector:"#popup-edit-profile",handleSubmit:function(e){var t={name:e["user-name"],about:e["user-job"]};$.createUser(t.name,t.about).then((function(e){K.setUserInfo(e),Q.close()})).catch((function(e){console.log("Ошибка редактирования профиля",e.message)}))}});Q.setEventListeners();var W=new P({popupSelector:"#popup-add-place",handleSubmit:function(e){$.postCard({name:e["place-title"],link:e["place-img"]}).then((function(e){te(e,M,"#element-li",open,Y,ee),W.close()})).catch((function(e){console.log("Ошибка добавления новой карточки",e.message)}))}});W.setEventListeners();var X=new g({popupSelector:"#popup-view-img"});function Y(e,t){X.open(e,t)}X.setEventListeners();var Z=new P({popupSelector:"#popup-delete-place",handleSubmit:function(e){var t;console.log(H),t=H._cardId,console.log(t),$.deleteCard(t).then((function(){H.deleteCard(),Z.close()})).catch((function(e){console.log("Ошибка удаления карточки",e.message)}))}});function ee(e){console.log(e),H=e,Z.open()}Z.setEventListeners(),Z.setEventListeners();var te=function(e,t,n,r,i,u){return new o(e,t,n,r,i,u).generateCard()};D.forEach((function(t){var n=new f(e,t);V[t.getAttribute("name")]=n,n.enableValidation()})),A.addEventListener("click",(function(){U.value=K.getUserInfo().name,x.value=K.getUserInfo().about,V[z.getAttribute("name")].checkForm(),Q.open()})),R.addEventListener("click",(function(){N.reset(),V[N.getAttribute("name")].checkForm(),W.open()}))})();