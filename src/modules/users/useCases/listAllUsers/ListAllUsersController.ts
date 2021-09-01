import { Request, Response } from 'express';

import { ListAllUsersUseCase } from './ListAllUsersUseCase';

class ListAllUsersController {
    constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

    handle(request: Request, response: Response): Response {
        const list = this.listAllUsersUseCase.execute();
        return response.json(list);
    }
}

export { ListAllUsersController };
