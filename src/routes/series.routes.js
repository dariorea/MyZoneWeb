import express from "express";
import { 
    getAllSeries, 
    getLogos, 
    getPopularSeries, 
    getSeries,
    getSerieID
} from "../controllers/series.controller.js";

const router = express.Router()

router.get("/", getSeries)
router.get("/all", getAllSeries)
router.get("/popular", getPopularSeries)
router.get("/logos/:id", getLogos)
router.get("/:id", getSerieID)


export default router