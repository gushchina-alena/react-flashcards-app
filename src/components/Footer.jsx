import React from 'react';
import '../assets/styles/Footer.css';
import footerImg from '../assets/images/light.png';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__app'>
            <img className='footer__img' src={footerImg} alt="light" />
            <h2 className='footer__heading'>Flashcards App</h2>
            </div>
                <h2 className='footer__copyright'>© 2021</h2>
        </div>
    );
}

export default Footer; 