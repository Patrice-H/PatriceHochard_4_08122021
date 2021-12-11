const errorMessages = {};

const editNav = () => {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
};

// launch modal form
const launchModal = () => {
  modalbg.style.display = "block";
};

// close modal form
const closeModal = () => {
  modalbg.style.display = "none";
};

const fillingControl = (field) => {
  if (field.value !== "") {
    delete errorMessages[field.id];

    return true;
  }
  errorMessages[field.id] = 
    "Merci de renseigner votre " + 
    field.labels[0].textContent.toLowerCase();

    return false;
}

const lengthControl = (field) => {
  if(field.value.length >= 2) {
    delete errorMessages[field.id];

    return true;
  }
  errorMessages[field.id] = 
    "Veuillez entrer 2 caractères ou plus pour votre " + 
    field.labels[0].textContent.toLowerCase();

  return false;
};

const emailFormatControl = (field) => {
  const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,5}$/g;
  if (pattern.test(field.value)) {
    delete errorMessages[field.id];

    return true;
  }
  errorMessages[field.id] = "Veuillez entrer un " + 
  field.labels[0].textContent + " valide";

  return false;
};

const numericFormatControl = (field) => {
  if (field.value !== "" && Number.isInteger(Number(field.value))) {
    delete errorMessages[field.id];

    return true;
  }
  errorMessages[field.id] = "Veuillez entrer un nombre entier";

  return false;
}

const letterFormatControl = (field) => {
  const pattern = /^[a-zA-Zäëïöüéè-]+$/;
  if (pattern.test(field.value)) {
    delete errorMessages[field.id];

    return true;
  }
  errorMessages[field.id] = "Votre " + field.labels[0].textContent.toLowerCase() + 
    " ne doit comporter que des lettres";
}

const dateFormatControl = (field) => {
  const pattern = /^\d{4}-(((0)[1-9])|((1)[0-2]))-([0-2][0-9]|(3)[0-1])$/;
  let birth = field.value;
  if (field.type === "text") {
    let day = field.value.substring(0, 2);
    let month = field.value.substring(3, 5);
    let year = field.value.substring(6);
    birth = year + "-" + month + "-" + day;
  }
  if (pattern.test(birth)) {
    delete errorMessages[field.id];

    return true;
  }
  errorMessages[field.id] = "Votre " + field.labels[0].textContent.toLowerCase() + 
  " doit correspondre au format 'JJ/MM/AAAA'";
}

const locationSelectionControl = (field) => {
  for (let i = 0; i < field.length; i++) {
    if (field[i].checked) {
      delete errorMessages[field[0].name];

      return true;
    } 
  }
  errorMessages[field[0].name] = "Vous devez choisir un lieu";

  return false;
}

const conditionsApprovalControl = (field) => {
  if (field.checked) {
    delete errorMessages[field.id];

    return true;
  }
  errorMessages[field.id] = "Vous devez approuver les conditions d'utilisation";

  return false;
}

const errorsControl = (evt) => {
  if (Object.keys(errorMessages).length === 0) {
    return true;
  }
  evt.preventDefault();

  return false;
};

const firstNameConformity = () => {
  if (fillingControl(firstName)) {
    if (letterFormatControl(firstName)) {
      lengthControl(firstName);
    }
  }
};

const lastNameConformity = () => {
  if (fillingControl(lastName)) {
    if (letterFormatControl(lastName)) {
      lengthControl(lastName);
    }
  }
};

const emailConformity = () => {
  if (fillingControl(email)) {
    emailFormatControl(email);
  }
};

const birthDateConformity = () => {
  if (fillingControl(birthdate)) {
    dateFormatControl(birthdate);
  }
  
}

const quantityConformity = () => {
  numericFormatControl(quantity);
}

const locationConformity = () => {
  locationSelectionControl(eventLocation);
}

const usingConditionsConformity = () => {
  conditionsApprovalControl(usingConditions);
}

const validate = (evt) => {
  firstNameConformity();
  lastNameConformity();
  emailConformity();
  birthDateConformity();
  quantityConformity();
  locationConformity();
  usingConditionsConformity();

  console.log(errorMessages);
  return errorsControl(evt);
};

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelector(".close");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const quantity = document.getElementById("quantity");
const birthdate = document.getElementById("birthdate");
const eventLocation = document.getElementsByName("location");
const usingConditions = document.getElementById("checkbox1");
const submitBtn = document.getElementById("submit-btn");

// modal events
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalClose.addEventListener("click", closeModal);
submitBtn.addEventListener("click", (evt) => { validate(evt); });