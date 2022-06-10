import data from './data/ghibli/ghibli.js';
import { orderAZ, orderZA, orderAntigua, orderReciente, search, searchPeople, newArrayPeople } from './data.js';

//Permite mostrar el menú lateral del header en dispositivos moviles

let navToggle = document.querySelector(".nav-toggle");
let navMenu = document.querySelector(".nav-menu");
    navToggle.addEventListener("click",()=>{
    navMenu.classList.toggle("nav-menu_visible");
    })
    
const films = data.films;
const mainmovies = document.querySelector("#carruselPeliculas");

function showInfoMovies (arrayData){
    mainmovies.innerHTML = "";
    arrayData.forEach((filmsPublished) => {
        const divFilm = document.createElement("div"); //div para cada tarjeta
        divFilm.classList.add("div_content_movies");
        divFilm.innerHTML=`<img src="${filmsPublished.poster}" class="div_img_movie" />
        <b><h3 class="contenedor_section_h3__movti"><p class="films-titles">${filmsPublished.title}</h3></b>`;
        divFilm.setAttribute("id", filmsPublished.id);
        mainmovies.appendChild(divFilm);
    });
}
showInfoMovies(films);

let btnAZ = document.querySelector('#aZ');
btnAZ.addEventListener("click",()=>{
  showInfoMovies(orderAZ());
});


let btnZA = document.querySelector('#zA');
btnZA.addEventListener("click",()=>{
  showInfoMovies(orderZA());
});

let btnAntigua = document.querySelector('#antigua');
btnAntigua.addEventListener("click",()=>{
  showInfoMovies(orderAntigua());
});

let btnReciente = document.querySelector('#reciente');
btnReciente.addEventListener("click",()=>{
  showInfoMovies(orderReciente());
});

let ingreso = document.querySelector('#inputBuscar');
  ingreso.addEventListener("keyup",()=>{
    showInfoMovies(search());
    showInfoPeople(searchPeople(newArrayPeople()));
    if(document.getElementById("inputBuscar").value==""){
        showInfoMovies(films);
      };
  });
  

function showInfoPeople (arrayData){
    arrayData.forEach((filmsPublished) => {
        const divFilm = document.createElement("div"); //div para cada tarjeta de personaje
        divFilm.classList.add("div_content_movies");
        divFilm.innerHTML=`<img src="${filmsPublished.img}" class="div_img_movie" />
        <b><h3 class="contenedor_section_h3__movti"><p class="films-titles">${filmsPublished.name}</h3></b>`;
        divFilm.setAttribute("id", filmsPublished.id);
        mainmovies.appendChild(divFilm);
    });
}

//arreglo de peliculas destacadas
const principales=[
    {
      "id": "cd3d059c-09f4-4ff3-8d63-bc765a5184fa",
      "title": "Howl's Moving Castle",
      "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/0/08/Howl%27s_Moving_Castle.jpg",
      "release_date": "2004"},
    {
      "id": "dc2e6bd1-8156-4886-adff-b39e6043af0c",
      "title": "Spirited Away",
      "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/9/9e/Spirited_Away.png",
      "release_date": "2001"},
    {
      "id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
      "title": "My Neighbor Totoro",
      "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/d/db/My_Neighbor_Totoro.jpg",
      "release_date": "1988"}];
const bestmovies = document.querySelector("#bestFilms");
document.getElementById("bestFilms").innerHTML="saludo";
//metodo de mostrar peliculas destacadas
function showBestMovies (arrayData){
    bestmovies.innerHTML="";
    arrayData.forEach((filmsPublished) => {
        const div2Film = document.createElement("div"); //div para cada tarjeta
        div2Film.classList.add("div_best_movies");
        div2Film.innerHTML=`<img src="${filmsPublished.poster}" class="img_movie" />
        <b><h3 class="contenedor_section_h3"><p class="films-titles">${filmsPublished.title}</h3></b>`;
      let cadena=`<img src="${filmsPublished.poster}" class="div_best_movie" />
        <b><h3 class="contenedor_section_h3"><p class="films-titles">${filmsPublished.title}</h3></b>`;
      bestFilms.appendChild(div2Film);
    });
}
showBestMovies(principales);