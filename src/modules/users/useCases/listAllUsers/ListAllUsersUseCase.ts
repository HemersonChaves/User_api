import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    user_id: string;
}
class ListAllUsersUseCase {
    constructor(private usersRepository: IUsersRepository) {}

    execute(request: IRequest): User[] {
        const userAdminExist = this.usersRepository.findById(request.user_id);
        if (!userAdminExist) {
            throw new Error("Usuário inexistente");
        }
        if (!userAdminExist.admin) {
            throw new Error("Usuário sem permissão de admin");
        }
        const users = this.usersRepository.list();
        return users;
    }
}

export { ListAllUsersUseCase };
