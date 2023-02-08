import Inventory from "../../../domain/entities/inventory";
import IInventoryRepo from "../../../domain/repositories/IInventoryRepo";

class GetAllInventories {
    private readonly inventoryRepo: IInventoryRepo;

    constructor(inventoryRepo: IInventoryRepo) {
        this.inventoryRepo = inventoryRepo;
    }

    async run(): Promise<Inventory[]> {
        const inventories: Inventory[] = await this.inventoryRepo.getAll();
        return inventories;
    }
}

export default GetAllInventories;