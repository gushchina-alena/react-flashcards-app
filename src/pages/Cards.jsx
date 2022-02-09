import React from 'react';
import Card from '../components/Card';
import '../assets/styles/Card.css';
import '../assets/styles/Cards.css';
import data from '../data';

const Cards = () => {
    return (
        <div className='cards'>
            {data.map((item) => {
                return <Card key={item.id} {...item} />
            })}
        </div>
    );
}

export default Cards;