import Ingredient from "./ingredient";

interface Inventory {
    uuid?: string;
    name?: string;
    ingredients?: Ingredient[];
    createdAt?: string;
    updatedAt?: string;
}

export default Inventory;