const container = document.querySelector("#card1");
const btn = document.querySelector("#btn");
const navBtn = document.querySelector("#nav-btn");
let movies = [];

function f() {
  if (movies.length > 0) {
    container.innerHTML = fetch(data);
  } else {
    container.innerHTML = "No films";
  }
}

function genCard(movie) {
  return `<div class="col-2">
  <div class="card" style="width: 18rem; height:36rem">
  <img src="${movie.imgUrl}" style="width: 18rem; height:36rem" class="card-img-top" />
        <div class="card-body">
        <h5 class="card-title">${movie.title}</h5>
          <p class="card-text">${movie.subtitle}</p>
          </div>
          </div>
          </div>`;
}


fetch("https://api.tvmaze.com/shows?page=0")
  .then((response) => response.json())
  .then((data) => console.log(data));
