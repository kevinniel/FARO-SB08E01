import express from "express";
import * as homeController from "../controllers/homeController.js";
import * as messageController from "../controllers/messageController.js";
const router = express.Router();

router.get("/", homeController.home);
router.post("/message", messageController.handleForm);


router.all("{*any}", (req, res) => {
    res.status(404).send("Mais que diable se passe-t-il ici ?");
});

export default router;
