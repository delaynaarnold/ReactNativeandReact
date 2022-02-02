import React from 'react';
import Planet1 from './Images/planetone.png';



const SingleComment = () => {
    return (
        <div className='comment'>
        <a href="/" className='avatar'>
            <img src={Planet1} alt="profile picture"/>
        </a>
        <div className='content'>
            <a href="/" className='author'>
                Sarah
            </a>
            <div className='metadata'>
                <span className='date'>
                    today at 5:00PM
                </span> 
            </div>
            <div className='text'>
                It's Amazing
            </div>
        </div>
    </div> 
    )
}

export default SingleComment; 