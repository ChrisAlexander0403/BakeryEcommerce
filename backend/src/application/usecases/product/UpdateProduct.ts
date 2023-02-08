import Product from "../../../domain/entities/product";
import IProductRepo from "../../../domain/repositories/IProductRepo";
import GetProductById from "./GetProductById";

class UpdateProduct {
    private readonly productRepo: IProductRepo;
    private readonly getProductById: GetProductById;

    constructor(productRepo: IProductRepo) {
        this.productRepo = productRepo;
        this.getProductById = new GetProductById(productRepo);
    }

    async run(product: Product): Promise<Product | null> {
        const foundProduct: Product | null = await this.getProductById.run(product.uuid ?? "");

        if (foundProduct) {
            const productToUpdate: Product = {
                ...foundProduct,
                name: product.name ?? foundProduct.name,
                recipe: product.recipe ?? foundProduct.recipe,
                description: product.description ?? foundProduct.description,
                cost: product.cost ?? foundProduct.cost,
                inStock: product.inStock ?? foundProduct.inStock
            }

            const updatedProduct: Product | null = await this.productRepo.update(productToUpdate);

            return updatedProduct;
        }

        return null;
    }
}

export default UpdateProduct;