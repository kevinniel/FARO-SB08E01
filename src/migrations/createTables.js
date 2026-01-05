// ! Ne pas utiliser en production
import sequelize  from "../config/database.js";
import { Message } from "../models/Message.js";

// ça va créer les tables dans la base de données
await sequelize.sync({ force: true });
console.log("Tables created! 😻");
