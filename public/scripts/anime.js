import { infiniteScrollLoader, renderCard } from "./modules/modulo.js";

document.addEventListener("DOMContentLoaded", ()=> {
    infiniteScrollLoader({
        containerId: ".container-cards",
        scrollId: "container",
        endpoint: "animation/anime", // ✅ ruta completa del backend
        renderItem: (item, container) => renderCard(item, container, "serie"),
    });
})