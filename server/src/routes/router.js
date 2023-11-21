const express = require("express");
const router = express.Router();

router.use('/', (req, res) => [res.status(200).send("Welcome so server 🥲🥲🎊🎊😁👋🔥🤓😂")]);
router.use("*", (req, res) => [res.status(404).send("Endpoint not found")]);
module.exports = router;
