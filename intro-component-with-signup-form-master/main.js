const submitBtn = document.querySelector(".submit");
const inputFields = document.querySelectorAll("input:not([type='submit'])");
const validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function validateEmail(input) {
  return validEmail.test(input);
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  for (let input of inputFields) {
    if (input.className == "email" && !validateEmail(input.value)) {
      input.removeAttribute("placeholder");
      input.style.borderColor = "red";
      input.classList.add("warning");
      input.nextElementSibling.classList.add("visibilityVisible");
    } else if (!input.value) {
      input.removeAttribute("placeholder");
      input.style.borderColor = "red";
      input.classList.add("warning");
      input.nextElementSibling.classList.add("visibilityVisible");
    }

    input.addEventListener("input", () => {
      input.style.borderColor = "gainsboro";
      input.classList.remove("warning");
      input.nextElementSibling.classList.remove("visibilityVisible");
    });
  }
});
