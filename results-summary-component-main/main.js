console.log("Hello from JS");

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    const summaryItems = document.querySelectorAll("li div:first-child");

    data.forEach((element, index) => {
      const img = summaryItems[index].querySelector("img");
      const title = summaryItems[index].querySelector("span");

      img.src = element.icon;
      img.alt = element.category;
      title.textContent = element.category;
    });
  })
  .catch((error) => {
    console.error("Error fetching JSON", error);
  });
