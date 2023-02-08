import Recipe from "../../../domain/entities/recipe";
import IRecipeRepo from "../../../domain/repositories/IRecipeRepo";
import GetRecipeById from "./GetRecipeById";

class UpdateRecipe {
    private readonly recipeRepo: IRecipeRepo;
    private readonly getInventoryById: GetRecipeById;

    constructor(recipeRepo: IRecipeRepo) {
        this.recipeRepo = recipeRepo;
        this.getInventoryById = new GetRecipeById(recipeRepo);
    }

    async run(recipe: Recipe): Promise<Recipe | null> {
        const foundRecipe: Recipe | null = await this.getInventoryById.run(recipe.uuid ?? "");

        if (foundRecipe) {
            const recipeToUpdate: Recipe = {
                ...foundRecipe,
                ingredients: recipe.ingredients ?? foundRecipe.ingredients
            }

            const updatedRecipe: Recipe | null = await this.recipeRepo.update(recipeToUpdate);

            return updatedRecipe;
        }

        return null;
    }
}

export default UpdateRecipe;