import IPasswordEncryptionRepo from "../../../../domain/repositories/encryption/IPasswordEncryptionRepo";

class ComparePassword {
    private readonly passwordEncryptionRepo: IPasswordEncryptionRepo;

    constructor(passwordEncryptionRepo: IPasswordEncryptionRepo) {
        this.passwordEncryptionRepo = passwordEncryptionRepo;
    }

    async run(password: string, hashedPassword: string): Promise<boolean> {
        return await this.passwordEncryptionRepo.comparePassword(password, hashedPassword);
    }
}

export default ComparePassword;