import sequelize from "./database.js";
// on doit importer le modèle
import { Message } from "../models/Message";

beforeEach(async () => {
    await sequelize.sync({ force: true });
});

afterAll(async () => {
    await sequelize.drop();
    await sequelize.close();
});