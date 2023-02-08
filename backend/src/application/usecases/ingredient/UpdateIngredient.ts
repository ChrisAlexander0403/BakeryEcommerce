import Ingredient from "../../../domain/entities/ingredient";
import IIngredientRepo from "../../../domain/repositories/IIngredientRepo";
import GetIngredientById from "./GetIngredientById";

class UpdateIngredient {
    private readonly ingredientRepo: IIngredientRepo;
    private readonly getIngredientById: GetIngredientById;

    constructor(ingredientRepo: IIngredientRepo) {
        this.ingredientRepo = ingredientRepo;
        this.getIngredientById = new GetIngredientById(ingredientRepo);
    }

    async run(ingredient: Ingredient): Promise<Ingredient | null> {
        const foundIngredient: Ingredient | null = await this.getIngredientById.run(ingredient.uuid ?? "");

        if (foundIngredient) {
            const ingredientToUpdate: Ingredient = {
                ...foundIngredient,
                name: ingredient.name ?? foundIngredient.name,
                unitOfMeasure: ingredient.unitOfMeasure ?? foundIngredient.unitOfMeasure,
                cost: ingredient.cost ?? foundIngredient.cost
            }

            const updatedIngredient: Ingredient | null = await this.ingredientRepo.update(ingredientToUpdate);

            return updatedIngredient;
        }

        return null;
    }
}

export default UpdateIngredient;