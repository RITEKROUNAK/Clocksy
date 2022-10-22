import React from 'react'
import "./mainLanding1.css";
// import Typewriter from "typewriter-effect";
import MainPagePic from "../../assets/Group 35.png";
import {Link} from "react-router-dom";

const FirstPage = () => {
  return (
    <>
    <div className="main-page">
      <div className="main-heading">
      <p>
        <h2>
          A Classic Collection
        </h2>
        <h2>
          of Luxuorious Watches
        </h2>
        <h2>
          for the Real Gentleman.
        </h2>
      </p>
      <button className='buy-token'>
        <Link to='/app'style={{ textDecoration: 'none' , color:'white'}}>
        Shop Now
        </Link> 
        </button>
      </div>
      <div className="main-pic">
        <img src={MainPagePic} alt='main-pic'/>
      </div>
    </div>
    </>
  )
}

export default FirstPage