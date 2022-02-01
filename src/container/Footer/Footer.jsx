import React from 'react';
import { FooterOverlay, Newsletter } from '../../components';
import { FiFacebook, FiTwitter, FaInstagram, FiInbox, FiInstagram } from 'react-icons/fi';
import { images } from '../../constants';
import './Footer.css';


const Footer = () => {
  return (
    <div className='app__footer section__padding'>
      <FooterOverlay />
      <Newsletter />

      <div className="app__footer-links">

        <div className='app__footer-links_contact'>
          <h1 className='app__footer-headtext'>Contact Us</h1>
          <p className="p__opensans">53 St, New York - NY CITY</p>
          <p className="p__opensans">+3040403040</p>
          <p className="p__opensans">+3404004300</p>
        </div>

        <div className="app__footer-links_logo">
          <img src={images.gericht} alt='footer_logo' />
          <p className="p__opensans">"The best way to find yourself is to lose yourself in the service of others."</p>
          <img src={images.spoon} alt='spoon' className='spooon__img' style={{marginTop: '50px'}} />
          <div className='app__footer-links_icons'>
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>

        <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>Working Hours</h1>
          <p className="p__opensans">Monday - Friday</p>
          <p className="p__opensans">08:00am - 12:00am</p>
          <p className="p__opensans">Suturday - Sunday</p>
          <p className="p__opensans">08:00am - 15:00am</p>
        </div>

      </div>

      <div className="footer__copyright">
        <p className="p__opensans">2022 Gericht. All Rights Reserved | FlowGeeZ</p>
      </div>

    </div>
  )
}

export default Footer;
