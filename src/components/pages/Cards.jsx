import React from 'react';
import Card from '../Card';
import '../../assets/styles/Card.css';
import '../../assets/styles/Cards.css';
import data from '../../data';

const Cards = ({ words }) => {
    return (
        <div className='cards'>
            {words?.map((item) => {
                return <Card key={item.id} {...item} />
            })}
        </div>
    );
}

export default Cards;