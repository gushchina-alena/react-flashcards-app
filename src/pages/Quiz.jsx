import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import Card from '../components/Card';
import '../assets/styles/Quiz.css';
import rightArrow from '../assets/images/right-arrow.png';
import leftArrow from '../assets/images/left-arrow.png';
import data from '../data';

const Quiz = () => {
    const [currentCard, setCurrentCard] = useState(0);
    // const [isLearnt, setIsLearnt] = useState(0);

    // let history = useHistory();

    function handleNext() {
        setCurrentCard(currentCard + 1)
    }

    function handlePrev() {
        setCurrentCard(currentCard - 1)
    }

    // function handleGoBack() {
    //     history.push('/quiz');
    // }


    if (currentCard === data.length) {
        return (
            <div className='final-words'>
                <h2 className='final-words__text'>Good job! You've learned all the words</h2>
                <button className='final-words__btn'>Go Back</button>
            </div>
        )
    }

    return (
        <div className='quiz'>
            <div className='card-slider'>
                <div className={currentCard <= 0 ? 'arrow arrow-prev' : 'arrow'}><img onClick={handlePrev} src={leftArrow} alt="left arrow" /></div>
                <Card {...data[currentCard]} key={data.id}/>
                <div className='arrow'><img onClick={handleNext} src={rightArrow} alt="right arrow" /></div>
            </div>
            <p className='quiz-counter'>{currentCard + 1} / {data.length}</p>
        </div>

    );
}

export default Quiz;