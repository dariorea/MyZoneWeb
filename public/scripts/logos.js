import { baseUrl } from "./config.js";


const obtenerLogosSeries = () => {
    const contenedor = document.querySelector(".logo-titulo")
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    fetch(`${baseUrl}/series/logos/${id}`)
    .then(response => response.json())
    .then(data => {
        console.log(data, "logos")
        const logoMovie = document.createElement("img")
        logoMovie.src = `${data.hdmovielogo[0].url}`
        contenedor.appendChild(logoMovie)
    })
    .catch(error => console.error('Error:', error));
}

obtenerLogosSeries()