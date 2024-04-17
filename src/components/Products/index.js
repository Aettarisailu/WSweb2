import {useEffect} from 'react';
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
    <div className="col-12 col-md-6 col-lg-3">
      <div className="menu-item-card shadow p-3 mb-3">
        <img src={imageSrc} className="menu-item-image w-100" alt={title} />
        <h1 className="menu-card-name">{name}</h1>
        <h1 className="menu-card-title">{title}</h1>
        <p className="menu-card-descriptionblack">{description}</p>
        <div className="product-footer">
          <button className="buy-button" onClick={handleBuyButtonClick}>
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  return (
    <div className="explore-menu-section2 pt-5 pb-5" id="exploreMenuSection">
      <div className="container mb-5">
        {/* Center horizontally and vertically */}
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-12">
            <h1 className="menu-section-heading">Choose Your Coffee</h1>
          </div>
          {/* Render only first 4 products */}
          {[ 
            <Product
              imageSrc="https://res.cloudinary.com/drevfgyks/image/upload/v1710909476/OIP_1_urk4ig.jpg"
              name="Arabica Coffee"
              title="Arabica Coffee"
              description="Arabica coffee refers to the beans produced by the Coffea arabica plant, which is one of 
                the most widely cultivated species of coffee plants. "
              price="RS 199"
            />,
            <Product
              imageSrc="https://res.cloudinary.com/drevfgyks/image/upload/v1710909449/Free-Paper-Coffee-Bag-Cup-Packaging-Mockup-PSD_iqqp7t.jpg"
              name="Robusta Coffee"
              title="Robusta Coffee"
              description="Robusta coffee is grown primarily in regions with warmer climates, 
                such as Africa, Southeast Asia, and parts of Latin America."
              price="RS 199"
            />,
          ]}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
