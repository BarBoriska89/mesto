(()=>{"use strict";const e={formSelector:".popup__form",formSectionClass:".popup__form-section",submitButtonSelector:".popup__button",inputSelector:".popup__input",inactiveButtonClass:"popup__button_disabled",inputErrorSelector:".popup__error",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function n(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var r=function(){function e(t,n,r,o,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._templateSelector=r,this._name=t,this._link=n,this._handleCardClick=i}var t,r;return t=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_handleLikeCard",value:function(){this._like.classList.toggle("element__like_active")}},{key:"_handleTrashCard",value:function(){this._element.remove()}},{key:"_setEventListeners",value:function(){var e=this;this._like.addEventListener("click",(function(){e._handleLikeCard()})),this._element.querySelector(".element__trash").addEventListener("click",(function(){e._handleTrashCard()})),this._imgElement.addEventListener("click",(function(){e._handleCardClick(e._name,e._link)}))}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._like=this._element.querySelector(".element__like"),this._imgElement=this._element.querySelector(".element__img"),this._setEventListeners(),this._imgElement.src=this._link,this._imgElement.alt=this._name,this._element.querySelector(".element__text").textContent=this._name,this._element}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==o(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===o(i)?i:String(i)),r)}var i}var u=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._renderedItems.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==l(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===l(o)?o:String(o)),r)}var o}var s=function(){function e(t){var n=t.UserInfoSelectors;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(n.name),this._userAbout=document.querySelector(n.about)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,about:this._userAbout.textContent}}},{key:"setUserInfo",value:function(e){this._userName.textContent=e.name,this._userAbout.textContent=e.about}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===a(o)?o:String(o)),r)}var o}var f=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._options=t,this._form=n,this._inputs=Array.from(n.querySelectorAll(this._options.inputSelector)),this._buttonElement=n.querySelector(this._options.submitButtonSelector)}var t,n;return t=e,(n=[{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"_setEventListeners",value:function(){var e=this;this._inputs.forEach((function(t){t.addEventListener("input",(function(){e._toggleInputState(t),e._toggleButtonState()}))})),this._toggleButtonState()}},{key:"_toggleInputState",value:function(e){var t=e.validity.valid;this._setInputState(e,t)}},{key:"_setInputState",value:function(e,t){var n=this._findErrorElement(e);t?(this._hideErrorClassForInput(e,this._options.inputErrorClass),this._hideError(n)):(this._showErrorClassForInput(e,this._options.inputErrorClass),this._showError(n,e.validationMessage,this._options.errorClass))}},{key:"_findErrorElement",value:function(e){return e.closest(this._options.formSectionClass).querySelector(this._options.inputErrorSelector)}},{key:"_hideErrorClassForInput",value:function(e,t){e.classList.remove(t)}},{key:"_showErrorClassForInput",value:function(e,t){e.classList.add(t)}},{key:"checkForm",value:function(){var e=this;this._inputs.forEach((function(t){e._hideErrorForInput(t),e._hideErrorClassForInput(t,e._options.inputErrorClass)})),this._toggleButtonState()}},{key:"_hideErrorForInput",value:function(e){var t=this._findErrorElement(e);this._hideError(t,this._options.errorClass)}},{key:"_toggleButtonState",value:function(){this._inputs.every((function(e){return e.validity.valid}))?this._enableButton():this._disableButton()}},{key:"_hideError",value:function(e){e.textContent="",e.classList.remove(this._options.errorClass)}},{key:"_showError",value:function(e,t){e.textContent=t,e.classList.add(this._options.errorClass)}},{key:"_enableButton",value:function(){this._buttonElement.removeAttribute("disabled"),this._buttonElement.classList.remove(this._options.inactiveButtonClass)}},{key:"_disableButton",value:function(){this._buttonElement.setAttribute("disabled","true"),this._buttonElement.classList.add(this._options.inactiveButtonClass)}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==y(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===y(o)?o:String(o)),r)}var o}var b=function(){function e(t){var n=t.popupSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(n),this._handleClickClose=this._handleClickClose.bind(this),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleClickClose",value:function(e){(e.target===e.currentTarget||e.target.classList.contains("popup__button-close-img"))&&this.close()}},{key:"_handleEscClose",value:function(e){console.log(e.key),"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){this._popup.addEventListener("click",this._handleClickClose)}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==d(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===d(o)?o:String(o)),r)}var o}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},v.apply(this,arguments)}function _(e,t){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},_(e,t)}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(r);if(o){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t,n=e.popupSelector;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,{popupSelector:n}))._popupOpenImgSrc=t._popup.querySelector(".popup__view-img"),t._popupOpenImgName=t._popup.querySelector(".popup__view-img-caption"),t}return t=u,(n=[{key:"open",value:function(e,t){v(S(u.prototype),"open",this).call(this),this._popupOpenImgSrc.src=t,this._popupOpenImgSrc.alt=e,this._popupOpenImgName.textContent=e}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(b);function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==k(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==k(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===k(o)?o:String(o)),r)}var o}function E(){return E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=O(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},E.apply(this,arguments)}function j(e,t){return j=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},j(e,t)}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&j(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O(r);if(o){var n=O(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===k(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return C(e)}(this,e)});function u(e){var t,n=e.popupSelector,r=e.handleSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,{popupSelector:n}))._handleSubmit=r,t._form=t._popup.querySelector(".popup__form"),t._inputList=t._form.querySelectorAll(".popup__input"),t._handleFormSubmit=t._handleFormSubmit.bind(C(t)),t}return t=u,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){e[t.name]=t.value})),e}},{key:"_handleFormSubmit",value:function(e){e.preventDefault(),this._handleSubmit(this._getInputValues())}},{key:"setEventListeners",value:function(){this._form.addEventListener("submit",this._handleFormSubmit),E(O(u.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){E(O(u.prototype),"close",this).call(this),this._form.reset()}}])&&w(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(b);function q(e){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q(e)}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==q(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==q(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===q(o)?o:String(o)),r)}var o}var I=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.baseUrl,this._headers=t.headers}var t,n;return t=e,(n=[{key:"getUser",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:{authorization:"9615b71d-c66b-4314-b250-e7089bed6442","Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"createUser",value:function(e,t){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e,t)}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),T=document.querySelector(".profile__info"),x=(T.querySelector(".profile__info-name"),T.querySelector(".profile__info-profession"),T.querySelector(".profile__info-edit-button")),R=document.querySelector(".profile__add-button"),A=(document.querySelectorAll(".popup__button-close"),document.querySelectorAll(".popup"),document.querySelector("#popup-edit-profile")),B=document.querySelector("#popup-add-place"),F=(document.querySelector("#edit-form"),document.querySelector("#add-place-form"),A.querySelector(".popup__input_type_name")),U=A.querySelector(".popup__input_type_profession"),N=(document.querySelector(".elements__list"),B.querySelector(".popup__input_type_place"),B.querySelector(".popup__input_type_place-img"),document.querySelector("#popup-view-img"),document.querySelector(".popup__view-img"),document.querySelector(".popup__view-img-caption"),document.forms.editForm),D=document.forms.addPlaceForm,V=Array.from(document.querySelectorAll(".popup__form")),z={},H=new I({optionsApi:{baseUrl:"https://mesto.nomoreparties.co/v1/cohort-64",headers:{authorization:"9615b71d-c66b-4314-b250-e7089bed6442","Content-Type":"application/json"}}}),J=new s({UserInfoSelectors:{name:".profile__info-name",about:".profile__info-profession"}});H.getUser().then((function(e){J.setUserInfo(e)})).catch((function(e){return console.log("Ошибка запроса данных",e)}));var M=new P({popupSelector:"#popup-edit-profile",handleSubmit:function(e){var t={name:e["user-name"],about:e["user-job"]};H.createUser(t.name,t.about).then((function(e){J.setUserInfo(e),M.close()})).catch((function(e){console.log("Ошибка редактирования профиля",e.message)}))}});M.setEventListeners();var G=new P({popupSelector:"#popup-add-place",handleSubmit:function(e){W.addItem(X(e["place-title"],e["place-img"],"#element-li",open,Q)),G.close()}});G.setEventListeners();var K=new g({popupSelector:"#popup-view-img"});function Q(e,t){K.open(e,t)}K.setEventListeners();var W=new u({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){W.addItem(X(e.name,e.link,"#element-li",open,Q))}},".elements__list"),X=function(e,t,n,o,i){return new r(e,t,n,o,i).generateCard()};W.renderItems(),V.forEach((function(t){var n=new f(e,t);z[t.getAttribute("name")]=n,n.enableValidation()})),x.addEventListener("click",(function(){F.value=J.getUserInfo().name,U.value=J.getUserInfo().about,z[N.getAttribute("name")].checkForm(),M.open()})),R.addEventListener("click",(function(){D.reset(),z[D.getAttribute("name")].checkForm(),G.open()}))})();