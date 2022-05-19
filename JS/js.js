const container = document.querySelector("#card1");
const btn = document.querySelector("#btn");
const navBtn = document.querySelector("#nav-btn");


// const card = `<div class="col-2">
// <div class="card" style="width: 18rem">
//   <img src="https://picsum.photos/200/300" class="card-img-top" />
//   <div class="card-body">
//     <h5 class="card-title">Fear of Wolkin death</h5>
//     <p class="card-text">Sony Boy</p>
//   </div>
// </div>
// </div>`;

let movies = [
  {
    id: 1,
    title: "Fear of Wolkin death",
    subtitle: "Sony Boy",
    type:'show',
    imgUrl: "http://picsum.photos/200/300",
  },

  {
    id: 2,
    title: "Akramov of class",
    subtitle: "Sony Boy",
    type:'show',
    imgUrl: "http://picsum.photos/300/300",
  },

  {
    id: 3,
    title: "Fear of Wolkin death",
    subtitle: "Sharp Boy",
    type:'show',
    imgUrl: "http://picsum.photos/240/310",
  },

  {
    id: 4,
    title: "Falon bismadon",
    subtitle: "Shokha Akramov",
    type:'people',
    imgUrl: "http://picsum.photos/240/320",
  },

  {
    id: 5,
    title: "Kimchi kimchi",
    subtitle: "Mc Doni",
    type:'people',
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

function createCard(movies) {
  let result = "";
  for (let movie of movies) {
    result += genCard(movie);
  }
  return result;
}

function getVal() {
  const val = document.querySelector("input").value;
  const filtered = movies.filter((movie) =>  {
    const regex = new RegExp("^" + val + "(.*)$", "g");
    const res = movie.title.match(regex)
    return res
  });
  if (filtered.length >= 1) {
    container.innerHTML = createCard(filtered);
  } else {
    container.innerHTML = "No films";
  }
}

btn.onclick = getVal;

setTimeout(() => {



  container.innerHTML = createCard(movies);
}, 2000);








function navBtnClick(type) {
  const filtered = movies.filter((movie) =>   movie.type === type);
  if (filtered.length >= 1) {
    container.innerHTML = createCard(filtered);
  } else {
    container.innerHTML = "No films";
  }
}



fetch('https://api.tvmaze.com/shows?page=0').then(response => response.json())
.then(data => console.log(data));

