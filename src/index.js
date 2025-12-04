import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import moviesRouter from "./routes/movies.routes.js";
import animationRouter from "./routes/animation.routes.js";
import seriesRouter from "./routes/series.routes.js";
import searchRoutes from "./routes/search.routes.js"

dotenv.config()

const app = express()

app.use(express.json())
app.use(express.static("public"))
app.use(cors())

const PORT = 3000

app.use("/movies", moviesRouter)
app.use("/animation", animationRouter)
app.use("/series", seriesRouter)
app.use("/search", searchRoutes)

app.listen(PORT, () => {
    console.log(`Hola desde el puerto: ${PORT}`)
})