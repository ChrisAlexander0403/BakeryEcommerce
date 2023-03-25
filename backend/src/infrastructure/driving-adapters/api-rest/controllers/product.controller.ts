import { NextFunction, Request, Response } from "express";
import { v4 as uuid } from "uuid";
import CreateProduct from "../../../../application/usecases/product/CreateProduct";
import DeleteProduct from "../../../../application/usecases/product/DeleteProduct";
import GetAllProducts from "../../../../application/usecases/product/GetAllProducts";
import GetProductById from "../../../../application/usecases/product/GetProductById";
import IncreaseProductViews from "../../../../application/usecases/product/IncreaseProductViews";
import UpdateProduct from "../../../../application/usecases/product/UpdateProduct";
import Product from "../../../../domain/entities/product";

class ProductController {
    private readonly createProductUseCase: CreateProduct;
    private readonly getProductByIdUseCase: GetProductById;
    private readonly getAllProductsUseCase: GetAllProducts;
    private readonly updateProductUseCase: UpdateProduct;
    private readonly deleteProductUseCase: DeleteProduct;
    private readonly increaseProductViewsUseCase: IncreaseProductViews;

    constructor(
        createProductUseCase: CreateProduct,
        getProductByIdUseCase: GetProductById,
        getAllProductsUseCase: GetAllProducts,
        updateProductUseCase: UpdateProduct,
        deleteProductUseCase: DeleteProduct,
        increaseProductViewsUseCase: IncreaseProductViews
    ) {
        this.createProductUseCase = createProductUseCase,
        this.getProductByIdUseCase = getProductByIdUseCase,
        this.getAllProductsUseCase = getAllProductsUseCase,
        this.updateProductUseCase = updateProductUseCase,
        this.deleteProductUseCase = deleteProductUseCase
        this.increaseProductViewsUseCase = increaseProductViewsUseCase
    }

    getAllProducts = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const products: Product[] = await this.getAllProductsUseCase.run();
            res.status(200).json(products);
            return;
        } catch(err) {
            next(err);
        }
    }

    getProductById = async (req: Request, res: Response, next: NextFunction) => {
        const { id } = req.params;
        try {
            const foundProduct: Product | null = await this.getProductByIdUseCase.run(id);
            res.status(200).json(foundProduct);
            return;
        } catch (err) {
            next(err);
        }
    }

    createProduct = async (req: Request, res: Response, next: NextFunction) => {
        const product: Product = req.body;
        try {
            product.uuid = uuid();
            product.images = req.files;
            product.price = parseInt(req.body.price);
            product.tags = req.body.concatTags.split("/").slice(0, -1);
            const createdProduct = await this.createProductUseCase.run(product);
            res.status(201).json(createdProduct);
            return;
        } catch(err) {
            next(err);
        }
    }

    updateProduct = async (req: Request, res: Response, next: NextFunction) => {
        const { id } = req.params;
        const product: Product = req.body;
        
        try {
            const updatedProduct: Product = await this.updateProductUseCase.run(id, product);
            res.status(200).json(updatedProduct);
            return;
        } catch(err) {
            next(err);
        }
    }

    deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
        const { id } = req.params;
        try {
            const deletedProduct: Product = await this.deleteProductUseCase.run(id);
            res.status(200).json(deletedProduct);
            return;
        } catch(err) {
            next(err);
        }
    }

    increaseProductViews = async (req: Request, res: Response, next: NextFunction) => {
        const { id } = req.params;
        try {
            await this.increaseProductViewsUseCase.run(id);
            res.status(200).send("Ok");
        } catch (err) {
            next(err);
        }
    }
}

export default ProductController;