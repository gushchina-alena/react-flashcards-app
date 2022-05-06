import React from 'react';
import '../../assets/styles/Home.css';
import WordsTable from '../WordsTable';


const Home = ({ words }) => {
    return (
        <>
            <WordsTable words={words} />
        </>
    );
}

export default Home;