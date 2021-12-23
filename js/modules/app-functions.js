/**
 * @description edit the navigation menu in mobile format
 */
function editNav() {
    if (topNav.className === "topnav") {
        topNav.className += " responsive";
    } else {
        topNav.className = "topnav";
    }
}
  
/**
 * @description Display the modal window
 */
function launchModal() {
    modalBg.style.display = "block";
    body.style.overflow = "hidden";
}
  
/**
 * @description Close the modal window
 */
function closeModal() {
    modalBg.style.display = "none";
    body.style.overflow = "initial";
}
  
/**
 * @description Read the storage session. If exists, display the confirmation window
 */
function launchConfirmation() {
    let submittedForm = sessionStorage.getItem('submittedForm');
    if (submittedForm === "true") {
        confirmationBg.style.display = "block";
    }
}
  
/**
 * @description Close the confirmation window and remove the storage session
 */
function closeConfirmation() {
    confirmationBg.style.display = "none";
    sessionStorage.removeItem('submittedForm');
}
  
/**
 * @description Display error message below the input field
 * @param {HTMLElement} field - The input field
 * @param {string} key - The name of the field
 * @returns {boolean} Return false
 */
function displayError(field, key = field.id) {
    field.parentElement.dataset.error = errorMessages[key];
    field.parentElement.dataset.errorVisible = "true";
    field.parentElement.removeAttribute("data-valid-visible");
  
    return false;
}
  
/**
 * @description Display validation message below the input field
 * @param {HTMLElement} field - The input field
 * @param {string} key - The name of the field
 * @returns {boolean} Return true 
 */
function displayValidation(field, key = field.id) {
    delete errorMessages[key];
    field.parentElement.removeAttribute("data-error");
    field.parentElement.removeAttribute("data-error-visible");
    field.parentElement.dataset.validVisible = "true";
  
    return true;
}

/**
 * @description Reset error message below the input field
 * @param {HTMLElement} field - The input field
 */
function resetError(field) {
    delete errorMessages[field.id];
    field.parentElement.removeAttribute("data-error");
    field.parentElement.removeAttribute("data-error-visible");
    field.parentElement.removeAttribute("data-valid-visible");
}
  
/**
 * @description Control if a value is entered in input, generate a message otherwise
 * @see {@link displayValidation}
 * @see {@link displayError}
 * @param {HTMLElement} field - The input field
 * @returns {boolean} The result of the return function: true if a value is entered, false otherwise
 */
function fillingControl(field) {
    if (field.value !== "") {
  
        return displayValidation(field);
    }
    errorMessages[field.id] = "Merci de renseigner votre " + field.labels[0].textContent.toLowerCase();
  
    return displayError(field);
}
  
/**
 * @description Control if the input value matches to the minimum length, generate a message otherwise
 * @see {@link displayValidation}
 * @see {@link displayError}
 * @param {HTMLElement} field - The input field
 * @returns {boolean} The result of the return function: true if the input value matches, false otherwise 
 */
function lengthControl(field) {
    if(field.value.length >= 2) {
  
        return displayValidation(field);
    }
    errorMessages[field.id] = "Veuillez entrer 2 caractères ou plus pour votre " + field.labels[0].textContent.toLowerCase();
  
    return displayError(field);
}
  
/**
 * @description Control if the input value matches with the pattern, generate a message otherwise
 * @see {@link displayValidation}
 * @see {@link displayError}
 * @param {HTMLElement} field - The input field
 * @returns {boolean} The result of the return function: true if the input value matches, false otherwise
 */
function emailFormatControl(field) {
    const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,5}$/g;
    if (pattern.test(field.value)) {
  
        return displayValidation(field);
    }
    errorMessages[field.id] = "Veuillez saisir un e-mail valide";
  
    return displayError(field);
}
  
/**
 * @description Control if the input value is a number, generate a message otherwise
 * @see {@link displayValidation}
 * @see {@link displayError}
 * @param {HTMLElement} field - The input field
 * @returns {boolean} The result of the return function: true if the input value is a number, false otherwise
 */
function numericFormatControl(field) {
    if (field.value !== "" && Number.isInteger(Number(field.value))) {
  
        return displayValidation(field);
    }
    errorMessages[field.id] = "Veuillez saisir un nombre entier";
  
    return displayError(field);
}
  
/**
 * @description Control if the input value matches with the pattern, generate a message otherwise
 * @see {@link displayValidation}
 * @see {@link displayError}
 * @param {HTMLElement} field - The input field
 * @returns {boolean} The result of the return function: true if the input value matches, false otherwise
 */
function letterFormatControl(field) {
    const pattern = /^[a-zA-Zäëïöüéè-]+$/;
    if (pattern.test(field.value)) {
  
        return displayValidation(field);
    }
    errorMessages[field.id] = "Votre " + field.labels[0].textContent.toLowerCase() + " ne doit comporter que des lettres";
  
    return displayError(field);
}
  
