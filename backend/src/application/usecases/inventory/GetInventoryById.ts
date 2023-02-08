import Inventory from "../../../domain/entities/inventory";
import IInventoryRepo from "../../../domain/repositories/IInventoryRepo";

class GetInventoryById {
    private readonly inventoryRepo: IInventoryRepo;

    constructor(inventoryRepo: IInventoryRepo) {
        this.inventoryRepo = inventoryRepo;
    }

    async run(id: string): Promise<Inventory | null> {
        const foundInventory: Inventory | null = await this.inventoryRepo.getById(id);

        if(!foundInventory) throw new Error("Error");

        return foundInventory;
    }
}

export default GetInventoryById;