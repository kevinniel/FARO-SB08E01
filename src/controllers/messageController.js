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
        // j'ajoute tous les messages d'erreurs dans un tableau
        let messages = [];
        for (const error of err.errors) {
            messages.push(error.message);
        }
        // j'appel ma fonction pour ajouter un message d'erreur à la session
        addFlashMessage(req, { type: "danger", message: messages });
        res.status(422).redirect("/");
    }
};