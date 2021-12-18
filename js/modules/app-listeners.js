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
  firstNameConformity();
});
firstName.addEventListener("input", () => {
  firstNameConformity();
});

lastName.addEventListener("focus", () => {
  lastNameConformity();
});
lastName.addEventListener("input", () => {
  lastNameConformity();
});

email.addEventListener("focus", () => {
  emailConformity();
});
email.addEventListener("input", () => {
  emailConformity();
});

birthdate.addEventListener("focus", () => {
  birthDateConformity();
});
birthdate.addEventListener("input", () => {
  birthDateConformity();
});

quantity.addEventListener("focus", () => {
  quantityConformity();
});
quantity.addEventListener("input", () => {
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