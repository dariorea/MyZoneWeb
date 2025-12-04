import express from "express";
import { getAnime, getKids } from "../controllers/animation.controller.js";

const router = express.Router()

router.get("/anime", getAnime)
router.get("/kids", getKids)
export default router