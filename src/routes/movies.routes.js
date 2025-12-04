import express from "express";
import { 
    getAllMovies, 
    getMovies,
    getMovieID, 
    getTrendings, 
    topRatedMovies
} from "../controllers/movies.controller.js";


const router = express.Router()

router.get("/", getMovies)
router.get("/trendings", getTrendings)
router.get("/all", getAllMovies)
router.get("/popular", topRatedMovies)
router.get("/:id", getMovieID)

export default router