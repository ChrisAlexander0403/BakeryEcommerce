import Recipe from "../../../domain/entities/recipe";
import IRecipeRepo from "../../../domain/repositories/IRecipeRepo";

class DeleteRecipe {
    private readonly recipeRepo: IRecipeRepo;

    constructor(recipeRepo: IRecipeRepo) {
        this.recipeRepo = recipeRepo;
    }

    async run(id: string): Promise<Recipe | null> {
        const foundRecipe: Recipe | null = await this.recipeRepo.getById(id);

        if(foundRecipe) {
            await this.recipeRepo.delete(foundRecipe);
        }

        return foundRecipe;
    }
}

export default DeleteRecipe;