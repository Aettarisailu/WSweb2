import React, { useState } from 'react';
import Footer from '../Footer';
import './index.css';

const Product = ({ imageSrc, name, title, description, price }) => {
    const handleBuyButtonClick = () => {
        const phoneNumber = '+918688552877'; // Replace with the desired phone number
        const message = encodeURIComponent(`Order now: ${title}`);
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
        window.location.href = whatsappUrl;
      };

  return (
    <div className="col-12 col-md-6 col-lg-3">
      <div className="menu-item-card shadow p-3 mb-3">
        <img src={imageSrc} className="menu-item-image w-100" alt={title} />
        <h1 className="menu-card-name">{name}</h1>
        <h1 className="menu-card-title">{title}</h1>
        <p className="menu-card-descriptionblack">{description}</p>
        <div className="product-footer">
          <p className="price">{price}</p>
          <button className="buy-button" onClick={handleBuyButtonClick}>
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  const [showAllProducts, setShowAllProducts] = useState(false);

  const handleViewAll = () => {
    setShowAllProducts(true);
  };

  return (
    <div className="explore-menu-section2 pt-5 pb-5" id="exploreMenuSection">
      <div className="container mb-5">
      <div>
        <div className="row">
          <div className="col-12">
            <h1 className="menu-section-heading">Choose Your Honey</h1>
          </div>
          {showAllProducts ? (
            <>
              {/* Render all products */}
              <Product
                imageSrc="https://res.cloudinary.com/drevfgyks/image/upload/v1712052972/il_fullxfull.3039504513_ls23_c6mbxd.avif"
                name="Wild Forest Honey"
                title="Wild Forest Honey"
                description="Description of Coffee 1"
                price="RS 100.99"
              />
              <Product
                imageSrc="https://res.cloudinary.com/drevfgyks/image/upload/v1712293896/still_4x_eclrgp.png"
                title="Acacia Honey"
                description="Description of Coffee 2"
                price="RS 100.99"
              />
              <Product
                imageSrc="https://res.cloudinary.com/drevfgyks/image/upload/v1712293897/Screenshot_2024-02-21_213232_jlweur.png"
                title="Moringa Honey"
                description="Description of Coffee 3"
                price="RS 100.99"
              />
              <Product
                imageSrc="https://res.cloudinary.com/drevfgyks/image/upload/v1712293897/image-305_m47bgc.png"
                title="Honey"
                description="Description of Coffee 4"
                price="RS 100.99"
              />              
            </>
          ) : (
            <>
              {/* Render only first 4 products */}
              <Product
                imageSrc="https://res.cloudinary.com/drevfgyks/image/upload/v1712293897/Screenshot_2024-02-21_213253_pue5vf.png"
                name="Wild Forest Honey"
                title="Wild Forest Honey"
                description="Wild forest honey is a rich, golden-colored natural sweetener harvested from the nectar of flowers 
                found in wild forests."
                price="RS 199"
              />
              <Product
                imageSrc="https://res.cloudinary.com/drevfgyks/image/upload/v1712293896/still_4x_eclrgp.png"
                name="Acacia Honey"
                title="Acacia Honey"
                description="Acacia honey is widely prized not only for its taste and texture but also for its potential 
                health benefits."
                price="RS 129"
              />
              <Product
                imageSrc="https://res.cloudinary.com/drevfgyks/image/upload/v1712293896/52b37666120939.5b0be22d4a749_ibfkmp.jpg"
                name="Moringa Honey"
                title="Moringa Honey"
                description="Moringa honey is a type of honey produced by bees that forage on the nectar of moringa flowers."
                price="RS 159"
              />
              <Product
                imageSrc="https://res.cloudinary.com/drevfgyks/image/upload/v1712052972/il_fullxfull.3039504513_ls23_c6mbxd.avif"
                name="Honey"
                title="Honey"
                description="Honey is renowned for its numerous health benefits."
                price="RS 109"
              />
            </>
          )}       
          {!showAllProducts && (
            <div className="col-12">
              {/* Render 'View All' button */}
              {/* <button className="custom-button" onClick={handleViewAll}>
                View All
              </button> */}
            </div>
          )}
        </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Products;
