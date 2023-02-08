import User from "../../../domain/entities/user";
import IUserRepo from "../../../domain/repositories/IUserRepo";

class DeleteUser {
    private readonly userRepo: IUserRepo;

    constructor(userRepo: IUserRepo) {
        this.userRepo = userRepo;
    }

    async run(id: string): Promise<User | null> {
        const foundUser: User | null = await this.userRepo.getById(id);

        if(foundUser) {
            await this.userRepo.delete(foundUser);
        }

        return foundUser;
    }
}

export default DeleteUser;