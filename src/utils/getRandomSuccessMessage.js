/**
 * Get a random success message
 * @returns {string} A random success message
*/
export const funnyMessages = [
    "Merci d'ajouter une touche de magie à notre livre d'or ! ✨",
    "Votre message est tellement brillant, nous avons dû le porter des lunettes de soleil ! 😎",
    "Félicitations ! Vous venez de déclencher une vague de sourires ! 😄",
    "Votre humour est parfaitement assorti à notre livre d'or ! 📚💬",
];

export const getRandomSuccessMessage = () => {
    const randomIndex = Math.floor(Math.random() * funnyMessages.length);
    return funnyMessages[randomIndex];
};