export default class Api {
    constructor(optionsApi) {
        this._url = optionsApi['baseUrl'];
        this._headers = optionsApi['headers'];
    }

    getUser() {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-64/users/me', {
            headers: {
                authorization: '9615b71d-c66b-4314-b250-e7089bed6442',
                'Content-Type': 'application/json'
            },
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            });
    }

    createUser(name, about) {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-64/users/me', {
            method: 'PATCH',
            headers: {
                authorization: '9615b71d-c66b-4314-b250-e7089bed6442',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, about }),
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            });
    }

    getCards() {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-64/cards', {
            headers: {
                authorization: '9615b71d-c66b-4314-b250-e7089bed6442',
                'Content-Type': 'application/json'
            },
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            });
    }

    postCard(card) {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-64/cards', {
            method: 'POST',
            headers: {
                authorization: '9615b71d-c66b-4314-b250-e7089bed6442',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: card.name,
                link: card.link,
            }),
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            });
    }

    deleteCard(cardId) {
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-64/cards/${cardId}`, {
            method: 'DELETE',
            headers: {
                authorization: '9615b71d-c66b-4314-b250-e7089bed6442',
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            });
    }

    addLike(cardId) {
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-64/cards/${cardId}/likes`, {
            method: 'PUT',
            headers: {
                authorization: '9615b71d-c66b-4314-b250-e7089bed6442',
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            });
    }

    deleteLike(cardId) {
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-64/cards/${cardId}/likes`, {
            method: 'DELETE',
            headers: {
                authorization: '9615b71d-c66b-4314-b250-e7089bed6442',
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            });
    }

    patchAvatar({ avatar }) {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-64/users/me/avatar', {
            method: 'PATCH',
            headers: {
                authorization: '9615b71d-c66b-4314-b250-e7089bed6442',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ avatar }),
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            });

    }
}
