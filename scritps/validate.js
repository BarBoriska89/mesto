
const enableValidation = (options) => {
    const forms = Array.from(document.querySelectorAll(options.formSelector));
    forms.forEach((form) => setEventListeners(form, options));
};

const toggleInputState = (inputElement, options) => {
    const isValid = inputElement.validity.valid;
    setInputState(inputElement, isValid, options);
};

const setInputState = (inputElement, isValid, options) => {
    errorElement = findErrorElement(inputElement, options);
    if (isValid) {
        hiddenErrorClassForInput(inputElement, options.inputErrorClass);
        hiddenError(errorElement, options.errorClass);
    } else {
        showErrorClassForInput(inputElement, options.inputErrorClass);
        showError(errorElement, inputElement.validationMessage, options.errorClass);

    }
};

const hiddenErrorClassForInput = (inputElement, inputErrorClass) => inputElement.classList.remove(inputErrorClass);

const showErrorClassForInput = (inputElement, inputErrorClass) => inputElement.classList.add(inputErrorClass);

const checkForm = (form, options) => {
    const inputs = Array.from(form.querySelectorAll(options.inputSelector));
    const buttonElement = findButtonElementForForm(form, options);

    inputs.forEach((input) => {
        hiddenErrorForInput(input, options);
        hiddenErrorClassForInput(input, options.inputErrorClass);
    });
    toggleButtonState(inputs, buttonElement, options.inactiveButtonClass);
};

const findButtonElementForForm = (form, options) => {
    const buttonElement = form.querySelector(options.submitButtonSelector);
    return buttonElement;
};

const findErrorElement = (inputElement, options) => {
    const inputSectionElement = inputElement.closest(options.formSectionClass);
    const errorElement = inputSectionElement.querySelector(options.inputErrorSelector);
    return errorElement;
};

const hiddenErrorForInput = (inputElement, options) => {
    errorElement = findErrorElement(inputElement, options);
    hiddenError(errorElement, options.errorClass);
};

const setEventListeners = (form, options) => {
    const inputs = Array.from(form.querySelectorAll(options.inputSelector));
    const buttonElement = findButtonElementForForm(form, options);

    inputs.forEach(inputElement => {
        inputElement.addEventListener('input', () => {
            toggleInputState(inputElement, options);
            toggleButtonState(inputs, buttonElement, options.inactiveButtonClass);
        });
    });
    toggleButtonState(inputs, buttonElement, options.inactiveButtonClass);
};

const toggleButtonState = (inputs, buttonElement, inactiveButtonClass) => {
    const formIsValid = inputs.every(inputElement => inputElement.validity.valid);

    if (formIsValid) {
        enableButton(buttonElement, inactiveButtonClass);
    } else {
        disableButton(buttonElement, inactiveButtonClass);
    }
};

const hiddenError = (errorElement, errorClass) => {
    errorElement.textContent = '';
    errorElement.classList.remove(errorClass);
};

const showError = (errorElement, message, errorClass) => {
    errorElement.textContent = message;
    errorElement.classList.add(errorClass);
};

const enableButton = (buttonElement, inactiveButtonClass) => {
    buttonElement.removeAttribute('disabled');
    buttonElement.classList.remove(inactiveButtonClass);
};

const disableButton = (buttonElement, inactiveButtonClass) => {
    buttonElement.setAttribute('disabled', 'true');
    buttonElement.classList.add(inactiveButtonClass);
};
