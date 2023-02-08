interface Ingredient {
    ingredient: string,
    qty: number
}

interface Recipe {
    uuid?: string;
    ingredients?: Ingredient[];
    createdAt?: string;
    updatedAt?: string;
}

export default Recipe;