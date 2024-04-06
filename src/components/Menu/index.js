import React from 'react';
import { Link } from "react-router-dom";
// import Footer from '../Footer';
import './index.css'; // Update the import statement to reflect the correct path to your CSS file

const Menu = () => {
    return(
        <>
            <div className="explore-menu-section pb-5" id="exploreMenuSection">      
                <div class="container mt-5 pt-5 ">                    
                    <div class="row">
                        {/*Container-1*/}                        
                        <div class="col-12">
                            <h1 class="menu-section-heading">Explore Menu</h1>
                        </div>                       
                        
                        <div class='d-flex flex-column'>
                            {/*Container-2*/}             
                            <div class="honey-container2">
                                <div class="col-12 col-md-3 col-lg-3">
                                    <div class="menu-item-card shadow col-12">
                                        <img
                                            src="https://res.cloudinary.com/drevfgyks/image/upload/v1712293568/Screenshot_2024-03-17_164011_vjky4j.png"
                                            class="menu-item-image w-100"
                                            alt='image8'
                                        />              
                                    </div>
                                </div>
                                <div class="text-container2 col-8">
                                    <h1 class="menu-card-title2">Honey</h1>
                                    <p class="menu-card-description2">Rich in Nutrients: Pure honey contains several beneficial nutrients, including antioxidants, vitamins, and minerals. These nutrients can support overall health and well-being. Pure honey has a long shelf life and does not spoil easily. It can be stored at room temperature in a tightly sealed container for extended periods.</p>
                                    <Link to='/Menu/honey'><button className="buy-now">View All<div className='shape'></div> </button></Link>
                                    <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fill-rule="evenodd"
                                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                                    />
                                    </svg>
                                </div>
                            </div>
                            {/*Container-3*/}
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
                                <div class="text-container col-8">
                                    <h1 class="menu-card-title2">Coffee</h1>
                                    <p class="menu-card-description2 ">Arabica coffee is one of the most popular species of coffee beans and is known for its mild flavor and aroma. Here are some potential benefits of Arabica coffee, Rich in Antioxidants, Boosts Mental Alertness, Weight Loss, Supports Heart Health,essential nutrients such as vitamins B2 (riboflavin), B3 (niacin), B5 (pantothenic acid), and magnesium.                                     
                                    </p>
                                    <Link to='/Menu/Coffee'><button className="buy-now">View All<div className='shape'></div> </button></Link>
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
