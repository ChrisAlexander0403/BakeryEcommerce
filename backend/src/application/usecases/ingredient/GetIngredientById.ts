import Ingredient from "../../../domain/entities/ingredient";
import IIngredientRepo from "../../../domain/repositories/IIngredientRepo";


class GetIngredientById {
    private readonly ingredientRepo: IIngredientRepo;

    constructor(ingredientRepo: IIngredientRepo) {
        this.ingredientRepo = ingredientRepo;
    }

    async run(id: string): Promise<Ingredient | null> {
        const foundIngredient: Ingredient | null = await this.ingredientRepo.getById(id);

        if(!foundIngredient) throw new Error("Error");

        return foundIngredient;
    }
}

export default GetIngredientById;