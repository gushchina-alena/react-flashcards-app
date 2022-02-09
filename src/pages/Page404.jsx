import React from 'react';
import lost from '../assets/images/404.png';
import '../assets/styles/NotFound.css'

const Page404 = () => {
    return (
        <div className='not-found'>
            <h1>Looks like you're lost</h1>
            <h2>404 Page Not Found</h2>
            <div className='not-found__img'><img src={lost} alt="" /></div>
        </div>
    );
}

export default Page404;