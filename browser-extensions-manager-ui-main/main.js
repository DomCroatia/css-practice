const themeBtn = document.querySelector(".theme");
const allLabel = document.querySelector(".all");
const activeLabel = document.querySelector(".active");
const inactiveLabel = document.querySelector(".inactive");

themeBtn.addEventListener("click", () => {
  document.querySelector("body").classList.toggle("dark-theme");

  const logo = document.querySelector(".logo");
  const logoDark = "./assets/images/logo-dark.svg";
  const logoLight = "./assets/images/logo.svg";

  const themeImg = document.querySelector(".theme-icon");
  const themeImgSrc = themeImg.getAttribute("src");
  const lightIcon = "./assets/images/icon-sun.svg";
  const darkIcon = "./assets/images/icon-moon.svg";

  if (themeImgSrc == lightIcon) {
    themeImg.setAttribute("src", darkIcon);
    logo.setAttribute("src", logoLight);
  } else {
    themeImg.setAttribute("src", lightIcon);
    logo.setAttribute("src", logoDark);
  }
});

allLabel.addEventListener("click", () => {
  filterCards("all");
});

activeLabel.addEventListener("click", () => {
  filterCards("active");
});

inactiveLabel.addEventListener("click", () => {
  filterCards("inactive");
});

function filterCards(showActive) {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    const input = card.querySelector(".switch-input");
    const isActive = input.checked;

    switch (showActive) {
      case "all":
        card.classList.remove("hidden");
        break;
      case "active":
        if (isActive) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
        break;
      case "inactive":
        if (!isActive) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
        break;
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((ele) => {
        const container = document.querySelector(".ext-container");
        let card = document.createElement("div");

        card.classList.add("card");
        card.innerHTML = `
            <div>
              <img src="${ele.logo}" alt="${ele.name}" />
              <div>
                <h1>${ele.name}</h1>
                <p>${ele.description}</p>
              </div>
            </div>
            <div>
              <button type="button" class="remove-button">Remove</button>
              <label class="switch-label">
                <input class="switch-input" type="checkbox" tabindex="-1"${
                  ele.isActive ? "checked" : ""
                }/>
                <span tabindex="0" class="switch"></span>
              </label>
            </div>
        `;
        container.appendChild(card);

        const removeBtn = card.querySelector(".remove-button");
        removeBtn.addEventListener("click", () => {
          card.classList.add("fade-out");
          card.addEventListener(
            "transitionend",
            () => {
              card.remove();
            },
            { once: true }
          );
        });

        const label = card.querySelector("label");
        label.addEventListener("change", () => {
          const activeInput = document.getElementById("filterChoice2");
          const inactiveInput = document.getElementById("filterChoice3");

          if (activeInput.checked) {
            card.classList.add("fade-out");
            setTimeout(() => {
              filterCards("active");
            }, 250);
            card.classList.remove("fade-out");
          } else if (inactiveInput.checked) {
            card.classList.add("fade-out");
            setTimeout(() => {
              filterCards("inactive");
            }, 250);
            card.classList.remove("fade-out");
          }
        });
      });
    });
});
