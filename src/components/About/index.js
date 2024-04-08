import React from 'react';
import Footer from '../Footer';
import './index.css';

const About = () => {
    return (
        <div className="about-container">
            <div>
                <img src='https://res.cloudinary.com/drevfgyks/image/upload/v1712129337/1_ozrowa.png'
                    alt='Logo'
                    className='log'/>
                <h1 className='top-heading'><span className='heading1'>About </span>B <span className='heading1'>Organics</span></h1>
            </div>
            <div className='About-details-container'>
                <div className='col-lg-6 col-md-12'> {/* col-lg-6 for larger screens and col-md-12 for smaller screens */}
                    <h4 className="about-heading">Our story</h4>
                    <p className="about-description">
                        B Organics, founded in October 2022, is a major participant in the organic agricultural business. 
                        They have a dedicated team of farmers who work on this idea on their own farms. They are also actively involved in 
                        converting conventional farmers to organic farming through NGO's, FPO's, FPC's, and co-operative societies. 
                        With the assistance of professional agriculturists, provide farmers with knowledge and support. E-commerce 
                        is enabled for B Organic's products. When it comes to choosing healthy and sustainable food selections, this 
                        is the way to go. Organic farming uses traditional agricultural practises to guarantee that the food produced 
                        is free of toxic fertilizers and chemicals. Organic food is not only healthier for us, but it is also more 
                        beneficial to the environment.
                    </p>
                </div>
                <img src='https://res.cloudinary.com/drevfgyks/image/upload/v1712486860/Screenshot_2024-04-07_161655_a1nsfi.png' 
                    alt='honeyimage'
                    className='honeyimage'
                />
            </div>
            <div className='About-details-container About-details-container2'>
                <div className='col-lg-6 col-md-12'>
                    <img src='https://res.cloudinary.com/drevfgyks/image/upload/v1712420580/Screenshot_2024-04-06_215049_mqjttf.png' 
                        alt='honeyimage'
                        className='honeyimage'
                    />
                </div>
                <div>
                    <h4 className="about-heading">Strength</h4>
                    <p className="about-description">B Organics provides Agri-clinical and commercial services to organic farms through a well-trained employee 
                        from both technical and non-technical levels. Customers can get fresh organic products at B Organics.</p>
                    <h4 className="about-heading">Mission</h4>
                    <p className="about-description">Our mission is to be a trustworthy and innovative global leader in the provision of real organic goods 
                        for healthy living.</p>
                </div>
            </div>
            <div className='About-details-container'>
                <div className='col-lg-6 col-md-12'>
                    <h4 className="about-heading">Mottos</h4>
                    <p className="about-description">1. B Organic is sourced directly from certified farmers across India and distributed globally. This brings the farmer trust and opens the possibility to organic farming, as well as makes the customer glad to eat nutritious food for a healthy lifestyle.</p>
                </div>
                <img src='https://res.cloudinary.com/drevfgyks/image/upload/v1712420580/Screenshot_2024-04-06_215226_hihx3m.png' 
                    alt='honeyimage'
                    className='honeyimage'
                />
            </div>
            <Footer/>
        </div>
    );
};

export default About;
