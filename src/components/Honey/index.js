import React, { useState } from 'react';
import Footer from '../Footer';
import './index.css';

const Product = ({ imageSrc, name, title, description }) => {
    const handleBuyButtonClick = () => {
        const phoneNumber = '+919962754292'; // Replace with the desired phone number
        const message = encodeURIComponent(`Order now: ${title}`);
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
        window.location.href = whatsappUrl;
      };

  return (
    <div className="col-12 col-md-3 col-lg-3">
      <div className="menu-item-card shadow p-3 mb-3">
        <img src={imageSrc} className="menu-item-image w-100" alt={title} />
        <h1 className="menu-card-name">{name}</h1>
        <h1 className="menu-card-title">{title}</h1>
        <p className="menu-card-descriptionblack">{description}</p>
        <div className="product-footer">
          {/* <p className="price">{price}</p> */}
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
                // imageSrc="https://res.cloudinary.com/drevfgyks/image/upload/v1712293897/Screenshot_2024-02-21_213253_pue5vf.png"
                imageSrc="https://res.cloudinary.com/drevfgyks/image/upload/v1712293897/image-305_m47bgc.png"
                name="Wild Forest Honey"
                title="Wild Forest Honey"
                description="Wild Forest Honey is collected from the natural bee hives in the forests. Honey bees collect nectar from numerous honeydew and wildflowers from the hills and forest, resulting in Wild Forest Honey. at offers an array of benefits: • Builds immunity • Great for skin and hair • Lowers risk of heart disease"
                price="RS 199"
              />
              <Product
                // imageSrc="https://res.cloudinary.com/drevfgyks/image/upload/v1712293896/still_4x_eclrgp.png"
                imageSrc="https://res.cloudinary.com/drevfgyks/image/upload/v1712486860/Screenshot_2024-04-07_161655_a1nsfi.png"
                name="Acacia Honey"
                title="Acacia Honey"
                description="Acacia Honey is mildly floral in aroma and has a sweet delicate taste. These transparent drops of honey act as a natural sweetener.rich in antioxidants & has numerous medicinal properties. It boosts immunity, helps in healing wounds & also prevents bacterial contamination & infections"
                price="RS 129"
              />
              <Product
                // imageSrc="https://res.cloudinary.com/drevfgyks/image/upload/v1712293896/52b37666120939.5b0be22d4a749_ibfkmp.jpg"
                imageSrc="https://res.cloudinary.com/drevfgyks/image/upload/v1712594540/pngimg.com_-_honey_PNG86351_ubc1hk.png"
                name="Moringa Honey"
                title="Moringa Honey"
                description="Moringa honey A new superfood ‘Moringa’ is been gaining popularity for its high nutritious values, antioxidants, powerful anti-inflammatory properties that protect tissues, and many other health benefits."
                price="RS 159"
              />  
            </>
          ) : (
            <>
              {/* Render only first 4 products */}
              <Product
                // imageSrc="https://res.cloudinary.com/drevfgyks/image/upload/v1712293897/Screenshot_2024-02-21_213253_pue5vf.png"
                imageSrc="https://res.cloudinary.com/drevfgyks/image/upload/v1712293897/image-305_m47bgc.png"
                name="Wild Forest Honey"
                title="Wild Forest Honey"
                description="Wild Forest Honey is collected from the natural bee hives in the forests. Honey bees collect nectar from numerous honeydew and wildflowers from the hills and forest, resulting in Wild Forest Honey. at offers an array of benefits: • Builds immunity • Great for skin and hair • Lowers risk of heart disease"
                price="RS 199"
              />
              <Product
                // imageSrc="https://res.cloudinary.com/drevfgyks/image/upload/v1712293896/still_4x_eclrgp.png"
                imageSrc="https://res.cloudinary.com/drevfgyks/image/upload/v1712486860/Screenshot_2024-04-07_161655_a1nsfi.png"
                name="Acacia Honey"
                title="Acacia Honey"
                description="Acacia Honey is mildly floral in aroma and has a sweet delicate taste. These transparent drops of honey act as a natural sweetener.rich in antioxidants & has numerous medicinal properties. It boosts immunity, helps in healing wounds & also prevents bacterial contamination & infections"
                price="RS 129"
              />
              <Product
                // imageSrc="https://res.cloudinary.com/drevfgyks/image/upload/v1712293896/52b37666120939.5b0be22d4a749_ibfkmp.jpg"
                imageSrc="https://res.cloudinary.com/drevfgyks/image/upload/v1712594540/pngimg.com_-_honey_PNG86351_ubc1hk.png"
                name="Moringa Honey"
                title="Moringa Honey"
                description="Moringa honey A new superfood ‘Moringa’ is been gaining popularity for its high nutritious values, antioxidants, powerful anti-inflammatory properties that protect tissues, and many other health benefits."
                price="RS 159"
              />
              {/* <Product
                imageSrc="https://res.cloudinary.com/drevfgyks/image/upload/v1712052972/il_fullxfull.3039504513_ls23_c6mbxd.avif"
                name="Honey"
                title="Honey"
                description="Honey is renowned for its numerous health benefits."
                price="RS 109"
              /> */}
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
