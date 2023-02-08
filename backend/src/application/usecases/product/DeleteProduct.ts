import Product from "../../../domain/entities/product";
import IProductRepo from "../../../domain/repositories/IProductRepo";


class DeleteProduct {
    private readonly productRepo: IProductRepo;

    constructor(productRepo: IProductRepo) {
        this.productRepo = productRepo;
    }

    async run(id: string): Promise<Product | null> {
        const foundProduct: Product | null = await this.productRepo.getById(id);

        if(foundProduct) {
            await this.productRepo.delete(foundProduct);
        }

        return foundProduct;
    }
}

export default DeleteProduct;