import Head from 'next/head';
import { Layout } from '@/components/Layout';
import { useEffect } from 'react';

export default function Home() {

  useEffect(() => {
    const jqueryBarfillerScript = document.createElement("script");
    jqueryBarfillerScript.src = "js/jquery.barfiller.js";
    jqueryBarfillerScript.async = true;
    document.body.appendChild(jqueryBarfillerScript);

    const jqueryMagnificPopUp = document.createElement("script");
    jqueryMagnificPopUp.src = "js/jquery.magnific-popup.min.js";
    jqueryMagnificPopUp.async = true;
    document.body.appendChild(jqueryMagnificPopUp);

    const jqueryNiceSelect = document.createElement("script");
    jqueryNiceSelect.src = "js/jquery.nice-select.min.js";
    jqueryNiceSelect.async = true;
    document.body.appendChild(jqueryNiceSelect);

    const jqueryNiceScroll = document.createElement("script");
    jqueryNiceScroll.src = "js/jquery.nicescroll.min.js";
    jqueryNiceScroll.async = true;
    document.body.appendChild(jqueryNiceScroll);

    const jquerySlickNav = document.createElement("script");
    jquerySlickNav.src = "js/jquery.slicknav.js";
    jquerySlickNav.async = true;
    document.body.appendChild(jquerySlickNav);

    const owlCarousel = document.createElement("script");
    owlCarousel.src = "js/owl.carousel.min.js";
    owlCarousel.async = true;
    document.body.appendChild(owlCarousel);

    const mainScript = document.createElement("script");
    mainScript.src = "js/main.js";
    mainScript.async = true;
    document.body.appendChild(mainScript);

    return () => {
      document.body.removeChild(jqueryBarfillerScript);
      document.body.removeChild(jqueryMagnificPopUp);
      document.body.removeChild(jqueryNiceSelect);
      document.body.removeChild(jqueryNiceScroll);
      document.body.removeChild(jquerySlickNav);
      document.body.removeChild(owlCarousel);
      document.body.removeChild(mainScript);
    }
  }, []);
  

  return (
    <>
      <Head>
        <title>Deleite D'Lillian</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section className="hero">
          <div className="hero__slider owl-carousel">
            <div className="hero__item set-bg" data-setbg="img/hero/hero-1.jpg">
              <div className="container">
                <div className="row d-flex justify-content-center">
                  <div className="col-lg-8">
                    <div className="hero__text">
                      <h2>De mi horno a tu casa!</h2>
                      <a href="#" className="primary-btn">Nuestros pasteles</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero__item set-bg" data-setbg="img/hero/hero-1.jpg">
              <div className="container">
                <div className="row d-flex justify-content-center">
                  <div className="col-lg-8">
                    <div className="hero__text">
                      <h2>¡Haciendo tu vida más dulce una mordida a la vez!</h2>
                      <a href="#" className="primary-btn">Nuestros pasteles</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="about spad">
          <div className="container">
          <div className="row">
							<div className="col-lg-6 col-md-6">
								<div className="about__text">
									<div className="section-title">
										<span>Acerca de Deleite</span>
										<h2>¡De mi horno a tu casa!</h2>
									</div>
									<p>Me llamo Lilian Zapien, me considero una mujer emprendedora, creativa y dispuesta a dar todo de mi cuanto algo me apasiona.
										Después de graduarme de la escuela, me comencé a enamorar de la cocina y pronto me di cuenta de que todo lo que quería hacer era crear pasteles.</p>
								</div>
							</div>
							<div className="col-lg-6 col-md-6">
								<div className="about__bar">
									<div className="about__bar__item">
										<p>Diseño</p>
										<div id="bar1" className="barfiller">
											<div className="tipWrap"><span className="tip"></span></div>
											<span className="fill" data-percentage="95"></span>
										</div>
									</div>
									<div className="about__bar__item">
										<p>Calidad</p>
										<div id="bar2" className="barfiller">
											<div className="tipWrap"><span className="tip"></span></div>
											<span className="fill" data-percentage="90"></span>
										</div>
									</div>
									<div className="about__bar__item">
										<p>Recetas</p>
										<div id="bar3" className="barfiller">
											<div className="tipWrap"><span className="tip"></span></div>
											<span className="fill" data-percentage="95"></span>
										</div>
									</div>
								</div>
							</div>
						</div>
          </div>
        </section> */}
        <div className="categories">
          <div className="container">
            <div className="row">
              <div className="categories__slider owl-carousel">
                <div className="categories__item">
                  <div className="categories__item__icon">
                    <span className="flaticon-029-cupcake-3"></span>
                    <h5>Cupcake</h5>
                  </div>
                </div>
                <div className="categories__item">
                  <div className="categories__item__icon">
                    <span className="flaticon-034-chocolate-roll"></span>
                    <h5>Butter</h5>
                  </div>
                </div>
                <div className="categories__item">
                  <div className="categories__item__icon">
                    <span className="flaticon-005-pancake"></span>
                    <h5>Red Velvet</h5>
                  </div>
                </div>
                <div className="categories__item">
                  <div className="categories__item__icon">
                    <span className="flaticon-030-cupcake-2"></span>
                    <h5>Biscuit</h5>
                  </div>
                </div>
                <div className="categories__item">
                  <div className="categories__item__icon">
                    <span className="flaticon-006-macarons"></span>
                    <h5>Donut</h5>
                  </div>
                </div>
                <div className="categories__item">
                  <div className="categories__item__icon">
                    <span className="flaticon-006-macarons"></span>
                    <h5>Cupcake</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="product spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="product__item">
                  <div className="product__item__pic set-bg" data-setbg="img/shop/product-1.jpg">
                    <div className="product__label">
                      <span>Cupcake</span>
                    </div>
                  </div>
                  <div className="product__item__text">
                    <h6><a href="#">Dozen Cupcakes</a></h6>
                    <div className="product__item__price">$32.00</div>
                    <div className="cart_add">
                      <a href="#">Add to cart</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="product__item">
                  <div className="product__item__pic set-bg" data-setbg="img/shop/product-2.jpg">
                    <div className="product__label">
                      <span>Cupcake</span>
                    </div>
                  </div>
                  <div className="product__item__text">
                    <h6><a href="#">Cookies and Cream</a></h6>
                    <div className="product__item__price">$30.00</div>
                    <div className="cart_add">
                      <a href="#">Add to cart</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="product__item">
                  <div className="product__item__pic set-bg" data-setbg="img/shop/product-3.jpg">
                    <div className="product__label">
                      <span>Cupcake</span>
                    </div>
                  </div>
                  <div className="product__item__text">
                    <h6><a href="#">Gluten Free Mini Dozen</a></h6>
                    <div className="product__item__price">$31.00</div>
                    <div className="cart_add">
                      <a href="#">Add to cart</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="product__item">
                  <div className="product__item__pic set-bg" data-setbg="img/shop/product-4.jpg">
                    <div className="product__label">
                      <span>Cupcake</span>
                    </div>
                  </div>
                  <div className="product__item__text">
                    <h6><a href="#">Cookie Dough</a></h6>
                    <div className="product__item__price">$25.00</div>
                    <div className="cart_add">
                      <a href="#">Add to cart</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="product__item">
                  <div className="product__item__pic set-bg" data-setbg="img/shop/product-5.jpg">
                    <div className="product__label">
                      <span>Cupcake</span>
                    </div>
                  </div>
                  <div className="product__item__text">
                    <h6><a href="#">Vanilla Salted Caramel</a></h6>
                    <div className="product__item__price">$05.00</div>
                    <div className="cart_add">
                      <a href="#">Add to cart</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="product__item">
                  <div className="product__item__pic set-bg" data-setbg="img/shop/product-6.jpg">
                    <div className="product__label">
                      <span>Cupcake</span>
                    </div>
                  </div>
                  <div className="product__item__text">
                    <h6><a href="#">German Chocolate</a></h6>
                    <div className="product__item__price">$14.00</div>
                    <div className="cart_add">
                      <a href="#">Add to cart</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="product__item">
                  <div className="product__item__pic set-bg" data-setbg="img/shop/product-7.jpg">
                    <div className="product__label">
                      <span>Cupcake</span>
                    </div>
                  </div>
                  <div className="product__item__text">
                    <h6><a href="#">Dulce De Leche</a></h6>
                    <div className="product__item__price">$32.00</div>
                    <div className="cart_add">
                      <a href="#">Add to cart</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="product__item">
                  <div className="product__item__pic set-bg" data-setbg="img/shop/product-8.jpg">
                    <div className="product__label">
                      <span>Cupcake</span>
                    </div>
                  </div>
                  <div className="product__item__text">
                    <h6><a href="#">Mississippi Mud</a></h6>
                    <div className="product__item__price">$08.00</div>
                    <div className="cart_add">
                      <a href="#">Add to cart</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="class spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="class__form">
                  <div className="section-title">
                    <span>Class cakes</span>
                    <h2>Made from your <br />own hands</h2>
                  </div>
                  <form action="#">
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Phone" />
                    <select>
                      <option value="">Studying Class</option>
                      <option value="">Writting Class</option>
                      <option value="">Reading Class</option>
                    </select>
                    <input type="text" placeholder="Type your requirements" />
                    <button type="submit" className="site-btn">registration</button>
                  </form>
                </div>
              </div>
            </div>
            <div className="class__video set-bg" data-setbg="img/class-video.jpg">
              <a href="https://www.youtube.com/watch?v=8PJ3_p7VqHw&list=RD8PJ3_p7VqHw&start_radio=1"
                className="play-btn video-popup"><i className="fa fa-play"></i></a>
            </div>
          </div>
        </section>
        {/* <section className="team spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-7 col-sm-7">
                <div className="section-title">
                  <span>Our team</span>
                  <h2>Sweet Baker </h2>
                </div>
              </div>
              <div className="col-lg-5 col-md-5 col-sm-5">
                <div className="team__btn">
                  <a href="#" className="primary-btn">Join Us</a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="team__item set-bg" data-setbg="img/team/team-1.jpg">
                  <div className="team__item__text">
                    <h6>Randy Butler</h6>
                    <span>Decorater</span>
                    <div className="team__item__social">
                      <a href="#"><i className="fa fa-facebook"></i></a>
                      <a href="#"><i className="fa fa-twitter"></i></a>
                      <a href="#"><i className="fa fa-instagram"></i></a>
                      <a href="#"><i className="fa fa-youtube-play"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="team__item set-bg" data-setbg="img/team/team-2.jpg">
                  <div className="team__item__text">
                    <h6>Randy Butler</h6>
                    <span>Decorater</span>
                    <div className="team__item__social">
                      <a href="#"><i className="fa fa-facebook"></i></a>
                      <a href="#"><i className="fa fa-twitter"></i></a>
                      <a href="#"><i className="fa fa-instagram"></i></a>
                      <a href="#"><i className="fa fa-youtube-play"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="team__item set-bg" data-setbg="img/team/team-3.jpg">
                  <div className="team__item__text">
                    <h6>Randy Butler</h6>
                    <span>Decorater</span>
                    <div className="team__item__social">
                      <a href="#"><i className="fa fa-facebook"></i></a>
                      <a href="#"><i className="fa fa-twitter"></i></a>
                      <a href="#"><i className="fa fa-instagram"></i></a>
                      <a href="#"><i className="fa fa-youtube-play"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="team__item set-bg" data-setbg="img/team/team-4.jpg">
                  <div className="team__item__text">
                    <h6>Randy Butler</h6>
                    <span>Decorater</span>
                    <div className="team__item__social">
                      <a href="#"><i className="fa fa-facebook"></i></a>
                      <a href="#"><i className="fa fa-twitter"></i></a>
                      <a href="#"><i className="fa fa-instagram"></i></a>
                      <a href="#"><i className="fa fa-youtube-play"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <section className="testimonial spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="section-title">
                  <span>Testimonial</span>
                  <h2>Our client say</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="testimonial__slider owl-carousel">
                <div className="col-lg-6">
                  <div className="testimonial__item">
                    <div className="testimonial__author">
                      <div className="testimonial__author__pic">
                        <img src="img/testimonial/ta-1.jpg" alt="" />
                      </div>
                      <div className="testimonial__author__text">
                        <h5>Kerry D.Silva</h5>
                        <span>New york</span>
                      </div>
                    </div>
                    <div className="rating">
                      <span className="icon_star"></span>
                      <span className="icon_star"></span>
                      <span className="icon_star"></span>
                      <span className="icon_star"></span>
                      <span className="icon_star-half_alt"></span>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                      ut labore et dolore magna aliqua viverra lacus vel facilisis.</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="testimonial__item">
                    <div className="testimonial__author">
                      <div className="testimonial__author__pic">
                        <img src="img/testimonial/ta-2.jpg" alt="" />
                      </div>
                      <div className="testimonial__author__text">
                        <h5>Kerry D.Silva</h5>
                        <span>New york</span>
                      </div>
                    </div>
                    <div className="rating">
                      <span className="icon_star"></span>
                      <span className="icon_star"></span>
                      <span className="icon_star"></span>
                      <span className="icon_star"></span>
                      <span className="icon_star-half_alt"></span>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                      ut labore et dolore magna aliqua viverra lacus vel facilisis.</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="testimonial__item">
                    <div className="testimonial__author">
                      <div className="testimonial__author__pic">
                        <img src="img/testimonial/ta-1.jpg" alt="" />
                      </div>
                      <div className="testimonial__author__text">
                        <h5>Ophelia Nunez</h5>
                        <span>London</span>
                      </div>
                    </div>
                    <div className="rating">
                      <span className="icon_star"></span>
                      <span className="icon_star"></span>
                      <span className="icon_star"></span>
                      <span className="icon_star"></span>
                      <span className="icon_star-half_alt"></span>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                      ut labore et dolore magna aliqua viverra lacus vel facilisis.</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="testimonial__item">
                    <div className="testimonial__author">
                      <div className="testimonial__author__pic">
                        <img src="img/testimonial/ta-2.jpg" alt="" />
                      </div>
                      <div className="testimonial__author__text">
                        <h5>Kerry D.Silva</h5>
                        <span>New york</span>
                      </div>
                    </div>
                    <div className="rating">
                      <span className="icon_star"></span>
                      <span className="icon_star"></span>
                      <span className="icon_star"></span>
                      <span className="icon_star"></span>
                      <span className="icon_star-half_alt"></span>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                      ut labore et dolore magna aliqua viverra lacus vel facilisis.</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="testimonial__item">
                    <div className="testimonial__author">
                      <div className="testimonial__author__pic">
                        <img src="img/testimonial/ta-1.jpg" alt="" />
                      </div>
                      <div className="testimonial__author__text">
                        <h5>Ophelia Nunez</h5>
                        <span>London</span>
                      </div>
                    </div>
                    <div className="rating">
                      <span className="icon_star"></span>
                      <span className="icon_star"></span>
                      <span className="icon_star"></span>
                      <span className="icon_star"></span>
                      <span className="icon_star-half_alt"></span>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                      ut labore et dolore magna aliqua viverra lacus vel facilisis.</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="testimonial__item">
                    <div className="testimonial__author">
                      <div className="testimonial__author__pic">
                        <img src="img/testimonial/ta-2.jpg" alt="" />
                      </div>
                      <div className="testimonial__author__text">
                        <h5>Kerry D.Silva</h5>
                        <span>New york</span>
                      </div>
                    </div>
                    <div className="rating">
                      <span className="icon_star"></span>
                      <span className="icon_star"></span>
                      <span className="icon_star"></span>
                      <span className="icon_star"></span>
                      <span className="icon_star-half_alt"></span>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                      ut labore et dolore magna aliqua viverra lacus vel facilisis.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="instagram spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 p-0">
                <div className="instagram__text">
                  <div className="section-title">
                    <span>Síguenos en instagram</span>
                    <h2>Los momentos dulces se conservan como recuerdos.</h2>
                  </div>
                  <h5><i className="fa fa-instagram"></i> @deleitelzt</h5>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                    <div className="instagram__pic">
                      <img src="img/instagram/instagram-1.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                    <div className="instagram__pic middle__pic">
                      <img src="img/instagram/instagram-2.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                    <div className="instagram__pic">
                      <img src="img/instagram/instagram-3.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                    <div className="instagram__pic">
                      <img src="img/instagram/instagram-4.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                    <div className="instagram__pic middle__pic">
                      <img src="img/instagram/instagram-5.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                    <div className="instagram__pic">
                      <img src="img/instagram/instagram-3.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}