console.log("Hello from JS");

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    const summaryArr = document.querySelectorAll("li div:first-child");
    const scoreArr = document.querySelectorAll(".score");

    data.forEach((element, index) => {
      const img = summaryArr[index].querySelector("img");
      const title = summaryArr[index].querySelector("span");
      const score = scoreArr[index].querySelector("span");

      img.src = element.icon;
      img.alt = element.category;
      title.textContent = element.category;
      score.textContent = element.score;
    });
  })
  .catch((error) => {
    console.error("Error fetching JSON", error);
  });
