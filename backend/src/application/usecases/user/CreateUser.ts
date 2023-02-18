import Keys from "../../../domain/entities/keys";
import User from "../../../domain/entities/user";
import UserAlreadyExistsError from "../../../domain/exceptions/user/UserAlreadyExistsError";
import IDataEncryptionRepo from "../../../domain/repositories/encryption/IDataEncryptionRepo";
import IPasswordEncryptionRepo from "../../../domain/repositories/encryption/IPasswordEncryptionRepo";
import IFilesManagerRepo from "../../../domain/repositories/files-manager/IFilesManagerRepo";
import IUserRepo from "../../../domain/repositories/IUserRepo";

class CreateUser {
    private readonly userRepo: IUserRepo;
    private readonly passwordEncryptionRepo: IPasswordEncryptionRepo;
    private readonly dataEncryptionRepo: IDataEncryptionRepo;
    private readonly filesManagerRepo: IFilesManagerRepo;
    private readonly keysPath: string;

    constructor(
        userRepo: IUserRepo, 
        passwordEncryptionRepo: IPasswordEncryptionRepo,
        dataEncryptionRepo: IDataEncryptionRepo, 
        filesManagerRepo: IFilesManagerRepo
    ) {
        this.userRepo = userRepo;
        this.passwordEncryptionRepo = passwordEncryptionRepo;
        this.dataEncryptionRepo = dataEncryptionRepo;
        this.filesManagerRepo = filesManagerRepo;
        this.keysPath = "private/keys/users";
    }

    async run(user: User): Promise<User> {
        if(await this.userRepo.getByUserName(user.userName ?? "")) 
            throw new UserAlreadyExistsError(); 
        
        const keys: Keys = this.dataEncryptionRepo.generateKeys();

        if(!this.filesManagerRepo.exists(this.keysPath)) {
            this.filesManagerRepo.createFolder(this.keysPath, true);
        }

        this.filesManagerRepo.createFile(this.keysPath + "/" + user.userName + ".pem", keys.privateKey, "utf8");

        user.publicKey = keys.publicKey;
        user.password = await this.passwordEncryptionRepo.hashPassword(user.password ?? "");

        const createdUser: User = await this.userRepo.create(user);

        return createdUser;
    }
}

export default CreateUser;