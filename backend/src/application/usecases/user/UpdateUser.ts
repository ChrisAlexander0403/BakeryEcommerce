import User from "../../../domain/entities/user";
import UserNotFoundError from "../../../domain/exceptions/UserNotFoundError";
import IUserRepo from "../../../domain/repositories/IUserRepo";
import GetUserById from "./GetUserById";

class UpdateUser {
    private readonly userRepo: IUserRepo;
    private readonly getUserById: GetUserById;

    constructor(userRepo: IUserRepo) {
        this.userRepo = userRepo;
        this.getUserById = new GetUserById(userRepo);
    }

    async run(id: string, user: User): Promise<User> {
        const foundUser: User | null = await this.getUserById.run(id ?? "");

        if (foundUser) {
            const userToUpdate: User = {
                ...foundUser,
                firstName: user.firstName ?? foundUser.firstName,
                lastName: user.lastName ?? foundUser.lastName,
                userName: user.userName ?? foundUser.userName,
                password: user.password ?? foundUser.password,
                usedPasswords: user.usedPasswords ?? foundUser.usedPasswords,
                birthdate: user.birthdate ?? foundUser.birthdate,
                phone: user.phone ?? foundUser.phone,
                profilePicture: user.profilePicture ?? foundUser.profilePicture,
                tokens: user.tokens ?? foundUser.tokens,
                status: user.status ?? foundUser.status
            }

            const updatedUser: User | null = await this.userRepo.update(userToUpdate);

            if (updatedUser) return updatedUser;
        }

        throw new UserNotFoundError();
    }
}

export default UpdateUser;