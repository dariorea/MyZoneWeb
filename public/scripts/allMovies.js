import { infiniteScrollLoader, renderCard } from "./modules/modulo.js";

infiniteScrollLoader({
    containerId: ".container-cards",
    scrollId: "container",
    endpoint: "movies/all", // ✅ ruta completa del backend
    renderItem: (item, container) => renderCard(item, container, "movie"),
});