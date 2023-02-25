import { Router } from "express";
import CreateProduct from "../../../../application/usecases/product/CreateProduct";
import DeleteProduct from "../../../../application/usecases/product/DeleteProduct";
import GetAllProducts from "../../../../application/usecases/product/GetAllProducts";
import GetProductById from "../../../../application/usecases/product/GetProductById";
import UpdateProduct from "../../../../application/usecases/product/UpdateProduct";
import ProductRepo from "../../../implementations/MongoDB/ProductRepo";
import ProductController from "../controllers/product.controller";

const productRepo = new ProductRepo();
const getAllProducts = new GetAllProducts(productRepo);
const getProductById = new GetProductById(productRepo);
const createProduct = new CreateProduct(productRepo);
const updateProduct = new UpdateProduct(productRepo);
const deleteProduct = new DeleteProduct(productRepo);
const productController = new ProductController(
    createProduct,
    getProductById,
    getAllProducts,
    updateProduct,
    deleteProduct
)

const productRouter = Router();

productRouter.route('/')
    .get(productController.getAllProducts)
    .post(productController.createProduct);
productRouter.route('/:id')
    .get(productController.getProductById)
    .put(productController.updateProduct)
    .delete(productController.deleteProduct);

export default productRouter;