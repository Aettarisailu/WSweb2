import React from 'react';
import Footer from '../Footer';
import './index.css'

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
                <div class='col-6'>
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
                <div class='col-6'>
                    <img src='https://res.cloudinary.com/drevfgyks/image/upload/v1712486860/Screenshot_2024-04-07_161655_a1nsfi.png' 
                    alt='honeyimage'
                    className='honeyimage'
                    />                    
                </div>
            </div>
            <div className='About-details-container'>
                <div class='col-6'>
                    <img src='https://res.cloudinary.com/drevfgyks/image/upload/v1712420580/Screenshot_2024-04-06_215049_mqjttf.png' 
                    alt='honeyimage'
                    className='honeyimage'
                    />                    
                </div>
                <div class='col-6'>                   
                <h4 className="about-heading">Strength</h4>
                <p className="about-description">B Organics provides Agri-clinical and commercial services to organic farms through a well-trained employee 
                    from both technical and non-technical levels. Customers can get fresh organic products at B Organics.</p>
                    <h4 className="about-heading">Mission</h4>
                    <p className="about-description">Our mission is to be a trustworthy and innovative global leader in the provision of real organic goods 
                    for healthy living.</p>
                </div>
            </div>
            <div className='About-details-container'>
                <div className='col-6'>
                    <h4 className="about-heading">Mottos</h4>
                    <p className="about-description">1.	B Organic is a completely and wholly natural, organic food production and supply organization based on the principles of quality, honesty, and purity. We clearly prove our authenticity in producing organic food products, we are providing the Agri-clinical services and certifications to the farmers by national and international certification bodies.
                    </p>
                    <p className="about-description">2.	B Organics is now a global network that brings together farmers and customers. B Organics provides a healthy lifestyle among farmers and consumers all while putting a smile on their faces. At B Organics, we are focussing on reintroducing traditional methods of farming while also inventing modern technologies in association with farmers.
                    </p>
                    <p className="about-description">3.	B Organic is sourced directly from certified farmers across India and distributed globally. This brings the farmer trust and opens the possibility to organic farming, as well as makes the customer glad to eat nutritious food for a healthy lifestyle.</p>
                </div>
                <div class='col-6'>
                    <img src='https://res.cloudinary.com/drevfgyks/image/upload/v1712420580/Screenshot_2024-04-06_215226_hihx3m.png' 
                    alt='honeyimage'
                    className='honeyimage'
                    />                  
                </div>
            </div>            
            <Footer/>
        </div>
    );
};

export default About;
