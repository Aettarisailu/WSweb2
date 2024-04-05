import React, { useState } from 'react';
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
        <p className="menu-card-description">{description}</p>
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
      <div className="container">
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
                name="Arabica Coffee"
                title="Arabica Coffee"
                description="Description of Coffee 1"
                price="RS 199"
              />
              <Product
                imageSrc="https://res.cloudinary.com/drevfgyks/image/upload/v1712293896/still_4x_eclrgp.png"
                name="Robusta Coffee"
                title="Robusta Coffee"
                description="Description of Coffee 2"
                price="RS 199"
              />
              <Product
                imageSrc="https://res.cloudinary.com/drevfgyks/image/upload/v1712293897/Screenshot_2024-02-21_213232_jlweur.png"
                name="Chikori Coffee"
                title="Chikori Coffee"
                description="Description of Coffee 3"
                price="RS 219"
              />
              <Product
                imageSrc="https://res.cloudinary.com/drevfgyks/image/upload/v1712293897/image-305_m47bgc.png"
                name="Cofeee"
                title="Coffee"
                description="Description of Coffee 4"
                price="RS 99"
              />              
            </>
          ) : (
            <>
              {/* Render only first 4 products */}
              <Product
                imageSrc="https://res.cloudinary.com/drevfgyks/image/upload/v1710909476/OIP_1_urk4ig.jpg"
                name="Arabica Coffee"
                title="Arabica Coffee"
                description="Arabica coffee refers to the beans produced by the Coffea arabica plant, which is one of 
                the most widely cultivated species of coffee plants. "
                price="RS 199"
              />
              <Product
                imageSrc="https://res.cloudinary.com/drevfgyks/image/upload/v1710909450/Disposable-Cup-Beverage-Hot-Cold-Drink-Coffee-Paper-Cup-with-PP-PS-Lids_ynyfph.jpg"
                name="Robusta Coffee"
                title="Robusta Coffee"
                description="Robusta coffee is grown primarily in regions with warmer climates, 
                such as Africa, Southeast Asia, and parts of Latin America."
                price="RS 199"
              />
              <Product
                imageSrc="https://res.cloudinary.com/drevfgyks/image/upload/v1710909449/Free-Paper-Coffee-Bag-Cup-Packaging-Mockup-PSD_iqqp7t.jpg"
                name="Chicory Coffee"
                title="Chicory Coffee"
                description="Chicory coffee is a beverage made from roasted and ground chicory root, 
                often mixed with coffee beans or used as a coffee substitute."
                price="RS 219"
              />
              <Product
                imageSrc="https://res.cloudinary.com/drevfgyks/image/upload/v1710909478/OIP_3_ju6i0g.jpg"
                name="Cofeee"
                title="Coffee"
                description="Coffee is a popular beverage enjoyed by millions of people worldwide. 
                It is made from roasted coffee beans, which are the seeds of the Coffea plant. "
                price="RS 99"
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
    </div>
  );
};

export default Products;
