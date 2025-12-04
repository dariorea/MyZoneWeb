import { baseUrl } from "./config.js"

document.addEventListener("DOMContentLoaded", () => {
    let nameInput = document.getElementById("input-search")
    let boton = document.getElementById("button-search")

    boton.addEventListener("click", (e) => {
        e.preventDefault()
        
        console.log("escribiendo:", nameInput.value);
        const newValor = nameInput.value
        const IMG_BASE = "https://image.tmdb.org/t/p/original";
        const divContainer = document.getElementById("container")
        //console.log(nameInput)
        divContainer.textContent = "";
        fetch(`${baseUrl}/search?name=${newValor}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            data.results.forEach(item => {
                const enlace = document.createElement("a")
                item.title ? enlace.href = `${baseUrl}/pages/movie.html?id=${item.id}` : enlace.href = `${baseUrl}/pages/serie.html?id=${item.id}`
                const img = document.createElement("img")
                img.src = `${IMG_BASE}${item?.poster_path || item.backdrop_path}`
                img.alt = `${item?.name || item.title}`
                const name = document.createElement("p")
                name.textContent = `${item?.name || item.title}`
                enlace.appendChild(img)
                const divCard = document.createElement("div")
                divCard.append(enlace, name)
                divCard.classList.add("card")
                divContainer.appendChild(divCard)
            });
        })
    });
//const buscarConIA = async (texto) => {
//    const res = await fetch(`${baseUrl}/search/search-ia?description=${encodeURIComponent(texto)}`);
//    const data = await res.json();
//    console.log("Sugerencias IA:", data.titles);
//    const contenedor = document.getElementById("container")
//
//    const arraydePelis = data.titles
//    for (let i = 0; i < arraydePelis.length; i++) {
//        const peliucla = document.createElement("h3")
//        peliucla.textContent = arraydePelis[i]
//
//        contenedor.appendChild(peliucla)
//    }
//};
//buscarConIA("pelicula de un super heroe que tiene una armadura de hierro y tambien aparece otro super heroe con un traje azul y un escudo redondo")
//
})

