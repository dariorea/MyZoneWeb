import { infiniteScrollLoader, renderCard } from "./modules/modulo.js";

//obtenerkids()
infiniteScrollLoader({
    containerId: ".container-cards",
    scrollId: "container",
    endpoint: "animation/kids", // ✅ ruta completa del backend
    renderItem: (item, container) => renderCard(item, container, "movie"),
})
