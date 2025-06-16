const theme = document.querySelector(".theme");
const all = document.querySelector(".all");
const active = document.querySelector(".active");
const inactive = document.querySelector(".inactive");
const container = document.querySelector(".ext-container");

// real time - add fade-out class

all.addEventListener("click", () => {
  filterCards("all");
});

active.addEventListener("click", () => {
  filterCards("active");
});

inactive.addEventListener("click", () => {
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
            filterCards("active");
          } else if (inactiveInput.checked) {
            filterCards("inactive");
          }
        });
      });
    });
});
