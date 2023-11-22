"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Configure Express App Instance
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const router_1 = __importDefault(require("./routes/router"));
const app = (0, express_1.default)();
const dotenv = require('dotenv');
dotenv.config(); // Load the environment variables
const allowedOrigins = ['http://127.0.0.1:5173', 'http://localhost:5173'];
app.use((0, cors_1.default)({ origin: allowedOrigins, credentials: true }));
app.use((0, helmet_1.default)());
app.use(express_1.default.json({ limit: "50mb" }));
// Assign routes
app.use("/api", router_1.default);
exports.default = app;
