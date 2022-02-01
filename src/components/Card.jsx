import React, { useState } from 'react';
import '../assets/styles/Quiz.css';

import '../assets/styles/Card.css';

const Card = ({ ...item }) => {
    console.log(item)
    const [isFront, setIsFront] = useState(true);

    function handleOnClick() {
        setIsFront(false);
    }
    return (
        <div>
                {isFront ?
                    <div className='card'>
                        <p>{item.english}</p>
                        <p>{item.transcription}</p>
                        <button onClick={handleOnClick} className='card__btn'>Show</button>
                    </div>
                    : <div className='card'>
                        <p>{item.english}</p>
                        <p>{item.transcription}</p>
                        <p>{item.russian}</p>
                    </div>
                }
        </div>
    );
}

export default Card;