import Recipe from "../../../domain/entities/recipe";
import IRecipeRepo from "../../../domain/repositories/IRecipeRepo";

class GetRecipeById {
    private readonly recipeRepo: IRecipeRepo;

    constructor(recipeRepo: IRecipeRepo) {
        this.recipeRepo = recipeRepo;
    }

    async run(id: string): Promise<Recipe | null> {
        const foundRecipe: Recipe | null = await this.recipeRepo.getById(id);

        if(!foundRecipe) throw new Error("Error");

        return foundRecipe;
    }
}

export default GetRecipeById;