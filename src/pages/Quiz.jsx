import React, { useState } from 'react';
import Card from '../components/Card';
import '../assets/styles/Quiz.css';
import rightArrow from '../assets/images/right-arrow.png';
import leftArrow from '../assets/images/left-arrow.png';
import data from '../data';

const Quiz = () => {
    const [isPrev, setPrev] = useState([data[0]]);

    function handlePrev() {
        for (let i = 0; i < data.length; i++) {
            setPrev(i - 1); 
        }
    }
    return (
        <div className='quiz__container'>
            <div className='arrow'><img src={leftArrow} alt="left arrow" /></div>
            <Card />
            <div className='arrow'><img onClick={handlePrev} src={rightArrow} alt="right arrow" /></div>
        </div>
    );
}

export default Quiz;