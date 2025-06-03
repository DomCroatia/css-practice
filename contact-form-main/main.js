const form = document.querySelector("form");
const textFields = document.querySelectorAll("input[type='text']");
const textArea = document.querySelector("textarea");
const queryInputs = document.querySelectorAll('input[type="radio"');
const queryError = document.querySelector(".queryError");
const consentInput = document.querySelector('input[type="checkbox"]');
const consentError = document.querySelector(".consentError");
const successMsg = document.querySelector(".success");
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function validateEmail(email) {
  return emailRegex.test(email);
}

form.addEventListener("submit", (event) => {
  let areTextInputsValid = true;
  event.preventDefault();

  for (let textField of [...textFields, textArea]) {
    if (textField.value && textField.id == "email") {
      if (validateEmail(textField.value)) {
        textField.nextElementSibling.style.display = "none";
        textField.style.outline = "1px solid hsl(169, 82%, 27%)";
      } else {
        textField.nextElementSibling.style.display = "block";
        textField.style.outline = "1px solid red";
        areTextInputsValid = false;
      }
    } else if (textField.value) {
      textField.nextElementSibling.style.display = "none";
      textField.style.outline = "1px solid hsl(169, 82%, 27%)";
    } else {
      textField.nextElementSibling.style.display = "block";
      textField.style.outline = "1px solid red";
      areTextInputsValid = false;
    }
  }

  if (!queryInputs[0].checked && !queryInputs[1].checked) {
    queryError.style.display = "block";
  } else {
    queryError.style.display = "none";
  }

  if (!consentInput.checked) {
    consentError.style.display = "block";
  } else {
    consentError.style.display = "none";
  }

  if (
    areTextInputsValid &&
    (queryInputs[0].checked || queryInputs[1].checked) &&
    consentInput.checked
  ) {
    successMsg.style.opacity = "1";
    setTimeout(() => (successMsg.style.opacity = "0"), 2000);
  }
});
