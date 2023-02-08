import Inventory from "../../../domain/entities/inventory";
import IInventoryRepo from "../../../domain/repositories/IInventoryRepo";
import GetInventoryById from "./GetInventoryById";

class UpdateInventory {
    private readonly inventoryRepo: IInventoryRepo;
    private readonly getInventoryById: GetInventoryById;

    constructor(inventoryRepo: IInventoryRepo) {
        this.inventoryRepo = inventoryRepo;
        this.getInventoryById = new GetInventoryById(inventoryRepo);
    }

    async run(inventory: Inventory): Promise<Inventory | null> {
        const foundInventory: Inventory | null = await this.getInventoryById.run(inventory.uuid ?? "");

        if (foundInventory) {
            const inventoryToUpdate: Inventory = {
                ...foundInventory,
                name: inventory.name ?? foundInventory.name,
                ingredients: inventory.ingredients ?? foundInventory.ingredients
            }

            const updatedInventory: Inventory | null = await this.inventoryRepo.update(inventoryToUpdate);

            return updatedInventory;
        }

        return null;
    }
}

export default UpdateInventory;