/**
 * @description Control if the input value matches with the pattern, generate a message otherwise
 * @see {@link displayValidation}
 * @see {@link displayError}
 * @param {HTMLElement} field - The input field
 * @returns {boolean} The result of the return function: true if the input value matches, false otherwise
 */
function dateFormatControl(field) {
    const pattern = /^\d{4}-(((0)[1-9])|((1)[0-2]))-([0-2][0-9]|(3)[0-1])$/;
    let birth = field.value;
    if (field.type === "text") {
        let day = field.value.substring(0, 2);
        let month = field.value.substring(3, 5);
        let year = field.value.substring(6);
        birth = year + "-" + month + "-" + day;
    }
    if (pattern.test(birth)) {
  
        return displayValidation(field);
    }
    errorMessages[field.id] = "Votre " + field.labels[0].textContent.toLowerCase() + " doit correspondre au format 'JJ/MM/AAAA'";
  
    return displayError(field);
}
  
/**
 * @description Control if a radio button is checked, generate a message otherwise
 * @see {@link displayValidation}
 * @see {@link displayError}
 * @param {HTLMElement} field - The input field
 * @returns {boolean} The result of the return function: true if a radio button is checked, false otherwise
 */
function locationSelectionControl(field) {
    for (let i = 0; i < field.length; i++) {
        if (field[i].checked) {
  
            return displayValidation(field[i], field[i].name);
        } 
    }
    errorMessages[field[0].name] = "Vous devez choisir un lieu";
  
    return displayError(field[0], field[0].name);
}
  
/**
 * @description Control if the checkbox is checked, generate a message otherwise
 * @see {@link displayValidation}
 * @see {@link displayError}
 * @param {HTMLElement} field - The input field
 * @returns {boolean} The result of the return function: true if the checkbox is checked, false otherwise
 */
function conditionsApprovalControl(field) {
    if (field.checked) {
  
        return displayValidation(field);
    }
    errorMessages[field.id] = "Vous devez approuver les conditions d'utilisation";
  
    return displayError(field);
}
  
/**
 * @description Control the amount of errors of all inputs form
 * @param {MouseEvent} evt - Event
 * @returns {boolean} Returns true if no errors detected, false otherwise
 */
function errorsControl(evt) {
    if (Object.keys(errorMessages).length === 0) {
  
        return true;
    }
    evt.preventDefault();
  
    return false;
}
  
/**
 * @description Launch control functions to check the conformity of the first name input
 * @see {@link fillingControl}
 * @see {@link letterFormatControl}
 * @see {@link lengthControl}
 */
function firstNameConformity() {
    if (fillingControl(firstName)) {
        if (letterFormatControl(firstName)) {
            lengthControl(firstName);
        }
    }
}
  
/**
 * @description Launch control functions to check the conformity of the last name input
 * @see {@link fillingControl}
 * @see {@link letterFormatControl}
 * @see {@link lengthControl}
 */
function lastNameConformity() {
    if (fillingControl(lastName)) {
        if (letterFormatControl(lastName)) {
            lengthControl(lastName);
        }
    }
}
  
/**
 * @description Launch control functions to check the conformity of the email input
 * @see {@link fillingControl}
 * @see {@link emailFormatControl}
 */
function emailConformity() {
    if (fillingControl(email)) {
        emailFormatControl(email);
    }
}
  
/**
 * @description Launch control functions to check the conformity of the birthdate input
 * @see {@link fillingControl}
 * @see {@link dateFormatControl}
 */
function birthDateConformity() {
    if (fillingControl(birthdate)) {
        dateFormatControl(birthdate);
    }
}
  
/**
 * @description Launch a control function to check the conformity of the amount of participation input
 * @see {@link numericFormatControl}
 */
function quantityConformity() {
    numericFormatControl(quantity);
}
  
/**
 * @description Launch a control function to check the conformity of the event location input
 * @see {@link locationSelectionControl}
 */
function locationConformity() {
    locationSelectionControl(eventLocation);
}
  
/**
 * @description Launch a control function to check the conformity of the using conditions input
 * @see {@link conditionsApprovalControl}
 */
function usingConditionsConformity() {
    conditionsApprovalControl(usingConditions);
}
  
/**
 * @description Launch functions to check the conformity of values before validation and record a storage session if valid
 * @see {@link firstNameConformity}
 * @see {@link lastNameConformity}
 * @see {@link emailConformity}
 * @see {@link birthDateConformity}
 * @see {@link quantityConformity}
 * @see {@link locationConformity}
 * @see {@link usingConditionsConformity}
 * @see {@link errorsControl}
 * @param {MouseEvent} evt - Event
 * @returns {boolean}  Result of the returned function
 */
function validate(evt) {
    firstNameConformity();
    lastNameConformity();
    emailConformity();
    birthDateConformity();
    quantityConformity();
    locationConformity();
    usingConditionsConformity();
    if (errorsControl(evt)) {
        sessionStorage.setItem('submittedForm', 'true');
  
        return true;
    }
  
    return false;
}