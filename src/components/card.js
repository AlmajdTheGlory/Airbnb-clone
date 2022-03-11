import React from 'react';


export default function Card(props){
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    }else if(props.item.openSpots === "Online"){
        badgeText = "ONLINE"
    }
    console.log(badgeText)
    return(
        <div className='card'>
            {badgeText && <div className='card-badge'>{badgeText}</div>}
            <a href='#'><img src={`./images/${props.item.img}`} className='card--image'/></a>
            <div className='card-stats'>
                <img src='./images/Star 1.png' className='card--star'/>
                <span>{props.item.stars}</span>
                <span className='gray'> ({props.item.raters}) .</span>    
                <span className='gray'>{props.item.country}</span>    
            </div>
            <p><a href='#'>{props.item.title}</a></p>
            <p><span className='bold'>From ${props.item.price}</span> / person</p>
        </div>
    )
}