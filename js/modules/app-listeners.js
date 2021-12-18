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

firstName.addEventListener("focus", (evt) => {
  firstNameConformity();
  errorsControl(evt);
});
firstName.addEventListener("input", (evt) => {
  firstNameConformity();
  errorsControl(evt);
});

lastName.addEventListener("focus", (evt) => {
  lastNameConformity();
  errorsControl(evt);
});
lastName.addEventListener("input", (evt) => {
  lastNameConformity();
  errorsControl(evt);
});

email.addEventListener("focus", (evt) => {
  emailConformity();
  errorsControl(evt);
});
email.addEventListener("input", (evt) => {
  emailConformity();
  errorsControl(evt);
});

birthdate.addEventListener("focus", (evt) => {
  birthDateConformity();
  errorsControl(evt);
});
birthdate.addEventListener("input", (evt) => {
  birthDateConformity();
  errorsControl(evt);
});

quantity.addEventListener("focus", (evt) => {
  quantityConformity();
  errorsControl(evt);
});
quantity.addEventListener("input", (evt) => {
  quantityConformity();
  errorsControl(evt);
});

for (let i = 0; i < eventLocation.length; i++) {
  eventLocation[i].addEventListener("change", (evt) => {
    locationConformity();
    errorsControl(evt);
  });
}

usingConditions.addEventListener("change", (evt) => {
  usingConditionsConformity();
  errorsControl(evt);
});