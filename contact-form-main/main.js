const form = document.querySelector("form");
const textFields = document.querySelectorAll("input[type='text']");
const textArea = document.querySelector("textarea");
const queryInputs = document.querySelectorAll('input[type="radio"');
const queryError = document.querySelector(".queryError");
const consentInput = document.querySelector('input[type="checkbox"]');
const consentError = document.querySelector(".consentError");
// const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const textInputs = [...textFields, textArea];

// function validateEmail(email) {
//   return emailRegex.test(email);
// }

function checkForValue(inputField) {
  const inputType = inputField.type;

  switch (inputType) {
    case "radio":
    case "checkbox":
      return Boolean(inputField.checked);
    default:
      return Boolean(inputField.value);
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  for (let textField of textInputs) {
    const value = checkForValue(textField);

    if (!value) {
      textField.nextElementSibling.style.display = "block";
    } else {
      textField.nextElementSibling.style.display = "none";
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
});
