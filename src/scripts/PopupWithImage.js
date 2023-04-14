import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor({ popupSelector }) {
        super({ popupSelector });
        this._popupOpenImgSrc = this._popup.querySelector(".popup__view-img");
        this._popupOpenImgName = this._popup.querySelector(".popup__view-img-caption");
    }

    open(name, link) {
        super.open();
        this._popupOpenImgSrc.src = link;
        this._popupOpenImgSrc.alt = name;
        this._popupOpenImgName.textContent = name;
    }
}