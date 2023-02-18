import DataEncryptionRepo from "../../../../infrastructure/implementations/Crypto/DataEncryptionRepo";

class Decrypt {
    private readonly dataEncryptionRepo: DataEncryptionRepo;

    constructor(dataEncryptionRepo: DataEncryptionRepo) {
        this.dataEncryptionRepo = dataEncryptionRepo;
    }

    run(key: string, data: string): string {
        const decryptedData = this.dataEncryptionRepo.decrypt(key, data);
        return decryptedData;
    }
}

export default Decrypt;