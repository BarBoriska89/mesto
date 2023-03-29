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
                this._toggleButtonState();
            });
        });
        this._toggleButtonState();
    }

    _toggleInputState(inputElement) {
        const isValid = inputElement.validity.valid;
        this._setInputState(inputElement, isValid);
    }

    _setInputState(inputElement, isValid) {
        const errorElement = this._findErrorElement(inputElement);
        if (isValid) {
            this._hideErrorClassForInput(inputElement, this._options.inputErrorClass);
            this._hideError(errorElement);
        } else {
            this._showErrorClassForInput(inputElement, this._options.inputErrorClass);
            this._showError(errorElement, inputElement.validationMessage, this._options.errorClass);
        }
    }

    _findErrorElement(inputElement) {
        const inputSectionElement = inputElement.closest(this._options.formSectionClass);
        const errorSpanElement = inputSectionElement.querySelector(this._options.inputErrorSelector);
        return errorSpanElement;
    }

    _hideErrorClassForInput(inputElement, inputErrorClass) {
        inputElement.classList.remove(inputErrorClass);
    }

    _showErrorClassForInput(inputElement, inputErrorClass) {
        inputElement.classList.add(inputErrorClass);
    }

    checkForm() {
        this._inputs.forEach((input) => {
            this._hideErrorForInput(input);
            this._hideErrorClassForInput(input, this._options.inputErrorClass);
        });
        this._toggleButtonState();
    }

    _hideErrorForInput(input) {
        const errorElement = this._findErrorElement(input);
        this._hideError(errorElement, this._options.errorClass);
    }

    _toggleButtonState() {
        const formIsValid = this._inputs.every(inputElement => inputElement.validity.valid);
        if (formIsValid) {
            this._enableButton();
        } else {
            this._disableButton();
        }
    }

    _hideError(errorElement) {
        errorElement.textContent = '';
        errorElement.classList.remove(this._options.errorClass);
    }

    _showError(errorElement, validationMessage) {
        errorElement.textContent = validationMessage;
        errorElement.classList.add(this._options.errorClass);
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