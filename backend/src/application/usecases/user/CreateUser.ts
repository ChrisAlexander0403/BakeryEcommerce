import User from "../../../domain/entities/user";
import IUserRepo from "../../../domain/repositories/IUserRepo";

class CreateUser {
    private readonly userRepo: IUserRepo;

    constructor(userRepo: IUserRepo) {
        this.userRepo = userRepo;
    }

    async run(user: User): Promise<User> {
        const createdUser: User = await this.userRepo.create(user);
        return createdUser;
    }
}

export default CreateUser;