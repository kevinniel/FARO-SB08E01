import { removeFlashMessage } from "../utils/flashMessage.js";
export const home = async (req, res) => {

    // je récupère le message flash de la session avant de le supprimer
    const flash = req.session.flash;
    // je supprime le message flash de la session
    removeFlashMessage(req);

    // je rends la vue home en passant le message flash
    res.status(200).render("home", { flash });
};

