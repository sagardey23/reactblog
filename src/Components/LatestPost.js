import React from 'react'
import './compoStyling.css';


function LatestPost() {
    return (
        <>
        <div className='latestpostparent'>
        <img
        className="latestpostImg"
        src="https://images.pexels.com/photos/6711867/pexels-photo-6711867.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <p>Joshua Tree <br></br> Overnight Adventure</p>   
      <p>Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces</p>    
      <span className="postDate">Travel/1 hour ago</span>
       </div>
        </>
    )
}

export default LatestPost
