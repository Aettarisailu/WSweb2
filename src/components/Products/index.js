import React from 'react';
import Footer from '../Footer';
import './index.css';

const Product = ({ imageSrc, name, title, description, price }) => {
    const handleBuyButtonClick = () => {
        const phoneNumber = '+919962754292'; // Replace with the desired phone number
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
  return (
    <div className="explore-menu-section2 pt-5 pb-5" id="exploreMenuSection">
      <div className="container mb-5">
        <div className="row">
          <div className="col-12">
            <h1 className="menu-section-heading">Choose Your Coffee</h1>
          </div>
          {/* Render only first 4 products */}
          {[ // Remove this opening bracket
            <Product
              imageSrc="https://res.cloudinary.com/drevfgyks/image/upload/v1710909476/OIP_1_urk4ig.jpg"
              name="Arabica Coffee"
              title="Arabica Coffee"
              description="Arabica coffee refers to the beans produced by the Coffea arabica plant, which is one of 
                the most widely cultivated species of coffee plants. "
              price="RS 199"
            />,
            <Product
              imageSrc="https://res.cloudinary.com/drevfgyks/image/upload/v1710909450/Disposable-Cup-Beverage-Hot-Cold-Drink-Coffee-Paper-Cup-with-PP-PS-Lids_ynyfph.jpg"
              name="Robusta Coffee"
              title="Robusta Coffee"
              description="Robusta coffee is grown primarily in regions with warmer climates, 
                such as Africa, Southeast Asia, and parts of Latin America."
              price="RS 199"
            />,
            <Product
              imageSrc="https://res.cloudinary.com/drevfgyks/image/upload/v1710909449/Free-Paper-Coffee-Bag-Cup-Packaging-Mockup-PSD_iqqp7t.jpg"
              name="Chicory Coffee"
              title="Chicory Coffee"
              description="Chicory coffee is a beverage made from roasted and ground chicory root, 
                often mixed with coffee beans or used as a coffee substitute."
              price="RS 219"
            />,
            <Product
              imageSrc="https://res.cloudinary.com/drevfgyks/image/upload/v1710909478/OIP_3_ju6i0g.jpg"
              name="Coffee"
              title="Coffee"
              description="Coffee is a popular beverage enjoyed by millions of people worldwide. 
                It is made from roasted coffee beans, which are the seeds of the Coffea plant. "
              price="RS 99"
            />
          ]} 
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products