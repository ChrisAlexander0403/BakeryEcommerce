import Product from "../../../domain/entities/product";
import IProductRepo from "../../../domain/repositories/IProductRepo";

class GetAllProducts {
    private readonly productRepo: IProductRepo;

    constructor(productRepo: IProductRepo) {
        this.productRepo = productRepo;
    }

    async run(): Promise<Product[]> {
        const products: Product[] = await this.productRepo.getAll();
        return products;
    }
}

export default GetAllProducts;