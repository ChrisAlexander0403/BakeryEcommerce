import User from "../../../domain/entities/user";
import IUserRepo from "../../../domain/repositories/IUserRepo";

class GetAllUsers {
    private readonly userRepo: IUserRepo;

    constructor(userRepo: IUserRepo) {
        this.userRepo = userRepo;
    }

    async run(): Promise<User[]> {
        const users: User[] = await this.userRepo.getAll();
        return users;
    }
}

export default GetAllUsers;