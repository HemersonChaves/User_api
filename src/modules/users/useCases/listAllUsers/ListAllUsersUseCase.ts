import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    user_id: string;
}
class ListAllUsersUseCase {
    constructor(private usersRepository: IUsersRepository) {}

    execute(request: IRequest): User[] {
        const useradmin = this.usersRepository.findById(request.user_id);
        if (!useradmin) {
            throw new Error("User does not permission");
        }
        const users = this.usersRepository.list();
        return users;
    }
}

export { ListAllUsersUseCase };
