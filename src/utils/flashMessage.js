/**
 * Adds a flash message to the session.
 *
 * @param {Object} req - The request object.
 * @param {Object} params - The parameters for the flash message.
 * @param {('primary'|'link'|'info'|'success'|'warning'|'danger')} params.type - The type of the flash message (Bulma colors).
 * @param {string|string[]} params.message - The message content, can be a string or an array of strings.
 */
export const addFlashMessage = (req, params) => {;
    req.session.flash = params;
}

export const removeFlashMessage = (req) => {
    delete req.session.flash ;
}

