import Product from "../../../domain/entities/product";
import IProductRepo from "../../../domain/repositories/IProductRepo";

class GetProductById {
    private readonly productRepo: IProductRepo;

    constructor(productRepo: IProductRepo) {
        this.productRepo = productRepo;
    }

    async run(id: string): Promise<Product | null> {
        const foundProduct: Product | null = await this.productRepo.getById(id);

        if(!foundProduct) throw new Error("Error");

        return foundProduct;
    }
}

export default GetProductById;