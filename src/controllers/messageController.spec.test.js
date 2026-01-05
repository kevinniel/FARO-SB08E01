import { handleForm } from "./messageController.js";
import { jest } from "@jest/globals";

describe("handlefForm function", () => {
    test("should add successfully to the database and redirect to the home page", async () => {
        const req = {
            body: {
                name: "Doe",
                firstname: "John",
                email: "  johndoe@gmail.com",
                content: "Merci à O'clock pour cette formation !",
            },
            session:{}
        };
        const res = {
            // dans le code vu qu'on chaine les méthodes, on doit retourner this
            status: jest.fn().mockReturnThis(),
            redirect: jest.fn()
        };

        await handleForm(req, res);

        expect(res.status).toHaveBeenCalledWith(201);

    });

    test("should return an error if the message is not valid", async () => {
        const req = {
            body: {
                name: "Doe",
                firstname: "John",
                email: "",
            },
            session:{}
        };
        const res = {
            status: jest.fn().mockReturnThis(),
            redirect: jest.fn()
        };

        await handleForm(req, res);

        expect(res.status).toHaveBeenCalledWith(422);

    });
});
