import { baseUrl } from "./config.js";

const obtenerPeliculaID = () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const itemContainer = document.querySelector(".item-container");
  const itemImgContainer = document.getElementById("item-img");
  const itemInfoContainer = document.getElementById("item-info");

  fetch(`${baseUrl}/movies/${id}`)
    .then(result => result.json())
    .then(data => {
        console.log(data);
        itemContainer.style.backgroundImage = `url("https://image.tmdb.org/t/p/original${data.backdrop_path}")`;
        itemContainer.style.backgroundSize = "cover";
        itemContainer.style.backgroundPosition = "center";
        itemContainer.style.backgroundRepeat = "no-repeat";

        const img = document.createElement("img");
        img.src = `https://image.tmdb.org/t/p/original${data.poster_path}`;
        img.alt = `${data.title}`;

        //const year = new Date(data.release_date).getFullYear();
        //const title = document.createElement("h1");
        //title.textContent = `${data.title}(${year})`;

        const detailContainer = document.createElement("div")
        detailContainer.classList.add("container-detail")

        const puntuacion = document.createElement("p")
        puntuacion.textContent = `${data.vote_average.toFixed(1)}★`
        const duracion = document.createElement("p")
        duracion.textContent = `${data.runtime}min`;

        const overview = document.createElement("em")
        overview.textContent = `${data.overview}`

        const genres = document.createElement("p");
        const generosText = data.genres.map(g => g.name).join(", ");
        genres.textContent = `Géneros: ${generosText}`;

        const paises = document.createElement("p")
        const paisesText = data.production_countries.map(c => c.name).join(", ")
        paises.textContent = `Paises: ${paisesText}`

        const verAhora = document.createElement("a")
        verAhora.href = data.homepage;
        verAhora.textContent = "Ver Ahora";

        const ok = document.createElement("button")
        ok.classList.add("ok-boton")
        ok.textContent = "ok"
        ok.id = data.id
        ok.addEventListener("click", () => {pedirLink()})

        itemImgContainer.appendChild(img)
        detailContainer.append(puntuacion, duracion)
        itemInfoContainer.append(detailContainer, verAhora ,overview, genres, paises, ok)
    });
};

export const pedirLink = () => {
  const botonLink = document.querySelector(".ok-boton")
  const itemInfoContainerd = document.getElementById("item-info");
  fetch("../json/database.json")
  .then(response => response.json())
  .then(res => {

    res.forEach(element => {
      if(botonLink.id === element.id) {
        console.log(element.id)
        const video = document.createElement("iframe");
        video.width = "760";
        video.height = "515";
        video.src = element.url;  // aquí va el link a ok.ru
        video.frameBorder = "0";
        video.allow = "autoplay";
        video.allowFullscreen = true;
        video.style.zIndex = 10000
        itemInfoContainerd.appendChild(video)
      }
    });
  })
}


obtenerPeliculaID();
