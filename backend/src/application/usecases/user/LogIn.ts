import User from "../../../domain/entities/user";
import GenerateToken from "../authentication/GenerateToken";
import ComparePassword from "../encryption/passwordEncryption/ComparePassword";
import GetUserByUserName from "./GetUserByUserName";

class LogIn {
    private readonly getUserByUserName: GetUserByUserName;
    private readonly comparePassword: ComparePassword;
    private readonly generateToken: GenerateToken;

    constructor(
        getUserByUserName: GetUserByUserName, 
        comparePassword: ComparePassword, 
        generateToken: GenerateToken
    ) {
        this.getUserByUserName = getUserByUserName;
        this.comparePassword = comparePassword;
        this.generateToken = generateToken;
    }

    async run(userName: string, password: string): Promise<string> {
        const foundUser: User | null = await this.getUserByUserName.run(userName);
        if(foundUser && foundUser.password) {
            if (await this.comparePassword.run(password, foundUser.password)) {
                const token = this.generateToken.run(foundUser);
                return token;
            }

            throw new Error("Las contraseñas no coinciden");
        }

        throw new Error("El usuario no existe");
    }
}

export default LogIn;