(()=>{"use strict";const e={formSelector:".popup__form",formSectionClass:".popup__form-section",submitButtonSelector:".popup__button",inputSelector:".popup__input",inactiveButtonClass:"popup__button_disabled",inputErrorSelector:".popup__error",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function n(e,n){for(var o=0;o<n.length;o++){var r=n[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var r=o.call(e,"string");if("object"!==t(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===t(i)?i:String(i)),r)}var i}var o=function(){function e(t,n,o,r,i,u,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._templateSelector=o,this._name=t.name,this._link=t.link,this._likes=t.likes,this._userId=n,this._ownerCard=t.owner._id,this._cardId=t._id,this._handleCardClick=i,this._handleTrashCard=u,this._handleTrashCard=this._handleTrashCard.bind(this),this._handleLike=a}var t,o;return t=e,(o=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_handleLikeCard",value:function(){this._handleLike(this)}},{key:"checkLike",value:function(){return this._like.classList.contains("element__like_active")}},{key:"addLike",value:function(e){this._like.classList.add("element__like_active"),this._likeCount.textContent=e.likes.length}},{key:"deleteLike",value:function(e){this._like.classList.remove("element__like_active"),this._likeCount.textContent=e.likes.length}},{key:"_setEventListeners",value:function(){var e=this;this._like.addEventListener("click",(function(){e._handleLikeCard()})),this._trashElement.addEventListener("click",(function(){e._handleTrashCard(e)})),this._imgElement.addEventListener("click",(function(){e._handleCardClick(e._name,e._link)}))}},{key:"generateCard",value:function(){this._element=this._getTemplate(),this._like=this._element.querySelector(".element__like"),this._likeCount=this._element.querySelector(".element__like-count"),this._imgElement=this._element.querySelector(".element__img"),this._trashElement=this._element.querySelector(".element__trash"),this._setEventListeners(),this._ownerCard!=this._userId&&this._trashElement.remove();for(var e=0;e<this._likes.length;e++)this._likes[e]._id!=this._userId?this._like.classList.remove("element__like_active"):this._like.classList.add("element__like_active");return this._imgElement.src=this._link,this._imgElement.alt=this._name,this._element.querySelector(".element__text").textContent=this._name,this._likeCount.textContent=this._likes.length,this._element}},{key:"deleteCard",value:function(){this._element.remove()}}])&&n(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function i(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var u=function(){function e(t,n){var o=t.items,r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=o,this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._renderedItems.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function l(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,r=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==a(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===a(r)?r:String(r)),o)}var r}var c=function(){function e(t){var n=t.UserInfoSelectors;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(n.name),this._userAbout=document.querySelector(n.about),this._avatar=document.querySelector(n.avatar)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,about:this._userAbout.textContent}}},{key:"setUserInfo",value:function(e){this._userName.textContent=e.name,this._userAbout.textContent=e.about,this._avatar.src=e.avatar,this._avatar.alt=e.name}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function p(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,r=function(e,t){if("object"!==s(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==s(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===s(r)?r:String(r)),o)}var r}var f=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._options=t,this._form=n,this._inputs=Array.from(n.querySelectorAll(this._options.inputSelector)),this._buttonElement=n.querySelector(this._options.submitButtonSelector)}var t,n;return t=e,(n=[{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"_setEventListeners",value:function(){var e=this;this._inputs.forEach((function(t){t.addEventListener("input",(function(){e._toggleInputState(t),e._toggleButtonState()}))})),this._toggleButtonState()}},{key:"_toggleInputState",value:function(e){var t=e.validity.valid;this._setInputState(e,t)}},{key:"_setInputState",value:function(e,t){var n=this._findErrorElement(e);t?(this._hideErrorClassForInput(e,this._options.inputErrorClass),this._hideError(n)):(this._showErrorClassForInput(e,this._options.inputErrorClass),this._showError(n,e.validationMessage,this._options.errorClass))}},{key:"_findErrorElement",value:function(e){return e.closest(this._options.formSectionClass).querySelector(this._options.inputErrorSelector)}},{key:"_hideErrorClassForInput",value:function(e,t){e.classList.remove(t)}},{key:"_showErrorClassForInput",value:function(e,t){e.classList.add(t)}},{key:"checkForm",value:function(){var e=this;this._inputs.forEach((function(t){e._hideErrorForInput(t),e._hideErrorClassForInput(t,e._options.inputErrorClass)})),this._toggleButtonState()}},{key:"_hideErrorForInput",value:function(e){var t=this._findErrorElement(e);this._hideError(t,this._options.errorClass)}},{key:"_toggleButtonState",value:function(){this._inputs.every((function(e){return e.validity.valid}))?this._enableButton():this._disableButton()}},{key:"_hideError",value:function(e){e.textContent="",e.classList.remove(this._options.errorClass)}},{key:"_showError",value:function(e,t){e.textContent=t,e.classList.add(this._options.errorClass)}},{key:"_enableButton",value:function(){this._buttonElement.removeAttribute("disabled"),this._buttonElement.classList.remove(this._options.inactiveButtonClass)}},{key:"_disableButton",value:function(){this._buttonElement.setAttribute("disabled","true"),this._buttonElement.classList.add(this._options.inactiveButtonClass)}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function y(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,r=function(e,t){if("object"!==h(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==h(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===h(r)?r:String(r)),o)}var r}var m=function(){function e(t){var n=t.popupSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(n),this._handleClickClose=this._handleClickClose.bind(this),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleClickClose",value:function(e){(e.target===e.currentTarget||e.target.classList.contains("popup__button-close-img"))&&this.close()}},{key:"_handleEscClose",value:function(e){console.log(e.key),"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){this._popup.addEventListener("click",this._handleClickClose)}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function _(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,r=function(e,t){if("object"!==d(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==d(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===d(r)?r:String(r)),o)}var r}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},v.apply(this,arguments)}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(u,e);var t,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(o);if(r){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t,n=e.popupSelector;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,{popupSelector:n}))._popupOpenImgSrc=t._popup.querySelector(".popup__view-img"),t._popupOpenImgName=t._popup.querySelector(".popup__view-img-caption"),t}return t=u,(n=[{key:"open",value:function(e,t){v(S(u.prototype),"open",this).call(this),this._popupOpenImgSrc.src=t,this._popupOpenImgSrc.alt=e,this._popupOpenImgName.textContent=e}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(m);function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function C(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,r=function(e,t){if("object"!==k(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==k(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===k(r)?r:String(r)),o)}var r}function E(){return E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=O(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},E.apply(this,arguments)}function w(e,t){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},w(e,t)}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&w(e,t)}(u,e);var t,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O(o);if(r){var n=O(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===k(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return j(e)}(this,e)});function u(e){var t,n=e.popupSelector,o=e.handleSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,{popupSelector:n}))._handleSubmit=o,t._form=t._popup.querySelector(".popup__form"),t._inputList=t._form.querySelectorAll(".popup__input"),t._handleFormSubmit=t._handleFormSubmit.bind(j(t)),t._submitButton=t._form.querySelector(".popup__button"),t}return t=u,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){e[t.name]=t.value})),e}},{key:"_handleFormSubmit",value:function(e){e.preventDefault(),console.log(this._getInputValues()),this._handleSubmit(this._getInputValues())}},{key:"setEventListeners",value:function(){this._form.addEventListener("submit",this._handleFormSubmit),E(O(u.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){E(O(u.prototype),"close",this).call(this),this._form.reset()}},{key:"loadingChange",value:function(e){this._submitButton.textContent=e?"Сохранение...":"Сохранить"}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(m);function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function I(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,r=function(e,t){if("object"!==L(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==L(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===L(r)?r:String(r)),o)}var r}var T,q,A,R=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.baseUrl,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?(console.log(this._url),console.log(this._headers),e.json()):Promise.reject("Ошибка: ".concat(e.status))}},{key:"getUser",value:function(){var e=this;return fetch("https://mesto.nomoreparties.co/v1/cohort-64/users/me",{headers:{authorization:"9615b71d-c66b-4314-b250-e7089bed6442","Content-Type":"application/json"}}).then((function(t){e._checkResponse(t)}))}},{key:"createUser",value:function(e,t){var n=this;return fetch("https://mesto.nomoreparties.co/v1/cohort-64/users/me",{method:"PATCH",headers:{authorization:"9615b71d-c66b-4314-b250-e7089bed6442","Content-Type":"application/json"},body:JSON.stringify({name:e,about:t})}).then((function(e){n._checkResponse(e)}))}},{key:"getCards",value:function(){var e=this;return fetch("https://mesto.nomoreparties.co/v1/cohort-64/cards",{headers:{authorization:"9615b71d-c66b-4314-b250-e7089bed6442","Content-Type":"application/json"}}).then((function(t){e._checkResponse(t)}))}},{key:"postCard",value:function(e){var t=this;return fetch("https://mesto.nomoreparties.co/v1/cohort-64/cards",{method:"POST",headers:{authorization:"9615b71d-c66b-4314-b250-e7089bed6442","Content-Type":"application/json"},body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){t._checkResponse(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("https://mesto.nomoreparties.co/v1/cohort-64/cards/".concat(e),{method:"DELETE",headers:{authorization:"9615b71d-c66b-4314-b250-e7089bed6442","Content-Type":"application/json"}}).then((function(e){t._checkResponse(e)}))}},{key:"addLike",value:function(e){var t=this;return fetch("https://mesto.nomoreparties.co/v1/cohort-64/cards/".concat(e,"/likes"),{method:"PUT",headers:{authorization:"9615b71d-c66b-4314-b250-e7089bed6442","Content-Type":"application/json"}}).then((function(e){t._checkResponse(e)}))}},{key:"deleteLike",value:function(e){var t=this;return fetch("https://mesto.nomoreparties.co/v1/cohort-64/cards/".concat(e,"/likes"),{method:"DELETE",headers:{authorization:"9615b71d-c66b-4314-b250-e7089bed6442","Content-Type":"application/json"}}).then((function(e){t._checkResponse(e)}))}},{key:"patchAvatar",value:function(e){var t=this,n=e.avatar;return fetch("https://mesto.nomoreparties.co/v1/cohort-64/users/me/avatar",{method:"PATCH",headers:{authorization:"9615b71d-c66b-4314-b250-e7089bed6442","Content-Type":"application/json"},body:JSON.stringify({avatar:n})}).then((function(e){t._checkResponse(e)}))}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),B=document.querySelector(".profile__info"),x=(B.querySelector(".profile__info-name"),B.querySelector(".profile__info-profession"),B.querySelector(".profile__info-edit-button")),F=document.querySelector(".profile__add-button"),U=document.querySelector(".profile__section-avatar"),z=(document.querySelectorAll(".popup__button-close"),document.querySelectorAll(".popup"),document.querySelector("#popup-edit-profile")),N=document.querySelector("#popup-add-place"),D=(document.querySelector("#edit-form"),document.querySelector("#add-place-form"),z.querySelector(".popup__input_type_name")),V=z.querySelector(".popup__input_type_profession"),J=(document.querySelector(".elements__list"),N.querySelector(".popup__input_type_place"),N.querySelector(".popup__input_type_place-img"),document.querySelector("#popup-view-img"),document.querySelector(".popup__view-img"),document.querySelector(".popup__view-img-caption"),document.forms.editForm),H=document.forms.addPlaceForm,M=document.forms.editAvatarForm,$=Array.from(document.querySelectorAll(".popup__form")),G={};function K(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var Q=new R({optionsApi:{baseUrl:"https://mesto.nomoreparties.co/v1/cohort-64",headers:{authorization:"9615b71d-c66b-4314-b250-e7089bed6442","Content-Type":"application/json"}}}),W=[Q.getUser(),Q.getCards()],X=new c({UserInfoSelectors:{name:".profile__info-name",about:".profile__info-profession",avatar:".profile__avatar"}});Promise.all(W).then((function(e){var t,n,o=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,i,u,a=[],l=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(o=i.call(n)).done)&&(a.push(o.value),a.length!==t);l=!0);}catch(e){c=!0,r=e}finally{try{if(!l&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(c)throw r}}return a}}(t,n)||function(e,t){if(e){if("string"==typeof e)return K(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?K(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),r=o[0],i=o[1];T=r._id,X.setUserInfo(r),(A=new u({items:i,renderer:function(e){A.addItem(ie(e,T,"#element-li",open,ne,re,Z))}},".elements__list")).renderItems()})).catch((function(e){return console.log("Ошибка запроса данных о пользователе или карточке",e)}));var Y=new P({popupSelector:"#popup-edit-profile",handleSubmit:function(e){var t={name:e["user-name"],about:e["user-job"]};Y.loadingChange(!0),Q.createUser(t.name,t.about).then((function(e){X.setUserInfo(e),Y.close()})).catch((function(e){console.log("Ошибка редактирования профиля",e)})).finally((function(){Y.loadingChange(!1)}))}});function Z(e){e.checkLike()?Q.deleteLike(e._cardId).then((function(t){e.deleteLike(t)})).catch((function(e){console.log("Ошибка удаления лайка",e)})):Q.addLike(e._cardId).then((function(t){e.addLike(t)})).catch((function(e){console.log("Ошибка добавления лайка",e)}))}Y.setEventListeners();var ee=new P({popupSelector:"#popup-add-place",handleSubmit:function(e){ee.loadingChange(!0),Q.postCard({name:e["place-title"],link:e["place-img"]}).then((function(e){A.addItem(ie(e,T,"#element-li",open,ne,re,Z)),ee.close()})).catch((function(e){console.log("Ошибка добавления новой карточки",e)})).finally((function(){ee.loadingChange(!1)}))}});ee.setEventListeners();var te=new g({popupSelector:"#popup-view-img"});function ne(e,t){te.open(e,t)}te.setEventListeners();var oe=new P({popupSelector:"#popup-delete-place",handleSubmit:function(){oe.loadingChange(!0),Q.deleteCard(q._cardId).then((function(){q.deleteCard(),oe.close()})).catch((function(e){console.log("Ошибка удаления карточки",e)})).finally((function(){oe.loadingChange(!1)}))}});function re(e){q=e,oe.open()}oe.setEventListeners();var ie=function(e,t,n,r,i,u,a){return new o(e,t,n,r,i,u,a).generateCard()},ue=new P({popupSelector:"#popup-edit-avatar",handleSubmit:function(e){ue.loadingChange(!0),Q.patchAvatar({avatar:e["avatar-img"]}).then((function(e){X.setUserInfo(e),ue.close()})).catch((function(e){console.log("Ошибка изменения аватарки",e)})).finally((function(){ue.loadingChange(!1)}))}});ue.setEventListeners(),$.forEach((function(t){var n=new f(e,t);G[t.getAttribute("name")]=n,n.enableValidation()})),x.addEventListener("click",(function(){D.value=X.getUserInfo().name,V.value=X.getUserInfo().about,G[J.getAttribute("name")].checkForm(),Y.open()})),F.addEventListener("click",(function(){H.reset(),G[H.getAttribute("name")].checkForm(),ee.open()})),U.addEventListener("click",(function(){M.reset(),G[M.getAttribute("name")].checkForm(),ue.open()}))})();