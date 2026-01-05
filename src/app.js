import express from "express";
import router from "./routes/index.js";
import session from "express-session";
const app = express();

// je configure le moteur de rendu
app.set("view engine", "ejs");
app.set("views", `${import.meta.dirname}/views`);

// je configure les sessions
app.use(session(
    {
        secret: ["php master race"], // Clé secrète pour signer la session, utilisez une chaîne complexe et sécurisée
        resave: false, // Force la session à être sauvegardée dans la store, même si elle n'a pas été modifiée
        saveUninitialized: false, // Ne sauvegarde pas de session non initialisée
        cookie: {
          secure: false, // Définit le cookie comme sécurisé, utilisez true en production avec HTTPS
          httpOnly: true, // Empêche l'accès au cookie via JavaScript côté client
        }
      }
));
// Body parser pour traiter les body au format des formulaires HTMP (`applicaiton/x-www-urlencoded`)
app.use(express.urlencoded({ extended: true })); 

// je configure le dossier public
app.use(express.static(`${import.meta.dirname}/../public`));
// je configure les routes
app.use(router);

export default app;
