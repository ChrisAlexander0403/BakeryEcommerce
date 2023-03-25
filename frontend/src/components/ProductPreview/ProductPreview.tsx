import Product from '@/domain/entities/Product';
import Link from 'next/link';
import React from 'react';
import numeral from "numeral";
export interface ProductPreviewProps {
	product: Product;
}

const ProductPreview: React.FC<ProductPreviewProps> = ({ product }) => {
	return (
		<div className="col-lg-3 col-md-6 col-sm-6">
			<div className="product__item">
				<div className="product__item__pic set-bg" data-setbg={"http://localhost:5000/" + product.images[0]}>
					<div className="product__label">
						<span>{product.categoryRef.name}</span>
					</div>
				</div>
				<div className="product__item__text">
					<h6><Link href={"/product-details?id=" + product.uuid}>{product.name}</Link></h6>
					<div className="product__item__price">{numeral(product.price).format("$0,0.00")}</div>
					<div className="cart_add">
						<a href="#">Add to cart</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductPreview;
