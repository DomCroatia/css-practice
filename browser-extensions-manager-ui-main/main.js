console.log("Hello from JS");

async function populateData() {
  let data = await fetch("./data.json").then((response) => response.json());
  let container = document.querySelector(".ext-container");

  data.forEach((ele, i) => {
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
                <input class="switch-input" type="checkbox" ${
                  ele.isActive ? "checked" : ""
                }/>
                <span class="switch"></span>
              </label>
            </div>
    `;
    container.appendChild(card);
  });
}

populateData();
