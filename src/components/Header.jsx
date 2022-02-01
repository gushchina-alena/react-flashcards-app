import React from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/images/Books.png';
import '../assets/styles/Header.css';
import add from '../assets/images/add.png';

const Header = () => {
    return (
        <nav className='navigation'>
            <Link to='/' className='navigation__logo'>
                <img src={logo} 
                    alt='logo'
                    className='logo' />
            </Link>
            <Link className='navigation__link' 
            to='/'>All terms</Link>
            <Link className='navigation__link' 
            to='/cards'>Cards</Link>
            <Link className='navigation__link' 
            to='/quiz'>Quiz</Link>
        </nav>
    );
}

export default Header; 