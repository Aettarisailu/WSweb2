import React, { useState } from 'react';
import {  Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css'
import Header from '../Header'


const Home = () =>{
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const handleNavbarToggle = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    return(
        <div>
            <div>
                <Header/>
    {/* Bootstrap carousel */}
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
                <ol className="carousel-indicators">
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://res.cloudinary.com/drevfgyks/image/upload/v1711635217/top-view-tasty-espresso-served-cup-with-coffee_zmhquq.jpg" className="d-block w-100" alt="one" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://res.cloudinary.com/drevfgyks/image/upload/v1711635694/Screenshot_2024-03-28_195032_rdvner.png" className="d-block w-100" alt="two" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://res.cloudinary.com/drevfgyks/image/upload/v1711635192/brown-coffee-droplets-fly-around-cup-chaotic-artistic-splash_burhue.jpg" className="d-block w-100" alt="three" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span> */}
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    {/* <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span> */}
                </button>
                </div>   


                    
    <div className="explore-menu-section pt-5 pb-5" id="exploreMenuSection">      
            <div class="container">
                <div class="row">
                <div class="col-12">
                    <h1 class="menu-section-heading">Explore Menu</h1>
                </div>
                <div class='d-flex flex-column'>
                
          <div class="honey-container2">
          <div class="col-12 col-md-3 col-lg-3">
            <div class="menu-item-card shadow p-3 mb-3">
              <img
                src="https://res.cloudinary.com/drevfgyks/image/upload/v1712293568/Screenshot_2024-03-17_164011_vjky4j.png"
                class="menu-item-image w-100"
                alt='image8'
              />              
            </div>
          </div>
          <div class="text-container2">
          <h1 class="menu-card-title2">Honey</h1>
          <p class="menu-card-description2">Whether you're a fan of rich and bold espresso, smooth and creamy lattes, or indulgent mochas, we have something to satisfy every coffee lover's palate. Our skilled baristas are dedicated to crafting each cup with precision and care, ensuring that every sip is a delight.</p>
              <Link to='honey'><button className="buy-now">View All<div className='shape'></div> </button></Link>
                <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                  />
                </svg>
            </div>
          </div>
          <div class="coffee-container">
          <div class="col-12 col-md-3 col-lg-3">
            <div class="menu-item-card shadow p-3 mb-3">
              <img
                src="https://res.cloudinary.com/drevfgyks/image/upload/v1710909448/coffee-cup-mockup_88130-332_b17do3.jpg"
                class="menu-item-image w-100"
                alt='image7'
              />              
            </div>
          </div>
          <div class="text-container">
          <h1 class="menu-card-title">Coffee</h1>
          <p class="menu-card-description2">Whether you're a fan of rich and bold espresso, smooth and creamy lattes, or indulgent mochas, we have something to satisfy every coffee lover's palate. Our skilled baristas are dedicated to crafting each cup with precision and care, ensuring that every sip is a delight.</p>
          <Link to='Coffee'><button className="buy-now">View All<div className='shape'></div> </button></Link>
                <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                  />
                </svg>
            </div>
          </div>
          
          <div class="wcu-section pt-5 pb-5" id="wcuSection">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1 class="wcu-section-heading">Why Choose Us?</h1>
            <p class="wcu-section-description">
              We use both original recipes and classic versions of famous products
              items.
            </p>
          </div>
          <div class="col-12 col-md-4">
            <div class="wcu-card p-3 mb-3">
              <img
                src="https://res.cloudinary.com/drevfgyks/image/upload/v1712301100/Screenshot_2024-04-05_124121_ky7ms2.png"
                class="wcu-card-image"
                alt='image5'
              />
              <h1 class="wcu-card-title mt-3">Our Service</h1>
              <p class="wcu-card-description">
                Experience fine best product at the comfort of your home. All our
                orders are carefully packed and arranged to give you the nothing
                less than perfect.
              </p>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="wcu-card p-3 mb-3">
              <img
                src="https://res.cloudinary.com/drevfgyks/image/upload/v1712247419/Screenshot_2024-04-04_214537_hff28o.png"
                class="wcu-card-image"
                alt='image4'
              />
              <h1 class="wcu-card-title mt-3">Fresh Products</h1>
              <p class="wcu-card-description">
                The Fresh products group provides fresh-honey and coffee
                directly picked from our partner farms and farm houses so that
                you always get them tree to plate.
              </p>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="wcu-card p-3 mb-3">
              <img
                src="https://res.cloudinary.com/drevfgyks/image/upload/v1712247420/Screenshot_2024-04-04_214622_kfuuyx.png"
                class="wcu-card-image"
                alt='image3'
              />
              <h1 class="wcu-card-title mt-3">Best Offers</h1>
              <p class="wcu-card-description">
                Food Coupons & Offers upto
                <span class="offers">60% OFF</span>
                and Exclusive Promo Codes on All Online Food Orders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
          </div>
        </div>
      </div>
    </div>
    <div class="healthy-food-section pt-5 pb-5">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-5">
            <div class="text-center">
              <img
                src="https://res.cloudinary.com/drevfgyks/image/upload/v1712129337/1_ozrowa.png"
                class="healthy-food-section-img"
                alt='image2'
              />
            </div>
          </div>
          <div class="col-12 col-md-7">
            <h1 class="healthy-food-section-heading">
            B Organics 
            </h1>
            <p class="healthy-food-section-description">
            B Organics is a completely and wholly natural, organic food production and supply organization based 
            on the principles of quality, honesty, and purity. We clearly prove our authenticity in producing organic 
            food products, we are providing the Agri-clinical services and certifications to the farmers by national and 
            international certification bodies.<br/>
            <span >Industry</span>:
            Food and Beverage Manufacturing<br/>
            </p>
            <button onClick={() => window.location.href = "https://www.youtube.com/watch?v=h1JDjiyoIM4"} className="custom-button">Watch Video</button>
          </div>
        </div>
      </div>
    </div>    
    <div class="footer-section pt-5 pb-5">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <img
              src="https://res.cloudinary.com/drevfgyks/image/upload/v1712129337/1_ozrowa.png"
              class="food-munch-logo"
              alt='image1'
            />
            <h1 class="footer-section-mail-id">help@borganics.com</h1>
            <h1 class="footer-section-mail-id">http://www.borganics.in/</h1>
            <p class="footer-section-address">
            <span >Headquarters</span>:
            chennai, Tamil nadu
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    )
}
export default Home;