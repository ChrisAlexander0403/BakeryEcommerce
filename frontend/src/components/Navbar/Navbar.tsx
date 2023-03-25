import Link from 'next/link';
import React from 'react';
export interface NavbarProps { }

const Navbar: React.FC<NavbarProps> = () => {
	return (
		<header className="header">
			<div className="header__top">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="header__top__inner">
								<div className="header__top__left">
									<ul>
										<li>USD <span className="arrow_carrot-down"></span>
											<ul>
												<li>EUR</li>
												<li>USD</li>
											</ul>
										</li>
										<li>ENG <span className="arrow_carrot-down"></span>
											<ul>
												<li>Spanish</li>
												<li>ENG</li>
											</ul>
										</li>
										<li><a href="#">Sign in</a> <span className="arrow_carrot-down"></span></li>
									</ul>
								</div>
								<div className="header__logo">
									<Link href="/"><img src="img/logos/logo-deleite-cafe_oscuro.png" alt="" /></Link>
								</div>
								<div className="header__top__right">
									<div className="header__top__right__links">
										{/* <a href="#" className="search-switch"><img src="img/icon/search.png" alt="" /></a> */}
										<Link href="/wish-list"><img src="img/icon/heart.png" alt="" /></Link>
									</div>
									<div className="header__top__right__cart">
										<Link href="/cart"><img src="img/icon/cart.png" alt="" /> <span>0</span></Link>
										<div className="cart__price">Total: <span>$0.00</span></div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="canvas__open"><i className="fa fa-bars"></i></div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<nav className="header__menu mobile-menu">
							<ul>
								{/* <li className="active"><Link href="/">Home</Link></li> */}
								<li><Link href="/">Inicio</Link></li>
								<li><Link href="/about">Cónocenos</Link></li>
								<li><Link href="/shop">Tienda</Link></li>
								{/* <li><Link href="#">Pages</Link>
									<ul className="dropdown">
										<li><Link href="./shop-details.html">Shop Details</Link></li>
										<li><Link href="./shoping-cart.html">Shoping Cart</Link></li>
										<li><Link href="./checkout.html">Check Out</Link></li>
										<li><Link href="./wisslist.html">Wisslist</Link></li>
										<li><Link href="./Class.html">Class</Link></li>
										<li><Link href="./blog-details.html">Blog Details</Link></li>
									</ul>
								</li> */}
								<li><Link href="/blog">Blog</Link></li>
								<li><Link href="/contact">Contacto</Link></li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
