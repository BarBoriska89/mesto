export default class UserInfo {
    constructor({ UserInfoSelectors }) {
        this._userName = document.querySelector(UserInfoSelectors['name']);
        this._userAbout = document.querySelector(UserInfoSelectors['about']);

    }

    getUserInfo() {
        const userInfoForForm = {
            name: this._userName.textContent,
            about: this._userAbout.textContent
        };
        return userInfoForForm;
    }

    setUserInfo(newUserInfo) {
        this._userName.textContent = newUserInfo.name;
        this._userAbout.textContent = newUserInfo.about;
    }
}