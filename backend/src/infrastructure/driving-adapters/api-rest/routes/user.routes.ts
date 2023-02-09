import { Router } from "express";
import CreateUser from "../../../../application/usecases/user/CreateUser";
import DeleteUser from "../../../../application/usecases/user/DeleteUser";
import GetAllUsers from "../../../../application/usecases/user/GetAllUsers";
import GetUserById from "../../../../application/usecases/user/GetUserById";
import UpdateUser from "../../../../application/usecases/user/UpdateUser";
import UserRepo from "../../../implementations/MongoDB/UserRepo";
import UserController from "../controllers/user.controller";

const userRepo = new UserRepo();
const getAllUsers = new GetAllUsers(userRepo);
const createUser = new CreateUser(userRepo);
const getUserById = new GetUserById(userRepo);
const updateUser = new UpdateUser(userRepo);
const deleteUser = new DeleteUser(userRepo);
const userController = new UserController(getAllUsers, createUser, getUserById, updateUser, deleteUser);

const customerRouter = Router();

customerRouter.route('/')
    .get(userController.getAllUsers)
    .post(userController.createUser);
customerRouter.route('/:id')
    .get(userController.getUserById)
    .put(userController.updateUser)
    .delete(userController.deleteUser);

export default customerRouter;