import data from './data/ghibli/ghibli.js';
import { orderAZ, orderZA, orderAntigua, orderReciente, newArrayPeople, peopleforMovie } from './data.js';

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
        <b><h3 class="contenedor_section_h3"><p class="films-titles">${filmsPublished.title}</h3></b>`;
        divFilm.setAttribute("id", filmsPublished.id);
        mainmovies.appendChild(divFilm);

      const mainpeople = document.querySelector("#carruselPers_Relacionados");
      const identityMovie = document.getElementById(filmsPublished.id)
        identityMovie.addEventListener("click", ()=>{
          document.getElementById("paginaPrincipal").style.display="none";
          document.getElementById("cabecera").style.display="none";
          document.getElementById("topTres").style.display="none";
          document.getElementById("Peliculas").style.display="flex";
          mainpeople.innerHTML="";
          infoMovie();
          showInfoPeople(peopleforMovie(arrayData,`${filmsPublished.id}`),mainpeople);
        });

        //metodo de info individual de pelicula
        function infoMovie(){
            document.getElementById("posterPelicula").innerHTML= `<img src="${filmsPublished.poster}" class="div_img_movie" />`;
            document.getElementById("tituloPelicula").innerHTML= `<b><h3 ><p class="films-titles">${filmsPublished.title}</h3></b>`;
            document.getElementById("DescripcionPelicula").innerHTML= `  <div class="descripcion_movie"> <h2>${filmsPublished.description}</h2></div>`;
            document.getElementById("director_Individual").innerHTML= `  <h3 class="descripcion_titles">DIRECTOR : </H3> <h2 class="descripcion_movie">${filmsPublished.director}</h2>`;
            document.getElementById("productor_Individual").innerHTML= `  <h3 class="descripcion_titles">PRODUCTOR : </H3> <h2 class="descripcion_movie">${filmsPublished.producer}</h2>`;
            document.getElementById("añoLanzamiento_Individual").innerHTML= `  <h3 class="descripcion_titles">LANZAMIENTO: </H3> <h2 class="descripcion_movie">${filmsPublished.release_date}</h2>`;
            document.getElementById("ranking_Individual").innerHTML= `  <h3 class="descripcion_titles">RANKING : </h3> <h2 class="descripcion_movie">${filmsPublished.rt_score}</h2>`;
        }
    });
}

showInfoMovies(films);

/* Permite el funcionamiento del carrusel  */
const carrusel = document.querySelector("#carruselPeliculas");
const flechaIzq = document.querySelector("#flechaIzquierda");
const flechaDer = document.querySelector("#flechaDerecha");
flechaDer.addEventListener("click", ()=>{
  carrusel.scrollLeft += carrusel.offsetWidth;
});
flechaIzq.addEventListener("click", ()=>{
  carrusel.scrollLeft -= carrusel.offsetWidth;
});
/*<<<<<<<<<<<<<------>>>>>>>>>>  */
let btnAZ = document.querySelector('#aZ');
btnAZ.addEventListener("click",()=>{
  carrusel.scrollLeft=0;
  showInfoMovies(orderAZ(films));
});

let btnZA = document.querySelector('#zA');
btnZA.addEventListener("click",()=>{
  carrusel.scrollLeft=0;
  showInfoMovies(orderZA(films));
});

let btnAntigua = document.querySelector('#antigua');
btnAntigua.addEventListener("click",()=>{
  carrusel.scrollLeft=0;
  showInfoMovies(orderAntigua(films));
});

let btnReciente = document.querySelector('#reciente');
btnReciente.addEventListener("click",()=>{
  carrusel.scrollLeft=0;
  showInfoMovies(orderReciente(films));
});

let ingreso = document.querySelector('#inputBuscar');
  ingreso.addEventListener("keyup",()=>{
    carrusel.scrollLeft=0;
    showInfoMovies(search(films));
    showInfoPeople(searchPeople(newArrayPeople(films),films),mainmovies);
    if(document.getElementById("inputBuscar").value==""){
        showInfoMovies(films);
      }
  });


function showInfoPeople (arrayData,mainmovies){
    arrayData.forEach((filmsPublished) => {
        const divFilm = document.createElement("div"); //div para cada tarjeta de personaje
        divFilm.classList.add("div_content_movies");
        divFilm.innerHTML=`<img src="${filmsPublished.img}" class="div_img_movie" />
        <b><h3 class="contenedor_section_h3"><p class="films-titles">${filmsPublished.name}</h3></b>`;
        divFilm.setAttribute("id", filmsPublished.id);
        mainmovies.appendChild(divFilm);
    });
}

//arreglo de peliculas destacadas
const principales=[
    {
      "id": "cd3d059c-09f4-4ff3-8d63-bc765a5184fa",
      "title": "Howl's Moving Castle",
      "director": "Hayao Miyazaki",
      "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/0/08/Howl%27s_Moving_Castle.jpg",
      "release_date": "2004"},
    {
      "id": "dc2e6bd1-8156-4886-adff-b39e6043af0c",
      "title": "Spirited Away",
      "director": "Hayao Miyazaki",
      "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/9/9e/Spirited_Away.png",
      "release_date": "2001"},
    {
      "id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
      "title": "My Neighbor Totoro",
      "director": "Hayao Miyazaki",
      "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/d/db/My_Neighbor_Totoro.jpg",
      "release_date": "1988"}];
const bestmovies = document.querySelector("#bestFilms");
//metodo de mostrar peliculas destacadas
function showBestMovies (arrayData){
    bestmovies.innerHTML="";
    arrayData.forEach((filmsPublished) => {
        const div2Film = document.createElement("div"); //div para cada tarjeta
        div2Film.classList.add("div_best_movies");
        div2Film.innerHTML=`<img src="${filmsPublished.poster}" class="img_movie" />
        <div class="best_textos"><h3 class="contenedor_section_h3"><p>${filmsPublished.title}</h3>
      <h2 class="section_h2"> ${filmsPublished.director}</h2>
      <h3 class="contenedor_section_h3"><p>${filmsPublished.release_date}</h3></div>`;
      bestmovies.appendChild(div2Film);
    });
}
showBestMovies(principales);

//vistas de los menus
const peliculas_men=document.getElementById("peliculas_menu");
peliculas_men.addEventListener("click",()=>{
  document.getElementById("paginaPrincipal").style.display="flex";
  document.getElementById("Peliculas").style.display="none";
  document.getElementById("cabecera").style.display="none";
  document.getElementById("topTres").style.display="none";
  document.getElementById("contenedorCarrusel").style.width="100%";
  document.getElementById("flechaIzquierda").style.display="none";
  document.getElementById("flechaDerecha").style.display="none";
  document.getElementById("carruselPeliculas").classList.remove("carruselPeliculas");
  document.getElementById("carruselPeliculas").classList.add("carruselPeliculas__pgPeliculas");
  showInfoMovies(films);
  document.getElementById("botonesOrdenar").style.display="block";
});

const personajes_men=document.getElementById("personajes_menu");
personajes_men.addEventListener("click",()=>{
  document.getElementById("paginaPrincipal").style.display="flex";
  document.getElementById("Peliculas").style.display="none";
  document.getElementById("cabecera").style.display="none";
  document.getElementById("topTres").style.display="none";
  document.getElementById("paginaDirectores").style.display="none";
  document.getElementById("contenedorCarrusel").style.width="100%";
  document.getElementById("carruselPeliculas").classList.remove("carruselPeliculas");
  document.getElementById("carruselPeliculas").classList.add("carruselPeliculas__pgPeliculas");
  mainmovies.innerHTML = "";
  showInfoPeople(newArrayPeople(films),mainmovies);
  document.getElementById("botonesOrdenar").style.display="none";
});

const dir1 = document.getElementById("dir1");
dir1.addEventListener("click", pgDirectores);
const dir2 = document.getElementById("dir2");
dir2.addEventListener("click", pgDirectores);
const dir3 = document.getElementById("dir3");
dir3.addEventListener("click", pgDirectores);
const dir4 = document.getElementById("dir4");
dir4.addEventListener("click", pgDirectores);
const dir5 = document.getElementById("dir5");
dir5.addEventListener("click", pgDirectores);
const dir6 = document.getElementById("dir6");
dir6.addEventListener("click", pgDirectores);

function pgDirectores(){
  document.getElementById("paginaPrincipal").style.display="none";
  document.getElementById("Peliculas").style.display="none";
  document.getElementById("cabecera").style.display="none";
  document.getElementById("topTres").style.display="none";
  document.getElementById("paginaDirectores").style.display="flex";
}



// hover de Directores
let inDirectores = document.getElementById("directores");
inDirectores.addEventListener("mouseenter",()=>{
  document.getElementById("listaDirectores").style.display="flex";
})
let outDirectores = document.getElementById("listaDirectores");
outDirectores.addEventListener("mouseleave",()=>{
  document.getElementById("listaDirectores").style.display="none";
})

//funciones de Busqueda
function search(films){
    let showFilms = films;
  let resultado = films.filter( all => 
    `${all.title.toLowerCase()} ${all.director.toLowerCase()} ${all.producer.toLowerCase()} ${all.release_date.toLowerCase()}`.includes(document.querySelector('#inputBuscar').value.toLowerCase()));
  showFilms = resultado;
  return showFilms;
}

function searchPeople(arrayIngreso,films){
    let showFilms2 = films;
    let resultado = arrayIngreso.filter( all => 
      `${all.name.toLowerCase()} `.includes(document.querySelector('#inputBuscar').value.toLowerCase()));
    showFilms2 = resultado;
    return showFilms2;
  }

//Arreglo para página de Directores
const directores =[
{
  "name": "Hayao Miyazaki",
  "description": "Es uno de los fundadores de Studio Ghibli, junto con Isao Takahada. Dentro de sus ocupaciones encontramos director de cine de animación, animador, ilustrador, mangaka y productor de anime japonés de renombre. <br> Dentro de sus filmes de animación más populares podemos encontrar El viaje de Chihiro, Mi Vecino Totoro,  La princesa Mononoke y otros más.",
  "img": "https://upload.wikimedia.org/wikipedia/commons/e/ef/Hayao_Miyazaki.jpg"
},
{
  "name": "Isao Takahata",
  "description": "ue un director, escritor, productor y guionista japones. Fue, junto a Hayao Miyazaki fundador de Studio Ghibli. El cuento de la princesa Kaguya (2013), fue su última película, y la misma estuvo nominada en la categoría de mejor película de animación en los 87.º Premios Óscar.",
  "img": "https://static.wikia.nocookie.net/studioghibli/images/b/b6/Isao_Takahata.jpg/revision/latest/scale-to-width-down/200?cb=20200411015632&path-prefix=es"
},
{
  "name": "Tomomi Mochizuki",
  "description": "es un artista japonés de guiones gráficos, guionista y director, conocido por haber colaborado con estudios de animación líderes como Studio Ghibli, Nippon Animation, Pierrot y Sunrise. A veces usa el alias Gō Sakamoto cuando escribe guiones o trabaja en guiones gráficos.",
  "img": "https://static.wikia.nocookie.net/studioghibli/images/3/3a/Tomomi_Mochizuki.jpg/revision/latest/scale-to-width-down/180?cb=20200714153152&path-prefix=es"
},
{
  "name": "Yoshifumi Kondo",
  "description": "Fue un animador japonés que trabajó para Studio Ghibli en sus últimos años. Se esperaba que se convirtiera en uno de los principales directores de Ghibli, junto a Hayao Miyazaki y Isao Takahata pero murió por un aneurisma en 1998. Tenía apenas 47 años de edad. También trabajo como supervisor de animación y diseñador de personajes en el departamento de animación de Ghibli.",
  "img": "https://static.wikia.nocookie.net/studioghibli/images/3/37/Yoshifumi_Kond%C3%B4.jpg/revision/latest/scale-to-width-down/180?cb=20200419023303&path-prefix=es"
},
{
  "name": "Hiroyuki Morita",
  "description": "Es un director y animador japonés. Es mejor conocido por trabajar en la película Haru en el reino de los gatos, así como por hacer animación clave para la producción de Mis vecinos los Yamada y la animación de Nicky, la aprendiz de bruja.",
  "img": "https://static.wikia.nocookie.net/studioghibli/images/5/50/Hiroyuki_Morita.jpg/revision/latest/scale-to-width-down/180?cb=20200706135938&path-prefix=es"
},
{
  "name": "Goro Miyazaki",
  "description": "Es un arquitecto, director, animador y guionista de animación japonesa. Es también el hijo de Hayao Miyazaki. Inicialmente era reacio a seguir los pasos de su padre y se dedicó al paisajismo antes que a la animación. Sin embargo, después que Toshio Suzuki le convenciera para trabajar en el Museo Ghibli, empezó a relacionarse con el Studio Ghibli.",
  "img": "https://static.wikia.nocookie.net/studioghibli/images/e/e9/Gor%C5%8D_Miyazaki.jpg/revision/latest/scale-to-width-down/180?cb=20200713141114&path-prefix=es"
},
];