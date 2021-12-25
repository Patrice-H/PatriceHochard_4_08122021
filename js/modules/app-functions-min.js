function editNav(){if(topNav.className==="topnav"){topNav.className+=" responsive";}else{topNav.className="topnav";}}
function launchModal(){modalBg.style.display="block";body.style.overflow="hidden";}
function closeModal(){modalBg.style.display="none";body.style.overflow="initial";}
function launchConfirmation(){let submittedForm=sessionStorage.getItem('submittedForm');if(submittedForm==="true"){confirmationBg.style.display="block";}}
function closeConfirmation(){confirmationBg.style.display="none";sessionStorage.removeItem('submittedForm');}
function displayError(field,key=field.id){field.parentElement.dataset.error=errorMessages[key];field.parentElement.dataset.errorVisible="true";field.parentElement.removeAttribute("data-valid-visible");return false;}
function displayValidation(field,key=field.id){delete errorMessages[key];field.parentElement.removeAttribute("data-error");field.parentElement.removeAttribute("data-error-visible");field.parentElement.dataset.validVisible="true";return true;}
function resetError(field){delete errorMessages[field.id];field.parentElement.removeAttribute("data-error");field.parentElement.removeAttribute("data-error-visible");field.parentElement.removeAttribute("data-valid-visible");}
function fillingControl(field){if(field.value!==""){return displayValidation(field);}
errorMessages[field.id]="Merci de renseigner votre "+field.labels[0].textContent.toLowerCase();return displayError(field);}
function lengthControl(field){if(field.value.length>=2){return displayValidation(field);}
errorMessages[field.id]="Veuillez entrer 2 caractères ou plus pour votre "+field.labels[0].textContent.toLowerCase();return displayError(field);}
function emailFormatControl(field){const pattern=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,5}$/g;if(pattern.test(field.value)){return displayValidation(field);}
errorMessages[field.id]="Veuillez saisir un e-mail valide";return displayError(field);}
function numericFormatControl(field){if(field.value!==""&&Number.isInteger(Number(field.value))){return displayValidation(field);}
errorMessages[field.id]="Veuillez saisir un nombre entier";return displayError(field);}
function letterFormatControl(field){const pattern=/^[a-zA-Zäëïöüéè-]+$/;if(pattern.test(field.value)){return displayValidation(field);}
errorMessages[field.id]="Votre "+field.labels[0].textContent.toLowerCase()+" ne doit comporter que des lettres";return displayError(field);}
function dateFormatControl(field){const pattern=/^\d{4}-(((0)[1-9])|((1)[0-2]))-([0-2][0-9]|(3)[0-1])$/;let birth=field.value;if(field.type==="text"){let day=field.value.substring(0,2);let month=field.value.substring(3,5);let year=field.value.substring(6);birth=year+"-"+month+"-"+day;}
if(pattern.test(birth)){return displayValidation(field);}
errorMessages[field.id]="Votre "+field.labels[0].textContent.toLowerCase()+" doit correspondre au format 'JJ/MM/AAAA'";return displayError(field);}
function locationSelectionControl(field){for(let i=0;i<field.length;i++){if(field[i].checked){return displayValidation(field[i],field[i].name);}}
errorMessages[field[0].name]="Vous devez choisir un lieu";return displayError(field[0],field[0].name);}
function conditionsApprovalControl(field){if(field.checked){return displayValidation(field);}
errorMessages[field.id]="Vous devez approuver les conditions d'utilisation";return displayError(field);}
function errorsControl(evt){if(Object.keys(errorMessages).length===0){return true;}
evt.preventDefault();return false;}
function firstNameConformity(){if(fillingControl(firstName)){if(letterFormatControl(firstName)){lengthControl(firstName);}}}
function lastNameConformity(){if(fillingControl(lastName)){if(letterFormatControl(lastName)){lengthControl(lastName);}}}
function emailConformity(){if(fillingControl(email)){emailFormatControl(email);}}
function birthDateConformity(){if(fillingControl(birthdate)){dateFormatControl(birthdate);}}
function quantityConformity(){numericFormatControl(quantity);}
function locationConformity(){locationSelectionControl(eventLocation);}
function usingConditionsConformity(){conditionsApprovalControl(usingConditions);}
function validate(evt){firstNameConformity();lastNameConformity();emailConformity();birthDateConformity();quantityConformity();locationConformity();usingConditionsConformity();if(errorsControl(evt)){sessionStorage.setItem('submittedForm','true');return true;}
return false;}