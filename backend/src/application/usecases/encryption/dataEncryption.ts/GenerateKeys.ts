import Keys from "../../../../domain/entities/keys";
import IDataEncryptionRepo from "../../../../domain/repositories/encryption/IDataEncryptionRepo";

class GenerateKeys {
    private readonly dataEncryptionRepo: IDataEncryptionRepo;

    constructor(dataEncryptionRepo: IDataEncryptionRepo) {
        this.dataEncryptionRepo = dataEncryptionRepo;
    }

    run(): Keys {
        const keys: Keys = this.dataEncryptionRepo.generateKeys();
        return keys;
    }
}

export default GenerateKeys;