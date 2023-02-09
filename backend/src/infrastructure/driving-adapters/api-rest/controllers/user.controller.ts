import { NextFunction, Request, Response } from "express";
import CreateUser from "../../../../application/usecases/user/CreateUser";
import GetAllUsers from "../../../../application/usecases/user/GetAllUsers";
import GetUserById from "../../../../application/usecases/user/GetUserById";
import UpdateUser from "../../../../application/usecases/user/UpdateUser";
import DeleteUser from "../../../../application/usecases/user/DeleteUser";
import User from "../../../../domain/entities/user";

class UserController {
    private readonly getAllUsersUseCase: GetAllUsers;
    private readonly createUserUseCase: CreateUser;
    private readonly getUserByIdUseCase: GetUserById;
    private readonly updateUserUseCase: UpdateUser;
    private readonly deleteUserUseCase: DeleteUser;
    
    constructor(
        getAllUsersUseCase: GetAllUsers,
        createUserUseCase: CreateUser,
        getUserByIdUseCase: GetUserById,
        updateUserUseCase: UpdateUser,
        deleteUserUseCase: DeleteUser,
    ) {
        this.getAllUsersUseCase = getAllUsersUseCase;
        this.createUserUseCase = createUserUseCase;
        this.getUserByIdUseCase = getUserByIdUseCase;
        this.updateUserUseCase = updateUserUseCase;
        this.deleteUserUseCase = deleteUserUseCase;
    }

    getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
        const users = await this.getAllUsersUseCase.run();
        res.status(200).json({ users });
        return;
    }

    createUser = async (req: Request, res: Response, next: NextFunction) => {
        const user: User = req.body;
        const createdUser = await this.createUserUseCase.run(user);
        res.status(201).json({ createdUser });
        return;
    }

    getUserById = async (req: Request, res: Response, next: NextFunction) => {
        const { id } = req.params;
        const foundUser: User | null = await this.getUserByIdUseCase.run(id);
        res.status(200).json({ foundUser });
        return;
    }

    updateUser = async (req: Request, res: Response, next: NextFunction) => {
        const user: User = req.body;
        const { id } = req.params;
        const updatedUser: User = await this.updateUserUseCase.run(id, user);
        res.status(200).json({ updatedUser });
        return;
    }

    deleteUser = async (req: Request, res: Response, next: NextFunction) => {
        const { id } = req.params;
        const deletedUser: User = await this.deleteUserUseCase.run(id);
        res.status(200).json({ deletedUser });
        return;
    }
}

export default UserController;