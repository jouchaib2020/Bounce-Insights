// Configure Express App Instance
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import router from './routes/router';

const app = express();

const dotenv = require('dotenv');
dotenv.config(); // Load the environment variables

const allowedOrigins = ['http://127.0.0.1:5173', 'http://localhost:5174', 'http://localhost:5173'];
app.use(cors({origin: allowedOrigins, credentials:true}));

app.use(helmet());
app.use(express.json({ limit: "50mb" }));
// Assign routes
app.use("/api", router);

export default app;
