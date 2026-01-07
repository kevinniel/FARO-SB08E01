import { Message } from "../models/Message.js";
import { trimAllStringValues } from "../utils/trimAllStringValues.js";
import { getRandomSuccessMessage } from "../utils/getRandomSuccessMessage.js";
import { addFlashMessage } from "../utils/flashMessage.js";

export const handleForm = async (req, res) => {
    try {
        // j'enleve les espaces inutiles
        const message = trimAllStringValues(req.body);
        // j'ajoute le message à la base de données
        await Message.create(message);
        // j'ajoute un message de succès à la session
        addFlashMessage(req, { type: "success", message: getRandomSuccessMessage() });
        // je redirige l'utilisateur vers la page d'accueil
        res.status(201).redirect("/");
    } catch (err) {
        let messages = [];

        if (err.errors && typeof err.errors === "object") {
            messages = Object.values(err.errors).map(e => e.message);
        } else if (err.message) {
            messages.push(err.message);
        }

        addFlashMessage(req, { type: "danger", message: messages });
        res.status(422).redirect("/");
    }
};