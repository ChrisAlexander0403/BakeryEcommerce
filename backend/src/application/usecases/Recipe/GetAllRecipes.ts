import Recipe from "../../../domain/entities/recipe";
import IRecipeRepo from "../../../domain/repositories/IRecipeRepo";

class GetAllRecipes {
    private readonly recipeRepo: IRecipeRepo;

    constructor(recipeRepo: IRecipeRepo) {
        this.recipeRepo = recipeRepo;
    }

    async run(): Promise<Recipe[]> {
        const recipes: Recipe[] = await this.recipeRepo.getAll();
        return recipes;
    }
}

export default GetAllRecipes;