import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faGlobe,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faInstagram,faWhatsapp,faFacebook,faXTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {  Link } from "react-router-dom";
import './index.css'

const Footer = () =>{
    return(
        <>
        <div className='footer-main-container '>
        <div class="footer-section pt-2 pb-5">            
            <div class="container ">
                <div class="row ">
                    <div class="col-12   contact-info-container ">
                        <h3 class="footer-section-heading">Contact Info</h3>
                        <h1 class="footer-section-mail-id">Call us</h1>
                        <h1 class="footer-section-mail-id">Helpline: +91********58</h1>
                        <h1 class="footer-section-mail-id">Email us: help@borganics.in</h1>                       
                        <h1 class="footer-section-mail-id">Head Office Location : Chennai</h1>                                              
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="row">
                    <div class="col-12  text-center">                    
                        <Link to='/About'><h1 class="footer-section-mail-id">About</h1></Link>
                        <Link to='/Menu' ><p className="footer-section-mail-id">Explore Menu</p></Link>
                        <Link to='/whychooseus' ><p className="footer-section-mail-id">Why Choose Us?</p></Link>                    
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="row">
                    <div class="col-12   text-center ">
                        <div className='socialMedia'>
                            <h1 class="footer-section-heading">Get In Touch</h1>
                        </div>                        
                        <div className='socialMedia '>
                            <FontAwesomeIcon icon={faGlobe} />
                            <p className='sosocialMedia-title '>www.borganic.in</p>
                        </div>
                        <div className='socialMedia'>
                            <FontAwesomeIcon icon={faInstagram} />
                            <p className='sosocialMedia-title'>/borganic</p>
                        </div>
                        <div className='socialMedia'>
                            <FontAwesomeIcon icon={faWhatsapp} />
                            <p className='sosocialMedia-title'>99******85</p>
                        </div>
                        <div className='socialMedia'>
                            <FontAwesomeIcon icon={faFacebook} />
                            <p className='sosocialMedia-title'>/borganic</p>
                        </div>
                        <div className='socialMedia'>
                            <FontAwesomeIcon icon={faXTwitter} />
                            <p className='sosocialMedia-title'>/borganic</p>
                        </div>
                        <div className='socialMedia'>
                            <a href="https://www.linkedin.com/company/borganics/" target="_blank" rel="noopener noreferrer" className='socialMedia'>
                                <FontAwesomeIcon icon={faLinkedin} />
                                <p className='sosocialMedia-title'>LinkkedIn</p>
                            </a>              
                        </div>
                        <div className='socialMedia'>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <p className='sosocialMedia-title'>info@borganics.in</p>
                        </div>
                    </div>
                </div>
            </div>               
        </div>       
        </div>
        <p className='Copyright-container'>Copyrights received © 2024 Borganic.</p>
    </>
    )
}
export default Footer;