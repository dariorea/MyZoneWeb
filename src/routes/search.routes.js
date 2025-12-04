import express from "express";
import { searchItem, searchIA } from "../controllers/search.controller.js";

const router = express.Router()

router.get("/", searchItem)
router.get("/search-ia", searchIA)

export default router