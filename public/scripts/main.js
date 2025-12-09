import { baseUrl } from "./config.js"
import { obtenerItem, cortarOverview } from "./modules/modulo.js";


document.addEventListener("DOMContentLoaded", () => {
	obtenerItem({
		containerID: "trendings",
		endpoint: "movies/popular",
		type: "movie"
	})
	obtenerItem({
		containerID: "estrenos",
		endpoint: "movies",
		type: "movie"
	})
	obtenerItem({
		containerID: "series",
		endpoint: "series",
		type: "serie"
	})
	
	const obtenerPeliculasTop = () => {
		const backdropContainer = document.getElementById("popular-movies")
		const backdropContainerd = document.getElementById("slider")
		let count = 0
		fetch(`${baseUrl}/movies/trendings`)
		.then(result => result.json())
		.then(data => {
			console.log(data, "estas son las peliculas con logos")
			data.forEach(item => {
				const containerItem = document.createElement("div")
				containerItem.classList.add("container-item")
				const enlace = document.createElement("a")
				enlace.href = `${baseUrl}/pages/movie.html?id=${item.id}`
				const itemback = document.createElement("div")
				itemback.classList.add("div-item")
				itemback.style.backgroundImage = `url("https://image.tmdb.org/t/p/original${item.backdrop_path}")`;
				itemback.style.backgroundSize = "cover";
				itemback.style.backgroundPosition = "center";
				itemback.style.backgroundRepeat = "no-repeat";
				const nameItem = document.createElement("h3")
				nameItem.textContent = `${item.title}`
				
				enlace.appendChild(itemback)
				containerItem.append(enlace, nameItem)
				backdropContainer.appendChild(containerItem)
	
				if(count<5) {
					const containerItem = document.createElement("div")
					containerItem.classList.add("slide")
					const imagenBackdrop = document.createElement("div")
					imagenBackdrop.href = `${baseUrl}/pages/movie.html?id=${item.id}`
					imagenBackdrop.classList.add("slide-image")
					imagenBackdrop.style.backgroundImage = `url("https://image.tmdb.org/t/p/original${item.backdrop_path}")`;
					imagenBackdrop.style.backgroundSize = "cover";
					imagenBackdrop.style.backgroundPosition = "center";
					imagenBackdrop.style.backgroundRepeat = "no-repeat";
	
					const containerNameItem = document.createElement("div")
					containerNameItem.classList.add("slide-text")
	
					const nameItem = document.createElement("img")
					nameItem.src = `${item.logos}`
					
					const description = document.createElement("article")
					description.textContent = cortarOverview(item.overview)
	
					const verAhora = document.createElement("a")
					verAhora.href = `${baseUrl}/pages/movie.html?id=${item.id}`
					verAhora.textContent = `Ver Ahora`
	
					containerNameItem.append(nameItem, description, verAhora)
					containerItem.append(containerNameItem, imagenBackdrop)
					backdropContainerd.appendChild(containerItem)
					count++
				}
			})
		})
	}
	const obtenerSeriesPopulares = () => {
		const backdropContainers = document.getElementById("popular-series")
		fetch(`${baseUrl}/series/popular`)
		.then(result => result.json())
		.then(data => {
			console.log(data)
			data.results.forEach(item => {
				const containerItem = document.createElement("div")
				containerItem.classList.add("container-item")
				const enlace = document.createElement("a")
				enlace.href = `${baseUrl}/pages/serie.html?id=${item.id}`
				//const itemback = document.createElement("div")
				enlace.classList.add("div-item")
				enlace.style.backgroundImage = `url("https://image.tmdb.org/t/p/original${item.backdrop_path}")`;
				enlace.style.backgroundSize = "cover";
				enlace.style.backgroundPosition = "center";
				enlace.style.backgroundRepeat = "no-repeat";
				const nameItem = document.createElement("h3")
				nameItem.textContent = `${item.name}`
	
				//enlace.appendChild(itemback)
				containerItem.append(enlace, nameItem)
				backdropContainers.appendChild(containerItem)
	
			})
		})
	}
	
	
	
	document.querySelectorAll(".scroll-wrapped").forEach(wrapper => {
		const scrollContainer = wrapper.querySelector(".container-cards");
		const btnLeft = wrapper.querySelector(".scroll-btn.left");
		const btnRight = wrapper.querySelector(".scroll-btn.right");
	
		const scrollByAmount = () => scrollContainer.clientWidth;
		btnLeft.addEventListener("click", () => {
			scrollContainer.scrollBy({ left: -scrollByAmount(), behavior: "smooth" });
		});
	
		btnRight.addEventListener("click", () => {
			scrollContainer.scrollBy({ left: scrollByAmount(), behavior: "smooth" });
		});
	});
	
	const slider = document.getElementById("slider");
	let index = 0;
	
	setInterval(() => {
		index++;
	
	  // si llega al último vuelve al primero
		if (index >= slider.children.length) {
			index = 0;
		}
	
		  const width = slider.clientWidth; // ancho de la pantalla
		slider.scrollTo({
			left: width * index,
			behavior: "smooth"
		});
	}, 9000);
	
	obtenerPeliculasTop()
	obtenerSeriesPopulares()
})
