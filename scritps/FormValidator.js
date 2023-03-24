export default class FormValidator {
    constructor(options, form) {
        this._options = options;
        this._form = form;
        this._inputs = Array.from(form.querySelectorAll(this._options.inputSelector));
        this._buttonElement = form.querySelector(this._options.submitButtonSelector);
    }

    enableValidation() {
        this._setEventListeners();
    }

    _setEventListeners() {
        this._inputs.forEach(inputElement => {
            inputElement.addEventListener('input', () => {
                this._toggleInputState(inputElement);
                this._toggleButtonState(this._inputs, this._buttonElement, this._options.inactiveButtonClass);
            });
        });
        this._toggleButtonState(this._inputs, this._buttonElement, this._options.inactiveButtonClass);
    }

    _toggleInputState(inputElement) {
        const isValid = inputElement.validity.valid;
        this._setInputState(inputElement, isValid);
    }

    _setInputState(inputElement, isValid) {
        this._errorElement = this._findErrorElement(inputElement, this._options);
        if (isValid) {
            this._hideErrorClassForInput(inputElement, this._options.inputErrorClass);
            this._hideError(this._errorElement, this._options.errorClass);
        } else {
            this._showErrorClassForInput(inputElement, this._options.inputErrorClass);
            this._showError(inputElement, inputElement.validationMessage, this._options.errorClass);
        }
    }

    _findErrorElement(inputElement) {
        const inputSectionElement = inputElement.closest(this._options.formSectionClass);
        this._errorElement = inputSectionElement.querySelector(this._options.inputErrorSelector);
        return this._errorElement;
    }

    _hideErrorClassForInput(inputElement, inputErrorClass) {
        inputElement.classList.remove(inputErrorClass);
    }

    _showErrorClassForInput(inputElement, inputErrorClass) {
        inputElement.classList.add(inputErrorClass);
    }

    checkForm(form) {
        Array.from(form.querySelectorAll(this._options.inputSelector)).forEach((input) => {
            this._hideErrorForInput(input);
            this._hideErrorClassForInput(input, this._options.inputErrorClass);
        });
        this._toggleButtonState(this._inputs, this._buttonElement, this._options.inactiveButtonClass);
    }

    _hideErrorForInput(input) {
        this._errorElement = this._findErrorElement(input);
        this._hideError(this._errorElement, this._options.errorClass);
    }

    _toggleButtonState() {
        const formIsValid = this._inputs.every(inputElement => inputElement.validity.valid);
        if (formIsValid) {
            this._enableButton(this._buttonElement, this._options.inactiveButtonClass);
        } else {
            this._disableButton(this._buttonElement, this._options.inactiveButtonClass);
        }
    }

    _hideError() {
        this._errorElement.textContent = '';
        this._errorElement.classList.remove(this._options.errorClass);
    }

    _showError(inputElement, validationMessage) {
        this._errorElement.textContent = validationMessage;
        this._errorElement.classList.add(this._options.errorClass);
    }

    _enableButton() {
        this._buttonElement.removeAttribute('disabled');
        this._buttonElement.classList.remove(this._options.inactiveButtonClass);
    }

    _disableButton() {
        this._buttonElement.setAttribute('disabled', 'true');
        this._buttonElement.classList.add(this._options.inactiveButtonClass);
    }
}