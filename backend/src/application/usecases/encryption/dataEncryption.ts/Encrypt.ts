import IDataEncryptionRepo from "../../../../domain/repositories/encryption/IDataEncryptionRepo";

class Encrypt {
    private readonly dataEncryptionRepo: IDataEncryptionRepo;

    constructor(dataEncryptionRepo: IDataEncryptionRepo) {
        this.dataEncryptionRepo = dataEncryptionRepo;
    }

    run(key: string, data: string): string {
        const encryptedData = this.dataEncryptionRepo.encrypt(key, data);
        return encryptedData;
    }
}

export default Encrypt;