import Inventory from "../../../domain/entities/inventory";
import IInventoryRepo from "../../../domain/repositories/IInventoryRepo";

class DeleteInventory {
    private readonly inventoryRepo: IInventoryRepo;

    constructor(inventoryRepo: IInventoryRepo) {
        this.inventoryRepo = inventoryRepo;
    }

    async run(id: string): Promise<Inventory | null> {
        const foundInventory: Inventory | null = await this.inventoryRepo.getById(id);

        if(foundInventory) {
            await this.inventoryRepo.delete(foundInventory);
        }

        return foundInventory;
    }
}

export default DeleteInventory;