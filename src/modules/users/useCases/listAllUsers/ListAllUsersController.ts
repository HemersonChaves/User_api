import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
    constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

    handle(request: Request, response: Response): Response {
        try {
            const users = this.listAllUsersUseCase.execute();
            return response.status(201).json(users);
        } catch (error) {
            return response
                .status(500)
                .json({ error: "Nao pode encontrar nenhum usuario" });
        }
    }
}

export { ListAllUsersController };
