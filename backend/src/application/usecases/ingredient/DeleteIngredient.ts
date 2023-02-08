import Ingredient from "../../../domain/entities/ingredient";
import IIngredientRepo from "../../../domain/repositories/IIngredientRepo";

class DeleteIngredient {
    private readonly ingredientRepo: IIngredientRepo;

    constructor(ingredientRepo: IIngredientRepo) {
        this.ingredientRepo = ingredientRepo;
    }

    async run(id: string): Promise<Ingredient | null> {
        const foundIngredient: Ingredient | null = await this.ingredientRepo.getById(id);

        if(foundIngredient) {
            return await this.ingredientRepo.delete(foundIngredient);
        }

        return null;
    }
}

export default DeleteIngredient;