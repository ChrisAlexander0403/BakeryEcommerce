import Provider from "../../../domain/entities/provider";
import IProviderRepo from "../../../domain/repositories/IProviderRepo";

class GetAllProviders {
    private readonly providerRepo: IProviderRepo;

    constructor(providerRepo: IProviderRepo) {
        this.providerRepo = providerRepo;
    }

    async run(): Promise<Provider[]> {
        const providers: Provider[] = await this.providerRepo.getAll();
        return providers;
    }
}

export default GetAllProviders;