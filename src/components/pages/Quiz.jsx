import React, { useState } from "react";
import Card from "../Card";
import "../../assets/styles/Quiz.css";
import rightArrow from "../../assets/images/right-arrow.png";
import leftArrow from "../../assets/images/left-arrow.png";
import { observer, inject } from "mobx-react";
import Loader from "../Loader";

const Quiz = inject (["store"]) (
    observer(({ store }) => {
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
                <div className="quiz">
                    {store.words?
                        <>
                            <p className="quiz-counter">You've mastered {wordsMastered} {wordsMastered === 1 ? "word" : "words"}</p>
                                <div className='card-slider'>
                                    <div className={currentCardIndex <= 0 ? "arrow arrow-prev" : "arrow"}>
                                        <img onClick={handlePrev} src={leftArrow} alt="left arrow" />
                                    </div>
                                    <Card 
                                        {...store.words[currentCardIndex]} 
                                        key={store.words.id} 
                                        setWordsMastered={setWordsMastered} 
                                        wordsMastered={wordsMastered} 
                                    />
                                    {currentCardIndex === (store.words.length - 1) ? 
                                        <div className="arrow-disabled">
                                            <img onClick={handleNext} src={rightArrow} alt="right arrow" 
                                        />
                                        </div>
                                        :
                                        <div className="arrow"><img onClick={handleNext} src={rightArrow} alt="right arrow" />
                                        </div>
                                    }
                                </div>
                            <p className="quiz-counter">{currentCardIndex + 1} / {store.words.length}</p>
                        </>
                        :
                        <div className="loaderquiz-container"><Loader /></div>
                    }
                </div>
            </>
        );
    })
);

export default Quiz;
