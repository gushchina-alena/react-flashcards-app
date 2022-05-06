import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from "react-router-dom";
import Card from '../Card';
import '../../assets/styles/Quiz.css';
import rightArrow from '../../assets/images/right-arrow.png';
import leftArrow from '../../assets/images/left-arrow.png';
import loading from '../../assets/images/loading.png';

const Quiz = ({ words }) => {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [wordsMastered, setWordsMastered] = useState(0); 

    function handleNext() {
        setCurrentCardIndex(currentCardIndex + 1)
    }

    function handlePrev() {
        setCurrentCardIndex(currentCardIndex - 1)
    }
    
    return (
        <>
            <div className='quiz'>
                {words?
                    <>
                        <p className='quiz-counter'>You've mastered {wordsMastered} {wordsMastered === 1 ? "word" : "words"}</p>
                            <div className='card-slider'>
                                <div className={currentCardIndex <= 0 ? 'arrow arrow-prev' : 'arrow'}>
                                    <img onClick={handlePrev} src={leftArrow} alt="left arrow" />
                                </div>
                                <Card 
                                    {...words[currentCardIndex]} 
                                    key={words.id} 
                                    setWordsMastered={setWordsMastered} 
                                    wordsMastered={wordsMastered} 
                                />
                                {currentCardIndex === (words.length - 1) ? 
                                    <div className='arrow-disabled'>
                                        <img onClick={handleNext} src={rightArrow} alt="right arrow" 
                                    />
                                    </div>
                                    :
                                    <div className='arrow'><img onClick={handleNext} src={rightArrow} alt="right arrow" />
                                    </div>
                                }
                            </div>
                        <p className='quiz-counter'>{currentCardIndex + 1} / {words.length}</p>
                    </>
                    :
                    <div><p>Loading...</p></div>
                }
            </div>
        </>
    );
}

export default Quiz;