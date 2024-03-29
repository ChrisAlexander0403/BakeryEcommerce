import { Layout } from '@/components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
export interface CartProps { }

const Cart: React.FC<CartProps> = () => {

	return (
		<>
			<Head>
				<title>Cart</title>
			</Head>
			<Layout>
				<div className="breadcrumb-option">
					<div className="container">
						<div className="row">
							<div className="col-lg-6 col-md-6 col-sm-6">
								<div className="breadcrumb__text">
									<h2>Shopping cart</h2>
								</div>
							</div>
							<div className="col-lg-6 col-md-6 col-sm-6">
								<div className="breadcrumb__links">
									<Link href="/">Home</Link>
									<span>Shopping cart</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<section className="shopping-cart spad">
					<div className="container">
						<div className="row">
							<div className="col-lg-8">
								<div className="shopping__cart__table">
									<table>
										<thead>
											<tr>
												<th>Product</th>
												<th>Quantity</th>
												<th>Total</th>
												<th></th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td className="product__cart__item">
													<div className="product__cart__item__pic">
														<img src="img/shop/cart/cart-1.jpg" alt="" />
													</div>
													<div className="product__cart__item__text">
														<h6>T-shirt Contrast Pocket</h6>
														<h5>$98.49</h5>
													</div>
												</td>
												<td className="quantity__item">
													<div className="quantity">
														<div className="pro-qty">
															<input type="text" value="1" />
														</div>
													</div>
												</td>
												<td className="cart__price">$ 30.00</td>
												<td className="cart__close"><span className="icon_close"></span></td>
											</tr>
											<tr>
												<td className="product__cart__item">
													<div className="product__cart__item__pic">
														<img src="img/shop/cart/cart-2.jpg" alt="" />
													</div>
													<div className="product__cart__item__text">
														<h6>Diagonal Textured Cap</h6>
														<h5>$98.49</h5>
													</div>
												</td>
												<td className="quantity__item">
													<div className="quantity">
														<div className="pro-qty">
															<input type="text" value="1" />
														</div>
													</div>
												</td>
												<td className="cart__price">$ 32.50</td>
												<td className="cart__close"><span className="icon_close"></span></td>
											</tr>
											<tr>
												<td className="product__cart__item">
													<div className="product__cart__item__pic">
														<img src="img/shop/cart/cart-3.jpg" alt="" />
													</div>
													<div className="product__cart__item__text">
														<h6>Basic Flowing Scarf</h6>
														<h5>$98.49</h5>
													</div>
												</td>
												<td className="quantity__item">
													<div className="quantity">
														<div className="pro-qty">
															<input type="text" value="1" />
														</div>
													</div>
												</td>
												<td className="cart__price">$ 47.00</td>
												<td className="cart__close"><span className="icon_close"></span></td>
											</tr>
											<tr>
												<td className="product__cart__item">
													<div className="product__cart__item__pic">
														<img src="img/shop/cart/cart-4.jpg" alt="" />
													</div>
													<div className="product__cart__item__text">
														<h6>Basic Flowing Scarf</h6>
														<h5>$98.49</h5>
													</div>
												</td>
												<td className="quantity__item">
													<div className="quantity">
														<div className="pro-qty">
															<input type="text" value="1" />
														</div>
													</div>
												</td>
												<td className="cart__price">$ 30.00</td>
												<td className="cart__close"><span className="icon_close"></span></td>
											</tr>
										</tbody>
									</table>
								</div>
								<div className="row">
									<div className="col-lg-6 col-md-6 col-sm-6">
										<div className="continue__btn">
											<a href="#">Continue Shopping</a>
										</div>
									</div>
									<div className="col-lg-6 col-md-6 col-sm-6">
										<div className="continue__btn update__btn">
											<a href="#"><i className="fa fa-spinner"></i> Update cart</a>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="cart__discount">
									<h6>Discount codes</h6>
									<form action="#">
										<input type="text" placeholder="Coupon code" />
										<button type="submit">Apply</button>
									</form>
								</div>
								<div className="cart__total">
									<h6>Cart total</h6>
									<ul>
										<li>Subtotal <span>$ 169.50</span></li>
										<li>Total <span>$ 169.50</span></li>
									</ul>
									<Link href="/checkout" className="primary-btn">Proceed to checkout</Link>
								</div>
							</div>
						</div>
					</div>
				</section>
			</Layout>
		</>
	)
};

export default Cart;
