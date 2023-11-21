import { Router } from "express";
import { getCountryByName } from "../controllers/countries";

const router = Router();
router.get("/:name", getCountryByName);

export default router;