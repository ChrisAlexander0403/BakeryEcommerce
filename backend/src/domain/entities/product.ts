interface Product {
    uuid?: string;
    name?: string;
    recipe?: string;
    description?: string;
    cost?: number;
    inStock?: number;
    status?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export default Product;