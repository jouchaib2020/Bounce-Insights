"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const countries_1 = __importDefault(require("./countries"));
const router = (0, express_1.Router)();
router.get('/', (req, res) => [res.status(200).send("Welcome to server 🥲🥲🎊🎊😁👋🔥🤓😂")]);
router.use("/countries", countries_1.default);
router.use("*", (req, res) => [res.status(404).send("Endpoint not found")]);
exports.default = router;
