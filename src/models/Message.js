import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

export const Message = sequelize.define("message", {
    // Model attributes are defined here
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: "Le nom est obligatoire" },
        },
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: "Le prénom est obligatoire" },
        },
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: { msg: "L'email n'est pas au bon format" },
            notEmpty: { msg: "L'email est obligatoire" },
        },
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: { msg: "Le contenu est obligatoire" },
        },
    },
});

