import React from 'react';

export default function Card(props){
    return(
        <div className='card'>
            <img src={`./images/${props.img}`} className='card--image'/>
            <div className='card-stats'>
                <img src='./images/Star 1.png' className='card--star'/>
                <span>{props.stars}</span>
                <span className='gray'> ({props.raters}) .</span>    
                <span className='gray'>{props.country}</span>    
            </div>
            <p>{props.title}</p>
            <p><span className='bold'>From ${props.price}</span> / person</p>
        </div>
    )
}