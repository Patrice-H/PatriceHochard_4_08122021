// Document events
window.onload = launchConfirmation;
navIcon.addEventListener("click", editNav);
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalClose.addEventListener("click", closeModal);

confirmationClose.addEventListener("click", closeConfirmation);
confirmationBtn.addEventListener("click", closeConfirmation);

submitBtn.addEventListener("click", (evt) => {
    validate(evt);
});

firstName.addEventListener("focus", () => {
    resetError(firstName);
  });
firstName.addEventListener("blur", () => {
    firstNameConformity();
});

lastName.addEventListener("focus", () => {
    resetError(lastName);
});
lastName.addEventListener("blur", () => {
    lastNameConformity();
});

email.addEventListener("focus", () => {
    resetError(email);
});
email.addEventListener("blur", () => {
    emailConformity();
});

birthdate.addEventListener("focus", () => {
    resetError(birthdate);
});
birthdate.addEventListener("blur", () => {
    birthDateConformity();
});

quantity.addEventListener("focus", () => {
    resetError(quantity);
});
quantity.addEventListener("blur", () => {
    quantityConformity();
});

for (let i = 0; i < eventLocation.length; i++) {
    eventLocation[i].addEventListener("change", () => {
        locationConformity();
    });
}

usingConditions.addEventListener("change", () => {
    usingConditionsConformity();
});