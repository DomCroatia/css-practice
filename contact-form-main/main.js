console.log("Hello World!");

const form = document.querySelector("form");
const inputFields = document.querySelectorAll(
  "input:not([type='submit']), textarea"
);

function displayError() {}

function checkForValue(input) {
  const inputType = input.type;
  switch (inputType) {
    case "text":
      return Boolean(input.value);
    case "radio":
    case "checkbox":
      return Boolean(input.checked);
    default:
      return Boolean(input.value);
  }
}

function validateEmail() {}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  for (let input of inputFields) {
    const value = checkForValue(input);

    console.log(value);

    input.addEventListener("input", () => {
      //   input.style.borderColor = "gainsboro";
      //   input.classList.remove("warning");
      //   input.nextElementSibling.classList.remove("visibilityVisible");
    });
  }
});

// 2. queryselector na sve elemente koji moraju biti ispunjeni
// 2a. switch case ovisno o vrsti input fielda
// 3. funkciju koja provjerava da li svaki element iz 2. ima value
// 4. funkcija koja displaya span s errorom ako nema valuea
// 5.
