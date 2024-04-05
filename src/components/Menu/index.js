import React from 'react';
import { Link } from "react-router-dom";
import './index.css'; // Update the import statement to reflect the correct path to your CSS file

const Menu = () => {
    return(
        <>
            <div className="explore-menu-section mt-5 pt-5 pb-5" id="exploreMenuSection">      
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
                        </div>
                    </div>
                </div>
            </div>
          
        </>
    )
}

export default Menu;
