import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Menuview from '../Menu';
import Whychooseus from '../Whychooseus';
import Footer from '../Footer';
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
                        <img src="https://res.cloudinary.com/drevfgyks/image/upload/v1712398163/brown-coffee-droplets-fly-around-cup-chaotic-artistic-splash_vzll43.jpg" className="d-block w-100" alt="one" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://res.cloudinary.com/drevfgyks/image/upload/v1712399372/backpic_tsjj7d.jpg" className="d-block w-100" alt="two" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://res.cloudinary.com/drevfgyks/image/upload/v1712398159/cup-coffee-with-pile-coffee-beans_qlntps.jpg" className="d-block w-100" alt="three" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                </button>
            </div>
            <div className='explore-menu-sectionhome'>          
            <Menuview/>
            <Whychooseus/>
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
                            {/* <span >Industry</span>:
                            Food and Beverage Manufacturing<br/> */}
                            </p>
                            <button onClick={() => window.location.href = "https://www.youtube.com/watch?v=h1JDjiyoIM4"} className="custom-button">Watch</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Home;
