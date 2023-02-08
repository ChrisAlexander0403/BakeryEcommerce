import Ingredient from "../../../domain/entities/ingredient";
import IIngredientRepo from "../../../domain/repositories/IIngredientRepo";


class GetAllIngredients {
    private readonly ingredientRepo: IIngredientRepo;

    constructor(ingredientRepo: IIngredientRepo) {
        this.ingredientRepo = ingredientRepo;
    }

    async run(): Promise<Ingredient[]> {
        const ingredients: Ingredient[] = await this.ingredientRepo.getAll();
        return ingredients;
    }
}

export default GetAllIngredients;