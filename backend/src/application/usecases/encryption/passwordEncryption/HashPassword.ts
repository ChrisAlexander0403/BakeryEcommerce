import IPasswordEncryptionRepo from "../../../../domain/repositories/encryption/IPasswordEncryptionRepo";

class HashPassword {
    private readonly passwordEncryptionRepo: IPasswordEncryptionRepo;

    constructor(passwordEncryptionRepo: IPasswordEncryptionRepo) {
        this.passwordEncryptionRepo = passwordEncryptionRepo;
    }

    async run(password: string): Promise<string> {
        const hashedPassword = await this.passwordEncryptionRepo.hashPassword(password);
        return hashedPassword;
    }
}

export default HashPassword;