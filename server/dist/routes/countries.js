"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const countries_1 = require("../controllers/countries");
const router = (0, express_1.Router)();
router.get("/:name", countries_1.getCountryByName);
exports.default = router;
