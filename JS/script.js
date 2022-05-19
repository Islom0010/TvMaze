const container = document.querySelector("#card1");
const btn = document.querySelector("#btn");
const navBtn = document.querySelector("#nav-btn");
let movies = [];

$.modal().open();

function genCard(movie) {
  return `<div class="col-2">
  <div class="card" style="width: 18rem; height:36rem">
  <img src="${
    movie?.image?.medium
      ? movie.image.medium
      : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
  }" style="width: 18rem; height:36rem" class="card-img-top" />
  <div class="card-body">
        <h5 class="card-title">${movie.name}</h5>
          <p class="card-text">${movie.premiered}</p>
          </div>
          </div>
          </div>`;
}

function createCard() {
  let result = "";
  for (let movie of movies) {
    result += genCard(movie);
  }
  return result;
}

function render() {
  if (movies.length > 0) {
    container.innerHTML = createCard();
  } else {
    container.innerHTML = "No films";
  }
}
function getVal() {
  const val = document.querySelector("input").value;
  fetch(`https://api.tvmaze.com/search/shows?q=${val}`)
    .then((response) => response.json())
    .then((data) => {
      let searchResult = [];
      for (let date of data) {
        searchResult.push(date.show);
      }
      console.log(searchResult);
      movies = searchResult;
      render();
    });
}

btn.onclick = getVal;

fetch("https://api.tvmaze.com/shows?page=0")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    movies = data;
    render();
  });
