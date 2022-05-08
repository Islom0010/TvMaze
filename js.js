const container = document.querySelector("#card1");
const btn = document.querySelector("#btn");
const card = `<div class="col-2">
<div class="card" style="width: 18rem">
  <img src="https://picsum.photos/200/300" class="card-img-top" />
  <div class="card-body">
    <h5 class="card-title">Fear of Wolkin death</h5>
    <p class="card-text">Sony Boy</p>
  </div>
</div>
</div>`;

let movies = [
  {
    id: 1,
    title: "Fear of Wolkin death",
    subtitle: "Sony Boy",
    imgUrl: "http://picsum.photos/200/300",
  },

  {
    id: 2,
    title: "Akramov of class",
    subtitle: "Sony Boy",
    imgUrl: "http://picsum.photos/300/300",
  },

  {
    id: 3,
    title: "Fear of Wolkin death",
    subtitle: "Sharp Boy",
    imgUrl: "http://picsum.photos/240/310",
  },

  {
    id: 4,
    title: "Falon bismadon",
    subtitle: "Shokha Akramov",
    imgUrl: "http://picsum.photos/240/320",
  },

  {
    id: 5,
    title: "Kimchi kimchi",
    subtitle: "Mc Doni",
    imgUrl: "http://picsum.photos/210/330",
  },
];

// function addCard(num) {
//   let result = "";
//   for (let i = 0; i < num; i++) {
//     result += card;
//   } return result;
// }

function genCard(movie) {
 return  `<div class="col-2">
    <div class="card" style="width: 18rem; height:36rem">
      <img src="${movie.imgUrl}" style="width: 18rem; height:36rem" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">${movie.title}</h5>
        <p class="card-text">${movie.subtitle}</p>
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

container.innerHTML = createCard();


