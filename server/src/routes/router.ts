import { Request, Response, Router } from "express";
import CountriesRouter from "./countries";

const router = Router();

router.get('/', (req: Request, res: Response) => [res.status(200).send("Welcome to server 🥲🥲🎊🎊😁👋🔥🤓😂")]);
router.use("/countries", CountriesRouter);
router.use("*", (req: Request, res: Response) => [res.status(404).send("Endpoint not found")]);

export default router;