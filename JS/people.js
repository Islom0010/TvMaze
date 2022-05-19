const container = document.querySelector("#card1");
const btn = document.querySelector("#btn");
const navBtn = document.querySelector("#nav-btn");
let peoples = [];

function genCard(people) {
  return `<div class="col-2">
    <div class="card" style="width: 18rem; height:36rem">
    <img src="${
      people?.image?.medium
        ? people.image.medium
        : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
    }" style="width: 18rem; height:36rem" class="card-img-top" />
    <div class="card-body">
          <h5 class="card-title">${people.name}</h5>
            <p class="card-text">${people.birthday}</p>
            </div>
            </div>
            </div>`;
}

function createCard() {
  let result = "";
  for (let people of peoples) {
    result += genCard(people);
  }
  return result;
}

function render() {
  if (peoples.length > 0) {
    container.innerHTML = createCard();
  } else {
    container.innerHTML = "No peoples";
  }
}

function getVal() {
  const val = document.querySelector("input").value;
  fetch(`https://api.tvmaze.com/search/people?q=${val}`)
    .then((response) => response.json())
    .then((data) => {
      let searchResult = [];
      for (let date of data) {
        searchResult.push(date.name);
      }
      console.log(searchResult);
      peoples = searchResult;
      render();
    });
}

btn.onclick = getVal;

fetch("https://api.tvmaze.com/people")
  .then((response) => response.json())
  .then((data) => {
      console.log(data);
      peoples = data;
    render();
  });
